'use strict';
module.exports = {
	/**
	 * 获取用户抖音绑定的手机号
	 * @url user/pub/getDouyinPhoneNumber 前端调用的url参数地址
	 * data 请求参数
	 * @param {String} encryptedData
	 * @param {String} iv
	 * @param {String} encryptedKey code2SessionWeixin 接口返回的encryptedKey
	 */
	main: async (event) => {
		let { data = {}, userInfo, util, originalParam } = event;
		let { customUtil, config, pubFun, vk, db, _ } = util;
		let { uid } = data;
		let res = { code: 0, msg: '' };
		// 业务逻辑开始-----------------------------------------------------------
		res = await vk.openapi.douyin.decrypt.getPhoneNumber(data);
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}