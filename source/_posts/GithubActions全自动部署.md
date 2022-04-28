---
title: GithubActions全自动部署
author: 周靖
img: medias/featureimages/7.jpg
top: false
cover: false
toc: true
mathjax: false
summary: GithubActions全自动部署
categories:
  - Actions
  - 全自动部署
  - CICD
tags:
  - Github
  - Actions
  - 全自动部署
  - CICD
keywords: 周靖
essay: false
abbrlink: 23304
date: 2022-05-02 09:18:01
coverImg:
password:
---

# GithubActions全自动部署

#### 接上文[Jenkins环境搭建](https://blog.code520.com.cn/posts/34776.html)觉得那东西有点太重了，感觉没那个必要，学习成本有点高2333。

###### 参考文档：

###### [项目部署解决方案](http://www.jimmyxuexue.top:999/article/%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2.html)

###### [windows配置ssh免密登录linux](https://www.cnblogs.com/caibaotimes/p/14194044.html)

###### [使用 GitHub Actions 将 VuePress 自动部署到 Github Pages](https://juejin.cn/post/7045099697156915208)

###### 遇到的问题：

https://github.com/easingthemes/ssh-deploy/issues/34

https://github.com/easingthemes/ssh-deploy/issues/23

#### 搞了好几个小时终于成功了

![image-20220502093329044](https://qiniuyun.code520.com.cn/images/image-20220502093329044.png)

### 那个私钥是没.pub的那个记得加个换行

![image-20220502093525253](https://qiniuyun.code520.com.cn/images/image-20220502093525253.png)

##### 代码地址：[https://github.com/jokereven/vuepress/](https://github.com/jokereven/vuepress/)
