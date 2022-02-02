---
title: gin-cors
author: 周靖
img: medias/featureimages/20.jpg
top: false
cover: false
toc: true
mathjax: false
summary: gin-cors
categories: gin-cors
tags:
  - gin-cors
keywords: 周靖
essay: false
abbrlink: 23633
date: 2022-02-02 14:17:47
coverImg:
password:
---

[Golang 跨域](https://segmentfault.com/a/1190000020869645)

```go
package middlewares

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Cors ... 跨域中间件
func Cors() gin.HandlerFunc {

	return func(c *gin.Context) {
		method := c.Request.Method
		origin := c.Request.Header.Get("Origin")
		if origin != "" {
			c.Header("Access-Control-Allow-Origin", "*")
			c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
			c.Header("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization")
			c.Header("Access-Control-Allow-Credentials", "true")
			c.Set("content-type", "application/json")
		}
		//放行所有OPTIONS方法
		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		c.Next()
	}
}

```
