---
title: Golang方法
author: 周靖
img: medias/featureimages/18.jpg
top: false
cover: false
toc: true
mathjax: false
summary: Golang方法
categories:
  - Golang
  - 结构体
tags:
  - Golang
  - 结构体
essay: false
abbrlink: 32738
date: 2021-10-07 13:54:23
coverImg:
password:
---

# 方法

## 方法的语句

```go
package main

import "fmt"

// InitStruct 初始化结构体
type InitStruct struct {
 name   string
 gender string
}

// 方法

/*func (t Type) methodName(parameter list)(return list) {

}
func funcName(parameter list)(return list){

}*/

// DefineMethod 定义方法
func (s InitStruct) displayMethod() {
 fmt.Println(s.name)
 fmt.Println(s.gender)
}

func main() {
 method := InitStruct{
  name:   "Joker Even",
  gender: "Man",
 }
 method.displayMethod()
}
```

## 定义相同的方法

```go
package main

import (
 "fmt"
 "math"
)
// DefinedMethod 定义二个相同的方法

// round 定义圆结构体
type round struct {
 radius float64
}

// square 定义正方形结构体
type square struct {
 width  float64
 height float64
}

// DefinedMethod 定义二个相同的方法
func (r round) area() float64 {
 return r.radius * r.radius * math.Pi
}

// DefinedMethod 定义二个相同的方法
func (s square) area() float64 {
 return s.width * s.height
}

func main() {
 r1 := round{5}
 s1 := square{3, 4}
 fmt.Println(r1.area())
 fmt.Println(s1.area())
}
```

## 方法和函数

```go
package main

import (
    "fmt"
)

// Employee 定义员工结构体
type Employee struct {
    name     string
    salary   int
    currency string
}

/*
 displaySalary() method converted to function with Employee as parameter
*/
func displaySalary(e Employee) {
    fmt.Printf("Salary of %s is %s%d", e.name, e.currency, e.salary)
}

func main() {
    emp1 := Employee{
        name:     "Sam Adolf",
        salary:   5000,
        currency: "$",
    }
    displaySalary(emp1)
}
```

## 变量作用域

```go
package main

import (
    "fmt"
)

type Rectangle struct {
    width, height int
}

func (r *Rectangle) setVal() {
    r.height = 20
}

func main() {
    p := Rectangle{1, 2}
    s := p
    p.setVal()
    fmt.Println(p.height, s.height)
}

结果 20, 2
没有* 结果 2, 2
```

## 继承中的方法

### 方法继承

```go
package main

import "fmt"

// method 方法继承

// DefinedStruct 定义结构体

// Person 定义
type Person struct {
 name   string
 gender string
}

// Programmer 定义程序员结构体
type Programmer struct {
 Person
 wages float64
}

// FreeLancer 定义自由职业者结构体
type FreeLancer struct {
 Person
 wages float64
}

// DefinedMethod 定义方法
func (p *Person) DefinedMethod(){
 fmt.Println("This is Person'S Message:", p.name, p.gender)
}

func main() {
 var pro = Programmer{Person{"Joker Even", "Man"}, 30000000}
 var fre = FreeLancer{Person{"Joker Even", "Man"}, 300000000}
 pro.DefinedMethod()
 fre.DefinedMethod()
}
```

### 方法(method)的继承

```go
package main

import "fmt"

// method 方法继承

// DefinedStruct 定义结构体

// Person 定义
type Person struct {
 name   string
 gender string
}

// Programmer 定义程序员结构体
type Programmer struct {
 Person
 wages float64
}

// FreeLancer 定义自由职业者结构体
type FreeLancer struct {
 Person
 wages float64
}

// DefinedMethod 定义方法
func (p *Person) DefinedMethod() {
 fmt.Println("This is Person'S Message:", p.name, p.gender)
}

// MethodRewrite 方法的重写
// FreeLancerMethod对DefinedMethod的方法进行重写
func (f *FreeLancer) MethodRewrite() {
 fmt.Println("对DefinedMethod的方法进行重写", "My Name Is", f.name, "I am A", f.gender, "I have", f.wages, "Money")
}

func main() {
 var pro = Programmer{Person{"Joker Even", "Man"}, 30000000}
 var fre = FreeLancer{Person{"Joker Even", "Man"}, 300000000}
 pro.DefinedMethod()
 fre.DefinedMethod()
 // 进行重写之后的东西
 fre.MethodRewrite()
}
```
