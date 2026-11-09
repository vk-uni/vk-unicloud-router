- 【重要】支持 uni-app x 蒸汽模式
- 【修复】云端 `vk.request` 的 `retryCount` 表示额外重试次数：默认 `0` 不重试，`1` 最多请求 `2` 次，`2` 最多请求 `3` 次 [传送门](https://vkdoc.fsq.pub/client/jsapi.html#requestcloud)
- 【修复】App 端 Base64 文件转换及上传的兼容性问题
- 【修复】`vk.callFunction`、`vk.request` 在 loading 绑定失败时，状态清理异常的问题
- 【新增】uni-app x 使用 Pinia 进行状态管理，并继续保留 `vk.getVuex`、`vk.setVuex` 等调用方式
- 【新增】验证码组件 `vk-data-verification-code` 支持 uni-app x 蒸汽模式
- 【调整】uni-app x 的自定义 loading 需使用对象模式，需显式传入响应式状态对象

**注意：**

uni-app 和 uni-app x 完整示例项目是2个独立的插件

- [uni-app 版本](https://ext.dcloud.net.cn/plugin?name=vk-cloud-router)
- [uni-app x 版本](https://ext.dcloud.net.cn/plugin?name=vk-cloud-router-x)
