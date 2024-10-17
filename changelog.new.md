* 【调整】注册接口统一去除 `myInviteCode` 参数，使用自动生成，防止出现重复的 `myInviteCode`
* 【修复】`vk.pubfn.test` 在检测图片和视频时未忽略大小写的问题
* 【新增】内置全局异常过滤器 `errorFilter`，支持将错误信息写入数据库方便搜索排错等等