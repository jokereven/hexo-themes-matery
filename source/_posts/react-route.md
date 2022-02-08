---
title: react-route
author: 周靖
img: medias/featureimages/14.jpg
top: false
cover: false
toc: true
mathjax: false
summary: react-route
categories:
  - react
  - route
tags:
  - react
  - route
keywords: 周靖
essay: false
abbrlink: 60592
date: 2022-02-08 20:35:19
coverImg:
password:
---

![image-20220208204015139](https://qiniuyun.code520.com.cn/images/20220208204015.png)

#### 又一个在线编辑器

![image-20220208204440887](https://qiniuyun.code520.com.cn/images/20220208204441.png)

react-router官方都使用vite了😺

#### `import { BrowserRouter } from "react-router-dom";`

```
首先，我们想要将你的应用连接到浏览器的URL: import BrowserRouter并渲染它围绕你的整个应用。
```

![image-20220208210120357](https://qiniuyun.code520.com.cn/images/20220208210120.png)

#### `Link`

![image-20220208210219296](https://qiniuyun.code520.com.cn/images/20220208210219.png)

```js
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
// 引入二个组件
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    // Routes 包裹所有Route
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

![image-20220208210541438](https://qiniuyun.code520.com.cn/images/20220208210541.png)

#### `嵌套Route`

```js
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    // 在Route内部嵌套Route
    // on that time App is the parent route
    // we need to render an Outlet
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

#### `we need to render an `Outlet``

`app组件`

```js
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
```

#### `匹配No Route Here`

```js
<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
     // path is *
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

#### `读取params`

```js
<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
        // path is :...
        // 同时需要添加一个 layout 到 父级invoices
        // :invoiceId -> params.invoiceId
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

#### `获得params`

```js
import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
   // :invoiceId -> params.invoiceId
  return <h2>Invoice: {params.invoiceId}</h2>;
}
```

#### `使用index Routs 解决主内容区空白问题`

```js
<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

```txt
索引路由呈现在父路由出口的父路由的路径。
当父路由匹配但其他子路由都不匹配时，索引路由匹配。
索引路由是父路由的缺省子路由。
索引路由在用户还没有单击导航列表中的某个条目时呈现。
```

[<NavLink>的介绍与使用](https://www.jianshu.com/p/fcb87e3b4da4)

#### `search params`

```javascript
import {
  NavLink,
  Outlet,
  useSearchParams
} from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter(invoice => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map(invoice => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
```

#### ` Custom Behavior`

#### `参考链接`

https://reactrouter.com/docs/en/v6

https://github.com/remix-run/react-router
