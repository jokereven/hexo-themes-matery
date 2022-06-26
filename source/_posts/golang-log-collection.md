---
title: golang-log-collection
author: 周靖
img: medias/featureimages/0.jpg
top: false
cover: false
toc: true
mathjax: false
summary: golang-log-collection
categories: golang-log-collection
tags:
  - golang-log-collection
keywords: 周靖
essay: false
abbrlink: 22477
date: 2022-06-26 12:47:02
coverImg:
password:
---

# golang-log-collection

<iframe src="//player.bilibili.com/player.html?aid=288508467&bvid=BV1Df4y1C7o5&cid=280349448" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="456px"> </iframe>

## 最近完成了李文周老师的日志收集项目（golang-log-collection）

## 准备在服务器搭一下没想到哎都快搞完了服务器跑不动了2333

## 在虚拟机上搞一下

### 思路在服务器上跑个nginx web服务 当有人访问时 nginx的日志文件就有新的内容，监听 nginx 的日志文件就好了2333。

### Reference:

项目地址: [https://github.com/jokereven/golang-log-collection](https://github.com/jokereven/golang-log-collection)

如何查看Nginx日志？: [https://blog.csdn.net/oMcLin/article/details/110424347](https://blog.csdn.net/oMcLin/article/details/110424347)

Docker 容器设置开机自启: [https://blog.csdn.net/WU2629409421perfect/article/details/110881634](https://blog.csdn.net/WU2629409421perfect/article/details/110881634)

docker0: iptables: No chain/target/match by that name: [https://www.cnblogs.com/flasheryu/p/5919657.html](https://www.cnblogs.com/flasheryu/p/5919657.html)

服务器搭建Docker环境: [https://blog.code520.com.cn/posts/17870.html](https://blog.code520.com.cn/posts/17870.html)

yum install 没有可用软件包 nginx。: [https://blog.csdn.net/zhou_438/article/details/89554438](https://blog.csdn.net/zhou_438/article/details/89554438)

使用docker跑kafka和zookeeper

利用docker和docker-compose部署单机kafka: [https://segmentfault.com/a/1190000021746086](https://segmentfault.com/a/1190000021746086)

linux安装和启动zookeeper和kafka（最原始的方式）:[https://blog.csdn.net/qq_34136551/article/details/120284711](https://blog.csdn.net/qq_34136551/article/details/120284711)

docker安装elastic search和kibana: [https://www.cnblogs.com/baoshu/p/16128127.html](https://www.cnblogs.com/baoshu/p/16128127.html)

```txt
这里版本稍微高一点, 后面从第四步之后就不用在做了。
```

etcd download: [https://github.com/etcd-io/etcd/releases](https://github.com/etcd-io/etcd/releases)

查看Linux系统架构的命令，查看linux系统是哪种架构：AMD、ARM、x86、x86_64、pcc 或 查看Ubuntu的版本号: [https://blog.csdn.net/weixin_41010198/article/details/109166131](https://blog.csdn.net/weixin_41010198/article/details/109166131)

linux后台执行命令：&和nohup: [https://blog.csdn.net/liuyanfeier/article/details/62422742](https://blog.csdn.net/liuyanfeier/article/details/62422742)

centos 安装 mwget，替换 wget，提升下载速度: [https://blog.csdn.net/xiongzaiabc/article/details/104841533](https://blog.csdn.net/xiongzaiabc/article/details/104841533)

服务器搭建 Golang 环境: [https://blog.code520.com.cn/posts/28507.html](https://b	log.code520.com.cn/posts/28507.html)
