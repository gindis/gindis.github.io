### JUJU异界接口需求

#### 基本格式 BASE

* 接口请求地址：http://appwap.juju.la/yj/{{method}}
* uid和sid是请求接口必传字段
* state为服务端响应状态码，0为响应成功

```
// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": "" // 必传
}

// 响应 Response
{
  "state": [0为成功，1001，1002],
  "data": {
    ...
  },
  "message": "成功/失败信息"
}
```
http://appwap.juju.la/yj/me?uid=10000150

#### 获取个人信息 me

```

// 接口名：me

// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": ""// 必传
}

// 响应 Response
{
  "state": [0为成功，1001，1002],
  "data": {
    "uid": "",
    "avatar": "",
    "nickname": "",
    "prizecounter": "",
    "invitecounter": ""
  },
  "message": "成功"
}

http://appwap.juju.la/yj/dodream?uid=10000150&content=lllllll

#### 发表愿望 Do Dream


```

// 接口名：dodream

// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": "", // 必传
  "content": "", // 必传
}

// 响应 Response
{
  "state": [0为成功，1001，1002],
  "data": {
    "update": [0,1 0为更新，1为新发表]
  },
  "message": "成功"
}
```


http://appwap.juju.la/yj/mydream?uid=10000150


#### 获取我的愿望 My Dream

```

// 接口名：mydream

// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": ""// 必传
}

// 响应 Response
{
  "state": [0为成功，1001，1002],
  "data": {
    "uid": "",
    "avatar": "",
    "nickname": "",
    "content": "",
    "count": ""
  },
  "message": "成功"
}
```


http://appwap.juju.la/yj/getdream?uid=10000150
#### 获取愿望列表 Get Dream

```

// 接口名：getdream

// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": ""// 必传
}

// 响应 Response
{
  "state": [0为成功，1001，1002],
  "data": {
    [{
      "uid": "001",
      "avatar": "",
       dreamid :''      愿望ID
      "nickname": "",
      "content": "",
      "count": "",
      "isfav": [0|1 0为点赞]
    },
    { 
      "uid": "002",
      "avatar": "",
       dreamid :''      愿望ID
      "nickname": "",
      "content": "",
      "count": "",
      "isfav": [0|1 0为点赞]
    }
    ]
  },
  "message": "成功"
}
```


http://appwap.juju.la/yj/favdream?uid=10000150&dreamid=12
#### 点赞/取消赞 Fav Dream

```
// 接口名：favdream

// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": "", // 必传
  dreamid 愿望ID  // 必传
}

// 响应 Response
{
  "state": [0为成功，1001，1002],
  "data": {
    "isfav": [0|1, 0为点赞，1为取消]
  },
  "message": "成功"
}
```
http://appwap.juju.la/yj/prize?uid=10000155
#### 抽奖 Lottery

```
// 接口名 prize
// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": "" // 必传
}

// 响应 Response
{
  "state": [0为成功，1001，1002],
  "data": {
    "type": [shits|invite|gift|sorry], //吐槽/邀请好友/奖品,
    "prize": {
      "title": "" //奖品的标题
      "image": "" //奖品的图片
      "description": "" //奖品的描述

    },
    "prizecounter": "" //剩余抽奖次数
  },
  "message": "成功"
}
```

#### 确认奖品
http://appwap.juju.la/yj/checkprize?uid=10000152&type=shits&content=sssssss

http://appwap.juju.la/yj/checkprize?uid=10000152&type=invite&inviteuid=10001367


```
// 接口名：checkprize

// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": "",// 必传
  "type": [Shits|invite], //吐槽/邀请好友  必传
  "content": "",  吐槽的内容,    选传
  "inviteuid": "", // 被邀请的好友的id(通过自动补全选择获得的用户id)  选传
}

// 响应 Response
{
  "state": [0为成功，2001已经在异界了，2002邀请用户不存在],
  data :{
    "type": [shits|invite], //吐槽/邀请好友
    "invitecounter": "" //invite 剩余邀请次数
    "prizecounter": "" //剩余抽奖次数

  }

  "message": "成功"
}
```

#### 获取用户列表
http://appwap.juju.la/yj/getuser?uid=10000150&query=e

```
// 接口名：getuser

// 请求 Query String Parameters
{
  "uid": 888888, // 必传
  "sid": "", // 必传
  "query": ""
}

// 响应 Response
{
  "state": [0为成功，1001，1002],
  "data": {
    [
      {
        "uid": "", //用户ID
        "nickname": "" //用户昵称
      }
    ]
  },
  "message": "成功"
}
```





### JUJU邀请相关接口需求

#### 基本格式 BASE

* 接口请求地址：http://appwap.juju.la/invite/{{method}}
* state为服务端响应状态码，0为响应成功

```
// 请求 Query String Parameters
{


}

// 响应 Response
{
  "state": [0为成功，1000，1001，1002],
  "data": {
    ...
  },
  "message": "message"
}

```
//邀请页首页  直接根据页面显示
http://appwap.juju.la/invite/home


http://appwap.juju.la/invite/inviteuserinfo
#### 获取用户个人邀请信息
```
// 接口名：inviteuserinfo

// 请求 Query String Parameters
{
}
// 响应 Response
{
    "state": 0,                                                         //0为成功 其他比如：1001，1002 都表示失败
    "data": {
        "userdata": {
            "uid": 10000143,                                            //我的用户id
            "nickname" : "xxx",                                         //我的昵称
            "avatar" : "http://juju2.inbbuy.cn/sdfsdf.jpg@!108x108",    //我的头像
            "invitecode" : "sdfsdf",                                    //我的邀请码
            "invitecounter": 2,                                         //接受了我的邀请的人数
            "score” : 1,                                                //我的积分
            "exchangecounter" : 1                                       //兑换商品次数
            },
        "myinvitedlist": ["阿布","小明","上帝"]                           //接受我的邀请的用户列表
    },
    "message": "message"
}

http://appwap.juju.la/invite/ranklist
#### 获取排行榜列表信息
```
// 接口名：ranklist
// 请求 Query String Parameters
{
    "page":1   //当前分页  最小为1  表示第一页  往后翻页前段自行递增
}

// 响应 Response
{
    "state": 0,                                                         //0为成功 其他比如：1001，1002 都表示失败
    "data":[
        {
            "ranknum":1,                                                //排行榜名次
            "username":"小明",                                            //昵称
            "invitecounter":100                                         //小明的邀请数量
        },
        {
            "ranknum":2,                                                //排行榜名次
            "username":"小明1",                                           //昵称
            "invitecounter":99                                          //小明1的邀请数量
        },
        {
            "ranknum":3,                                                //排行榜名次
            "username":"小明2",                                           //昵称
            "invitecounter":97                                          //小明2的邀请数量
        }
    ],
    "message": "message"
}


http://appwap.juju.la/invite/createorder
#### 用户兑换商品创建订单接口
```
// 接口名：createorder
// 请求 Query String Parameters
{
    "pid":1,                                                            //商品id
    "address":"浙江省杭州市西湖区xx路xx公寓xx幢xx室"                        //收货地址
}

// 响应 Response
{
    "state": 0,                                                         //0为成功 其他比如：1001，1002 都表示失败
    "data":100000001                                                    //成功返回订单id
    "message": "message"
}


http://appwap.juju.la/invite/productlist
#### 获取兑换商品列表信息
```
// 接口名：productlist
// 请求 Query String Parameters
{
}

// 响应 Response
{
    "state": 0,                                                         //0为成功 其他比如：1001，1002 都表示失败
    "data":[
        {
            "productname":"xx手办",                                       //商品名称
            "productvalue":"20",                                        //商品价值
            "productprice":"15",                                        //商品特价
            "productstock":"100",                                       //商品库存
            "productimg":"http://xx.xx.xx/xx.jpg",                      //商品图片
            "productstate":1                                            //商品状态  1置顶 0不置顶
        },
        {
            "productname":"xx手办",
            "productvalue":"20",
            "productprice":"15",
            "productstock":"100",
            "productimg":"http://xx.xx.xx/xx.jpg",
            "productstate":1
        }
    ],
    "message": "message"
}


http://appwap.juju.la/invite/lastorder
#### 获取最新的5条订单信息  所有用户订单中获取
```
// 接口名：lastorder
// 请求 Query String Parameters
{
}

// 响应 Response
{
    "state": 0,                                                         //0为成功 其他比如：1001，1002 都表示失败
    "data":[
        {
            "username":"小明",                                            //用户名
            "productname":"xx手办",                                       //商品名称
        },
        {
            "username":"小明1",                                            //用户名
            "productname":"xx手办",                                       //商品名称
        },
        {
            "username":"小明2",                                            //用户名
            "productname":"xx手办",                                       //商品名称
        },
        {
            "username":"小明3",                                            //用户名
            "productname":"xx手办",                                       //商品名称
        },
        {
            "username":"小明4",                                            //用户名
            "productname":"xx手办",                                       //商品名称
        }
    ],
    "message": "message"
}


