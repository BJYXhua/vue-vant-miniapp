# miniapp Mini充电站移动端vue项目
## 《Mini充电站移动端项目》网站设计
### 一、前言
```
介绍：Mini充电站 属于在线学习网站，拥有海量的视频课程。
```

### 二、总体设计
```
设计思路：首先确定了做一个移动端学习网站，给网站取了个名字（Mini充电站），自己设计了logo，图片素材一些自己制作，还有一些从网上截图进行PS软件的处理，数据的编写，视频素材通过自己录制。
根据在线学习网站的目的和功能实现，本次设计的网站主要使用vue-router路由，component组件，UI组件库vant，$bus全局事件总线。
风格：易上手，简明亮眼。
```
### Run

```
npm run serve
```

### 三、详细设计

**界面原型展示：**

1、home组件

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps1.jpg) 

**2、login组件:点击头像跳转登录路由组件**

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps2.jpg) 

**3、login组件:点击头像跳转登录路由组件**

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps3.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps4.jpg) ![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps5.jpg)

***\*4、点击立即注册，跳转登录组件登录\****

***\*5、再点击登录跳转到home组件\****

***\*6、点击右上角图标可退出账号\****

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps6.jpg) 

***\*7、index组件:首页组件：\****

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps7.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps8.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps9.jpg) 

**8、*****\*Video组件:点击视频可跳转至视频路由组件\****：

简介的数据根据点击商品商品标题数据的改变，通过路由传值的方式获取

可点击 加关注，评论，点赞，收藏，加入购物车，评论可点击按时间排序

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps10.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps11.jpg) 

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps12.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps13.jpg) 

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps14.jpg)  ![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps15.jpg)

***\*9、Category分类组件：\****

***\*分类组件：组件分离，字母小写关键词搜索功能\****

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps16.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps17.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps18.jpg) 

***\*10、order组件:订单组件\****

***\*点击查看课程可以跳转到视频页面，数据通过路由传值到视频页，点击申请退款弹出提示框。\****

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps19.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps20.jpg) 

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps21.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps22.jpg) 

***\*11、order组件中的 代付款：\****

点击“取消付款”，弹出提示框，确认则删除了所选的订单

 

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps23.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps24.jpg) 

点击“去付款”按钮，则跳转到“提交订单路由组件”

点击“选择收货地址”跳转到“地址编辑路由页”，可以选择返回，自动选择默认地址，

也可以选择“新增地址”添加地址，点击“保存”跳转“我的地址”，再点击“返回”，即可选择到地址。

点击“提交订单”，自动提示“余额不足”

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps25.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps26.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps27.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps28.jpg) 

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps29.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps30.jpg) 

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps31.jpg) 

**12、*****\*订单组件里的评价子组件：\****

***\*评价组件的头像获取到登录的头像\****

***\*点击评价的“\****☆***\*”显示已评价，“期待下次光临”\****

***\*未评价显示“未评价”，“商品好不好，评价一下吧”\****

![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps32.jpg)![img](file:///C:\Users\小花花\AppData\Local\Temp\ksohtml21404\wps33.jpg) 
