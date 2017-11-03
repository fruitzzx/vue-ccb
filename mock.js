// 使用 Mock
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
  'users': [],
  'img|30': ['@img(375x150, @color, @ctitle)']
})

fs.writeFile('db.json', JSON.stringify(data, null, 2), function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('数据写入成功！')
})
