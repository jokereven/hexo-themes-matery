---
title: Golang结构体
author: 周靖
img: medias/featureimages/21.jpg
top: false
cover: false
toc: true
mathjax: false
summary: Golang结构体
categories:
  - Golang
  - 结构体
tags:
  - Golang
  - 结构体
keywords: 周靖
essay: false
abbrlink: 58653
date: 2021-10-06 17:47:40
coverImg:
password:
---

# 结构体

## 结构体的初步使用

```go
package main

import "fmt"

// DefineStruct 定义结构体
type DefineStruct struct {
 name   string
 gender string
}

// PersonStruct 定义Persson结构体
type PersonStruct struct {
 name   string
 gender string
}

func main() {
 // StructName 变量的声明
 StructName := DefineStruct{"Joker Xue", "Man"}
 fmt.Println(StructName)

 // IninStruct 初始化结构体
 P := PersonStruct{"Joker Even", "Man"}
 fmt.Println(P)

 // VisitStruct 访问结构体
 var PersonOne PersonStruct
 var PersonTwo PersonStruct

 // 定义 PersonOne
 PersonOne.name = "Joker Xue"
 PersonOne.gender = "Man"

 // 定义PersonTwo结构体
 PersonTwo.name = "Joker Even"
 PersonTwo.gender = "Man"

 // 打印PersonOne And PersonTwo
 fmt.Printf("PersonOne'S Name: %s\n", PersonOne.name)
 fmt.Printf("PersonOne'S gender: %s\n", PersonOne.gender)
 fmt.Printf("PersonTwo'S Name: %s\n", PersonOne.name)
 fmt.Printf("PersonTwo'S gender: %s\n",PersonTwo.gender)
}
```

## 结构体指针

```go
package main

import "fmt"

// Books 定义结构体
type Books struct {
 title  string
 author string
}

func main() {
 var Book1 Books
 var Book2 Books
 // description 描述
 // Book1
 Book1.title = "GOLANG ROADMAP"
 Book1.author = "谭先生"
 // Book2
 Book2.title = "Algorithm-Pattern"
 Book2.author = "Introduction"

 // 打印 Book1信息
 PrintBook(&Book1)

 // 打印 Book2的信息
 PrintBook(&Book2)
}

// PrintBook 打印Book信息
func PrintBook(book *Books) {
 fmt.Printf("Book Title: %s\n", book.title)
 fmt.Printf("Book Author: %s\n", book.author)
}
```

## 结构体的嵌套

### 结构体的匿名字段

```go
package main

import "fmt"

// PersonStruct 定义Person结构体
type PersonStruct struct {
 name   string
 gender bool
}

// StudentStruct 定义StudentStruct结构体
type StudentStruct struct {
 // 在StudentStruct结构体中嵌套PersonStruct结构体
 PersonStruct
 class string
}

func main() {
 // 初始化一个学生
 Joker := StudentStruct{PersonStruct{"Joker Even", true}, "软件20301"}
 // 范文Joker
 fmt.Printf("Joker'S Class: %s\n", Joker.class)
 // 修改信息
 Joker.class = "人工智能21301"
 fmt.Printf("Joker'S Class: %s\n", Joker.class)
}
```

### 结构体嵌套

```go
package main

import "fmt"

// ninjaVillage 定义忍术村结构体
type ninjaVillage struct {
 where string
}

// ninja 定义忍者结构体
type ninja struct {
 name    string
 grade   string
 address ninjaVillage
}

func main() {
 var kakasasi ninja
 kakasasi.name = "卡卡西"
 kakasasi.grade = "火影"
 kakasasi.address = ninjaVillage{
  where: "木叶村",
 }
 fmt.Println(kakasasi)
}
```

### 导出结构体和字段

#### 这里有些坑

```go
请先看一下Golang项目目录结构
```

```go
使用Golang命令初始化项目
在src目录下
go mod init "github.com/jokereven/golang-review"
```

```go
目录结构
src
  structs
      computer
          spec.go
      main.go
```

```go
在computer文件夹下创建spec.go

package computer


// Spec
type Spec struct { //exported struct
    Maker string //exported field
}
```

```go
创建main.go文件

package main

import "structs/computer"
import "fmt"

func main() {
    var spec computer.Spec
    spec.Maker = "apple"
    fmt.Println("Spec:", spec)
}
```

### 结构体是值类型

```go
package main

import "fmt"

// 结构体是值类型

type name struct {
 firstName string
 lastName  string
}

func main() {
 name1 := name{"Joker", "Even"}
 name2 := name{"Joker", "Even"}
 if name1 == name2 {
  fmt.Println("ok")
 } else {
  fmt.Println("not ok")
 }
 name3 := name{"Joker", "Xue"}
 name4 := name{}
 if name3 == name4 {
  fmt.Println("ok")
 }else{
  fmt.Println("not ok")
 }
}
```

<!-- 如果结构变量包含的字段是不可比较的，那么结构变量是不可比较的 -->

```go
package main

import "fmt"

type image struct {
 data map[int]int
}

func main() {
 image1 := image{data: map[int]int{
  0: 996,
 }}
 image2 := image{data: map[int]int{
  1: 1024,
 }}
 // 不可比较
 if image1 == image2 {
  fmt.Println("ok")
 }
}
```

### 结构体作为函数的参数

```go
package main

import "fmt"

type person struct {
 name   string
 gender string
}

// 结构体作为函数的参数
func main() {
 var Person1 person
 var Person2 person

 // Person1
 Person1.name = "Joker"
 Person2.gender = "Man"

 // Person2
 Person2.name = "STEVE"
 Person2.gender = "Man"

 PrintPerson(Person1)

 PrintPerson(Person2)
}

// PrintPerson 打印个人信息
func PrintPerson(people person) {
 fmt.Println("Person1 name:", people.name)
 fmt.Println("Person1 gender:", people.gender)
}
```
