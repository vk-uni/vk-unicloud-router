* 【重要】新增中间件 loginFilter，可控制开启或关闭登录注册相关接口
* 【新增】vk.userCenter.closeAccount 注销账号 [传送门](https://vkdoc.fsq.pub/client/vk.userCenter.html#closeaccount)
* 【新增】vk.userCenter.openAccount 恢复账号（仅限未二次确认注销时）[传送门](https://vkdoc.fsq.pub/client/vk.userCenter.html#openaccount)
* 【新增】vk.userCenter.getCoolingStatus 获取注销冷静期状态 [传送门](https://vkdoc.fsq.pub/client/vk.userCenter.html#getcoolingstatus)
* 【修复】vk.updateManager.updateReady 在不支持的小程序平台运行时会报错的问题
* 【修复】发送短信时可能会报签名错误的问题
* 【优化】vk.pubfn.formValidate 支持属性 pattern
* 【优化】通过邮箱、手机号重置密码时，保留当前操作用户的token

**特别注意：本次更新需要替换框架内置文件**

- 替换整个目录 `/router/service/admin/system_uni/uni-id-files/`
- 替换整个目录 `/router/service/user/`
- 替换文件内部分内容 `/router/dao/modules/userDao.js`