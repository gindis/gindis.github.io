# Hello Nothing

## 接口
搭配详情页面：
1:搭配详情
接口url：http://115.159.91.200:8080/nothing/dynamic/getDetail.do
入参：7f7f56b66d9c499cac3cb5e950d5bb4a
出参：返回搭配详情，包括搭配发布人信息、搭配图片，搭配标签，搭配使用的品牌,搭配转发量、点赞量
2：他的热门帖子
接口url：http://115.159.91.200:8080/nothing/dynamic/findListByOther.do
入参：7f7f56b66d9c499cac3cb5e950d5bb4a
出参：返回当前动态发布人发布的其他搭配

单品详情页面：
1：单品详情
接口url：http://115.159.91.200:8080/nothing/product/getDetail.do
入参：从上一个页面可以获取到某个单品的id
出参：返回单品详情，包括单品图片列表，单品的分类、品牌、颜色
2：相似单品
接口url：http://115.159.91.200:8080/nothing/product/findListProd.do
入参：当前单品的分类id、颜色id
出参：返回与当前单品相似的单品列表
3：推荐帖子
接口url：http://115.159.91.200:8080/nothing/dynamic/findListByProdLike.do
入参：当前单品的id
4：帖子排行榜：
接口url：http://115.159.91.200:8080/nothing/dynamic/common/findListByHot.do
入参：无入参
出参：返回当前系统热门搭配，数量最大为99条，H5页面上会显示多少条你就自己截取吧
5：达人排行榜
接口url：http://115.159.91.200:8080/nothing/user/common/findListByHot.do
入参：无入参
出参：返回当前系统热门达人，数量最大为99条，H5页面上会显示多少条你就自己截取吧

注意事项：
1、所有的入参的name和出参的属性，详见接口文档；
2、所有入参的url以该文本写的为准，接口文档上的那个url已经不对了；