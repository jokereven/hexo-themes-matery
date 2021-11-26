---
title: RESTful
author: 周靖
img: medias/featureimages/8.jpg
top: false
cover: false
toc: true
mathjax: false
summary: RESTful
categories:
  - Golang
tags:
  - RESTful
  - Golang
keywords: 周靖
essay: false
abbrlink: 52783
date: 2021-11-03 21:07:47
coverImg:
password:
---

```go
package main

import (
 "net/http"

 "github.com/gin-gonic/gin"
)

// Gin 框架的使用

func sayHello(c *gin.Context) {
 c.JSON(200, gin.H{
  "massage": "Hello World",
 })
}

// CreateBook 创造Book
func CreateBook(c *gin.Context) {
 c.JSON(200, gin.H{
  "massage": "create a book",
 })
}

// UpdateBook 更新Book
func UpdateBook(c *gin.Context) {
 c.JSON(200, gin.H{
  "massage": "update a book",
 })
}

// DeleteBook 删除Book
func DeleteBook(c *gin.Context) {
 c.JSON(200, gin.H{
  "massage": "Delete a Book",
 })
}

func main() {
 r := gin.Default() //返回默认的路由引擎

 // 指定用户使用Get请求访问/hello，执行sayHello这个函数
 // r.GET("/hello", sayHello)

 // r.GET("/create", CreateBook)
 // r.GET("/update", UpdateBook)
 // r.GET("/delete", DeleteBook)

 // Start Serve
 // r.Run()

 // RESTful API

 r.GET("/book", func(c *gin.Context) {
  c.JSON(200, gin.H{
   "method": "GET",
  })
 })

 r.POST("/book", func(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{
   "method": "POST",
  })
 })

 r.PUT("/book", func(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{
   "method": "PUT",
  })
 })

 r.DELETE("/book", func(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{
   "method": "DELETE",
  })
 })
 // Start On Assign Port
 r.Run(":8000")
}

```
