import os
import pandas as pd
import random
from datetime import datetime

# 1. 读取 CSV 文件（请根据实际路径替换）
csv_path = "00.csv"  # 👈 改成你的 CSV 路径
df = pd.read_csv(csv_path, usecols=["分享名", "分享地址"])

# 2. 创建输出文件夹
output_dir = "./"
os.makedirs(output_dir, exist_ok=True)

# 3. 获取当前时间
now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# 4. 遍历每一行生成 Markdown 文件
for _, row in df.iterrows():
    title = row["分享名"].strip()

    # 提取链接
    lines = row["分享地址"].split("\n")
    link_line = [l for l in lines if "https://" in l]
    link = link_line[0].replace("链接：", "").strip() if link_line else ""

    # 随机图片编号 0 - 13
    img_num = random.randint(0, 13)

    # 生成 Markdown 文件名
    safe_title = title.replace("〖", "").replace("〗", "").replace(" ", "_").replace("-", "_")
    filename = f"{safe_title}.md"
    filepath = os.path.join(output_dir, filename)

    # 写入内容
    content = f"""---
title: {title}
author: joker
img: medias/featureimages/{img_num}.jpg
top: false
cover: false
toc: true
mathjax: false
summary: {title}
categories: {title}
tags:
  - {title}
keywords: joker
essay: false
date: {now}
coverImg:
password:
---

我用夸克网盘分享了「{title}」，点击链接即可保存。打开「夸克APP」，无需下载在线播放视频，畅享原画5倍速，支持电视投屏。
链接：{link}
"""

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"✅ 成功生成 {len(df)} 个 Markdown 文件，已保存到：{output_dir}")
