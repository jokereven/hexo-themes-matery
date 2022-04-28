---
title: Jenkins环境搭建
author: 周靖
img: medias/featureimages/13.jpg
top: false
cover: false
toc: true
mathjax: false
summary: Jenkins环境搭建
categories:
  - Jenkins
  - 环境搭建
  - CICD
tags:
  - Jenkins
  - 环境搭建
  - CICD
keywords: 周靖
essay: false
abbrlink: 34776
date: 2022-04-30 15:35:28
coverImg:
password:
---

# Jenkins环境搭建

### 这不大二快玩了准备大二暑假搞一下前端(React)方向的实习，准备搭一个文档类的网站，之前使用[docsify](https://github.com/docsifyjs/docsify)搭建过一个@[doc](doc.code520.com.cn)准备搞个不一样的东西，https://docusaurus.io(React)，https://vuepress.vuejs.org/zh(Vue)。

#### 于是准备用vuepress搭一个，直接到Github上找了个模板：https://github.com/git-Where/vuepress_base，看了一下作者的配置，有个叫travis.yml跟deploy.sh的文件(看来是自动化部署的文件2333);

travis官网：[https://www.travis-ci.com](https://www.travis-ci.com)

[基于Travis CI + PM2 实现NodeJS 应用的持续集成和部署](http://kmanong.top/kmn/qxw/form/article?id=84608&cate=58)

[持续集成与持续部署（五）02-TravisCI——配置Node.js应用-.travis.yml文件配置](https://blog.csdn.net/weixin_44867717/article/details/123436269)

![image-20220430155103981](https://qiniuyun.code520.com.cn/images/image-20220430155103981.png)

### 之前在搭建博客的时候了解到gitee有个叫Gitee Pages的的东西

#### Github 也有之类的东西叫 Github Pages在setting里面

![image-20220430160203683](https://qiniuyun.code520.com.cn/images/image-20220430160203683.png)

![image-20220430160037224](https://qiniuyun.code520.com.cn/images/image-20220430160037224.png)

### 看一下Gitee的DevOps都有什么东西

[一文理解什么是DevOps，通俗易懂白话文](https://juejin.cn/post/6934872015991996429)

### 想了解的自己看一下文档

## 进入正题 开始整Jenkins

#### 参考文档:

Jenkins 插件: https://gitee.com/help/articles/4193#article-header10

jenkins前端自动化部署（windows）: https://juejin.cn/post/6969765322551197733

Jenkins无法从命令行或调试程序启动服务: https://blog.csdn.net/you23hai45/article/details/79644176

### 这里我的Jenkins 一直安装不成功

##### 我jdk是17把11的jdk压缩包下载下来了, 在安装的时候选择还是不行报错好像是jdk的问题，搞了好几次都不行，版本之前搞过多版本管理感觉麻烦(搞idea的时候应为版本代码一直报错就没搞多版本管理，有什么好的方案可以说一下)就没搞，准备用docker搭一套2333。

#### 使用Docker搭建Jenkins环境

[[Docker + Jenkins 部署完整node项目](https://segmentfault.com/a/1190000021462867)]

[超详细 Docker 安装Jenkins（避坑！！！）](https://juejin.cn/post/6862497968973742094)

[[linux 下的安装maven](https://segmentfault.com/a/1190000040181909)]

[Jenkenis报错：该jenkins实例似乎已离线](https://www.cnblogs.com/weifeng1463/p/11186246.html)

###  效果

![image-20220430213437922](https://qiniuyun.code520.com.cn/images/image-20220430213437922.png)

### 这个安装插件好多都没安装上2333

![image-20220430215735462](https://qiniuyun.code520.com.cn/images/image-20220430215735462.png)

## 关于Github的CICD

#### 之前搞过Github的hook就是类似一个监听你提交代码就执行的东西2333

[Docker+Nginx的CICD](http://www.jimmyxuexue.top:999/article/%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2.html)

[自动部署](https://github.com/fuzhengwei/guide-webhooks)

[视频](https://www.bilibili.com/video/BV11S4y1d7hS)

[使用Github的 WebHooks 进行网站自动化部署](https://segmentfault.com/a/1190000016071010)

[使用Github的webhooks进行网站自动化部署](https://jelly.jd.com/article/6006b1025b6c6a01506c878a)

#### 还有一个是Github Actions

![image-20220430161321723](https://qiniuyun.code520.com.cn/images/image-20220430161321723.png)

[GitHub-Actions](https://blog.code520.com.cn/posts/32732.html)
