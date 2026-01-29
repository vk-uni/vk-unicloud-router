* 【重要】`router` 函数支持以定时任务方式运行 [传送门](https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/timer.html)
* 【修复】websocket 连接管理，部分情况下连接无法删除的问题
* 【修复】函数根目录是 pub kh sys 时，无法调用的问题
* 【修复】`vk.pubfn.formValidate` 在检测 `min:0` 时不生效的问题
* 【新增】`vk-ws-connection` 表新增 `space_id`、`provider`、`ip` 字段
* 【新增】`vk.sendSms` 等价于 `vk.system.smsUtil.sendSms` [传送门](https://vkdoc.fsq.pub/client/uniCloud/plus/sms.html)
* 【优化】`vk.sendSms` 新增参数 `phoneList` 支持批量发送短信（一次最多50个手机号码）[传送门](https://vkdoc.fsq.pub/client/uniCloud/plus/sms.html)
