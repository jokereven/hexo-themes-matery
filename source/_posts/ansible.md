---
title: ansible
author: 周靖
img: medias/featureimages/17.jpg
top: false
cover: false
toc: true
mathjax: false
summary: ansible
categories: ansible
tags:
  - ansible
keywords: 周靖
essay: false
abbrlink: 59948
date: 2021-12-24 10:14:26
coverImg:
password:
---

# use to ansible

## 使用前请 get 到网络

## 安装 ansible

```txt
1.（此处：下载阿里云官方centos7仓库）
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
2.基于epel扩展包的仓库
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
3.安装ansible
yum install -y ansible
```

## ansible 文件优先级

![image-20211220145754395](http://qiniuyun.code520.com.cn/images/20211220145754.png)

## 不同情况下 ansible 配置文件生效

![image-20211220145813464](http://qiniuyun.code520.com.cn/images/20211220145813.png)

## 编写配置文件

![image-20211220145838299](http://qiniuyun.code520.com.cn/images/20211220145838.png)

```
# inventory file
# ip是被控端
# -k 的密码是你被控端的普通用户的密码
# 这里可能需要先不带-k 需要先生成密钥之后带-k 进行连接

[web]
192.168.8.178
```

![image-20211220153958006](http://qiniuyun.code520.com.cn/images/20211220153958.png)

## 免密登入

```
配置文件中 ansible_password=你被控端的root密码
```

![image-20211220165418605](http://qiniuyun.code520.com.cn/images/20211220165418.png)

```
重新再来一次 ansible web -a "ls"
# 不需要输入密码
```

## playbook

![image-20211224100834927](http://qiniuyun.code520.com.cn/images/20211224100835.png)

## 查询文档

![image-20211224101211000](http://qiniuyun.code520.com.cn/images/20211224101211.png)

`apache.yml` 文件需要以 yml 结尾

![image-20211224101044831](http://qiniuyun.code520.com.cn/images/20211224101044.png)

`请注意格式`
