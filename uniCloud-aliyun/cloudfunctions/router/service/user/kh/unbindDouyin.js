module.exports = {
	/**
	 * 解绑抖音
	 * @url user/kh/unbindDouyin 前端调用的url参数地址
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

		// 标记当前平台的provider
		const provider = "douyin";
		const providerName = "抖音";

		// 以下代码一般不需要更改-----------------------------------------------------------
		// 以下代码一般不需要更改-----------------------------------------------------------
		// 以下代码一般不需要更改-----------------------------------------------------------

		// 如果账户没有绑定手机号或没有设置用户名则不允许解绑（因为解绑后会造成无法登录）
		if (vk.pubfn.isNullAll(userInfo.mobile, userInfo.username)) {
			return { code: -1, msg: `为了您的账号安全，请绑定手机号后再解绑${providerName}` };
		}

		// 判断当前登录用户是否已经绑定过
		if (!userInfo[`${provider}_openid`]) {
			return { code: 1, msg: `当前账号未绑定${providerName}，无需解绑` };
		}

		// 定义openid和unionid存在userInfo的哪个字段中
		let fieldInfo = {
			[`${provider}_openid`]: _.remove(),
			[`${provider}_unionid`]: _.remove()
		};

		let num = await vk.daoCenter.userDao.updateById({
			id: uid,
			dataJson: fieldInfo
		});

		res.msg = num > 0 ? "解绑成功" : "解绑失败";

		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}