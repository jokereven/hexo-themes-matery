---
title: 服务器搭建git仓库
author: 周靖
img: medias/featureimages/0.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 服务器搭建git仓库
categories:
  - 服务器
  - git
tags:
  - 服务器
  - git
keywords: 周靖
essay: false
abbrlink: 20741
date: 2021-11-29 11:34:29
coverImg:
password:
---

```
之前用docsify搭的一个文档网站一直要手动上传，那我为什么不搞一个git仓库来自动上传呢?
```

#### 服务器搭建 git 仓库

```
代码是在这个位置的
```

![image-20211129114818739](http://qiniuyun.code520.com.cn/images/20211129114818.png)

```
初始化仓库
```

![image-20211129114911315](http://qiniuyun.code520.com.cn/images/20211129114911.png)

```
添加git用户
```

```
adduser git
passwd git
```

```
改变权限
```

![image-20211129115525559](http://qiniuyun.code520.com.cn/images/20211129115525.png)

```
修改权限
```

```
chmod 740 /etc/sudoers
vim /etc/sudoers
```

![image-20211129194332007](http://qiniuyun.code520.com.cn/images/20211129194332.png)

```
创建证书登录(自己电脑的ssh文件)
```

![image-20211129120446526](http://qiniuyun.code520.com.cn/images/20211129120446.png)

![image-20211129194416587](http://qiniuyun.code520.com.cn/images/20211129194416.png)

![image-20211129151453111](http://qiniuyun.code520.com.cn/images/20211129151453.png)

```
但是现在有一个问题hexo博客提交有一点问题
提交不要密码了
```

![image-20211129211242957](http://qiniuyun.code520.com.cn/images/20211129211243.png)
