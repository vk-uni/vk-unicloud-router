declare namespace UniNamespace {
	interface Uni {
		vk: VkInterface;
	}
}
declare namespace VkNamespace {
	type Vk = VkInterface;

	type VkBaseResult = {
		msg?: string;
		code: string | number;
	};

	type BaseResult = {
		errMsg: string;
		errCode?: string | number;
	};

	type ImportObjectOptions = {
		// 是否使用简易模式
		easy?: boolean;
		/**
		 * 公共请求参数
		 */
		data?: object;
	};

	type RequestResult = VkBaseResult & {};

	type RequestOptions = {
		/**
		 * 开发者服务器接口地址
		 */
		url: string;
		/**
		 * 默认是POST请求
		 */
		method?: "GET" | "POST" | "PUT" | "DELETE";
		/**
		 * 请求的参数
		 */
		data?: any;
		/**
		 * 设置请求的 header，header 中不能设置 Referer
		 */
		header?: { [key: string]: string };
		dataType?: "json" | "text" | "default" | "buffer" | "";
		responseType?: "text" | "arraybuffer";
		/**
		 * 超时时间，单位 ms 默认 60000
		 */
		timeout?: number;
		/**
		 * code对应的返回字段名
		 */
		errorCodeName?: string;
		/**
		 * msg对应的返回字段名
		 */
		errorMsgName?: string;
		/**
		 * 失败时是否需要自动弹窗提示
		 */
		needAlert?: boolean;
		/**
		 * 是否需要传tokne给router
		 */
		uniIdToken?: boolean | string;
		/**
		 * 拦截器 [查看文档](https://vkdoc.fsq.pub/client/jsapi.html#interceptor)
		 */
		interceptor?: { invoke?: (obj: any) => any; success?: (res: any) => any; fail?: (res: any) => any; complete?: (res: any) => any };
		/**
		 * 请求成功的回调函数
		 */
		success?: (res: RequestResult) => void;
		/**
		 * 请求失败的回调函数
		 */
		fail?: (res: RequestResult) => void;
		/**
		 * 无论请求成功与否，都会执行的回调函数
		 */
		complete?: (res: RequestResult) => void;
	};

	type UploadFileResult = {
		/**
		 * 本次上传的存储供应商
		 */
		provider: string;
		/**
		 * 本地文件路径
		 */
		filePath: string;
		/**
		 * 云端文件路径
		 */
		cloudPath: string;
		/**
		 * 云端文件ID
		 */
		fileID: string;
		/**
		 * 云端文件URL
		 */
		fileURL: string;
		/**
		 * 云端文件URL，与fileURL一致
		 */
		url: string;
	};

	type OnUploadProgressResult = {
		/**
		 * 上传进度百分比
		 */
		progress: number;
		/**
		 * 文件总大小
		 */
		total: number;
		/**
		 * 已上传大小
		 */
		loaded: number;
	};

	type UploadFileOptions = {
		/**
		 * 上传时的loading提示语
		 */
		title?: string;
		/**
		 * 要上传的文件对象，file与filePath二选一即可
		 */
		file?: File | string;
		/**
		 * 要上传的文件路径，file与filePath二选一即可
		 */
		filePath?: string;
		/**
		 * 云存储供应 unicloud 空间内置云存储 extStorage 扩展存储 aliyun 阿里云OSS
		 * [查看文档](https://vkdoc.fsq.pub/client/pages/uploadFile.html#%E9%85%8D%E7%BD%AE%E9%BB%98%E8%AE%A4%E4%BA%91%E5%AD%98%E5%82%A8%E4%BE%9B%E5%BA%94%E5%95%86)
		 */
		provider?: "unicloud" | "extStorage" | "aliyun";
		/**
		 * 指定上传后的云端文件路径（不指定会自动生成）
		 */
		cloudPath?: string;
		/**
		 * 指定上传后的云端目录（若cloudPath有值，则此参数无效）
		 */
		cloudDirectory?: string;
		/**
		 * 是否需要将图片信息保存到admin素材库
		 */
		needSave?: boolean;
		/**
		 * 素材库分类id，当needSave为true时生效
		 */
		category_id?: string;
		/**
		 * 上传到其他空间时使用，uniCloud和env二选一即可 [查看文档](https://vkdoc.fsq.pub/client/question/q9.html)
		 */
		uniCloud?: string;
		/**
		 * 上传到其他空间时使用，uniCloud和env二选一即可 [查看文档](https://vkdoc.fsq.pub/client/question/q9.html)
		 */
		env?: string;
		/**
		 * 删除文件名中的中文 默认 true
		 */
		cloudPathRemoveChinese?: boolean;
		/**
		 * 上传进度回调
		 */
		onUploadProgress?: (res: OnUploadProgressResult) => void;
		/**
		 * 成功返回的回调函数
		 */
		success?: (res: UploadFileResult) => void;
		/**
		 * 失败返回的回调函数
		 */
		fail?: (res: BaseResult) => void;
		/**
		 * 结束的回调函数（调用成功、失败都会执行
		 */
		complete?: (res: UploadFileResult) => void;
	};

	type CallFunctionResult = VkBaseResult & {};

	type CallFunctionOptions = {
		/**
		 * 符合VK框架路由规则的router大函数名，默认为app.config.js内的functionName属性的值
		 */
		name?: string;
		/**
		 * 请求路径，该路径实为router大云函数的service目录下的路径（此时的router大函数=name参数的值）
		 */
		url: string;
		/**
		 * 请求参数 对象形式
		 */
		data?: object;
		/**
		 * 遮罩层提示语，为空或不传则代表不显示遮罩层。
		 */
		title?: string;
		/**
		 * 自定义loading [查看文档](https://vkdoc.fsq.pub/client/pages/callFunction.html#loading)
		 */
		loading?: boolean | object;
		/**
		 * 是否使用云函数url化地址访问云函数
		 */
		isRequest?: boolean;
		/**
		 * 为true代表请求错误时，会有alert弹窗提示
		 */
		needAlert?: boolean;
		/**
		 * 全局请求参数的名称， 如果设置了正则规则，则不需要此参数
		 */
		globalParamName?: string;
		/**
		 * 请求多服务空间的环境 [查看文档](https://vkdoc.fsq.pub/client/question/q9.html)
		 */
		env?: string;
		/**
		 * 请求多服务空间的环境 [查看文档](https://vkdoc.fsq.pub/client/question/q9.html)
		 */
		uniCloud?: any;
		/**
		 * 系统异常重试机制（表单提交时慎用，建议只用在查询请求中，即无任何数据库修改的请求中）
		 */
		retryCount?: number;
		/**
		 * 请求成功时，执行的回调函数
		 */
		success?: (data: CallFunctionResult) => void;
		/**
		 * 请求失败时，执行的回调函数
		 */
		fail?: (err: BaseResult) => void;
		/**
		 * 无论请求成功与否，都会执行的回调函数
		 */
		complete?: () => void;
	};

	type TreeProps = {
		id?: string;
		parent_id?: string;
		children?: string;
		deleteParentId?: boolean;
		need_field?: string[];
	};

	type GetDateInfoResult = {
		year: number;
		month: number;
		date: number;
		hour: number;
		minute: number;
		second: number;
		millisecond: number;
		week: number;
		quarter: number;
	};

	type VkDate = Date | number | string;

	type GetCommonTimeResult = {
		todayStart: number;
		todayEnd: number;
		today12End: number;
		monthStart: number;
		monthEnd: number;
		yearStart: number;
		yearEnd: number;
		weekStart: number;
		weekEnd: number;
		hourStart: number;
		hourEnd: number;
		yesterdayStart: number;
		yesterday12End: number;
		yesterdayEnd: number;
		lastMonthStart: number;
		lastMonthEnd: number;
		now: string;
		months: number[];
		days: number[];
	};

	type OffsetOptions = {
		year?: number;
		month?: number;
		day?: number;
		hours?: number;
		minutes?: number;
		seconds?: number;
		mode?: "after" | "before";
	};

	type DateRange = {
		startTime: number;
		endTime: number;
	};

	type FreightsItem = {
		first_weight: number;
		first_weight_price: number;
		continuous_weight: number;
		continuous_weight_price: number;
		max_weight: number;
	};

	type GetCurrentPageResult = {
		fullPath: string;
		options: object;
		route: string;
		$vm: any;
	};

	type H5EnvInfo = {
		isMiniProgram: boolean;
		isWeixin: boolean;
		isMpWeixin: boolean;
		isH5Weixin: boolean;
		isPCWeixin: boolean;
		isDevWeixin: boolean;
		isAlipay: boolean;
		isMpAlipay: boolean;
		isH5Alipay: boolean;
		isDevAlipay: boolean;
		isQQ: boolean;
		isMpQQ: boolean;
		isH5QQ: boolean;
		isDevQQ: boolean;
		isDouyin: boolean;
		isMpDouyin: boolean;
		isH5Douyin: boolean;
		isDevDouyin: boolean;
		isBaidu: boolean;
		isMpBaidu: boolean;
		isH5Baidu: boolean;
		isDevBaidu: boolean;
		isOther: boolean;
	};

	type UpdateShareDataOptions = {
		title: string;
		desc: string;
		link: string;
		imgUrl: string;
	};
}

interface Pubfn {
	/**
	 * vk.pubfn.debounce 防抖函数
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-debounce-防抖函数](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-debounce-防抖函数)
	 * @param {Function}  fn 要执行的回调函数
	 * @param {Number}    time 延时的时间，单位为毫秒
	 * @param {Boolean}   isImmediate 是否立即执行
	 * @param {String}    timeoutName 定时器ID
	 * @return void
	 */
	debounce(fn: Function, time?: number, isImmediate?: boolean, timeoutName?: string): void;
	/**
	 * vk.pubfn.throttle 节流函数
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-throttle-节流函数](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-throttle-节流函数)
	 * @param {Function}  fn 要执行的回调函数
	 * @param {Number}    time 延时的时间，单位为毫秒
	 * @param {Boolean}   isImmediate 是否立即执行
	 * @param {String}    timeoutName 定时器ID
	 * @return void
	 */
	throttle(fn: Function, time?: number, isImmediate?: boolean, timeoutName?: string): void;
	/**
	 * vk.pubfn.deepMerge JS对象深度合并
	 * @param {Object} target 目标对象
	 * @param {Object} source 源对象
	 * @return {Object} 合并后的对象
	 */
	deepMerge(target: object, source: object): object;
	/**
	 * vk.pubfn.queryParams 对象转url参数
	 * @param {Object} data 对象
	 * @param {boolean} [isPrefix=true] 是否自动加上"?"
	 * @param {string} [arrayFormat='brackets'] 数组参数的处理方式
	 * @return {string} 转换后的 URL 参数字符串
	 */
	queryParams(data: object, isPrefix?: boolean, arrayFormat?: "brackets" | "indices" | "repeat" | "comma"): string;
	/**
	 * 设置剪贴板数据
	 * @param {Object} options 参数对象
	 * @param {string} options.data 剪贴板数据
	 * @param {Function} [options.success] 成功回调
	 * @param {Function} [options.fail] 失败回调
	 * @param {Function} [options.complete] 完成回调
	 * @return {void}
	 */
	setClipboardData(options: {
		data: string;
		success?: (res: VkNamespace.BaseResult) => void;
		fail?: (res: VkNamespace.BaseResult) => void;
		complete?: (res: VkNamespace.BaseResult) => void;
	}): void;
	/**
	 * vk.pubfn.arrayToTree（数组转树）
	 */
	arrayToTree(originalArrayData: Array<any>, treeProps: VkNamespace.TreeProps): Array<any>;
	/**
	 * vk.pubfn.treeToArray（树转数组）
	 */
	treeToArray(treeData: Array<any>, treeProps: VkNamespace.TreeProps): Array<any>;
	/**
	 * vk.pubfn.sleep（进程强制等待，休眠）
	 */
	sleep(ms: number): void;
	/**
	 * vk.pubfn.timeFormat 日期时间格式化
	 * @param {Date | Number | String} date 需要格式化的时间，支持时间对象和时间戳
	 * @param {String} format 时间格式 默认 "yyyy-MM-dd hh:mm:ss"
	 * @param {Number} targetTimezone 时区 默认东8区 正数代表东 负数代表西
	 * @return {String} str 转换后的字符串时间格式
	 */
	timeFormat(date: VkNamespace.VkDate, format: string, targetTimezone: number): string;
	/**
	 * vk.pubfn.getDateInfo（解析日期对象属性）
	 * @param {Date | Number | String} date 需要转换的时间
	 * @return {Object} dateObj 转换后的时间对象
	 */
	getDateInfo(date: VkNamespace.VkDate, targetTimezone: number): VkNamespace.GetDateInfoResult;

	/**
	 * vk.pubfn.getCommonTime（获取时间范围）
	 * @param {Date | Number | String} date 日期对象 可以指定时间计算节点，默认使用当前时间进行计算
	 * @param {Number} targetTimezone 时区 默认东8区 正数代表东 负数代表西
	 * @return {Object} timeObj
	 */
	getCommonTime(date: VkNamespace.VkDate, targetTimezone: number): VkNamespace.GetCommonTimeResult;

	/**
	 * vk.pubfn.getOffsetTime（获得指定时间偏移 year年 month月 day天 hours时 minutes分 seconds秒前或后的时间戳）
	 */
	getOffsetTime(date: VkNamespace.VkDate, offsetOptions: VkNamespace.OffsetOptions): number;
	/**
	 * vk.pubfn.getHourOffsetStartAndEnd（获得相对当前时间的偏移 count 小时的起止日期）
	 */
	getHourOffsetStartAndEnd(count: number, date: VkNamespace.VkDate): VkNamespace.DateRange;
	/**
	 * vk.pubfn.getDayOffsetStartAndEnd（获得相对当前时间的偏移 count 天的起止日期）
	 */
	getDayOffsetStartAndEnd(count: number, date: VkNamespace.VkDate): VkNamespace.DateRange;
	/**
	 * vk.pubfn.getWeekOffsetStartAndEnd（获得相对当前时间的偏移 count 周的起止日期）
	 */
	getWeekOffsetStartAndEnd(count: number, date: VkNamespace.VkDate): VkNamespace.DateRange;
	/**
	 * vk.pubfn.getMonthOffsetStartAndEnd（获得相对当前时间的偏移 count 月的起止日期）
	 */
	getMonthOffsetStartAndEnd(count: number, date: VkNamespace.VkDate): VkNamespace.DateRange;
	/**
	 * vk.pubfn.getQuarterOffsetStartAndEnd（获得相对当前时间的偏移 count 季度的起止日期）
	 */
	getQuarterOffsetStartAndEnd(count: number, date: VkNamespace.VkDate): VkNamespace.DateRange;
	/**
	 * vk.pubfn.getYearOffsetStartAndEnd（获得相对当前时间的偏移 count 年的起止日期）
	 */
	getYearOffsetStartAndEnd(count: number, date: VkNamespace.VkDate): VkNamespace.DateRange;
	/**
	 * vk.pubfn.test（检测文本格式）
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-test-检测文本格式](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-test-检测文本格式)
	 */
	test(str: string, type: string, allowEmpty: boolean): boolean;
	/**
	 * vk.pubfn.objectAssign（对象属性浅拷贝）
	 * @description 将 obj2 的属性赋值给 obj1 (如果obj1中有对应的属性,则会被obj2的属性值覆盖)
	 * @param {Object} obj1
	 * @param {Object} obj2
	 * @return {Object} newObj 合并后的对象（注意：函数执行后obj1 = newObj，即obj1也会被修改）
	 */
	objectAssign(obj1: object, obj2: object): object;
	/**
	 * vk.pubfn.copyObject（复制一份对象-没有映射关系）
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-copyobject-复制一份对象-没有映射关系](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-copyobject-复制一份对象-没有映射关系)
	 * @param {Object} 	obj 需要被复制的对象
	 * @return {Object} newObj 合并后的对象（注意：函数执行后obj1 = newObj，即obj1也会被修改）
	 * @example
	 * let newObj = vk.pubfn.copyObject(obj);
	 */
	copyObject(obj: object): object;
	/**
	 * vk.pubfn.deepClone 深度克隆
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-deepclone-深度克隆一个对象-没有映射关系](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-deepclone-深度克隆一个对象-没有映射关系)
	 * @param {object}  obj 需要克隆的对象
	 * @return {object} newObj  返回克隆后的对象
	 *
	 * @example
	 * let newObj = vk.pubfn.deepClone(obj);
	 */
	deepClone(obj: object): object;
	/**
	 * vk.pubfn.arr_concat（两个对象数组合并，并去除重复的数据）
	 * @param	{Array<Object>}  arr1 	第一个数组(arr1和aar2没有顺序要求)
	 * @param	{Array<Object>}  arr2 	第二个数组
	 * @param	{String} flag 	判断标识,默认用id来判断,若flag传-1,代表不去除重复数据
	 * @return {Array<Object>} arr    新数组
	 */
	arr_concat(arr1: Array<object>, arr2: Array<Object>, flag: string): Array<object>;
	/**
	 * vk.pubfn.getData
	 * 自动根据字符串路径获取对象中的值支持.和[] , 且任意一个值为undefined时,不会报错,会直接返回undefined
	 * @param	{Object} data 数据源
	 * @param	{String} name 支持a.b 和 a[b]
	 * @param	{String} defaultValue undefined时的默认值
	 * @return {Any} value 返回值
	 */
	getData(data: object, name: string, defaultValue: string): any;
	/**
	 * vk.pubfn.setData（根据字符串路径设置对象的值）
	 * @param	{Object} data 数据源
	 * @param	{String} name 支持a.b 和 a[b]
	 * @param	{String} value 值
	 */
	setData(data: object, name: string, value: string): void;
	/**
	 * vk.pubfn.isNull
	 * 检测参数是否为空 其中 undefined、null、{}、[]、"" 均为空值  true 空值  false 有值
	 */
	isNull(value: any): boolean;
	/**
	 * vk.pubfn.isNotNull
	 * 检测参数是否不为空 结果与 vk.pubfn.isNull 相反
	 */
	isNotNull(value: any): boolean;
	/**
	 * vk.pubfn.isNotNull
	 * 检测参数是否不为空 结果与 vk.pubfn.isNull 相反
	 */
	isNotNull(value: any): boolean;
	/**
	 * vk.pubfn.isNullOne（是否至少有一个参数为空）
	 */
	isNullOne(value: any): boolean;
	/**
	 * vk.pubfn.isNullAll（是否全部为空）
	 */
	isNullAll(value: any[]): boolean;
	/**
	 * vk.pubfn.isNotNullAll（是否全部都不为空）
	 */
	isNotNullAll(value: any[]): boolean;
	/**
	 * vk.pubfn.isNullOneByObject（检测整个对象是否没有一个属性是空值）
	 * 如果有空值，则返回首个是空值的属性名
	 * @param	{Object} data 对象
	 * @example
	 let nullKey = vk.pubfn.isNullOneByObject({ title, content, avatar });
	 if (nullKey) return { code: -1, msg: `${nullKey}不能为空` };
	 */
	isNullOneByObject(data: object): string;
	/**
	 * vk.pubfn.getListItem（从对象数组中获取某一个对象）
	 * @description 主要用于在一个对象数组中快速获取 _id = 1 的对象
	 * @param	{Array}  list 数据源
	 * @param	{String} key 键名
	 * @param	{String} value 键值
	 * @return {Any} item 返回值
	 */
	getListItem(list: Array<object>, key: string, value: any): object;

	/**
	 * vk.pubfn.getListIndex（从对象数组中获取某个对象的index）
	 * @description 主要用于在一个对象数组中快速获取 _id = 1 的对象
	 * @param	{Array}  list 数据源
	 * @param	{String} key 键名
	 * @param	{String} value 键值
	 * @return {Number} index 返回值
	 */
	getListIndex(list: Array<object>, key: string, value: any): number;

	/**
	 * vk.pubfn.getListItemIndex（从对象数组中获取某一个对象和index）
	 * @description 主要用于在一个对象数组中快速获取 _id = 1 的对象
	 * @param	{Array}  list 数据源
	 * @param	{String} key 键名
	 * @param	{String} value 键值
	 * @return {Object} 返回值
	 */
	getListItemIndex(list: Array<object>, key: string, value: any): { item: object; index: number };

	/**
	 * vk.pubfn.arrayToJson（对象数组转JSON）
	 */
	arrayToJson(list: Array<object>, key: string): object;
	/**
	 * vk.pubfn.arrayObjectGetArray（从数组中提取指定字段形式新的数组）
	 * 如[{"_id":"001","name":"name1","sex":1},{"_id":"002","name":"name2","sex":2}]
	 * 提取_id字段转成
	 * ["001","002"]
	 * @param	{Array}  list 数据源
	 * @param	{String} key 键名
	 * @return {Array<any>} newList 新数组
	 */
	arrayObjectGetArray(list: Array<object>, key: string): Array<any>;
	/**
	 * vk.pubfn.random（随机数）
	 * @param	{Number} length 随机数固定位数
	 * @param	{String} range 指定的字符串中随机范围
	 * @param	{Array<string>}  arr 产生的随机数不会和此数组的任意一项重复
	 * @return {string} 产生的随机数的值
	 */
	random(length: number, range: string, arr: Array<string>): string;
	/**
	 * vk.pubfn.hidden（将手机号、账号等隐藏中间字段）
	 * @param {String} str   需要转换的字符串
	 * @param {Number} first 前面显示的字符数量，默认为0
	 * @param {Number} last  后面显示的字符数量，默认为0
	 * @return {String} newStr 转换后的值
	 */
	hidden(str: string, first: number, last: number): string;
	/**
	 * vk.pubfn.checkArrayIntersection（两数组是否有交集)
	 * @param {Array} arr1 数组A
	 * @param {Array} arr2 数组B
	 */
	checkArrayIntersection(arr1: Array<any>, arr2: Array<any>): boolean;
	/**
	 * vk.pubfn.calcFreights（计算运费）
	 *  @param {Object} freightsItem 运费模板
	 {
		 first_weight             Number 首重 单位KG,
		 first_weight_price       Number 首重 首重价格
		 continuous_weight        Number 续重 单位KG
		 continuous_weight_price  Number 续重价格
		 max_weight               Number 重量达到此值时,会多计算首重的价格,并少一次续重的价格 倍乘(相当于拆分多个包裹)
	 }
	 * @param {Number} weight 运费重量
	 * @return {Number} freights 运费金额
	 */
	calcFreights(freightsItem: VkNamespace.FreightsItem, weight: number): number;
	/**
	 * vk.pubfn.getNewObject（从一个对象中取多个属性，并生成一个全新的对象）
	 * @param {Object} obj 对象
	 * @param {Array<String>} keys 键名数组
	 * @return {Object} newObj 新对象
	 */
	getNewObject(obj: object, keys: Array<string>): object;
	/**
	 * vk.pubfn.deleteObjectKeys（对象删除指定的字段，返回新的对象）
	 * @param {Object} data  操作对象
	 * @param {Array<String>} deleteKeys 需要删除的键名(数组形式)
	 * @return {Object} newObj 新对象
	 */
	deleteObjectKeys(data: object, deleteKeys: Array<string>): object;
	/**
	 * vk.pubfn.calcSize（单位进制换算）
	 * @param {number} length  大小
	 * @param {Array<String>} arr 进制的数组,如["B","KB","MB","GB"]
	 * @param {number} ary  进制,如KB-MB-GB,进制1024
	 * @param {number} precision  数值精度（小数点后面位数）
	 * @return {number} size 大小
	 */
	calcSize(length: number, arr: Array<string>, ary: number, precision: number): number;

	/**
	 * vk.pubfn.isArray（判断变量是否是数组）
	 * @param {Any} obj 变量
	 * @return {Boolean} true | false
	 */
	isArray(obj: any): boolean;

	/**
	 * vk.pubfn.isObject（判断变量是否是对象）
	 * @param {Any} obj 变量
	 * @return {Boolean} true | false
	 */
	isObject(obj: any): boolean;
	/**
	 * vk.pubfn.createOrderNo（产生订单号）
	 * @param {String} prefix 前缀
	 * @param {Number} count 位数，建议在25-30之间，默认25
	 * @return {String} no 订单号
	 */
	createOrderNo(prefix: string, count: number): string;

	/**
	 * vk.pubfn.snake2camelJson（对象内的属性名 - 蛇形转驼峰）
	 * @param {Object} obj 需要转换的对象
	 * @return {Object} newObj 新对象
	 */
	snake2camelJson(obj: object): object;

	/**
	 * vk.pubfn.camel2snakeJson（对象内的属性名 - 驼峰转蛇形）
	 * @param {Object} obj 需要转换的对象
	 * @return {Object} newObj 新对象
	 */
	camel2snakeJson(obj: object): object;
	/**
	 * vk.pubfn.snake2camel（字符串 - 蛇形转驼峰）
	 * @param {String} value 需要转换的字符串
	 * @return {String} newVal 新字符串
	 */
	snake2camel(value: string): string;
	/**
	 * vk.pubfn.camel2snake（字符串 - 驼峰转蛇形）
	 * @param {String} value 需要转换的字符串
	 * @return {String} newVal 新字符串
	 */
	camel2snake(value: string): string;
	/**
	 * vk.pubfn.string2Number 将能转成数字的字符串转数字（支持字符串、对象、数组）
	 * @param {Any} obj 数据源
	 * @param {Object} option 哪些格式需要排除
	 * 默认排除
	 * mobile:true 手机号，如 15200000001
	 * idCard:true 身份证，如 330154202109301214
	 * startFrom0:true 第一位是0，且长度大于1的，同时第二位不是.的字符串  如 01，057189101254
	 * @return {Any} newObj 新数据
	 */
	string2Number(obj: any, option: { mobile?: boolean; idCard?: boolean; startFrom0?: boolean }): any;
	/**
	 * vk.pubfn.toDecimal 保留小数
	 * @param {Number} val 原值
	 * @param {Number} precision 精度
	 * @return {Number} newVal 保留小数后的值
	 */
	toDecimal(val: number, precision: number): number;

	/**
	 * vk.pubfn.priceFilter（金额显示过滤器）
	 * @param {Number} money 金额
	 * @return {Number} newVal 转换后的值
	 */
	priceFilter(money: number): number;

	/**
	 * vk.pubfn.percentageFilter（百分比显示过滤器）
	 * @param {Number} value 百分比值
	 * @param {Boolean} needShowSymbol 显示 % 这个符号
	 * @param {String | Number} defaultValue value为空时的默认值
	 * @return {Number} newVal 转换后的值
	 */
	percentageFilter(value: number, needShowSymbol: boolean, defaultValue: string | number): number;
	/**
	 * vk.pubfn.discountFilter（折扣显示过滤器）
	 * @param {Number} value 折扣值
	 * @param {Boolean} needShowSymbol 显示 折 这个中文字符
	 * @param {String | Number} defaultValue value为空时的默认值
	 * @return {Number} newVal 转换后的值
	 */
	discountFilter(value: number, needShowSymbol: boolean, defaultValue: string | number): number;
	/**
	 * vk.pubfn.dateDiff（将时间显示成1秒前、1天前）
	 * @description 主要用于 文章最后回复时间: 1分钟前
	 * @param {String | Number}  startTime	需要计算的时间 如文章最后回复时间
	 * @param {String} suffix	后缀，默认为前，如 1秒前 ,若设置为空字符串，则只显示 1秒
	 * @return {String} newStr 转换后的值
	 */
	dateDiff(startTime: VkNamespace.VkDate, suffix: string): string;

	/**
	 * vk.pubfn.dateDiff2（将时间显示成1秒、1天）
	 * @description 主要用于 到期时间剩余 : 3天 这样的场景
	 * @param {String | Number} endTime	需要计算的时间 如到期时间
	 * @param {String} endText	到期时显示的文字
	 * @return {String} newStr 转换后的值
	 */
	dateDiff2(endTime: VkNamespace.VkDate, endText: string): string;

	/**
	 * vk.pubfn.numStr（将大数字转中文）
	 * @description 主要用于展示浏览量等不需要非常精确显示的场景
	 * 如:
	 * 3210 -> 3千
	 * 31210 -> 3万
	 * 1523412 -> 1百万
	 * 15234120 ->1千万
	 * @param {Number} n 需要转换的数字
	 * @return {String} newStr 转换后的值
	 */
	numStr(n: number): string;

	/**
	 * vk.pubfn.splitArray（分割数组）
	 * @param {Array} array 大数组
	 * @param {Number} size 小数组每组最大多少个
	 * @return {Array} newArray 转换后的二维数组
	 */
	splitArray(array: Array<any>, size: number): Array<any>;
	/**
	 * vk.pubfn.objectKeySort（对象属性排序）
	 * @param {Object} obj 需要排序对象
	 * @return {Array} newObj 转换后对象
	 */
	objectKeySort(obj: object): object;

	/**
	 * vk.pubfn.getListData（手机长列表分页加载数据）
	 * @description 自动处理下一页。数据合并，更新数据源（会自动更新vue页面上的this.data变量的值）源码请看 uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/index.js 中的 getListData 内部实现
	 * @param {Vue页面对象} options.that 页面数据对象this
	 * @param {String} options.url 请求地址(云函数路径)
	 * @param {String} options.listName 后端返回的list数组的字段名称,默认rows
	 * @param {Object} options.data 额外数据
	 * @param {function} options.dataPreprocess	数据预处理函数
	 */

	getListData(options: { that: any; url: string; listName?: string; data?: object; dataPreprocess?: (list: Array<any>) => void }): void;

	/**
	 * vk.pubfn.getComponentsDynamicData（动态组件数据获取）
	 * @description 主要用于动态组件的数据获取
	 * @param {Vue页面对象} options.that 页面数据对象this
	 * @param {Array<string>}     options.ids  动态数据组件的ID
	 */

	getComponentsDynamicData(options: { that: any; ids: Array<string> }): void;

	/**
	 * vk.pubfn.getCurrentPage（获取当前页面实例）
	 * 返回数据
	 * fullPath 当前打开页面的完整路径(带页面参数)
	 * options  当前打开页面的参数
	 * route    当前打开页面的路径(不含参数)
	 * $vm      当前打开页面的vue实例
	 */
	getCurrentPage(): VkNamespace.GetCurrentPageResult;

	/**
	 * vk.pubfn.fileToBase64（文件转base64）
	 * @param {File} options.file 文件
	 * @param {Function} options.success 成功回调
	 */
	fileToBase64(options: { file: File; success: (base64: string) => void }): void;

	/**
	 * vk.pubfn.base64ToFile（base64转文件）
	 * @param {String} options.base64 base64的值
	 * @param {Function} options.success 成功回调
	 */
	base64ToFile(options: { base64: string; success: (file: File) => void }): void;
}

interface H5 {
	/**
	 * vk.h5.getEnv 获取当前H5所在的环境
	 * @example
	 let env = vk.h5.getEnv();
	 if (env === "h5-weixin") {
	 	
	 }
	 */
	getEnv(): string;
	/**
	 * vk.h5.getEnvInfo 获取当前H5所在的环境（多参数版）
	let env = vk.h5.getEnvInfo();
	if (env.isPCWeixin) {
		
	}
	 */
	getEnvInfo(): VkNamespace.H5EnvInfo;
	/**
	 * vk.h5.getRootPath 获取当前项目根目录访问地址
	 * https://www.aaa.com/pages/index/index?a=1&b=1
	 * http://192.168.66.66:8080/pages/index/index?a=1&b=1
	 * 获取当前H5的url地址的https://www.aaa.com 部分
	 * let getRootPath = vk.h5.getRootPath();
	 * let getRootPath = vk.h5.getRootPath({ projectName:true });
	 */
	getRootPath(): string;

	/**
	 * vk.h5.init
	 * 微信公众号 - 初始化，只有初始化成功后，才能执行 let wx = vk.h5.getWeiXinJsApi();
	 * 需要在 App.vue 的 onLaunch 里执行此 init 函数
	 * @example
	自动模式
	vk.h5.init();
	手动模式
	vk.h5.init({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
		appId: "", // 必填，公众号的唯一标识
		timestamp: "", // 必填，生成签名的时间戳
		nonceStr: "", // 必填，生成签名的随机串
		signature: "", // 必填，签名
	})
	 */
	init(options: { debug?: boolean; appId: string; timestamp: string; nonceStr: string; signature: string }): void;

	/**
	 * 微信公众号同时设置分享好友和朋友圈（仅设置分享信息，最终分享依然要点右上角三个点）
	let wx = vk.h5.getWeiXinJsApi();
	 */
	getWeiXinJsApi(): any;
	/**
	 * vk.h5.updateShareData
	 * 语法糖，微信公众号同时设置分享好友和朋友圈（仅设置分享信息，最终分享依然要点右上角三个点）
	 * @example
	vk.h5.updateShareData({
		title: "标题",
		desc: "描述", // 仅分享好友有效
		link:  window.location.href,
		imgUrl: "图片链接地址"
	});
	 */
	updateShareData(options: VkNamespace.UpdateShareDataOptions): void;
}

declare interface Vk {
	/**
	 * vk.alert 全局弹窗
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-alert](https://vkdoc.fsq.pub/client/jsapi.html#vk-alert)
	 * @param {string} content 内容
	 * @param {string} title 标题
	 * @param {string} confirmText 确认按钮文本
	 * @param {Function} success 点击确认按钮回调
	 * @return void
	 *
	 * @example
	 * vk.alert("内容", "提示");
	 */
	alert(content: string, title?: string, confirmText?: string, success?: Function): void;
	/**
	 * vk.confirm 全局确认弹窗
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-confirm](https://vkdoc.fsq.pub/client/jsapi.html#vk-confirm)
	 * @param {string} content 内容
	 * @param {string} title 标题
	 * @param {string} confirmText 确认按钮文本
	 * @param {string} cancelText 取消按钮文本
	 * @param {Function} success 点击确认按钮回调
	 * @return void
	 *
	 * @example
	 * vk.confirm("内容", "提示", "确定", "取消", (res) => {
	 *   if (res.confirm) {
	 *     // 点击确定按钮后的回调
	 *
	 *   }
	 * });
	 */
	confirm(content: string, title?: string, confirmText?: string, cancelText?: string, success?: Function): void;
	/**
	 * vk.prompt 全局输入弹窗
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-prompt](https://vkdoc.fsq.pub/client/jsapi.html#vk-prompt)
	 * @param {string} content 内容
	 * @param {string} title 标题
	 * @param {string} confirmText 确认按钮文本
	 * @param {string} cancelText 取消按钮文本
	 * @param {Function} success 点击确认按钮回调
	 * @param {string} text 输入框初始内容
	 * @return void
	 *
	 * @example
	 * vk.prompt("内容", "提示", "确定", "取消", (res) => {
	 *   if (res.confirm) {
	 *     console.log(res.content);
	 *
	 *   }
	 * }, "输入框内初始内容");
	 */
	prompt(content: string, title?: string, confirmText?: string, cancelText?: string, success?: Function, text?: string): void;
	/**
	 * vk.toast 全局toast弹窗
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk.toast](https://vkdoc.fsq.pub/client/jsapi.html#vk.toast)
	 * @param {string} content 内容
	 * @param {string} icon 图标
	 * @param {number} duration 延迟
	 * @param {boolean} mask 是否需要遮罩
	 * @param {Function} success 点击确认按钮回调
	 * @return void
	 *
	 * @example
	 * vk.toast("提示内容");
	 */
	toast(content: string, icon?: string, duration?: number, mask?: boolean, success?: Function): void;
	/**
	 * vk.showActionSheet 全局选择面板
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk.showActionSheet](https://vkdoc.fsq.pub/client/jsapi.html#vk.showActionSheet)
	 * @param {string} options 参数
	 * @param {string} options.title 表头
	 * @param {string} options.list 选项数组
	 * @param {number} options.color 字体颜色
	 * @param {Function} options.success 选择后的回调
	 * @return void
	 * 
	 * @example
		vk.showActionSheet({
			title: "",
			list: ["位置", "@好友"],
			color: "#000000",
			success: res => {
				if (res.index == 0) {
		  
				} else if (res.index == 1) {
		  
				}
			}
		 });
	 */
	showActionSheet(options: UniNamespace.ShowActionSheetOptions): void;
	/**
	 * vk.showLoading 显示全局加载提示
	 */
	showLoading(options: UniNamespace.ShowLoadingOptions): void;
	/**
	 * vk.hideLoading 关闭全局加载提示
	 */
	hideLoading(): void;

	/**
	 * vk.notifyEventReady 通知特定事件已准备就绪，并将数据传递给 vk.awaitEventReady 注册的回调函数。一定会在 vk.awaitEventReady 函数被调用之前触发。
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-notifyeventready](https://vkdoc.fsq.pub/client/jsapi.html#vk-notifyeventready)
	 * @param {string} eventName - 事件名称
	 * @param {any} data - 传递给回调函数的数据
	 */
	notifyEventReady(eventName: string, data: any): void;
	/**
	 * vk.awaitEventReady 等待特定事件执行后再执行相应的回调函数，如果事件已准备就绪，它会立即执行回调函数；否则，它将等待事件执行 vk.notifyEventReady 后再执行。
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-notifyeventready](https://vkdoc.fsq.pub/client/jsapi.html#vk-notifyeventready)
	 * @param {string} eventName - 事件名称
	 * @param {Function} callback - 回调函数，接收传递的数据参数
	 */
	awaitEventReady(eventName: string, callback: (data: any) => void): Promise<any>;
	/**
	 * vk.checkEventReady 检查事件是否已准备就绪，如果事件已准备就绪，它会返回true；否则，它将返回false
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-checkeventready](https://vkdoc.fsq.pub/client/jsapi.html#vk-checkeventready)
	 * @param {string} eventName - 事件名称
	 * @return {boolean} isReady - 是否准备就绪
	 */
	checkEventReady(eventName: string): boolean;
	/**
	 * vk.getEventReadyData 获取事件准备就绪时的参数，如果事件未准备就绪，则返回null
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-geteventreadydata](https://vkdoc.fsq.pub/client/jsapi.html#vk-geteventreadydata)
	 * @param {string} eventName - 事件名称
	 * @return {any|null} data - 事件准备就绪时的参数
	 */
	getEventReadyData(eventName: string): any | null;
	/**
	 * vk.importObject 导入云对象
	 * @文档 [https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/cloudObject.html#方式二-使用-uni-vk-importobject](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/cloudObject.html#方式二-使用-uni-vk-importobject)
	 * @param {string} name 云对象路径，如：client/pub
	 * @param {Object} importObjectOptions - 导入云对象的选项
	 * @param {boolean} [importObjectOptions.easy=false] - 是否采用简单模式
	 * @param {Object|Function} [importObjectOptions.data] - 默认请求参数，可以是对象或函数
	 * @return {Proxy} - 云对象实例的代理对象
	 */
	importObject(name: string, options: VkNamespace.ImportObjectOptions): any;
	/**
	 * vk.setStorageSync 本地持久化缓存 - 设置缓存
	 * @文档 [https://vkdoc.fsq.pub/client/pages/localStorage.html](https://vkdoc.fsq.pub/client/pages/localStorage.html)
	 * @param {string} key 键名
	 * @param {any} data - 内容
	 * @return void
	 */
	setStorageSync(key: string, data: any): void;
	/**
	 * vk.getStorageSync 本地持久化缓存 - 获取缓存
	 * @文档 [https://vkdoc.fsq.pub/client/pages/localStorage.html](https://vkdoc.fsq.pub/client/pages/localStorage.html)
	 * @param {string} key 键名
	 * @return {any} data - 内容
	 */
	getStorageSync(key: string): any;
	/**
	 * vk.removeStorageSync 本地持久化缓存 - 删除缓存
	 * @文档 [https://vkdoc.fsq.pub/client/pages/localStorage.html](https://vkdoc.fsq.pub/client/pages/localStorage.html)
	 * @param {string} key 键名
	 * @return void
	 */
	removeStorageSync(key: string): void;
	/**
	 * vk.clearStorageSync 本地持久化缓存 - 清除键值为指定字符串开头的缓存
	 * @文档 [https://vkdoc.fsq.pub/client/pages/localStorage.html](https://vkdoc.fsq.pub/client/pages/localStorage.html)
	 * @param {string} key 键名
	 * @return void
	 */
	clearStorageSync(key?: string): void;
	/**
	 * vk.getStorageInfoSync 本地持久化缓存 - 获取缓存信息
	 * @文档 [https://vkdoc.fsq.pub/client/pages/localStorage.html](https://vkdoc.fsq.pub/client/pages/localStorage.html)
	 * @return {any} data - 内容
	 */
	getStorageInfoSync(): any;

	/**
	 * vk.setSessionStorageSync 本地临时会话缓存 - 设置缓存
	 * @文档 [https://vkdoc.fsq.pub/client/pages/sessionStorage.html](https://vkdoc.fsq.pub/client/pages/sessionStorage.html)
	 * @param {string} key 键名
	 * @param {any} data - 内容
	 * @return void
	 */
	setSessionStorageSync(key: string, data: any): void;
	/**
	 * vk.getSessionStorageSync 本地临时会话缓存 - 获取缓存
	 * @文档 [https://vkdoc.fsq.pub/client/pages/sessionStorage.html](https://vkdoc.fsq.pub/client/pages/sessionStorage.html)
	 * @param {string} key 键名
	 * @return {any} data - 内容
	 */
	getSessionStorageSync(key: string): any;
	/**
	 * vk.removeSessionStorageSync 本地临时会话缓存 - 删除缓存
	 * @文档 [https://vkdoc.fsq.pub/client/pages/sessionStorage.html](https://vkdoc.fsq.pub/client/pages/sessionStorage.html)
	 * @param {string} key 键名
	 * @return void
	 */
	removeSessionStorageSync(key: string): void;
	/**
	 * vk.clearSessionStorageSync 本地临时会话缓存 - 清除键值为指定字符串开头的缓存
	 * @文档 [https://vkdoc.fsq.pub/client/pages/sessionStorage.html](https://vkdoc.fsq.pub/client/pages/sessionStorage.html)
	 * @param {string} key 键名
	 * @return void
	 */
	clearSessionStorageSync(key?: string): void;

	/**
	 * vk.navigateTo 保留当前页面，跳转到应用内的某个页面
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-navigateto](https://vkdoc.fsq.pub/client/jsapi.html#vk-navigateto)
	 */
	navigateTo(options: UniNamespace.NavigateToOptions): void;
	/**
	 * vk.redirectTo 关闭当前页面，跳转到应用内的某个页面
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-redirectto](https://vkdoc.fsq.pub/client/jsapi.html#vk-redirectto)
	 */
	redirectTo(options: UniNamespace.RedirectToOptions): void;
	/**
	 * vk.reLaunch 关闭所有页面，打开到应用内的某个页面
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-relaunch](https://vkdoc.fsq.pub/client/jsapi.html#vk-relaunch)
	 */
	reLaunch(options: UniNamespace.ReLaunchOptions): void;
	/**
	 * vk.switchTab 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-switchtab](https://vkdoc.fsq.pub/client/jsapi.html#vk-switchtab)
	 */
	switchTab(options: UniNamespace.SwitchTabOptions): void;
	/**
	 * vk.navigateBack 关闭当前页面，返回上一页面或多级页面
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-navigateback](https://vkdoc.fsq.pub/client/jsapi.html#vk-navigateback)
	 */
	navigateBack(options?: UniNamespace.NavigateBackOptions): void;
	/**
	 * vk.navigateToHome 跳转到首页 （app.config.js 的 index.url）
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-navigatetohome](https://vkdoc.fsq.pub/client/jsapi.html#vk-navigatetohome)
	 */
	navigateToHome(options?: { mode?: "reLaunch" | "navigateTo" | "redirectTo" | "switchTab" }): void;
	/**
	 * vk.navigateToHome 跳转到登录页 （app.config.js 的 login.url）
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-navigatetologin](https://vkdoc.fsq.pub/client/jsapi.html#vk-navigatetologin)
	 */
	navigateToLogin(options?: { mode?: "reLaunch" | "navigateTo" | "redirectTo"; redirectUrl?: any }): void;
	/**
	 * vk.request 请求http接口
	 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-request-请求http接口](https://vkdoc.fsq.pub/client/jsapi.html#vk-request-请求http接口)
	 */
	request(options: VkNamespace.RequestOptions): Promise<VkNamespace.RequestResult>;
	/**
	 * vk.uploadFile 文件上传
	 * @文档 [https://vkdoc.fsq.pub/client/pages/uploadFile.html](https://vkdoc.fsq.pub/client/pages/uploadFile.html)
	 */
	uploadFile(options: VkNamespace.UploadFileOptions): Promise<VkNamespace.UploadFileResult>;
	/**
	 * vk.callFunction 调用云函数或云对象
	 * @文档 [https://vkdoc.fsq.pub/client/pages/callFunction.html](https://vkdoc.fsq.pub/client/pages/callFunction.html)
	 * @param {String} options.name 符合VK框架路由规则的router大函数名，默认为app.config.js内的functionName属性的值
	 * @param {String} options.url 请求路径，该路径实为router大云函数的service目录下的路径（此时的router大函数=name参数的值）
	 * @param {Object} options.data 请求参数
	 * @param {String} options.title 遮罩层提示语，为空或不传则代表不显示遮罩层。
	 * @param {Boolean|Object} options.loading 自定义loading
	 * @param {Boolean} options.isRequest 是否使用云函数url化地址访问云函数
	 * @param {Boolean} options.needAlert 为true代表请求错误时，会有alert弹窗提示
	 * @param {String} options.globalParamName 全局请求参数的名称， 如果设置了正则规则，则不需要此参数
	 * @param {String} options.env 请求多服务空间的环境
	 * @param {Number} options.retryCount 系统异常重试机制（表单提交时慎用，建议只用在查询请求中，即无任何数据库修改的请求中）
	 * @param {Function} options.success 请求成功时，执行的回调函数
	 * @param {Function} options.fail 请求失败时，执行的回调函数
	 * @param {Function} options.complete 无论请求成功与否，都会执行的回调函数
	 * @returns {Promise<any>}
	 */
	callFunction(options: VkNamespace.CallFunctionOptions): Promise<VkNamespace.CallFunctionResult>;
	/**
	 * vk.getConfig 获取app.config.js配置
	 */
	getConfig(key?: string): any;
	/**
	 * vk.pubfn 公共函数库
	 */
	pubfn: Pubfn;
	/**
	 * vk.h5 H5专用函数库
	 */
	h5: H5;
}
type VkInterface = Vk;

declare const vk: VkNamespace.Vk;

//export default vk;

declare module "vk" {
	export const VkInterface: VkNamespace.Vk;
}
