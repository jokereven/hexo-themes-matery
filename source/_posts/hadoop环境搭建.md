---
title: hadoop环境搭建
author: 周靖
img: medias/featureimages/18.jpg
top: false
cover: false
toc: true
mathjax: false
summary: hadoop
categories: hadoop
tags:
  - hadoop
keywords: 周靖
essay: false
abbrlink: 14647
date: 2022-03-31 16:58:19
coverImg:
password:
---

# hadoop环境搭建

## 食用前请配置好网络

## 安装所需要的软件包

### 安装epel-release

```shell
yum install -y epel-release
```

### 安装net-tool

```shell
yum install -y net-tools
```

### 关闭防火墙，关闭防火墙开机自启

```shell
systemctl stop firewalld
systemctl disable firewalld.service
```

### 创建atguigu用户，并修改atguigu用户的密码

```shell
useradd atguigu
passwd atguigu
```

### 配置atguigu用户具有root权限，方便后期加sudo执行root权限的命令

```shell
vim /etc/sudoers
```

#### 修改/etc/sudoers文件，在%wheel这行下面添加一行，如下所示：

```shell
%wheel  ALL=(ALL)       ALL
// 添加下面的这行
atguigu   ALL=(ALL)     NOPASSWD:ALL
```

### 在/opt目录下创建文件夹，并修改所属主和所属组

```shell
mkdir /opt/module
mkdir /opt/software
```

### 修改module、software文件夹的所有者和所属组均为atguigu用户

```shell
chown atguigu:atguigu /opt/module
chown atguigu:atguigu /opt/software
```

### 卸载虚拟机自带的JDK

```shell
rpm -qa | grep -i java | xargs -n1 rpm -e --nodeps

rpm -qa：查询所安装的所有rpm软件包
grep -i：忽略大小写
xargs -n1：表示每次只传递一个参数
rpm -e –nodeps：强制卸载软件
```

## 重新启动虚拟机

### 把刚才的虚拟机克隆几个出来

### IP如下

```shell
192.168.8.202
192.168.8.203
192.168.8.204
```

## 配置好各个虚拟机的网络

## 以下操作均在h202操作，如未说明均为202

### 修改hostname，配置hosts

```shell
vi /etc/hostname
h202
reboot
```

### 重复以上操作

### 配置hosts

```shell
vi /etc/hosts

// 添加一下内容，请参考实际情况

192.168.8.202 h202
192.168.8.203 h203
192.168.8.204 h204
```

### 安装JDK

```shell
cd /opt/software/
wget https://repo.huaweicloud.com/java/jdk/8u202-b08/jdk-8u202-linux-x64.tar.gz

tar -zxvf jdk-8u202-linux-x64.tar.gz -C /opt/module/
```

## 配置JDK环境

```shell
vi /etc/profile.d/my_env.sh

#JAVA_HOME
export JAVA_HOME=/opt/module/jdk1.8.0_202
export PATH=$PATH:$JAVA_HOME/bin
```

### 使配置文件生效

```shell
source /etc/profile
```

### 查看JDK是否OK

```shell
java -version

// 如果没有成功reboot之后重新尝试
```

## 安装Hadoop

```shell
cd /opt/software/
wget https://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/common/hadoop-3.2.3/hadoop-3.2.3.tar.gz --no-check-certificate

tar -zxvf hadoop-3.2.3.tar.gz -C /opt/module/
```

### 配置Hadoop环境

```shell
vi /etc/profile.d/my_env.sh

// 添加一下内容
#HADOOP_HOME
export HADOOP_HOME=/opt/module/hadoop-3.2.3
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
```

### 使配置文件生效

```shell
source /etc/profile
```

### 查看Hadoop是否OK

```shell
hadoop version
```

#### 先给202拍个快照

## Hadoop运行模式

```shell
本地模式：单机运行，只是用来演示一下官方案例。生产环境不用。
伪分布式模式：也是单机运行，但是具备Hadoop集群的所有功能，一台服务器模拟一个分布式的环境。个别缺钱的公司用来测试，生产环境不用。
完全分布式模式：多台服务器组成分布式环境。生产环境使用。
```

### 本地运行模式

![image-20220331122624939](https://qiniuyun.code520.com.cn/images/image-20220331122624939.png)

### 在Hadoop的安装Path创建一个wcinput文件夹

![](https://qiniuyun.code520.com.cn/images/image-20220331122857824.png)

##### word.txt

```txt
=hadoop yarn
hadoop mapreduce
atguigu
atguigu
```

![image-20220331123012956](https://qiniuyun.code520.com.cn/images/image-20220331123012956.png)

![image-20220331123235451](https://qiniuyun.code520.com.cn/images/image-20220331123235451.png)

```shell
./bin/hadoop jar share/hadoop/mapreduce/ wordcount wcinput wcoutput
```

![image-20220331123306693](https://qiniuyun.code520.com.cn/images/image-20220331123306693.png)

```shell
cat wcoutput/part-r-00000
```

## 完全分布式运行模式

### 编写集群分发脚本xsync

```shell
sudo chown atguigu:atguigu -R /opt/module
```

### 把202的jdk复制到203

![image-20220331123831951](https://qiniuyun.code520.com.cn/images/image-20220331123831951.png)

```shell
scp -r /opt/module/jdk1.8.0_202/  atguigu@h203:/opt/module
```

### 把202的Hadoop复制到203

```
...
```

### 把203的JDK和Hadoop复制到204

![image-20220331124338599](https://qiniuyun.code520.com.cn/images/image-20220331124338599.png)

#### 删除203中的wcinput

![image-20220331125148806](https://qiniuyun.code520.com.cn/images/image-20220331125148806.png)

### 把202的Hadoop同步到203

```txt
rsync和scp区别：用rsync做文件的复制要比scp的速度快，rsync只对差异文件做更新。scp是把所有文件都复制过去。
```

![image-20220331125709939](https://qiniuyun.code520.com.cn/images/image-20220331125709939.png)

```shell
rsync -av hadoop-3.2.3/ atguigu@h203:/opt/module/hadoop-3.2.3/
```

![image-20220331125927700](https://qiniuyun.code520.com.cn/images/image-20220331125927700.png)

##### xsync

```shell
#!/bin/bash

#1. 判断参数个数
if [ $# -lt 1 ]
then
    echo Not Enough Arguement!
    exit;
fi

#2. 遍历集群所有机器
for host in h202 h203 h204
do
    echo ====================  $host  ====================
    #3. 遍历所有目录，挨个发送

    for file in $@
    do
        #4. 判断文件是否存在
        if [ -e $file ]
            then
                #5. 获取父目录
                pdir=$(cd -P $(dirname $file); pwd)

                #6. 获取当前文件的名称
                fname=$(basename $file)
                ssh $host "mkdir -p $pdir"
                rsync -av $pdir/$fname $host:$pdir
            else
                echo $file does not exists!
        fi
    done
done
```



### 这里要注意一下

![image-20220331130037093](https://qiniuyun.code520.com.cn/images/image-20220331130037093.png)

#### 修改脚本 xsync 具有执行权限

```shell
chmod +x xsync
```

#### 测试脚本

```shell
 ./xsync /home/atguigu/bin
```

![image-20220331130326293](https://qiniuyun.code520.com.cn/images/image-20220331130326293.png)

```shell
将脚本复制到/bin中，以便全局调用
[atguigu@h202 bin]$ sudo cp xsync /bin/
（e）同步环境变量配置（root所有者）
[atguigu@h202 ~]$ sudo ./bin/xsync /etc/profile.d/my_env.sh
注意:如果用了sudo,那么xsync一定要给它的路径补全.
```

![image-20220331130549202](https://qiniuyun.code520.com.cn/images/image-20220331130549202.png)

#### 使环境变量生效

```shell
source /etc/profile
```

## SSH无密登录配置

![image-20220331130817655](https://qiniuyun.code520.com.cn/images/image-20220331130817655.png)

```shell
ssh-keygen -t rsa
```

![image-20220331131640154](https://qiniuyun.code520.com.cn/images/image-20220331131640154.png)

![image-20220331131722311](https://qiniuyun.code520.com.cn/images/image-20220331131722311.png)

### 将公钥拷贝到要免密登录的目标机器上

![image-20220331131850617](https://qiniuyun.code520.com.cn/images/image-20220331131850617.png)

### 配置集群

#### 核心配置文件 core-site.xml

```shell
cd $HADOOP_HOME/etc/hadoop
vim core-site.xml
```

##### core-site.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

<configuration>
    <!-- 指定NameNode的地址 -->
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://h202:8020</value>
    </property>

    <!-- 指定hadoop数据的存储目录 -->
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/opt/module/hadoop-3.2.3/data</value>
    </property>

    <!-- 配置HDFS网页登录使用的静态用户为atguigu -->
    <property>
        <name>hadoop.http.staticuser.user</name>
        <value>atguigu</value>
    </property>
</configuration>
```

### HDFS配置文件

##### hdfs-site.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

<configuration>
	<!-- nn web端访问地址-->
	<property>
        <name>dfs.namenode.http-address</name>
        <value>h202:9870</value>
    </property>
	<!-- 2nn web端访问地址-->
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>h204:9868</value>
    </property>
</configuration>
```

### YARN配置文件

##### yarn-site.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

<configuration>
    <!-- 指定MR走shuffle -->
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
    </property>

    <!-- 指定ResourceManager的地址-->
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>h203</value>
    </property>

    <!-- 环境变量的继承 -->
    <property>
        <name>yarn.nodemanager.env-whitelist</name>
        <value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME</value>
    </property>
</configuration>
```

### MapReduce配置文件

##### mapred-site.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

<configuration>
	<!-- 指定MapReduce程序运行在Yarn上 -->
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
</configuration>
```

### 在集群上分发配置好的Hadoop配置文件

```shell
xsync /opt/module/hadoop-3.2.3/etc/hadoop/
```

![image-20220331132809543](https://qiniuyun.code520.com.cn/images/image-20220331132809543.png)

### 查看分发情况

![image-20220331132919185](https://qiniuyun.code520.com.cn/images/image-20220331132919185.png)

## 群起集群

### 配置workers

#### 这个操作是在202搞错了2333

![image-20220331133122710](https://qiniuyun.code520.com.cn/images/image-20220331133122710.png)

### 添加

![image-20220331133139598](https://qiniuyun.code520.com.cn/images/image-20220331133139598.png)

### 同步所有节点配置文件

![image-20220331133401328](https://qiniuyun.code520.com.cn/images/image-20220331133401328.png)

### 启动集群

![image-20220331133503934](https://qiniuyun.code520.com.cn/images/image-20220331133503934.png)

![image-20220331133521365](https://qiniuyun.code520.com.cn/images/image-20220331133521365.png)

### 出现了报错

##### core-site.xml有问题

#### 删除注释, 把最上面的空行删除,ok

![image-20220331133620843](https://qiniuyun.code520.com.cn/images/image-20220331133620843.png)

### 重新执行

![image-20220331134853746](https://qiniuyun.code520.com.cn/images/image-20220331134853746.png)

### 以同样的方式处理hdfs-site.xml

![image-20220331134955343](https://qiniuyun.code520.com.cn/images/image-20220331134955343.png)

### 一样

![image-20220331135033808](https://qiniuyun.code520.com.cn/images/image-20220331135033808.png)

![image-20220331135107495](https://qiniuyun.code520.com.cn/images/image-20220331135107495.png)

### ok

### 启动HDFS

```shell
sbin/start-dfs.sh
```

![image-20220331135239888](https://qiniuyun.code520.com.cn/images/image-20220331135239888.png)

### [`安装hadoop3.0版本踩坑`](https://blog.csdn.net/qq_32635069/article/details/80859790)

![image-20220331135535569](https://qiniuyun.code520.com.cn/images/image-20220331135535569.png)

![image-20220331135615690](https://qiniuyun.code520.com.cn/images/image-20220331135615690.png)

### 启动HDFS

```shell
sbin/start-dfs.sh
```

### 启动YARN

```shell
sbin/start-yarn.sh
```

### ok

![image-20220331135805091](https://qiniuyun.code520.com.cn/images/image-20220331135805091.png)

### 这里好像拒绝访问了

### 把密钥通过root用户重新生成并拷贝

### 重新执行上面的操作

![image-20220331141121700](https://qiniuyun.code520.com.cn/images/image-20220331141121700.png)

![image-20220331152250361](https://qiniuyun.code520.com.cn/images/image-20220331152250361.png)

### 这遇到了一些问题

参考链接:

[hadoop 的启动和停止命令(史上最全)](https://blog.csdn.net/xianpanjia4616/article/details/87696925)

[安装hadoop3.0版本踩坑](https://blog.csdn.net/qq_32635069/article/details/80859790)

[./start-dfs.sh 启动错误 ERROR: Cannot set priority of datanode process xxxxx](https://blog.csdn.net/qq_44226094/article/details/121296169)

[hadoop 3.x 启动过程中 Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).](https://blog.csdn.net/wz_TXWY/article/details/89678017)

[Yarn Web页面 8088 端口在Windows浏览器无法访问](https://blog.csdn.net/qq_22310551/article/details/82864966)

### 做到这里感觉过于复杂于是想用docker跑一套Hadoop分布式

#### 后面就先不搞了

以上参考: [尚硅谷大数据技术之Hadoop（入门）V3.3.docx   ](http://file.code520.com.cn/Hadoop/%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89V3.3.docx)



# Docker搭建Hadoop环境

视频: [Docker上搭建分布式Hadoop学习环境](https://www.bilibili.com/video/BV1M541157Mn)

Github: [[hadoop-cluster-docker](https://github.com/kiwenlau/hadoop-cluster-docker)]

Blog: [基于Docker搭建Hadoop集群之升级版](https://kiwenlau.com/2016/06/12/160612-hadoop-cluster-docker-update/)



![image-20220331164812420](https://qiniuyun.code520.com.cn/images/image-20220331164812420.png)

![image-20220331164836701](https://qiniuyun.code520.com.cn/images/image-20220331164836701.png)

### 这里有一个问题虚拟机重新启动后需要重新启动hadoop

#### 看上面博客的文章

![image-20220406102823549](https://qiniuyun.code520.com.cn/images/image-20220406102823549.png)
