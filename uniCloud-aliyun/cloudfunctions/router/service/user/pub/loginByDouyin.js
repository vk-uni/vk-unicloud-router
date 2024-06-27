module.exports = {
	/**
	 * 用户登录 - 抖音登录
	 * @url user/pub/loginByDouyin 前端调用的url参数地址
	 * @description 支持抖音小程序
	 * data 请求参数 说明
	 * @param {String} code 登录返回的code
	 * @param {String} type login:登录 register:注册
	 * res 返回参数说明
	 * @param {Number} code 错误码，0表示成功
	 * @param {String} msg 详细信息
	 * @param {String} token 登录成功之后返回的token信息
	 * @param {String} tokenExpired token过期时间
	 * @param {Object} userInfo 用户信息
	 */
	main: async (event) => {
		let { data = {}, util, originalParam } = event;
		let { uniID, config, pubFun, vk, db, _ } = util;
		let { uid } = data;
		let res = { code: 0, msg: "" };
		// 业务逻辑开始-----------------------------------------------------------
		let {
			code, // 抖音登录返回的code
			type, // 指定操作类型，可选值为login、register，不传此参数时表现为已注册则登录，未注册则进行注册
			myInviteCode, // 设置当前注册用户自己的邀请码，type为register时生效（如果uni-id配置了 autoSetInviteCode 为 true，则会强制设置）
		} = data;

		if (!code) {
			return { code: -1, msg: "code不能为空" };
		}

		// 标记当前平台的provider
		const provider = "douyin";

		// 额外写入的自定义字段数据（可以自己增加，建议只传一些显示的信息，不要传余额字段等，因为前端不可信任）
		let customData = {
			nickname: data.nickname,
			avatar: data.avatar
		};

		// 额外返回给前端的数据
		let extraRes = {};

		// 自定义配置
		let customConfig = {};
		/**
		 * 支持多小程序登录
		 * 此处data可以额外接收appid和appsecret参数（appid可以从前端传，而appsecret可以配置在全局配置中（common/uni-config-center/vk-unicloud/index.js），也可以自己从数据库获取）
		 * 如果不传appid，则默认使用uni-id的配置信息
		 * 特别注意：如果使用多小程序登录，则同一用户（同一个抖音号）在不同小程序登录时，会分别创建不同的用户（除非unionid是一样的才是同一个用户）。
		 */
		// 打开下方注释，动态赋值appid和appsecret即可支持多小程序登录
		// customConfig.appid = "xxxx";
		// customConfig.appsecret = "xxxx";

		// code获取openid
		let code2SessionRes = await vk.openapi.douyin.auth.code2Session({
			code: code,
			needKey: false,
			...customConfig
		});
		if (code2SessionRes.code !== 0) {
			return code2SessionRes;
		}
		let {
			appid, // 抖音appid
			openid, // 用户的openid
			unionid, // 用户的unionid（只有绑定开放平台后才有此值）
			accessToken, // 抖音用户accessToken
			encryptedKey, // 加密信息
		} = code2SessionRes;

		// 设置额外返回给前端的数据
		extraRes = {
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
		// 查找用户是否存在
		let userInfo = await vk.daoCenter.userDao.findByWhereJson(_.or(orArr));
		// 定义openid和unionid存在userInfo的哪个字段中
		let fieldInfo = {
			[`${provider}_openid`]: {
				[platform]: openid,
				[`${platform}_${appid}`]: openid
			},
			[`${provider}_unionid`]: unionid
		};

		// 执行登录接口
		res = await vk.login({
			clientInfo: originalParam.context, // 客户端信息
			type, // 操作类型，login: 仅登录，register: 仅注册 不传则自动判断
			customData, // 自定义数据
			userInfo, // 用户信息
			fieldInfo, // 登录相关字段存储信息
		});

		if (res.code !== 0) {
			// 登录失败
			return res;
		}

		// 登录成功
		Object.assign(res, extraRes);

		// 添加登录日志
		const loginLogService = vk.require("service/user/util/login_log");
		await loginLogService.add({
			type: "login",
			login_type: provider,
			user_id: res.uid,
			context: originalParam.context
		}, util);

		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}