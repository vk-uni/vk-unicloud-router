* 【新增】鸿蒙App端新增华为账号一键登录功能 [传送门](https://vkdoc.fsq.pub/client/vk.userCenter.html#loginbyhuaweiphonenumber)
* 【优化】连表查询时，副表新增 localKeyIndex 属性，可实现副表按主表外键的索引顺序排序功能 [传送门](https://vkdoc.fsq.pub/client/uniCloud/db/selects.html#scene5)
* 【修复】`vk.baseDao.getTableData` 模糊查询时，模糊查询无法查询 `* + ?` 等特殊符号的问题
* 【修复】`vk.baseDao.getTableData` 模糊查询时，新增属性 `ignoreCase`，如设置为 true，可忽略大小写，默认为 true
