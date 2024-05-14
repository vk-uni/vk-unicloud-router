/**
 * VK云端d.ts语法提示
 * 启动云端d.ts语法提示的步骤
 * 1. 将本文件复制到 `你的HBX安装目录\plugins\hbuilderx-language-services\builtin-dts\uniapp@vue2\node_modules\@dcloudio\types\uni-cloud-server`
 * 2. 修改上面目录下的 `index.d.ts` 新增  /// <reference path="./vk.d.ts" />
 * 
 * 特别注意
 * baseDao等部分API有更好的代码块提示，详见[文档 - 代码块快捷提示](https://vkdoc.fsq.pub/client/codeTips.html)
 * 安装完后，输入 dao. 即可享受高效的代码块提示
 */

declare namespace UniCloudNamespace {
	interface UniCloud {
		vk: VkCloudInterface;
	}
}

declare namespace VkCloudNamespace {
	interface AnyInterface {
		[key: string]: any;
	}
	
	type AnyKey = {
		[key: string]: any;
	};
	
	type baseResult = AnyKey & {
		msg?: string;
		code: string | number;
	};

	type UniBaseResult = AnyKey & {
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

	type RequestResult = baseResult;

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
		/**
		 * 是否强制转换data为queryString
		 */
		dataAsQueryString?: boolean;
		dataType?: "json" | "text" | "default" | "buffer" | "";
		/**
		 * 上传数据的格式，设为json会自动在header内设置Content-Type: application/json
		 */
		contentType?: "text" | "json";
		/**
		 * 是否将data的值转content，效果：content = JSON.stringify(data);
		 */
		useContent?: boolean;
		/**
		 * 手动设置请求的payload，设置后会忽略data
		 */
		content?: string | Buffer;
		/**
		 * 超时时间，单位 ms 默认 60000
		 */
		timeout?: number | Array<number>;
		/**
		 * 上传的文件，设置后将会使用 multipart/form-data 格式。如果未设置method，将会自动将method设置为POST
		 */
		files?: any;
		/**
		 * 转换data为queryString时默认不支持嵌套Object，此选项设置为true则支持转换嵌套Object
		 */
		nestedQuerystring?: boolean;
		/**
		 * 是否需要返回原始返回数据
		 */
		needOriginalRes?: boolean;
		/**
		 * 是否等待 writeStream 完全写完才算响应全部接收完毕
		 */
		consumeWriteStream?: boolean;
		/**
		 * 失败时是否需要自动弹窗提示
		 */
		needAlert?: boolean;
		/**
		 * 	简单登录授权（Basic Authentication）参数，必须按照 user:password 格式设置
		 */
		auth?: string;
		/**
		 * 	证书内容
		 */
		ca?: any;
		/**
		 * 	包含了私钥, 证书和CA certs, 一般是 PFX 或者 PKCS12 格式
		 */
		pfx?: string | Buffer;
		/**
		 * 	PEF格式的服务器的私钥
		 */
		key?: string | Buffer;
		/**
		 * 	PEM格式的服务器证书密钥
		 */
		cert?: string | Buffer;
		/**
		 * 发送请求正文的可读数据流
		 */
		stream?: any;
		/**
		 * 接受响应数据的可写数据流
		 */
		writeStream?: any;
		/**
		 * 是否直接返回响应流，开启 streaming 之后，HttpClient 会在拿到响应对象 res 之后马上返回， 此时 result.headers 和 result.status 已经可以读取到，只是没有读取 data 数据而已。
		 */
		streaming?: any;
	};

	type CallFunctionResult = baseResult;

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
		 * 请求多服务空间的环境 [查看文档](https://vkdoc.fsq.pub/client/question/q9.html)
		 */
		uniCloud?: any;
	};

	type TreeProps = {
		id?: string;
		parent_id?: string;
		children?: string;
		deleteParentId?: boolean;
		need_field?: string[];
	};

	type DateInfo = {
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

	type baseDate = Date | number | string;

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

	type CurrentPage = {
		fullPath: string;
		options: object;
		route: string;
		$vm: any;
	};

	type BatchRunMainFunction = (data: { item: any; index: number }) => Promise<any>;

	type BatchRunMainArrayFunction = Array<BatchRunMainFunction>;

	type BatchRunOptions = {
		/**
		 * 主函数
		 */
		main: BatchRunMainFunction | BatchRunMainArrayFunction;
		/**
		 * 数据源
		 */
		data: Array<any>;
		/**
		 * 最大并发量，如果设置为1，则会按顺序执行
		 */
		concurrency?: number;
	};

	type BatchRunResult = {
		stack: Array<any>;
		total: number;
	};

	type GetVkUniCloudResult = {
		db: UniCloudNamespace.Database;
		_: UniCloudNamespace.QueryCommand;
		pubfn: Pubfn;
		config: any;
		uniID: any;
		pubFun: any;
		customUtil: any;
		crypto: any;
	};

	type Lock = {
		/**
		 * 归还锁
		 * @example
		 * await lock.unlock();
		 */
		unlock: () => Promise<any>;
	};

	type LockManage = {
		/**
		 * 尝试获取锁
		 * @example
		 * let lock = await lockManage.lock();
		 */
		lock: () => Promise<Lock>;
		/**
		 * 归还锁
		 * @example
		 * await lockManage.unlock();
		 */
		unlock: () => Promise<any>;
	};

	type GetReentrantLockManageOptions = {
		id: string;
		timeout: number;
		debug: boolean;
	};

	type GetCacheManageOptions = {
		mode: "db" | "redis";
	};

	type CacheManage = {
		/**
		 * get（获取缓存）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#get-获取缓存](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#get-获取缓存)
		 * @example
		 let value = await cacheManage.get(key);
		 */
		get: (key: string) => Promise<any>;
		/**
		 * set（设置缓存）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#set-设置缓存](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#set-设置缓存)
		 * @example
		 await cacheManage.set(key, value, second);
		 */
		set: (
			key: string,
			value: any,
			second: number
		) => Promise<
			baseResult & {
				mode: "add" | "update";
				key: string;
			}
		>;
		/**
		 * setnx（不存在才设置）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#setnx-不存在才设置](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#setnx-不存在才设置)
		 * @example
		 let setnxRes = await cacheManage.setnx(key, value, second);
		 */
		setnx: (
			key: string,
			value: any,
			second: number
		) => Promise<
			baseResult & {
				key: string;
			}
		>;
		/**
		 * del（删除缓存）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#del-删除缓存](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#del-删除缓存)
		 * @example
		 await cacheManage.del(key);
		 */
		del: (key: string) => Promise<number>;
		/**
		 * clear（清空缓存）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#clear-清空缓存](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#clear-清空缓存)
		 * @example
		 await cacheManage.clear(prefix);
		 */
		clear: (prefix: string) => Promise<number>;
		/**
		 * count（获取缓存数量）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#count-获取缓存数量](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#count-获取缓存数量)
		 * @example
		 await cacheManage.count(prefix);
		 */
		count: (prefix: string) => Promise<number>;
		/**
		 * exists（判断缓存是否存在）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#exists-判断缓存是否存在](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#exists-判断缓存是否存在)
		 * @example
		 await cacheManage.exists(key);
		 */
		exists: (key: string) => Promise<number>;
		/**
		 * expire（修改缓存过期时间）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#expire-修改缓存过期时间](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#expire-修改缓存过期时间)
		 * @example
		 await cacheManage.expire(key, seconds);
		 */
		expire: (key: string, second: number) => Promise<number>;
		/**
		 * ttl（获取过期时间剩余多少秒）
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#ttl-获取过期时间剩余多少秒](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#ttl-获取过期时间剩余多少秒)
		 * @example
		 await cacheManage.ttl(key);
		 */
		ttl: (key: string) => Promise<number>;
		/**
		 * pttl（获取过期时间剩余多少毫秒）	
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#pttl-获取过期时间剩余多少毫秒](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html#pttl-获取过期时间剩余多少毫秒)
		 * @example
		 await cacheManage.pttl(key);
		 */
		pttl: (key: string) => Promise<number>;
	};

	type FormValidateResult = {
		type: string;
		code: string | number;
		msg: string;
		key: string;
		value: any;
	};

	type EncryptOptions = {
		mode: "aes-256-ecb";
		data: any;
	};
	type DecryptOptions = EncryptOptions;

	type RouterOptions = {
		event: any;
		context: any;
		vk: Vk;
	};

	interface Pubfn extends AnyInterface {
		/**
		 * vk.pubfn.arrayToTree（数组转树）
		 */
		arrayToTree(originalArrayData: Array<any>, treeProps: TreeProps): Array<any>;
		/**
		 * vk.pubfn.treeToArray（树转数组）
		 */
		treeToArray(treeData: Array<any>, treeProps: TreeProps): Array<any>;
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
		timeFormat(date: baseDate, format: string, targetTimezone: number): string;
		/**
		 * vk.pubfn.getDateInfo（解析日期对象属性）
		 * @param {Date | Number | String} date 需要转换的时间
		 * @return {Object} dateObj 转换后的时间对象
		 */
		getDateInfo(date: baseDate, targetTimezone: number): DateInfo;

		/**
		 * vk.pubfn.getCommonTime（获取时间范围）
		 * @param {Date | Number | String} date 日期对象 可以指定时间计算节点，默认使用当前时间进行计算
		 * @param {Number} targetTimezone 时区 默认东8区 正数代表东 负数代表西
		 * @return {Object} timeObj
		 */
		getCommonTime(date: baseDate, targetTimezone: number): GetCommonTimeResult;

		/**
		 * vk.pubfn.getOffsetTime（获得指定时间偏移 year年 month月 day天 hours时 minutes分 seconds秒前或后的时间戳）
		 */
		getOffsetTime(date: baseDate, offsetOptions: OffsetOptions): number;
		/**
		 * vk.pubfn.getHourOffsetStartAndEnd（获得相对当前时间的偏移 count 小时的起止日期）
		 */
		getHourOffsetStartAndEnd(count: number, date: baseDate): DateRange;
		/**
		 * vk.pubfn.getDayOffsetStartAndEnd（获得相对当前时间的偏移 count 天的起止日期）
		 */
		getDayOffsetStartAndEnd(count: number, date: baseDate): DateRange;
		/**
		 * vk.pubfn.getWeekOffsetStartAndEnd（获得相对当前时间的偏移 count 周的起止日期）
		 */
		getWeekOffsetStartAndEnd(count: number, date: baseDate): DateRange;
		/**
		 * vk.pubfn.getMonthOffsetStartAndEnd（获得相对当前时间的偏移 count 月的起止日期）
		 */
		getMonthOffsetStartAndEnd(count: number, date: baseDate): DateRange;
		/**
		 * vk.pubfn.getQuarterOffsetStartAndEnd（获得相对当前时间的偏移 count 季度的起止日期）
		 */
		getQuarterOffsetStartAndEnd(count: number, date: baseDate): DateRange;
		/**
		 * vk.pubfn.getYearOffsetStartAndEnd（获得相对当前时间的偏移 count 年的起止日期）
		 */
		getYearOffsetStartAndEnd(count: number, date: baseDate): DateRange;
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
		calcFreights(freightsItem: FreightsItem, weight: number): number;
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
		dateDiff(startTime: baseDate, suffix: string): string;

		/**
		 * vk.pubfn.dateDiff2（将时间显示成1秒、1天）
		 * @description 主要用于 到期时间剩余 : 3天 这样的场景
		 * @param {String | Number} endTime	需要计算的时间 如到期时间
		 * @param {String} endText	到期时显示的文字
		 * @return {String} newStr 转换后的值
		 */
		dateDiff2(endTime: baseDate, endText: string): string;

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
		 * vk.pubfn.batchRun
		 * 批量循环并发执行异步函数（使用场景: 批量发送短信、邮件、消息通知等。）
		 * 注意：concurrency 并不是越大越好，太大可能会卡死（一次性并发太多请求可能反而会卡死，且大部分三方api其实是有并发限制的）。
		 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-batchrun](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-batchrun)
		 */
		batchRun(options: BatchRunOptions): Promise<BatchRunResult>;
		/**
		 * vk.pubfn.getUniCloudRequestId
		 * 获取本次云函数请求id（只有云端云函数才有，本地云函数无法获取请求id）
		 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-getunicloudrequestid](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-getunicloudrequestid)
		 */
		getUniCloudRequestId(): string;
		/**
		 * vk.pubfn.randomAsync
		 * （异步）产生指定位数的不重复随机数（支持任意字符，s默认纯数字）
		 * @文档 [https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-randomasync](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-randomasync)
		 */
		randomAsync(length: number, range: Array<string>, fn: (val: string) => Promise<any>, maxRetryCount: number): string;

		validator(type: string): Function;
		/**
		 * vk.pubfn.formValidate
		 * 云端表单验证
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/formRules.html](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/formRules.html)
		 */
		formValidate(options: { data: object; rules: Array<object> }): FormValidateResult;
	}

	interface CryptoAes {
		/**
		 * vk.crypto.aes.encrypt
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/crypto.html#在云函数内加解密](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/crypto.html#在云函数内加解密)
		 * @example
		 // 加密数据
		 let encryptedKey = vk.crypto.aes.encrypt({
		   mode: "aes-256-ecb",
		   data: {
		     sessionKey: "XXXXX"
		   }
		 });
		 */
		encrypt(options: EncryptOptions): string;
		/**
		 * vk.crypto.aes.decrypt
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/crypto.html#在云函数内加解密](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/crypto.html#在云函数内加解密)
		 * @example
		 // 解密 sessionKey 示例
		 let decryptedRes = vk.crypto.aes.decrypt({
		   mode: "aes-256-ecb",
		   data: encryptedKey, // 待解密的原文
		 });
		 */
		decrypt(options: DecryptOptions): string;
	}

	interface Crypto {
		aes: CryptoAes;
	}

	interface Vk extends AnyInterface {
		/**
		 * vk.importObject 导入云对象
		 * @文档 [https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/cloudObject.html#方式二-使用-uni-vk-importobject](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/cloudObject.html#方式二-使用-uni-vk-importobject)
		 * @param {string} name 云对象路径，如：client/pub
		 * @param {Object} importObjectOptions - 导入云对象的选项
		 * @param {boolean} [importObjectOptions.easy=false] - 是否采用简单模式
		 * @param {Object|Function} [importObjectOptions.data] - 默认请求参数，可以是对象或函数
		 * @return {Proxy} - 云对象实例的代理对象
		 */
		importObject(name: string, options: ImportObjectOptions): any;
		/**
		 * vk.callFunction 调用云函数或云对象
		 * @文档 [https://vkdoc.fsq.pub/client/pages/callFunction.html](https://vkdoc.fsq.pub/client/pages/callFunction.html)
		 * @param {String} options.name 符合VK框架路由规则的router大函数名，默认为app.config.js内的functionName属性的值
		 * @param {String} options.url 请求路径，该路径实为router大云函数的service目录下的路径（此时的router大函数=name参数的值）
		 * @param {Object} options.data 请求参数
		 * @returns {Promise<any>}
		 */
		callFunction(options: CallFunctionOptions): Promise<CallFunctionResult>;
		/**
		 * vk.getConfig 获取app.config.js配置
		 */
		getConfig(key?: string, defaultValue?: string): any;
		/**
		 * vk.getUnicloud
		 */
		getUnicloud(): GetVkUniCloudResult;
		/**
		 * vk.createInstance 创建一个新的vk实例
		 */
		createInstance(config: any): Vk;
		/**
		 * vk.redis
		 * 文档 [https://vkdoc.fsq.pub/vk-redis/api.html](https://vkdoc.fsq.pub/vk-redis/api.html)
		 */
		redis(): UniCloudNamespace.RedisCommands;
		/**
		 * vk.getReentrantLockManage 高并发分布式重入锁
		 * 文档 [https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/reentrantLock.html](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/reentrantLock.html)
		 * @example
		  const lockManage = vk.getReentrantLockManage({
		 	  id: lockId, // 锁的id
		 	  timeout: 5, // 锁的超时时间，超时后强制归还锁，单位秒，0代表永不超时，默认5秒
		  });
		 */
		getReentrantLockManage(options: GetReentrantLockManageOptions): LockManage;

		getCacheManage(options: GetCacheManageOptions): CacheManage;

		router(options: RouterOptions): any;
		/**
		 * vk.pubfn 公共函数库
		 */
		pubfn: Pubfn;
		crypto: Crypto;
	}
}

type VkCloudInterface = VkCloudNamespace.Vk;

//declare const vkCloud: VkCloudInterface;

declare const vk: VkCloudInterface;

declare module "vk-cloud" {
	export const VkCloudInterface: VkCloudInterface;
}
