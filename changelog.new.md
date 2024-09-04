* 【重要】修复 `vk.baseDao.select` 因 `2.18.13` 更新引出的当 `pageSize设置为-1或>1000` 时，可能出现查询结果不准确的问题
* 【修复】`vk.request` 当设置 `responseType: 'arraybuffer'` 时，部分情况下无法正常接受到值的问题
* 【优化】`vk.callFunction` 设置 `loading:true`，在请求时马上跳页面，loading参数设置不准确的问题

