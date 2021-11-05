---
title: Go模板语法基础
author: 周靖
img: medias/featureimages/2.jpg
top: false
cover: false
toc: true
mathjax: false
summary: Go模板语法基础
categories:
  - Go模板语法基础
  - Golang
tags:
  - Go模板语法基础
  - Golang
keywords: 周靖
essay: false
abbrlink: 20086
date: 2021-11-04 11:16:05
coverImg:
password:
---

```go
package main

import (
 "fmt"
 "html/template"
 "net/http"
)

// User 定义结构体
type User struct {
 Name string
 Age  int
}

// SayHello 定义方法
func SayHello(w http.ResponseWriter, r *http.Request) {
 // 定义模板
 // 解析模板
 t, err := template.ParseFiles("./index.tmpl")
 if err != nil {
  fmt.Println("解析模板错误:", err)
  return
 }
 // 渲染模板
 u1 := User{
  Name: "Joker",
  Age:  19,
 }

 m1 := map[string]interface{}{
  "name": "Joker",
  "age":  19,
 }

 hobbyList := []string{
  "火影忍者",
  "写代码",
 }

 t.Execute(w, map[string]interface{}{
  "u1":    u1,
  "m1":    m1,
  "hobby": hobbyList,
 })
}

func main() {
 http.HandleFunc("/", SayHello)
 err := http.ListenAndServe(":8000", nil)
 if err != nil {
  fmt.Println("Http Server Start Failed:", err)
  return
 }
}

```

```tmpl
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FREE | LANCER</title>
</head>

<body>
  {{/*写注释*/}}
  <p>Hello {{ .m1.name -}}</p>
  <p>age {{ .m1.age }}</p>
  {{ $v1 := 100 }}
  {{ $age := .m1.age }}
  <hr />
  {{if $v1}}
  {{$v1}}
  {{else}}
  v1不存在
  {{end}}
  <hr />
  {{if lt .m1.age 18}}
  好好学习
  {{else}}
  好好工作
  {{end}}
  <hr />
  {{range $index, $hobby := .hobby}}
  <p> {{$index}} - {{$hobby}}</p>
  {{else}}
  空空如也
  {{end}}
  <hr />
  <p>m1</p>
  {{with .m1}}
  <p>Hello {{ .name -}}</p>
  <p>age {{ .age }}</p>
  {{end}}
</body>

</html>

```
