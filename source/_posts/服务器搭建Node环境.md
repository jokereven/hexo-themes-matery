---
title: 服务器搭建Node环境
author: 周靖
img: medias/featureimages/3.jpg
top: true
cover: false
toc: true
mathjax: false
summary: 服务器搭建Node环境
categories: Node
tags:
  - 服务器
  - Node
keywords: 周靖
essay: false
abbrlink: 18281
date: 2021-09-02 16:34:08
coverImg:
password:
---

### `服务器搭建node环境`

#### `一. yum安装node`

#### `1. 安装源`

```js
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
```

#### `2. 开始安装`

```js
yum -y install nodejs
```

#### `二. npm配置淘宝源`

```js
直接使用命令更换

npm config set registry https://registry.npm.taobao.org

使用阿里定制的cnpm命令行工具代替默认的npm，输入以下代码

npm install -g cnpm --registry=https://registry.npm.taobao.org

检查是否安装成功：

cnpm -v

安装成功之后，以后安装依赖包的方式和npm的是一样的，只是npm的命令换成是cnpm就可以了。
```
