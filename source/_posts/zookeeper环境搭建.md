---
title: zookeeper环境搭建
author: 周靖
img: medias/featureimages/17.jpg
top: false
cover: false
toc: true
mathjax: false
summary: zookeeper环境搭建
categories:
  - zookeeper
  - 环境搭建
  - Docker
tags:
  - zookeeper
  - 环境搭建
  - Docker
keywords: 周靖
essay: false
abbrlink: 47827
date: 2022-04-27 11:04:26
coverImg:
password:
---

# 大数据zookeeper环境搭建(Docker版)

## docker环境搭建

服务器搭建Docker环境 | 周靖 https://blog.code520.com.cn/posts/17870.html via @https://blog.code520.com.cn 

## 1.拉取镜像

```
docker pull zookeeper:3.4.10
复制代码
```

### 使用命令查看拉取到的镜像

```
docker images
复制代码
```

## 2.启动Zookeeper并拷贝文件

### 创建宿主机挂载目录

```
mkdir -p /mydata/zookeeper/conf
mkdir -p /mydata/zookeeper/data
mkdir -p /mydata/zookeeper/log
复制代码
```

### 拷贝文件到外部挂载目录

```
docker run -d --name zk --restart always zookeeper:3.4.10
复制代码
```

### 将容器中的配置文件复制出来

```
docker cp -a zk:/conf/zoo.cfg /mydata/zookeeper/conf/zoo.cfg
复制代码
```

### 删除没有外部存储的容器

```
docker stop zk
docker rm zk
复制代码
```

## 3.重启Zookeeper

```
docker run -d --name zk --restart always \
-p 2181:2181 -p 2888:2888 -p 3888:3888 \
-v /mydata/zookeeper/conf/zoo.cfg:/conf/zoo.cfg \
-v /mydata/zookeeper/data:/data \
-v /mydata/zookeeper/log:/datalog \
zookeeper:3.4.10
```

## zookeeper(三)——基本命令

[zookeeper(三)——基本命令](https://zhuanlan.zhihu.com/p/101559380)

![image-20220427111344423](https://qiniuyun.code520.com.cn/images/image-20220427111344423.png)

## Docker跑起来之后进到Docker容器里面

![image-20220427111708891](https://qiniuyun.code520.com.cn/images/image-20220427111708891.png)

```bash
docker exec -it id /bin/bash
```

### id取前面几个就好了

### 之后在完成:[zookeeper(三)——基本命令](https://zhuanlan.zhihu.com/p/101559380)

### 2333

