* 【重要】云函数的 node.js 版本统一调整为 node16（阿里云已宣布node8不再维护）
* 【重要】新增 vk.getReentrantLockManage 高并发分布式重入锁，主要用于控制云函数或云对象并发访问时的同步，确保同一时间只有一个线程或进程能够拿到锁。 [传送门](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/reentrantLock.html)
* 【重要】新增 vk.getCacheManage 缓存管理2.0版本，新版云端数据缓存同时支持空间内置数据库和Redis数据库，用户可以根据需求选择合适的存储方式。 [传送门](https://vkdoc.fsq.pub/client/uniCloud/cache/cache.html)
* 【修复】vk.baseDao.selects 的 treeProps 内的 addFields 不生效的问题
* 【调整】vk.request 的默认时间调整为60秒
* 【优化】vk.navigateToLogin 新增 redirectUrl 参数，用于登录成功后是否返回当前页面或指定页面
* 【优化】vk.pubfn.getFileSuffix 返回值统一转小写

#####  框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架