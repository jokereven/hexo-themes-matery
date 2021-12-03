---
title: centos-本地yum配置
author: 周靖
img: medias/featureimages/6.jpg
top: false
cover: false
toc: true
mathjax: false
summary: centos-本地yum配置-ip-sun-targetcli
categories:
  - targetcli
  - centos
  - yum
tags:
  - targetcli
  - centos
  - yum
keywords: 周靖
essay: false
abbrlink: 2211
date: 2021-12-02 09:23:50
coverImg:
password:
---
https://www.cnblogs.com/diantong/p/11362875.html

#### 服务器端

![image-20211202093223505](http://qiniuyun.code520.com.cn/images/20211202093223.png)

![image-20211202093132617](http://qiniuyun.code520.com.cn/images/20211202093132.png)

```
重新启动后记得 mount /dev/cdrom /mnt
```

![image-20211202093556878](http://qiniuyun.code520.com.cn/images/20211202093556.png)

![image-20211202094842745](C:\Users\jokereven\AppData\Roaming\Typora\typora-user-images\image-20211202094842745.png)

![image-20211202095428910](http://qiniuyun.code520.com.cn/images/20211202095428.png)

![image-20211202172412668](http://qiniuyun.code520.com.cn/images/20211202172412.png)

![image-20211202172457566](http://qiniuyun.code520.com.cn/images/20211202172457.png)

#### linux-host

```
[root@jokereven ~]# yum -y install iscsi-initiator-utils
[root@jokereven ~]# vim /etc/iscsi/initiatorname.iscsi　　//修改发起者配置，也就是服务端的ACL规则名称
InitiatorName=iqn.2019-08.com.youxi1:username　　//修改为服务端的ACL规则列表名称
[root@jokereven ~]# vim /etc/iscsi/iscsid.conf
node.session.auth.authmethod = CHAP　　//第57行，取消注释
node.session.auth.username = admin　　//第61行，取消注释，并修改为ACL规则列表内的用户名
node.session.auth.password = 123456　　//第62行，取消注释，并修改为对应用户名的密码
[root@jokereven ~]# systemctl start iscsid
```

![image-20211202174012386](http://qiniuyun.code520.com.cn/images/20211202174012.png)

![image-20211202174209929](http://qiniuyun.code520.com.cn/images/20211202174209.png)

#### windows的都差不多
