---
title: linux-samba服务器搭建
author: 周靖
img: medias/featureimages/17.jpg
top: false
cover: false
toc: true
mathjax: false
summary:
  - linux
  - samba
categories:
  - linux
  - samba
tags:
  - LVM逻辑卷实验
keywords: 周靖
essay: false
abbrlink: 45641
date: 2021-12-05 21:18:05
coverImg:
password:
---
```
实验环境
linux(192.168.8.4): 搭建smb
windows(192.168.8.3): 验证
```

###### 1.互联互通

###### 2. linux端安装samba

![image-20211205230625567](http://qiniuyun.code520.com.cn/images/20211205230625.png)

![image-20211205230807269](http://qiniuyun.code520.com.cn/images/20211205230807.png)

###### window-server 验证

![image-20211205224708511](http://qiniuyun.code520.com.cn/images/20211205224708.png)

![image-20211206094751534](http://qiniuyun.code520.com.cn/images/20211206094751.png)

![image-20211205230828342](http://qiniuyun.code520.com.cn/images/20211205230828.png)

![image-20211205230849620](http://qiniuyun.code520.com.cn/images/20211205230849.png)

###### linux-host验证

安装samba-client

yum install -y samba-client

![image-20211205232324205](http://qiniuyun.code520.com.cn/images/20211205232324.png)

##### 在挂载之前需要安装一下cifs-utils

```
yum install cifs-utils
```

![image-20211206094112597](http://qiniuyun.code520.com.cn/images/20211206094112.png)
