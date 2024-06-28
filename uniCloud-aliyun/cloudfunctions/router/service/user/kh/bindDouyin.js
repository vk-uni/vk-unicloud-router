module.exports = {
	/**
	 * 绑定抖音
	 * @url user/kh/bindDouyin 前端调用的url参数地址
	 * data 请求参数 说明
	 * @param {String} code 抖音登录返回的code
	 * res 返回参数说明
	 * @param {Number} code 错误码，0表示成功
	 * @param {String} msg 详细信息
	 */
	main: async (event) => {
		// 业务逻辑开始-----------------------------------------------------------
		let { data = {}, userInfo, util, originalParam } = event;
		let { uniID, config, pubFun, vk, db, _ } = util;
		let { uid } = data;
		let res = { code: 0, msg: '' };

		let {
			code
		} = data;

		// 标记当前平台的provider
		const provider = "douyin";
		const providerName = "抖音";

		// 判断当前登录用户是否已经绑定过
		if (userInfo[`${provider}_openid`]) {
			return { code: 1, msg: `当前账号已绑定${providerName}，请勿重复绑定` };
		}

		// 自定义配置
		let customConfig = {};
		/**
		 * 支持多小程序登录
		 * 此处data可以额外接收appid和appsecret参数（appid可以从前端传，而appsecret可以配置在全局配置中（common/uni-config-center/vk-unicloud/index.js），也可以自己从数据库获取）
		 * 如果不传appid，则默认使用uni-id的配置信息
		 * 特别注意：如果使用多小程序登录，则同一用户在不同小程序登录时，会分别创建不同的用户（除非unionid是一样的才是同一个用户）。
		 */
		// 打开下方注释，动态赋值appid和appsecret即可支持多小程序登录
		// customConfig.appid = "xxxx";
		// customConfig.appsecret = "xxxx";

		// code获取openid
		let code2SessionRes = await vk.openapi.douyin.auth.code2Session({
			code,
			needKey: true,
			...customConfig
		});
		if (code2SessionRes.code !== 0) {
			return code2SessionRes;
		}

		let {
			appid, // appid
			openid, // 用户的openid
			unionid, // 用户的unionid（只有绑定开放平台后才有此值）
			accessToken, // 用户accessToken
			encryptedKey, // 加密信息
		} = code2SessionRes;

		// 设置额外返回给前端的数据
		let extraRes = {
			encryptedKey,
			openid, // 用户的openid
			unionid, // 用户的unionid
		};

		// 以下代码一般不需要更改-----------------------------------------------------------
		// 以下代码一般不需要更改-----------------------------------------------------------
		// 以下代码一般不需要更改-----------------------------------------------------------
		let platform = vk.pubfn.getPlatformForUniId(originalParam.context);

		let orArr = [];
		if (unionid) {
			orArr.push({
				[`${provider}_unionid`]: unionid
			});
		}
		if (openid) {
			orArr.push({
				[`${provider}_openid`]: {
					[platform]: openid,
				}
			});
		}

		let userList = await vk.daoCenter.userDao.select({
			pageIndex: 1,
			pageSize: 1000,
			getMain: true,
			whereJson: _.or(orArr)
		});

		const dcloudAppid = originalParam.context.APPID;

		userList = userList.filter(item => {
			return item.dcloud_appid === undefined || item.dcloud_appid === null || item.dcloud_appid.indexOf(dcloudAppid) > -1 || item.dcloud_appid.indexOf(null) > -1;
		});

		if (userList && userList.length > 0) {
			return { code: 1, msg: `当前${providerName}号已绑定其他账号，请先解绑` };
		}

		// 定义openid和unionid存在userInfo的哪个字段中
		let fieldInfo = {
			[`${provider}_openid`]: {
				[platform]: openid,
				[`${platform}_${appid}`]: openid
			},
			[`${provider}_unionid`]: unionid
		};

		let num = await vk.daoCenter.userDao.updateById({
			id: uid,
			dataJson: fieldInfo
		});

		res.msg = num > 0 ? "绑定成功" : "绑定失败";

		Object.assign(res, extraRes);

		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}