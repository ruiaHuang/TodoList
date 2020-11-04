import Mock from 'mockjs'

let Random = Mock.Random //声明随机函数对象
let randomEmail = Random.email() //随机生成邮箱
let randomBoolean = Random.boolean() //随机生成布尔值
let randomBase64Img = Random.dataImage() //随机生成图片BASE 64 数据
let randomUrl = Random.url() //随机生成Url 地址
let randomIp = Random.ip() //随机生成ip 地址
let randomColor = Random.color() //随机生成布尔值
/**
 @params size {String} 需要生成的图片尺寸 （'600 X 300'）
 @params background {String} 生成图片的背景色 默认白色 （RBG）
 @params text {String} 生成图片的中间文字 默认为图片尺寸
 @params format {Sting} 生成图片的格式 默认为png（可选：jpg/png/gif）
*/
// let image = Random.image(size, background, foreground, format, text)
let image = Random.image('200X200', '#fff', 'png', '黄锐')

const arr = ['大保健', 'MMC', '洗脚']

const obj = {
  host: 'www.ray.com',
  port: '8080',
  node: 'selector'
}

Mock.setup({
  timeout: '200-600'
})

Mock.mock('/getRadomObj', {
  randomEmail,
  randomBoolean,
  randomBase64Img,
  randomUrl,
  randomIp,
  randomColor,
  image
})

Mock.mock(
  '/list',
  // {
  //   'list|1-10': [
  //     {
  //       'id|+1': 1,
  //       'count|1-100': 1
  //     }
  //   ]
  // }
  [1, 2, 3]
)

Mock.mock('/getUser', {
  'firstName|2': 'rui', //rui 3 次，
  'lastName|2-5': 'huang', //huang 2-5 次。
  'big|+1': 0, //属性值自动加 1，初始值为 0
  'age|20-30': 25, //生成一个大于等于 20、小于等于 30 的整数，属性值 25 只是用来确定类型
  'weight|100-120.2-5': 110.24, //生成一个浮点数,整数部分大于等于 100、小于等于 120，小数部分保留 2 到 5 位。
  'likeMovie|1': true, //随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
  'friend1|1': arr, //从数组 arr 中随机选取 1 个元素，作为最终值。
  'friend2|+1': arr, //从属性值 arr 中顺序选取 1 个元素，作为最终值
  'friend3|2-3': arr, //通过重复属性值 arr 生成一个新数组，重复次数大于等于 2，小于等于 3。
  'life1|2': obj, //从属性值 obj 中随机选取 2 个属性
  'life1|1-2': obj, //从属性值 obj 中随机选取 1 到 2 个属性。
  regexp1: /^[a-z][A-Z][0-9]$/ //生成的符合正则表达式的字符串
})
