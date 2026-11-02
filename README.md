# CaseFlow 官网

CaseFlow（AgileTC）的官方静态站点。CaseFlow 是一个基于思维导图的多人实时协作测试用例管理平台。

站点为原生 HTML / CSS / JavaScript，无构建步骤，可直接部署到任意静态托管服务。

## 本地预览

```bash
cd caseflow-website
python3 -m http.server 4173
```

打开 `http://localhost:4173`。不要直接双击 `index.html`：部分浏览器会因 `file://` 限制无法加载本地字体。

## 目录结构

```text
index.html                页面结构与全部中文文案
styles.css                视觉系统、布局与响应式断点
script.js                 导航、设计/执行切换、协作回放、复制命令
assets/                   字体、Logo、产品截图、favicon
PRODUCT.md                产品定位、用户、能力与事实边界
DESIGN.md                 视觉世界、颜色、字体、形状与组件规范
.impeccable/              设计决策、页面简报与审阅截图（本地状态，不入库）
```

## 部署

将整个目录上传到任意静态托管即可，无需构建：

- GitHub Pages：发布仓库根目录
- Cloudflare Pages / Netlify / Vercel：构建命令留空，输出目录为根目录
- 自有服务器：用 Nginx 托管该目录

所有资源引用均为相对路径，可直接部署在子路径（例如 `https://example.com/caseflow/`）。

公开部署前请先满足 HTTPS 与访问控制要求；当前页面不包含统计脚本、Cookie 或表单提交。

## 内容边界

- 页面中的 10 条用例、执行结果、通过率与协作者均为**合成演示数据**，用于展示产品形态，不代表真实客户或生产数据。
- 不包含客户名称、定价、性能基准或部署量等未经证实的信息。
- AI 功能的 `DASHSCOPE_API_KEY` 通过 `agile.env` 注入，不写入本站或产品源码。

## 相关链接

- 产品仓库：<https://github.com/hujunalex1/caseflow>
- 问题反馈：<https://github.com/hujunalex1/caseflow/issues>

产品名在产品仓库和部分历史文档中仍为 AgileTC，站点统一使用 CaseFlow。
# caseflow-website
# caseflow-website
