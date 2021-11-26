---
title: 服务器搭建Docker环境
author: 周靖
img: medias/featureimages/12.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 服务器搭建Docker环境
categories: Docker
tags:
  - Docker
  - 服务器
keywords: 周靖
essay: false
abbrlink: 17870
date: 2021-09-02 16:20:22
coverImg:
password:
---

## `服务器搭建docker环境`

### `一. docker的安装`

#### `1. 检查内核版本(docker要求系统内核版本高于3.10)`

```js
[root@VM-4-8-centos /]# uname -r
3.10.0-1160.11.1.el7.x86_64
```

#### `2. 下载阿里的镜像源`

```js
[root@VM-4-8-centos data]# wget -O /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
--2021-06-23 22:28:46--  https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
Resolving mirrors.aliyun.com (mirrors.aliyun.com)... 119.96.77.242, 119.96.77.236, 119.96.77.238, ...
Connecting to mirrors.aliyun.com (mirrors.aliyun.com)|119.96.77.242|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 2081 (2.0K) [application/octet-stream]
Saving to: ‘/etc/yum.repos.d/docker-ce.repo’

100%[==================================================================================================>] 2,081       --.-K/s   in 0s
```

#### `3. 安装docker-ce`

```js
yum install docker-ce -y /* 安装docker-ce(最新版) */
systemctl start docker /* 启动docker */
systemctl enable docker/* 开启自动启动 */
```

#### `4. 配置docker镜像源`

```js
mkdir -p /etc/docker
sudo vi etc/docker/daemon.json

{
    "registry-mirrors": [
        "https://docker.mirrors.ustc.edu.cn",
        "https://registry.docker-cn.com",
        "https://hub-mirror.c.163.com",
        "https://mirror.ccs.tencentyun.com",
        "http://f1361db2.m.daocloud.io"
    ]
}

systemctl daemon-reload /* 重新加载配置文件 */
systemctl restart docker /* 重新启动docker */
```

#### `5. 查看是否成功`

```js
[root@VM-4-8-centos /]# docker info

 Registry Mirrors:
  https://registry.docker-cn.com/
  http://hub-mirror.c.163.com/
  https://docker.mirrors.ustc.edu.cn/
  http://f1361db2.m.daocloud.io/
 Live Restore Enabled: false
 /* Docker就安装好了 */
```
