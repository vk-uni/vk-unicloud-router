* 【修复】`vk.callFunction` 若设置了 `retryCount` 属性后，`let res = await vk.callFunction` 无法取到值的问题
* 【优化】`vk.callFunction` 新增 `timeout` 属性，可以单独控制某个请求的超时时间了（不能大于云函数最大超时时间，实际生效需等HBX发新版支持）
* 【优化】微信登录数据库可能会报慢查询的问题
* 【优化】使用微信PC网站登录、微信公众号登录、微信APP首次登录（即注册）成功后将自动获取昵称和头像（微信小程序由于微信限制，无法直接获取）

**特别注意**

* 本次更新需要替换项目的 `/router/service/user/` 目录


