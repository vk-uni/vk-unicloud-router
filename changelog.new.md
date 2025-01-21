* 【新增】微信小程序平台发货管理和物流助手API [传送门](https://vkdoc.fsq.pub/client/uniCloud/plus/weixin.html#order)
* 【新增】苹果账号登录 [传送门](https://vkdoc.fsq.pub/client/vk.userCenter.html#loginbyapple)
* 【调整】登录注册返回值因已存在 `vk_uni_token` 字段，故去除 `token` 和 `tokenExpired` 字段（这两个字段已在 `vk_uni_token` 中）
* 【调整】邀请码位数从6位调整为8位
* 【优化】中间件 `onActionExecuted` 新增 `returnMode` 可设置返回值模式 0：使用Object.assign合并 1：完全替换，默认为0 [传送门](https://vkdoc.fsq.pub/client/uniCloud/middleware/filter.html#return-mode)