* 【重要】新增中间件 loginFilter，可控制开启或关闭登录注册相关接口
* 【新增】vk.daoCenter.userDao.closeAccount 注销账号
* 【新增】vk.daoCenter.userDao.openAccount 恢复账号（仅限注销冷静期内）
* 【修复】vk.updateManager.updateReady 在不支持的小程序平台运行时会报错的问题
* 【修复】发送短信时可能会报签名错误的问题
* 【优化】vk.pubfn.formValidate 支持属性 pattern
* 【优化】通过邮箱、手机号重置密码时，保留当前操作用户的token
* 【优化】素材库获取文件列表支持获取临时访问地址

**特别注意：本次更新需要替换框架内置文件**

- `/router/service/admin/system_uni/uni-id-files/` 整个目录