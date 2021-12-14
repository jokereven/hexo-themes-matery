---
title: 加速nginx网站访问
author: 周靖
img: medias/featureimages/16.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 加速nginx网站访问
categories:
  - nginx
tags:
  - nginx
keywords: 周靖
essay: false
date: 2021-12-14 16:40:49
coverImg:
password:

[参考](https://segmentfault.com/a/1190000040126050)
---

```
    # 优化日志
    location ~* \.(?:jpg|jpeg|gif|png|ico|woff2|js|css)$ {
    access_log off;
    }

    # 启动http2协议
    listen 443 ssl http2;

    # 设置缓存请求头
    location ~* \.(?:jpg|jpeg|gif|png|ico|woff2)$ {
      expires 1M;
      add_header Cache-Control "public";
    }

    # 启动Gzip压缩
    gzip on;
    gzip_types application/xml
    application/json
    text/css
    text/javascript
    application/javascript;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_min_length 500;
```
