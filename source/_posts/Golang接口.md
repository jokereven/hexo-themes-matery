---
title: Golang接口
author: 周靖
img: medias/featureimages/12.jpg
top: false
cover: false
toc: true
mathjax: false
summary: Golang接口
categories:
  - Golang
tags:
  - Golang
  - 接口
keywords: 周靖
essay: false
abbrlink: 64420
date: 2021-10-08 21:03:39
coverImg:
password:
---

# 接口

## 接口的使用

### 定义接口

```go
package main

import "fmt"

// DefinedInterface 定义接口
type DefinedInterface interface {
 HelloWorld()
}

// DefinedStruct 定义结构体
type DefinedStruct struct {
 name string
 gender string
}

// 实现接口方法

// HelloWorld 方法名
func (STR DefinedStruct) HelloWorld() {
 fmt.Println("定义接口, 定义结构体, 实现结构方法")
 fmt.Println("Hello World")
}

func main() {
 var S DefinedInterface
 S = new(DefinedStruct)
 S.HelloWorld()
}
```

### interface 值

```go
package main

import (
 "fmt"
)

// Person 定义结构体
type Person struct {
 name string
}

// Student 定义结构体
type Student struct {
 Person
 salary float64
}

// Programmer 定义结构体
type Programmer struct {
 Person
 salary float64
}

// SayHi 方法的实现
func (p Person) SayHi() {
 fmt.Printf("我的名字叫:%s", p.name)
}

// Sing 方法的实现
func (p Person) Sing(lyrics string) {
 fmt.Println(lyrics)
}

// Programmer 对SayHi方法的实现

// SayHi 方法的重写
func (p Programmer) SayHi() {
 fmt.Printf("我的名字叫:%s,我的工资:%f", p.name, p.salary)
}
func main() {
 p := Person{"Joker Even"}
 p.SayHi()
 Pro := Programmer{Person{"Joker Even"}, 3000000}
 Pro.SayHi()
}
```

### 嵌入 interface

```go

package main

import "fmt"

type Interface interface{
 Hi()
}

type INTERFACE interface{
 Interface
}

type Test struct{

}

func (t *Test) Hi(){
 fmt.Println("OK")
}

func main(){
 var I INTERFACE
 I = new(Test)
 I.Hi()
}
```

## 接口的类型和断言

```go
package main

import "fmt"

/*

// 安全类型断言

<目标类型的值>，<布尔参数> := <表达式>.( 目标类型 )

//非安全类型断言

<目标类型的值> := <表达式>.( 目标类型 )

*/

func main() {
 var i1 interface{} = new(Student)
 s := i1.(Student) //不安全，如果断言失败，会直接panic

 fmt.Println(s)

 var i2 interface{} = new(Student)
 s, ok := i2.(Student) //安全，断言失败，也不会panic，只是ok的值为false
 if ok {
  fmt.Println(s)
 }
}

type Student struct {

}
```

### 另一种形式

```go
switch ins:=s.(type) {
    case Triangle:
        fmt.Println("三角形。。。",ins.a,ins.b,ins.c)
    case Circle:
        fmt.Println("圆形。。。。",ins.radius)
    case int:
        fmt.Println("整型数据。。")
    }
```

## type 关键字

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {

     res1 := fun1()
     fmt.Println(res1(10,20))
}

type my_fun  func (int,int)(string)

//fun1()函数的返回值是my_func类型
func fun1 () my_fun{
    fun := func(a,b int) string {
        s := strconv.Itoa(a) + strconv.Itoa(b)
        return s
    }
    return fun
}
```
