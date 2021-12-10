---
title: 本地视频上传服务器通过url访问
author: 周靖
img: medias/featureimages/17.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 本地视频上传服务器通过url访问
categories:
  - 视频
  - 服务器
  - nginx
tags:
  - 视频
  - 服务器
  - nginx
keywords: 周靖
essay: false
abbrlink: 27336
date: 2021-12-09 22:48:09
coverImg:
password:
---

![image-20211209224919534](http://qiniuyun.code520.com.cn/images/20211209224919.png)

![image-20211209224949409](http://qiniuyun.code520.com.cn/images/20211209224949.png)

![image-20211209225003199](http://qiniuyun.code520.com.cn/images/20211209225003.png)

##### 这里也需要到服务器商开启一下端口

![image-20211209231416454](http://qiniuyun.code520.com.cn/images/20211209231416.png)

![image-20211209231507974](http://qiniuyun.code520.com.cn/images/20211209231508.png)

##### 但是好像无法通过 url 访问

###### 于是我准备用 nginx 搞一下

具体我参考了这个文章：<https://juejin.cn/post/6911536717820329997>

![image-20211210095729340](http://qiniuyun.code520.com.cn/images/20211210095729.png)

###### 现在就可以通过 url 访问视频文件了

![image-20211210101819183](http://qiniuyun.code520.com.cn/images/20211210101819.png)

##### 访问图片

![image-20211210101851015](http://qiniuyun.code520.com.cn/images/20211210101851.png)
