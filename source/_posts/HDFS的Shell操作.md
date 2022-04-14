---
title: HDFS的Shell操作
author: 周靖
img: medias/featureimages/9.jpg
top: false
cover: false
toc: true
mathjax: false
summary: HDFS的Shell操作
categories: HDFS
tags:
  - HDFS
keywords: 周靖
essay: false
abbrlink: 32945
date: 2022-04-07 09:20:46
coverImg:
password:
---

# HDFS的Shell操作(开发重点)

## 以之前的Hadoop环境为基础

[hadoop环境搭建](https://blog.code520.com.cn/posts/14647.html)

## 把之前的用docker启的Hadoop环境启动

![image-20220405163910373](https://qiniuyun.code520.com.cn/images/image-20220405163910373.png)

![image-20220405164435659](https://qiniuyun.code520.com.cn/images/image-20220405164435659.png)

> STATUS为Exited(退出)

![image-20220405164843479](https://qiniuyun.code520.com.cn/images/image-20220405164843479.png)

### 现在8088端口和50070端口访问不了2333, 可能是防火墙, 还是其他的什么问题2333.

[文档](https://kiwenlau.com/2016/06/12/160612-hadoop-cluster-docker-update/)

> 重新把之前的搭一遍关于上面的问题之后在解决

进入到那个叫hadoop-master的docker环境里面把hadoop启动

![image-20220407130705346](https://qiniuyun.code520.com.cn/images/image-20220407130705346.png)

## 基础语法

![image-20220405174518522](https://qiniuyun.code520.com.cn/images/image-20220405174518522.png)

### 准备工作

##### 创建/sanguo文件夹

```shell
root@hadoop-master:~# hadoop fs -mkdir /sanguo
```

### 上传

#### -moveFromLocal：从本地剪切粘贴到HDFS

```shell
root@hadoop-master:~# vi shuguo.txt

写入
shuguo

root@hadoop-master:~# hadoop fs  -moveFromLocal  ./shuguo.txt  /sanguo
```

### -put：等同于copyFromLocal，生产环境更习惯用put

```shell
root@hadoop-master:~# vi wuguo.txt

写入
wuguo

root@hadoop-master:~# hadoop fs -put ./wuguo.txt /sanguo
```

### -appendToFile：追加一个文件到已经存在的文件末尾

```shell
root@hadoop-master:~# vi liubei.txt

写入
liubei

root@hadoop-master:~# hadoop fs -appendToFile liubei.txt /sanguo/shuguo.txt
```

## 下载

### -copyToLocal：从HDFS拷贝到本地

```shell
root@hadoop-master:~# ls
hdfs  input  liubei.txt  run-wordcount.sh  start-hadoop.sh  wuguo.txt
root@hadoop-master:~# hadoop fs -copyToLocal /sanguo/shuguo.txt ./
root@hadoop-master:~# ls
hdfs  input  liubei.txt  run-wordcount.sh  shuguo.txt  start-hadoop.sh  wuguo.txt
root@hadoop-master:~# cat shuguo.txt 
shuguo
liubei
root@hadoop-master:~#  
```

![image-20220405175542971](https://qiniuyun.code520.com.cn/images/image-20220405175542971.png)

### HDFS直接操作

![image-20220405175708786](https://qiniuyun.code520.com.cn/images/image-20220405175708786.png)

![image-20220405175726524](https://qiniuyun.code520.com.cn/images/image-20220405175726524.png)

### 这里的操作就不截图了

```shell
1）-ls: 显示目录信息
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -ls /sanguo

2）-cat：显示文件内容
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -cat /sanguo/shuguo.txt

3）-chgrp、-chmod、-chown：Linux文件系统中的用法一样，修改文件所属权限
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs  -chmod 666  /sanguo/shuguo.txt
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs  -chown  atguigu:atguigu   /sanguo/shuguo.txt

4）-mkdir：创建路径
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -mkdir /jinguo

5）-cp：从HDFS的一个路径拷贝到HDFS的另一个路径
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -cp /sanguo/shuguo.txt /jinguo

6）-mv：在HDFS目录中移动文件
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -mv /sanguo/wuguo.txt /jinguo
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -mv /sanguo/weiguo.txt /jinguo

7）-tail：显示一个文件的末尾1kb的数据
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -tail /jinguo/shuguo.txt

8）-rm：删除文件或文件夹
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -rm /sanguo/shuguo.txt

9）-rm -r：递归删除目录及目录里面内容
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -rm -r /sanguo

10）-du统计文件夹的大小信息
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -du -s -h /jinguo
27  81  /jinguo
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -du  -h /jinguo
14  42  /jinguo/shuguo.txt
7   21   /jinguo/weiguo.txt
6   18   /jinguo/wuguo.tx
	说明：27表示文件大小；81表示27*3个副本；/jinguo表示查看的目录

11）-setrep：设置HDFS中文件的副本数量
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop fs -setrep 10 /jinguo/shuguo.txt

这里设置的副本数只是记录在NameNode的元数据中，是否真的会有这么多副本，还得看DataNode的数量。因为目前只有3台设备，最多也就3个副本，只有节点数的增加到10台时，副本数才能达到10。
```

### HDFS的API操作

#### Windows搭建Hadoop环境

参考链接:

[windows 安装、配置 hadoop 3.x](https://juejin.cn/post/6856675971573219342)

[Win10中搭建Hadoop环境](https://zhuanlan.zhihu.com/p/29362852)

![image-20220406110902937](https://qiniuyun.code520.com.cn/images/image-20220406110902937.png)

### 在IDEA中创建一个Maven工程HdfsClientDemo，并导入相应的依赖坐标+日志添加

[maven的下载与安装教程（超详细）](https://blog.csdn.net/u012660464/article/details/114113349)

[IDEA中创建maven项目详细步骤，很清晰](https://blog.csdn.net/u012660464/article/details/114093066)

### 通过maven导入时不需要手动引入jar包

##### pom.xml 开始会报错

#### maven可以自动导入jar包

#### 最终效果

![image-20220406194221937](https://qiniuyun.code520.com.cn/images/image-20220406194221937.png)

#### 这里参考

[IDEA中创建maven项目详细步骤，很清晰](https://blog.csdn.net/u012660464/article/details/114093066)

[idea的pom.xml文件中所有的标签都报错](https://blog.csdn.net/weixin_43564923/article/details/109450279)

[在IDEA中创建maven项目编写java代码操作HDFS集群](https://blog.csdn.net/a1786742005/article/details/104148766)

[idea中maven项目出现"Cannot resolve jdk.tools:jdk.tools:1.7"](https://www.write1bug.cn/archives/idea%E4%B8%ADmaven%E9%A1%B9%E7%9B%AE%E5%87%BA%E7%8E%B0cannotresolvejdktoolsjdktools17)

[[Idea基于Maven配置多JDK版本](https://segmentfault.com/a/1190000018708356)]

#### 这里报错了需要下载 winutils

下载链接: https://github.com/cdarlint/winutils

参考文档下载:

https://jokereven.lanzouf.com/b030wonud
密码:aqth
