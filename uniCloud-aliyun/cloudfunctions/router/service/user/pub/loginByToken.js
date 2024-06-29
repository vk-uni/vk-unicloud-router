module.exports = {
	/**
	 * 用户登录，使用token登录，仅为了实现当token过期时间设置很长时，做用户登录统计会有问题，因此需要每天执行一次token登录来增加登录日志，方便做用户每日登录统计
	 * @url user/pub/loginByToken 前端调用的url参数地址
	 * res 返回参数说明
	 * @param {Number} code 错误码，0表示成功
	 * @param {String} msg 详细信息
	 */
	main: async (event) => {
		let { data = {}, uniIdToken, util, originalParam } = event;
		let { uniID, config, pubFun, vk, db, _ } = util;
		let { uid } = data;
		let res = { code: 0, msg: "" };
		// 业务逻辑开始-----------------------------------------------------------
		if (!uniIdToken) {
			return { code: -1, msg: "缺少token" };
		}
		// 验证token是否合法
		let checkTokenRes = await uniID.checkToken(uniIdToken, {
			needPermission: false,
			needUserInfo: false
		});
		if (!checkTokenRes.uid) {
			return checkTokenRes;
		}
		res.uid = checkTokenRes.uid;

		// 日志服务
		const loginLogService = vk.require("service/user/util/loginLog");
		// 判断今日已经登录过（即每日只允许用token刷新一次）
		let isLogin = await loginLogService.checkTodayIsLogin({
			user_id: res.uid,
			context: originalParam.context
		}, util);
		if (isLogin) {
			res.msg = "今日已登录过";
			return res;
		}
		// 如果今日没有登录过，则刷新token，并添加登录日志
		const refreshTokenRes = await uniID.refreshToken({
			token: uniIdToken
		});

		const {
			token,
			tokenExpired
		} = refreshTokenRes

		if (token) {
			res.token = token;
			res.tokenExpired = tokenExpired;
			res.msg = "登录成功";
			// 添加登录日志
			await loginLogService.add({
				type: "login",
				login_type: "token",
				user_id: res.uid,
				context: originalParam.context
			}, util);
		}

		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}

}