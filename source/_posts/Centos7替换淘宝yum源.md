---
title: Centos7替换淘宝yum源
author: 周靖
img: medias/featureimages/1.jpg
top: false
cover: false
toc: true
mathjax: false
summary: Centos7替换淘宝yum源
categories: yum
tags:
  - centos
  - yum
keywords: 周靖
essay: false
abbrlink: 56054
date: 2021-09-02 17:15:56
coverImg:
password:
---

### `centos7替换淘宝yum源`

#### `一、备份本地yum源文件`
```js
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo_bak
```

#### `二、获取阿里yum源配置文件`
```js
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
/* 或者下面的命令 */
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

#### `三、更新cache`
```js
yum makecache
yum -y update
```
