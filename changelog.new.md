* 【调整】`vk.baseDao.getTableData` 的参数 `getCount` 的默认值为 `true`，但若含有 `lastWhereJson` 或 `lastSortArr` 则默认值为 `false`（兼顾性能和实用性）
* 【调整】`vk.baseDao.selects` 、 `vk.baseDao.getTableData` 将 `addFields` 的执行顺序调整到 `fieldJson` 之前
* 【优化】`vk.baseDao.select`、`vk.baseDao.selects`、`vk.baseDao.getTableData` 新增返回值 `getCount`，表示是否同时执行了 `count` 请求 [传送门](https://vkdoc.fsq.pub/client/uniCloud/db/selects.html#getcount)
* 【优化】`vk.baseDao.select`、`vk.baseDao.selects`、`vk.baseDao.getTableData` 新增参数 `debug`，传 `true` 会返回执行rows和count的数据库语句执行耗时，单位毫秒，方便优化数据库语句
* 【优化】使用微信官方推荐的方式获取微信小程序昵称和头像的示例（详见源码文件：`/pages_template/uni-id/weixin/set-user-info.vue`）
* 【修复】uni-id配置数组时，tokenMaxLimit参数无效的问题

#####  框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架