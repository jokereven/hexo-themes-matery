---
title: CLD
author: 周靖
img: medias/featureimages/22.jpg
top: false
cover: false
toc: true
mathjax: false
summary: CLD
categories:
  - Golang
  - CLD
tags:
  - Golang
  - CLD
keywords: 周靖
essay: false
abbrlink: 36931
date: 2021-10-09 17:54:16
coverImg:
password:
---

# CLD

## 今天我们来聊一聊CLD

## 在常见的大型 Web 项目中

## 我们应该使用怎样的布局

#### 流行的Web框架大多数是MVC框架，MVC这个概念最早由Trygve Reenskaug在1978年提出，为了能够对GUI类型的应用进行方便扩展，将程序划分为：

#### 1. Model(模型)

#### 2. View(视图)

#### 3. Controller(控制器)

##### 这就组成了MVC



##### 随着时代的发展前端也越来越复杂化，后端代码也只剩下 Model and Controller

##### 前后端之间通过Ajax来进行数据交互

##### 现在也有比较成熟的解决方法

![image-20211010152646052](http://qiniuyun.code520.com.cn//images/202110101526590.png)

## 那么CLD是怎么一回事

#### 对于复杂的项目，一个Controller(控制器)和一个M(模型层)层显然是不够用的，现在比较流行的纯后端API模块一般采用下述划分方法：

##### 1. Controller，与上述类似，服务入口，负责处理路由，参数校验，请求转发。

##### 2. Logic/Service，逻辑（服务）层，一般是业务逻辑的入口，可以认为从这里开始，所有的请求参数一定是合法的。业务逻辑和业务流程也都在这一层中。常见的设计中会将该层称为 Business Rules。

##### 3. DAO/Repository，这一层主要负责和数据、存储打交道。将下层存储以更简单的函数、接口形式暴露给 Logic 层来使用。负责数据的持久化工作。

![image-20211010153401531](http://qiniuyun.code520.com.cn//images/202110101534902.png)
