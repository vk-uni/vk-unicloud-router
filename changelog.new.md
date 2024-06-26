* 【调整】参数 `need_user_info` 调整为 `needUserInfo`（同时兼容这2个参数）
* 【优化】当 tokenMaxLimit 设置为1时，强制 needUserInfo 为 true（此时访问非pub函数就会达到同一个账号只能一台设备登录的效果）
* 【修复】请求多服务空间使用方式二的情况下支付宝云会报错的问题 [传送门](https://vkdoc.fsq.pub/client/question/q9.html#%E6%96%B9%E5%BC%8F%E4%BA%8C)
