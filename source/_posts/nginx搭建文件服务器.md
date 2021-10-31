---
title: nginx搭建文件服务
author: 周靖
img: medias/featureimages/24.jpg
top: false
cover: false
toc: true
mathjax: false
summary: nginx搭建文件服务网站
categories:
  - nginx
  - 文件服务
  - 网站
tags:
  - nginx
  - 文件服务
  - 网站
keywords: 周靖
essay: false
abbrlink: 46918
date: 2021-10-21 23:43:56
coverImg:
password:
---

# 搭建文件下载网站

## 1. 搞一台服务器

### 这里我就用三丰云(其它平台的都领完了)

### 自己领取一下

![image-20211021204953992](http://qiniuyun.code520.com.cn//images/202110212049434.png)

## 进入管理页面

![image-20211021205044247](http://qiniuyun.code520.com.cn//images/202110212050567.png)

## 进行初始化(这里按照默认的就好了)

![image-20211021205145000](http://qiniuyun.code520.com.cn//images/202110212051302.png)

## 经过漫长的等待

![](https://i04piccdn.sogoucdn.com/6452cfb48b862b22)

![image-20211021211332702](http://qiniuyun.code520.com.cn//images/202110212113016.png)

### 访问之后修改一下用户名密码就是你安装操作系统时输入的那个密码

### 修改之后登入

![image-20211021221343132](http://qiniuyun.code520.com.cn//images/202110212213413.png)

### 宝塔只是为了方便管理

### 准备开始搭建

### 这里我准备使用nginx搭建

### 其实有很多方法都可以搭建

### 比如apache,ftp,nfs,Samba,nginx...

### 安装nginx

![image-20211021223606941](http://qiniuyun.code520.com.cn//images/202110212236365.png)

### 安装一下

### 安装完成

### 浏览器访问ip

![image-20211021223744422](http://qiniuyun.code520.com.cn//images/202110212237836.png)

### ok

### 修改一下nginx配置文件

[文章](http://ocdman.github.io/2017/11/12/Nginx%E6%90%AD%E5%BB%BA%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%9C%8D%E5%8A%A1%E5%99%A8/)

### 改成差不多这样的

```
server
    {
        listen 80;
        server_name localhost;

        location / {
                #root /usr/share/nginx/html;
                alias /usr/share/nginx/html/;
                index index.html index.htm;
        }

        location /downloads {
                #root /usr/share/nginx;
                alias /usr/share/nginx/downloads/;
                autoindex       on;
                autoindex_exact_size    off;
                autoindex_localtime     on;
        }

        #error_page   404   /404.html;
        include enable-php.conf;

        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      30d;
        }

        location ~ .*\.(js|css)?$
        {
            expires      12h;
        }

        location ~ /\.
        {
            deny all;
        }

        access_log  /www/wwwlogs/access.log;
    }
```

### 上传文件

![image-20211021225645452](http://qiniuyun.code520.com.cn//images/202110212256774.png)

### 在usr下的share下创建nginx文件夹z

### 在nginx文件夹下创建downloads文件夹

### 在downloads文件夹下上传文件

![image-20211021230910118](http://qiniuyun.code520.com.cn//images/202110212309492.png)

### 效果

![image-20211021230939935](http://qiniuyun.code520.com.cn//images/202110212309282.png)
