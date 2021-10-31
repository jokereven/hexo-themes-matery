---
title: win10家庭版安装Docker
author: 周靖
img: medias/featureimages/18.jpg
top: false
cover: false
toc: true
mathjax: false
summary: win10家庭版安装Docker
categories: Docker
tags:
  - Windows
  - Docker
keywords: 周靖
essay: false
abbrlink: 17106
date: 2021-09-02 16:42:54
coverImg:
password:
---

## `windows10家庭版应该是不可以跑docker的需要专业版`

### `一. 开启 Hyper-V`

#### `1. 新建 txt 文件并将后缀改为.cmd,里面的内容如下`

```js
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*Hyper-V\*.mum >hyper-v.txt
for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del hyper-v.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL
```

#### `2. 保存后右键以管理员身份运行之后可能需要重启电脑`

`windows10 打开搜索 Hyper-V，打开启用或关闭 Windows 功能检查 Hyper-V 是否已经勾选,若未勾选,请勾选.`

### `二. 把伪装成windows专业版`

#### `1. 以管理员身份打开cmd修改注册表`

```js
REG ADD "HKEY_LOCAL_MACHINE\software\Microsoft\Windows NT\CurrentVersion"
/v EditionId /T REG_EXPAND_SZ /d Professional /F
```

### `三. 下载docker`

​[Docker 的下载](hub.docker.com)

### `四. 一步一步安装就好了`

### `五. 查看是否安装成功`

```js
>docker -v
Docker version 20.10.6, build 370c289 //ok了
```

### `六. 我遇到的坑`

#### `安装 docker 报错 Hardware assisted virtualization and data execution protection must be enabled in the BIOS`

```js
bcdedit /set hypervisorlaunchtype auto //输入 dos 命令之后重新启动一下就好了
```

#### `docker versionfaile 报错`

```js
勾选一下 General 的 Expose daemon on tcp://localhost:2375 without TLS
```

#### `安装完成后 DockerWSL 2 installation is incomplete.`

```js
根据报错提示,猜测可能是我们使用的 wsl2 版本老了,需要我们自己手动更新一下,
我们根据提示去微软官网下载最新版的 wsl2 安装后即可正常打开。
下载地址：https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
下载之后安装一下就好了;
```

#### `修改一下docker的镜像`

```js
1. docker 的 settings

2. Docker Engine

3. 修改一下 registry-mirrors(格式是 json)

   "https://registry.docker-cn.com",
   "http://hub-mirror.c.163.com",
   "https://docker.mirrors.ustc.edu.cn"(修改之后重启docker)

```
