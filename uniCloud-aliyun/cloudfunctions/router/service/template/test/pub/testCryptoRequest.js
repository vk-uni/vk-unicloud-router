'use strict';
module.exports = {
	/**
	 * XXXnameXXX
	 * @url template/test/pub/testCryptoRequest 前端调用的url参数地址
	 * data 请求参数
	 * @param {String} params1  参数1
	 */
	main: async (event) => {
		let { data = {}, userInfo, util, filterResponse, originalParam } = event;
		let { customUtil, uniID, config, pubFun, vk, db, _ } = util;
		let { uid } = data;
		let res = { code: 0, msg: "" };
		// 业务逻辑开始-----------------------------------------------------------

		res.data = data;

		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}
