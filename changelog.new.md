* 【重要】`vk.uploadFile` 支持在云端调用，同时支持 `内置存储` 和 `扩展存储` 
* 【重要】`vk.request` 请求 router 的url化地址时，新增参数 clientInfo 若设置为 true，会自动提交 clientInfo 信息到请求头
* 【修复】中间件 `addAdminLog` 在云对象请求结束后可能获取不到 `userInfo` 的问题