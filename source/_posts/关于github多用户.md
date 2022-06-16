---
title: 关于github多用户
author: 周靖
img: medias/featureimages/11.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 关于github多用户
categories:
  - Github
  - git
tags:
  - Github
  - git
keywords: 周靖
essay: false
abbrlink: 17427
date: 2022-05-10 10:31:00
coverImg:
password:
---

# 关于github多用户代码管理

### [Git多用户配置管理器](https://blog.code520.com.cn/posts/47271.html)

一般我们把代码提交到github都会设置全局 git config，多用户管理需要先删除全局配置。

[git 删除全局配置](https://blog.csdn.net/dym755833564/article/details/90693173)

gitee and github：

[git 多用户配置](https://www.jianshu.com/p/b0264c3caade)

[如何在一台机器上管理多个 Github 账号](https://learnku.com/articles/48034)

### 细节

![](https://qiniuyun.code520.com.cn/images/image-20220510110436499.png)

### 关于配置文件

```config
Host jokereven
HostName github.com
IdentityFile C:\\Users\\jokereven\\.ssh\id_rsa_jokereven
PreferredAuthentications publickey
User jokereven

# 配置 zjiing125

Host zjing125
HostName github.com
IdentityFile C:\\Users\\jokereven\\.ssh\id_rsa_zjing125
PreferredAuthentications publickey
User zjing125
```
