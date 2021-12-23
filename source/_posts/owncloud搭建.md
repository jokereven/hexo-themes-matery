---
title: owncloud搭建
author: 周靖
img: medias/featureimages/20.jpg
top: false
cover: false
toc: true
mathjax: false
summary: owncloud搭建
categories: owncloud搭建
tags:
  - owncloud搭建
keywords: 周靖
essay: false
abbrlink: 42911
date: 2021-12-23 19:57:37
coverImg:
password:
---

# owncloud 搭建

## 依赖服务安装

```shell
yum install -y httpd php php-mysql mariadb-server mariadb sqlite php-dom php-mbstring php-gd php-pdo
```

## 启动 LAMP 相关的服务（关闭 selinux 以及 firewalld 防火墙）

````
systemctl restart httpd mariadb
setenforce 0
systemctl stop firewalld
```
浏览器访问 http://localhost or http://ip
```
````

![image-20211223184123120](http://qiniuyun.code520.com.cn/images/20211223184123.png)

```
tar -jxaf owncloud-10.0.4.tar.bz2
cp -r owncloud/* /var/www/html/
chown -R apache.apache /var/www/html
```

[owncloud-10.0.4.tar.bz2](http://file.code520.com.cn/owncloud/owncloud-10.0.4.tar.bz2)

![image-20211223185349204](http://qiniuyun.code520.com.cn/images/20211223185349.png)

## 在 Mariadb 数据库中创建 OwnCloud 的数据库

设置 mariadb 的 root 密码：

```
mysqladmin -u root password "123456"
```

![image-20211223192609107](http://qiniuyun.code520.com.cn/images/20211223192609.png)

## 再次访问

![image-20211223191929621](http://qiniuyun.code520.com.cn/images/20211223191929.png)

## 升级 php 版本

```
rpm -Uvh https://mirror.webtatic.com/yum/el7/epel-release.rpm

rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
```

## 卸载 php-common

```
yum remove php-common
```

## 安装 php5.6

```
yum install -y php56w php56w-opcache php56w-xml php56w-mcrypt php56w-gd php56w-devel php56w-mysql php56w-intl php56w-mbstring
```

## 再次访问

![image-20211223192750119](http://qiniuyun.code520.com.cn/images/20211223192750.png)

## 登入

![image-20211223192829678](http://qiniuyun.code520.com.cn/images/20211223192829.png)
