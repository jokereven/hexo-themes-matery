---
title: PowershellUseVim
author: 周靖
img: medias/featureimages/22.jpg
top: false
cover: false
toc: true
mathjax: false
summary: PowershellUseVim
categories: PowershellUseVim
tags:
  - PowershellUseVim
keywords: 周靖
essay: false
abbrlink: 11603
date: 2021-12-26 12:38:30
coverImg:
password:
---

## use the vim in the Powershell

### 确保你已经安装了 git

```txt
C:\Windows\System32\WindowsPowerShell\v1.0 (你powershell安装的位置)
创建一个 profile.ps1文件
```

```profile.psl
$SCRIPTPATH = "E:\install\Git\usr\share\vim"    # 此行根据$VIMPATH寻找相应vim路径即可
$VIMPATH    = "E:\install\Git\usr\bin\vim.exe"  # git安装位置下vim的

Set-Alias vi   $VIMPATH
Set-Alias vim  $VIMPATH

# for editing your PowerShell profile
Function Edit-Profile
{
    vim $profile
}

# for editing your Vim settings
Function Edit-Vimrc
{
    vim $home\_vimrc
}
```

## 激活配置

```txt
以管理员身份运行powershell
Set-ExecutionPolicy RemoteSigned
```
