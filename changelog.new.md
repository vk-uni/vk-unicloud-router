* 【修复】云端上传文件会报 `this._publicHandle is undefined` 的问题
* 【优化】当微信或抖音在 `uni-config-center/vk-unicloud/index.js` 内已经设置了多小程序登录时，uni-id的配置即使未配置也能登录了
* 【优化】框架内部使用 `crypto.createCipheriv` 代替 `crypto.createCipher`（crypto.createCipher在高版本node.js环境中会报已废弃的警告）
* 【优化】loginByToken 内部细节

**特别注意**

* 本次更新需要替换项目的 `/router/service/user/` 目录
