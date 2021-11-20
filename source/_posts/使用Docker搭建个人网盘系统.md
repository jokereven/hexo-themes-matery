---
title: 使用Docker搭建个人网盘系统
author: 周靖
img: medias/featureimages/8.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 使用Docker搭建个人网盘系统
categories: 个人网盘
tags:
  - Docker
  - 个人网盘
keywords: 周靖
essay: false
abbrlink: 17758
date: 2021-09-02 17:00:16
coverImg:
password:
---

## `使用docker搭建个人网盘系统`

### `一. 个人网盘的搭建`

#### `1. 安装DOCKER`

其它文章

#### `2. 获取NEXTCLOUD镜像`

```js
docker pull nextcloud
docker run -d --restart=always --name nextcloud -p 8888:80 nextcloud

/* 端口号自己到服务器的控制台添加一下随你自己添加什么端口 */
```

#### `3. 访问服务器ip:8888`

```js
/* 设置用户名和密码 */
/* 下面的存储和数据根据需求自己看官方文档搞一下 */
/* 没什么需求的话就默认的就可以了 */
/* 安装完成等待一小会登陆就可以使用了 */
```
