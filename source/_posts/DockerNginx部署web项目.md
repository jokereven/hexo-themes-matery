---
title: DockerNginx部署web项目
author: 周靖
img: medias/featureimages/13.jpg
top: false
cover: false
toc: true
mathjax: false
summary: DockerNginx部署web项目
categories:
  - Docker
  - Nginx
  - 部署
tags:
  - Docker
  - Nginx
  - 部署
keywords: 周靖
essay: false
abbrlink: 45377
date: 2022-04-28 20:48:43
coverImg:
password:
---

# Docker Nginx部署web项目 二级域名访问

#### 在排查的时候遇到了这个问题8080端口一直占用着使用 lsof -i:8080端口查到pid之后 kill -9 pid 一直无法杀死

##### 参考文章:

[linux下怎么查看哪些端口被占用](https://www.php.cn/linux-426713.html)

[linux、centos通过端口号或者程名查看进程所在目录等详细信息](https://blog.csdn.net/CaptainJava/article/details/103713410)

##### 查到了之前配置的webhook没有停掉

![image-20220428205426866](https://qiniuyun.code520.com.cn/images/image-20220428205426866.png)

```shell
npm stop webhook.js
```

#### ok 问题解决

## 之前把网易云的后端Node服务跑在了服务器

​	![image-20220428205730420](https://qiniuyun.code520.com.cn/images/image-20220428205730420.png)

### 通过nginx 端口映射配置域名访问

#### 参考文档:

[用Nginx做端口转发（反向代理）](https://zhuanlan.zhihu.com/p/108740468)

#### 先到注册域名的位置搞一个二级域名

#### 这里我搞了一个 music.code520.com.cn

![image-20220428211717516](https://qiniuyun.code520.com.cn/images/image-20220428211717516.png)

#### 具体看: [用Nginx做端口转发（反向代理）](https://zhuanlan.zhihu.com/p/108740468)

![image-20220428211830169](https://qiniuyun.code520.com.cn/images/image-20220428211830169.png)

## 进入主题

[Docker nginx部署二级域名访问多个web项目](https://juejin.cn/post/6847902219812274190)

### 先使用docker 跑一个nextcloud

### about how to use docker

#### 在我博客自己搜索

#### 跟上面的一样搞一个二级域名, 通过nginx反向代理 映射到8080端口

## 访问域名

![image-20220428214532910](https://qiniuyun.code520.com.cn/images/image-20220428214532910.png)

![image-20220428214627613](https://qiniuyun.code520.com.cn/images/image-20220428214627613.png)

## 通过域名加端口的形式访问

![image-20220428214720021](https://qiniuyun.code520.com.cn/images/image-20220428214720021.png)

### 看一下文档

![image-20220428214933627](https://qiniuyun.code520.com.cn/images/image-20220428214933627.png)

### 大概就是在配置文件添加安全域名

### 进入docker 容器里面

![image-20220428214903226](https://qiniuyun.code520.com.cn/images/image-20220428214903226.png)

### 这个默认是没有vi的安装一下

[docker 在容器中安装yum等软件](https://www.jianshu.com/p/e9a354ab8caf)

![image-20220428215410120](https://qiniuyun.code520.com.cn/images/image-20220428215410120.png)

### 修该

![image-20220428215832470](https://qiniuyun.code520.com.cn/images/image-20220428215832470.png)

### 完成

![image-20220428215959399](https://qiniuyun.code520.com.cn/images/image-20220428215959399.png)

### 关于那个域名直接访问的我没有搞懂2333

