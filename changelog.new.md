* 【重要】新增支付宝云websocket [传送门](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/websocket.html)
* 【新增】表 vk-ws-connection 用于记录当前正在连接的websocket相关信息 [传送门](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/websocket.html#%E5%85%B3%E8%81%94%E7%9A%84%E6%95%B0%E6%8D%AE%E8%A1%A8)
* 【新增】微信PC网站扫码登录，示例页面 `/pages_template/uni-id/weixin/pc-weixin` [传送门](https://vkdoc.fsq.pub/client/vk.userCenter.html#%E5%BE%AE%E4%BF%A1pc%E7%BD%91%E7%AB%99%E6%89%AB%E7%A0%81%E7%99%BB%E5%BD%95)
* 【修复】前端云对象的权限权重判断与云端判断逻辑不一致的问题 [传送门](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/cloudObject.html#%E5%86%85%E7%BD%AE%E6%9D%83%E9%99%90)
* 【优化】vk.navigateToLogin 支持配置登录成功后返回的页面等功能 [传送门](https://vkdoc.fsq.pub/client/jsapi.html#vk-navigatetologin)
* 【优化】vk.pubfn.batchRun 内部逻辑，提升并发性能 [传送门](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-batchrun)
* 【优化】vk.baseDao.select 不再并发查询数据库，避免数据库连接数飙升 [传送门](https://vkdoc.fsq.pub/client/uniCloud/db/api.html#vk-basedao-select-%E6%9F%A5%E5%A4%9A%E6%9D%A1%E8%AE%B0%E5%BD%95-%E5%85%B7%E6%9C%89%E5%88%86%E9%A1%B5%E5%8A%9F%E8%83%BD)
* 【优化】云端 vk.request 默认打开自动重定向功能 [传送门](https://vkdoc.fsq.pub/client/jsapi.html#vk-request-%E4%BA%91%E7%AB%AF%E8%B0%83%E7%94%A8)

**特别注意**

* 本次更新需要替换项目的 `/router/service/admin/system_uni/ws-connection/` 目录
