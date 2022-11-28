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

![image](https://user-images.githubusercontent.com/109722564/204241959-a7524b6d-eec7-4087-9128-b860a68504fa.png)

**2、login组件:点击头像跳转登录路由组件**

![image](https://user-images.githubusercontent.com/109722564/204242011-565d2141-a060-4034-a25d-0fb0cca64b78.png)

**3、login组件:点击头像跳转登录路由组件**

 ![image](https://user-images.githubusercontent.com/109722564/204242193-4042837c-bdf6-4ee7-bacf-7f768c3657fc.png)
![image](https://user-images.githubusercontent.com/109722564/204242209-da813154-fa32-4467-a64b-36897f21e775.png)
![image](https://user-images.githubusercontent.com/109722564/204242220-6aa15fc0-5956-4723-8bf9-466695840e82.png)


4、点击立即注册，跳转登录组件登录

**5、再点击登录跳转到home组件**

**6、点击右上角图标可退出账号**

![image](https://user-images.githubusercontent.com/109722564/204242336-1d532eec-8394-4406-b105-36d98b8e7232.png)

**7、index组件:首页组件：**
![image](https://user-images.githubusercontent.com/109722564/204242549-eb462272-68a0-44b7-a828-90b896298f3d.png)
![image](https://user-images.githubusercontent.com/109722564/204242568-e36fd08a-efaf-41d1-8d4a-62d3d2855a09.png)
![image](https://user-images.githubusercontent.com/109722564/204242581-81fc025a-7c4b-4a9b-ab70-597c54b43de5.png)

**8、Video组件:点击视频可跳转至视频路由组件**：

简介的数据根据点击商品商品标题数据的改变，通过路由传值的方式获取

可点击 加关注，评论，点赞，收藏，加入购物车，评论可点击按时间排序

![image](https://user-images.githubusercontent.com/109722564/204242740-8750457e-5f04-4891-b9ef-2cffec2cd03e.png)
![image](https://user-images.githubusercontent.com/109722564/204242764-f10bb785-fdc0-415e-a3f1-7497284dcf7c.png)
![image](https://user-images.githubusercontent.com/109722564/204242775-6165b05c-073a-4a5c-a545-db377075c965.png)
![image](https://user-images.githubusercontent.com/109722564/204242876-9265faa6-83c5-4e5d-998c-17baeb3971a7.png)
![image](https://user-images.githubusercontent.com/109722564/204242897-ab86a50b-6d45-4c30-ba1a-1140b3b971f7.png)

**9、Category分类组件：\**

**分类组件：组件分离，字母小写关键词搜索功能**
![image](https://user-images.githubusercontent.com/109722564/204242922-4fc7443b-7071-4d60-a76a-2ae5241aded3.png)
![image](https://user-images.githubusercontent.com/109722564/204242948-63eded1e-e7a6-4c16-80d5-702d453c7832.png)
![image](https://user-images.githubusercontent.com/109722564/204242973-5e99dbfd-9947-4fd9-92a6-dc54471ae016.png)

**10、order组件:订单组件\**

**点击查看课程可以跳转到视频页面，数据通过路由传值到视频页，点击申请退款弹出提示框。**

![image](https://user-images.githubusercontent.com/109722564/204243072-7f4f10cb-067e-4871-83a0-16f30aecff98.png)
![image](https://user-images.githubusercontent.com/109722564/204243092-83d9efba-51f6-4b33-af1d-38154ff2970c.png)
![image](https://user-images.githubusercontent.com/109722564/204243103-0bf6778d-f448-40a5-baf7-4f0cff976706.png)
![image](https://user-images.githubusercontent.com/109722564/204243117-1496a0ce-0e6b-4ee3-b932-bd8429f94490.png)

**11、order组件中的 代付款：\**

点击“取消付款”，弹出提示框，确认则删除了所选的订单

 
![image](https://user-images.githubusercontent.com/109722564/204243171-33e4981c-d499-4fea-81bc-78bf5e3751cf.png) 
![image](https://user-images.githubusercontent.com/109722564/204243195-715c2d61-78da-4e90-b03e-69f69c951981.png)


点击“去付款”按钮，则跳转到“提交订单路由组件”

点击“选择收货地址”跳转到“地址编辑路由页”，可以选择返回，自动选择默认地址，

也可以选择“新增地址”添加地址，点击“保存”跳转“我的地址”，再点击“返回”，即可选择到地址。

点击“提交订单”，自动提示“余额不足”

![image](https://user-images.githubusercontent.com/109722564/204243259-d32c3f4d-b989-403d-9623-7c7399a1b4f8.png)
![image](https://user-images.githubusercontent.com/109722564/204243276-7247f75f-4050-4956-a402-2d4290505446.png)
![image](https://user-images.githubusercontent.com/109722564/204243290-25377b1a-b17a-4bdc-b3bc-75620df60060.png)
![image](https://user-images.githubusercontent.com/109722564/204243305-51b59831-2579-4165-94fd-a0d39f0bea16.png)
![image](https://user-images.githubusercontent.com/109722564/204243315-d8d37aea-dc85-403c-b4aa-c68809cc6566.png)
![image](https://user-images.githubusercontent.com/109722564/204243339-4020020f-3fa0-4f67-9979-26df396c3f58.png)
![image](https://user-images.githubusercontent.com/109722564/204243349-38813b84-ca88-4dfa-995e-42d6fac4b7f3.png)
![image](https://user-images.githubusercontent.com/109722564/204243369-b49377d5-e917-49dd-a908-2dbfe9806ece.png)


**12、订单组件里的评价子组件：**

**评价组件的头像获取到登录的头像**

**点击评价的“\****☆***\*”显示已评价，“期待下次光临”**

**未评价显示“未评价”，“商品好不好，评价一下吧”**

![image](https://user-images.githubusercontent.com/109722564/204243409-f1711ab7-a3c0-486a-a5ee-4126b0bd80b1.png)
![image](https://user-images.githubusercontent.com/109722564/204243428-b0ac12e1-d165-4167-8027-c0b46ba61519.png)


