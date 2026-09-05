# test_resume

JQ Zhao 个人网站。GitHub Pages 从 `main` 分支的 `/docs` 目录托管。

预览地址：https://vanci444-hue.github.io/test_resume/

## 本地开发

```bash
npm install
npm run dev
```

## 重新构建并更新托管文件

```bash
npm run build
```

产物会写入仓库根目录的 `docs/`，并复制一份 `404.html` 以支持前端路由刷新。

## GitHub Pages 设置

1. 打开仓库 **Settings → Pages**
2. Source 选 **Deploy from a branch**
3. Branch 选 **main**，Folder 选 **/docs**
4. Save
