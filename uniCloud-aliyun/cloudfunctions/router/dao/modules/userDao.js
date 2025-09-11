// 涉及的表名
const dbName = {
	user: "uni-id-users", // 用户
};

let dao = {};
let util = {};
// 初始化
dao.init = function(obj) {
	util = obj;
}
/**
 * 获取用户信息
 * 调用示例
 * await vk.daoCenter.userDao.findById(user_id);
 * data 请求参数说明
 * @param {String} user_id 用户ID
 */
dao.findById = async (user_id, fieldJson = { token: false, password: false }) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.findById({
		dbName: dbName.user,
		id: user_id,
		fieldJson
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 根据whereJson获取单条记录
 * @param {Object} whereJson 条件
 * @param {Object} fieldJson 字段显示规则
 * 调用示例
let userInfo = await vk.daoCenter.userDao.findByWhereJson({
	
});
 */
dao.findByWhereJson = async (whereJson, fieldJson = { token: false, password: false }) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.findByWhereJson({
		dbName: dbName.user,
		whereJson,
		fieldJson
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 根据邀请码获取用户信息
 * let inviterUserInfo = await vk.daoCenter.userDao.findByInviteCode(invite_code);
 * @param {String} invite_code 邀请码
 */
dao.findByInviteCode = async (invite_code) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.findByWhereJson({
		dbName: dbName.user,
		whereJson: {
			my_invite_code: invite_code
		},
		fieldJson: { token: false, password: false }
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 增 - 添加一条记录
 * @param {Object} dataJson 添加的数据
 * 调用示例
await vk.daoCenter.userDao.add({
	
});
或
 * 调用示例
await vk.daoCenter.userDao.add({
	db: transaction,
	dataJson: {
		
	}
});
 */
dao.add = async (obj) => {
	let { vk, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	if (obj.db && obj.dataJson) {
		// 支持事务
		res = await vk.baseDao.add({
			...obj,
			cancelAddTime: true, // 因为user表使用了register_date作为创建时间
			dbName: dbName.user,
		});
	} else {
		// 不支持事务
		res = await vk.baseDao.add({
			dbName: dbName.user,
			cancelAddTime: true, // 因为user表使用了register_date作为创建时间
			dataJson: obj
		});
	}
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 增 - 添加多条记录
 * @param {Object} dataJson 添加的数据
 * 调用示例
await vk.daoCenter.userDao.adds(dataArr);
 */
dao.adds = async (dataArr) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.adds({
		dbName: dbName.user,
		cancelAddTime: true, // 因为user表使用了register_date作为创建时间
		dataJson: dataArr
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 删 - 删除多条记录
 * @param {Object} whereJson 条件
 * 调用示例
await vk.daoCenter.userDao.del({
	
});
 */
dao.del = async (whereJson) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.del({
		dbName: dbName.user,
		whereJson
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 删 - 据ID删除单条数据
 * @param {String} _id 
 * 调用示例
await vk.daoCenter.userDao.deleteById(_id);
或
await vk.daoCenter.userDao.deleteById(_id, transaction);
 */
dao.deleteById = async (_id, db) => {
	let { vk, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.deleteById({
		db,
		dbName: dbName.user,
		id: _id
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 改 - 批量修改
 * @param {Object} whereJson 条件
 * @param {Object} dataJson 修改的数据
 * 调用示例
await vk.daoCenter.userDao.update({
	whereJson:{

	},
	dataJson:{

	}
});
 */
dao.update = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.update({
		...obj,
		dbName: dbName.user
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 改 - 根据id修改
 * @param {Object} whereJson 条件
 * @param {Object} dataJson 修改的数据
 * 调用示例
await vk.daoCenter.userDao.updateById({
	id: uid,
	dataJson:{

	}
});
 */
dao.updateById = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.updateById({
		...obj,
		dbName: dbName.user
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 改 - 更新并返回更新后的数据（无论条件匹配到多少条记录，只会修改第一条记录，同时返回修改后的数据）
 * @param {Object} whereJson 条件
 * @param {Object} dataJson 修改的数据
 * 调用示例
await vk.daoCenter.userDao.updateAndReturn({
	whereJson:{

	},
	dataJson:{

	}
});
 */
dao.updateAndReturn = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.updateAndReturn({
		...obj,
		dbName: dbName.user
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取记录总条数
 * @param {Object} whereJson 条件
 * 调用示例
await vk.daoCenter.userDao.count(whereJson);
 */
dao.count = async (whereJson) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.count({
		dbName: dbName.user,
		whereJson
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 查 - 求和
 * @param {String} fieldName 需要求和的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let userSum = await vk.daoCenter.userDao.sum({
	fieldName: "",
	whereJson: {
		
	}
});
 */
dao.sum = async (obj) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.sum({
		...obj,
		dbName: dbName.user,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最大值
 * @param {String} fieldName 需要求最大值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let userMax = await vk.daoCenter.userDao.max({
	fieldName: "",
	whereJson: {
		
	}
});
 */
dao.max = async (obj) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.max({
		...obj,
		dbName: dbName.user,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最小值
 * @param {String} fieldName 需要求最小值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let userMin = await vk.daoCenter.userDao.min({
	fieldName: "",
	whereJson: {
		
	}
});
 */
dao.min = async (obj) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.min({
		...obj,
		dbName: dbName.user,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最平均值
 * @param {String} fieldName 需要求最平均值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let userAvg = await vk.daoCenter.userDao.avg({
	fieldName: "",
	whereJson: {
		
	}
});
 */
dao.avg = async (obj) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.avg({
		...obj,
		dbName: dbName.user,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取数据列表
 * 调用示例
let userList = await vk.daoCenter.userDao.select({
	pageIndex:1,
	pageSize:20,
	getMain:false,
	whereJson:{
		
	},
	fieldJson:{},
	sortArr:[{ "name":"_id", "type":"desc" }],
});
 */
dao.select = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.select({
		...obj,
		dbName: dbName.user
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取数据列表
 * 调用示例
let userList = await vk.daoCenter.userDao.selects({
	pageIndex:1,
	pageSize:20,
	getMain:false,
	whereJson:{
		
	},
	fieldJson:{},
	sortArr:[{ "name":"_id", "type":"desc" }],
	// 副表列表
	foreignDB:[
		{
			dbName:"副表表名",
			localKey:"主表外键名",
			foreignKey:"副表外键名",
			as:"副表as字段",
			limit:1
		}
	]
});
 */
dao.selects = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.selects({
		...obj,
		dbName: dbName.user
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取数据列表
 * 调用示例
res = await vk.daoCenter.userDao.getTableData({ 
	data
});
 */
dao.getTableData = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.getTableData({
		...obj,
		dbName: dbName.user
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 获取用户信息（旧版）
 * _id
 * username
 * mobile
 * email
 * wx_openid.app-plus
 * wx_openid.mp-weixin
 * wx_unionid
 * ali_openid
 * my_invite_code
 * 调用示例
 await vk.daoCenter.userDao.findByUserInfo({
	mobile:mobile
 });
 * data 请求参数说明
 * @param {Object} userInfo 用户信息
 */
dao.findByUserInfo = async (userInfo) => {
	let { vk, db, _ } = util;
	let res;
	// 数据库操作开始-----------------------------------------------------------
	let whereJson = {};
	let list = [
		"_id",
		"username",
		"mobile",
		"email",
		"wx_openid.app-plus",
		"wx_openid.mp-weixin",
		"wx_unionid",
		"ali_openid",
		"my_invite_code"
	];
	let orArr = [];
	for (let i = 0; i < list.length; i++) {
		let keyName = list[i];
		let orObj = {};
		if (vk.pubfn.isNotNull(userInfo[keyName])) orObj[keyName] = userInfo[keyName];
		if (vk.pubfn.isNotNull(orObj)) {
			orArr.push(orObj);
		}
	}
	if (orArr.length > 0) {
		whereJson = _.or(orArr);
		res = await vk.baseDao.findByWhereJson({
			dbName: dbName.user,
			fieldJson: { token: false, password: false },
			whereJson: whereJson
		});
	}
	// 数据库操作结束-----------------------------------------------------------
	return res;
};
/**
 * 根据ID数组获取用户列表 最多支持500个
 * 调用示例
 * await vk.daoCenter.userDao.listByIds(userIdArr);
 * data 请求参数说明
 * @param {Array} userIdArr 用户ID数组
 */
dao.listByIds = async (userIdArr) => {
	let { vk, db, _ } = util;
	let res = await vk.baseDao.select({
		dbName: dbName.user,
		pageIndex: 1,
		pageSize: 500,
		getMain: true,
		fieldJson: { token: false, password: false },
		whereJson: {
			_id: _.in(userIdArr)
		},
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};
/**
 * 根据手机号直接注册账号并登录
 * 若手机号已存在,则直接登录
 * @param {Object} data 参数
 * mobile          手机号  必填
 * password        初始密码
 * inviteCode      邀请人的邀请码
 * myInviteCode    设置当前注册用户自己的邀请码
 * needPermission  设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用
 * 调用示例
 await vk.daoCenter.userDao.registerUserByMobile({
	 mobile,
 });
 */
dao.registerUserByMobile = async (data) => {
	let { vk, db, _, uniID } = util;
	let res = {};
	let {
		mobile,
		password,
		inviteCode,
		myInviteCode,
		needPermission
	} = data;
	// 数据库操作开始-----------------------------------------------------------
	let code = vk.pubfn.random(6);
	// 设置验证码
	await uniID.setVerifyCode({
		mobile,
		code,
		expiresIn: 60,
		type: "login"
	});
	// 若手机号不存在，则注册并登录。存在，则直接登录。
	res = await uniID.loginBySms({
		mobile,
		code,
		password,
		inviteCode,
		myInviteCode,
		needPermission
	});
	if (res.uid && vk.pubfn.isNull(res.userInfo)) {
		res.userInfo = await vk.daoCenter.userDao.findById(res.uid);
	}
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 重置用户密码
 * data 请求参数说明
 * @param {String} uid 用户ID
 * @param {String} password 需要重置的密码
 * 调用示例
await vk.daoCenter.userDao.resetPwd({
	uid: uid,
	password: "123456"
});
 */
dao.resetPwd = async (data) => {
	let { vk, db, _, uniID } = util;
	let res = {};
	let {
		uid,
		password
	} = data;
	// 数据库操作开始-----------------------------------------------------------
	res = await uniID.resetPwd({ uid, password });
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 获取一个未被使用的7位数分享码
 * 调用示例
await vk.daoCenter.userDao.getValidInviteCode();
 */
dao.getValidInviteCode = async (data = {}) => {
	let { vk, db, _ } = util;
	// 数据库操作开始-----------------------------------------------------------
	let {
		my_invite_code
	} = data;
	if (my_invite_code) {
		// 如果用户传了自定义的分享码，也需要判断下是否存在
		let num = await vk.baseDao.count({
			dbName: dbName.user,
			whereJson: {
				my_invite_code
			}
		});
		if (num === 0) {
			return my_invite_code;
		}
	}
	let inviteCode = await vk.pubfn.randomAsync(7, "23456789ABCDEFGHJKLMNPQRSTUVWXYZ", async (val) => {
		let num = await vk.baseDao.count({
			dbName: dbName.user,
			whereJson: {
				my_invite_code: val
			}
		});
		return num === 0 ? true : false;
	}, 10); // 最大重试10次
	// 数据库操作结束-----------------------------------------------------------
	return inviteCode;
};

/**
 * 注销账号
 * 调用示例
await vk.daoCenter.userDao.closeAccount({
	uid: "用户id",
	delay: 0, // 延迟注销时间（单位为秒），0表示立即注销，若设置大于0，则需要在定时任务中再次执行注销账号，且不传delay参数
});
 */
dao.closeAccount = async (data = {}) => {
	const { vk, _ } = util;
	let { uid, delay = 0 } = data;
	if (vk.pubfn.isNull(uid)) return { code: -1, msg: "参数uid不能为空" };
	const userInfo = await dao.findById(uid, { token: false });
	if (vk.pubfn.isNull(userInfo)) return { code: -1, msg: "要注销的用户不存在" };
	const nowTime = Date.now();
	const closeStatus = 4;
	if (userInfo.status === closeStatus && userInfo.close_account) {
		if (!userInfo.close_account.confirmed) {
			// 判断是否过了注销冷静期
			if (nowTime > userInfo.close_account.close_time) {
				delay = 0;
			} else {
				return { code: 0, msg: `该账号已提交过注销申请，账号将在${vk.pubfn.timeFormat(userInfo.close_account.close_time, "yyyy-MM-dd hh:mm")}后自动注销`, close_account: userInfo.close_account };
			}
		} else {
			return { code: -1, msg: "该账号已注销" };
		}
	}
	let dataJson;
	const close_time = nowTime + (delay * 1000); // 实际注销时间
	if (delay > 0) {
		// 延时注销
		dataJson = {
			status: closeStatus, // 用户状态：0 正常 1 禁用 2 审核中 3 审核拒绝 4 已注销
			close_account: _.set({
				confirmed: 0, // 是否已确认注销：0 未确认（代表在冷静期） 1 已确认（代表已注销）
				apply_time: nowTime, // 注销申请时间
				close_time, // 实际注销时间
				status: userInfo.status // 注销前的状态
			})
		}
	} else {
		// 立即注销
		// 指定需要删除的字段
		const baseRemoveKeys = ['username', 'password', 'my_invite_code', 'token', 'mobile', 'mobile_confirmed', 'email', 'email_confirmed'];
		// 再删除 _openid 或 _unionid 结尾的字段
		const reg = new RegExp('(_openid|_unionid)$');
		const removeKeys = [
			...baseRemoveKeys,
			...Object.keys(userInfo).filter(key => reg.test(key))
		];
		const { removeFields, backup } = removeKeys.reduce((acc, key) => {
			acc.removeFields[key] = _.remove();
			acc.backup[key] = userInfo[key];
			return acc;
		}, { removeFields: {}, backup: {} });
		dataJson = {
			status: closeStatus, // 用户状态：0 正常 1 禁用 2 审核中 3 审核拒绝 4 已注销
			close_account: _.set({
				confirmed: 1, // 是否已确认注销：0 未确认（代表在冷静期） 1 已确认（代表已注销）
				apply_time: nowTime, // 注销申请时间
				close_time: nowTime, // 实际注销时间
				status: userInfo.status, // 注销前的状态
				backup
			}),
			...removeFields
		}
	}
	// 修改数据库
	const num = await vk.baseDao.updateById({
		dbName: dbName.user,
		id: uid,
		dataJson
	});
	if (num === 0) return { code: -1, msg: "注销账号失败" };
	return {
		code: 0,
		msg: delay > 0 ? `注销申请成功，账号将在${vk.pubfn.timeFormat(close_time, "yyyy-MM-dd hh:mm")}后自动注销` : "注销成功",
		destroyed: delay > 0 ? false : true
	};
};

/**
 * 取消注销账号（仅限在冷静期内）
 * 调用示例
await vk.daoCenter.userDao.openAccount({
	uid: "用户id"
});
 */
dao.openAccount = async (data = {}) => {
	const { vk, _ } = util;
	const { uid, delay = 0 } = data;
	if (vk.pubfn.isNull(uid)) return { code: -1, msg: "参数uid不能为空" };
	const userInfo = await dao.findById(uid, { token: false });
	if (vk.pubfn.isNull(userInfo)) return { code: -1, msg: "用户不存在" };
	const closeStatus = 4;
	if (userInfo.status !== closeStatus) return { code: -1, msg: "该账号未注销，无需恢复" };
	if (userInfo.close_account) {
		if (userInfo.close_account.confirmed) return { code: -1, msg: "该账号已注销，无法恢复" };
		if (Date.now() > userInfo.close_account.close_time) return { code: -1, msg: "该账号已过注销冷静期，无法恢复" };
	}
	// 修改数据库
	const num = await vk.baseDao.updateById({
		dbName: dbName.user,
		id: uid,
		dataJson: {
			status: userInfo.close_account.status, // 恢复注销前的状态
			close_account: _.remove()
		}
	});
	if (num === 0) return { code: -1, msg: "恢复账号失败" };
	return { code: 0, msg: "恢复账号成功" };
};

module.exports = dao;