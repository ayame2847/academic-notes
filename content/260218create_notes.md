# personal website based on GitHub Pages and Quartz 4

## 一、架构设计（decoupling）

- **主导航仓库**：`ayame2847.github.io`  
  作为入口和多语言导航首页

- **学术笔记仓库**：`academic-notes`  
  基于 Quartz 4，承载学术笔记、互动 CV

- **其他子仓库**：`a-level-docs`、`life-blog`  
  分类独立，便于维护和协作

---

## 二、环境准备与 Git 安全扫雷

### 1. 目录结构

```bash
mkdir -p ~/Documents/GitHub/my-homepage
cd ~/Documents/GitHub/my-homepage
```

### 2. 紧急清除误操作

如误在错误目录（如 `~/Documents`）`git init`，需撤销：

```bash
rm -rf .git
```
- 这里只会删除本地 Git 配置，不会动你的文档、代码和图片。
- `.git` 目录是 Git 存储追踪信息的隐藏夹。

---

## 三、首页视觉实现：蒙德里安风格

### 1. 核心布局与样式（CSS Grid）

```css
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* 三列布局：2:1:1 比例 */
  grid-template-rows: 1.5fr 1fr 1fr;  /* 三行 */
  gap: 8px;                           /* 色块间黑线 */
  background: #1a1a1a;
}
```
- `fr` 单位代表剩余空间的分配比例

### 2. 中英文切换实现

- 内容分别包裹 `.txt-zh`、`.txt-en` 类名，用于区分语言
- 配套 JavaScript：

```js
function toggleLang(currentLang) {
  document.querySelectorAll('.txt-zh').forEach(el => {
    el.style.display = (currentLang === 'zh') ? 'block' : 'none';
  });
  document.querySelectorAll('.txt-en').forEach(el => {
    el.style.display = (currentLang === 'en') ? 'block' : 'none';
  });
}
```
- 切换按钮绑定切换，页面无需刷新即可中英文互换

---

## 四、SSH Key 配置（实现免输入 Token）

### 1. 生成 SSH 密钥

```bash
ssh-keygen -t ed25519 -C "ayame1334@gmail.com"
```
- `ssh-keygen`：生成身份验证密钥
- `-t ed25519`：指定 Ed25519 算法（基于爱德华兹曲线）
- `-C`：给密钥加备注方便识别

### 2. 配置好 SSH 后的推送

- 推送时远程仓库地址  
  `git@github.com:用户名/仓库名.git`
- 实现密钥认证，终身免密推送

---

## 五、学术系统 & Quartz 互动 CV

### 1. 数字花园（Digital Garden）理念

- Quartz 针对 Obsidian 用户设计
- 支持“双链”引用、本地搜索、知识图谱等进阶笔记体验

### 2. 互动 CV 的三重交互

#### 样式

```css
.cv-term {
  text-decoration: underline dashed #e62310;
  cursor: help; /* 鼠标悬停为问号 */
}
```

#### 交互逻辑

- **悬停**：弹出简要 Tooltip
- **单击**：侧边栏平滑滑入，显示详细资料
  - 通过 `.classList.add('active')` 激活动画
- **双击**：如 `data-note` 为网址，新窗口直接跳转

#### Quartz 单页应用导航事件监听

需监听其自定义事件以确保交互随页面切换仍然生效：

```js
document.addEventListener('nav', () => {
  // 每次切换页面重新绑定交互
});
```

---

## 六、部署与维护

### 1. 响应式设计检查

- **快速预览**：Mac 浏览器快捷键  
  `Cmd + Option + I` 打开开发者工具，`Cmd + Shift + M` 手机预览

- **Media Query 示例**：

```css
@media (max-width: 768px) {
  .grid-container { grid-template-columns: 1fr; }
}
```
小屏幕下三列自动改为单列，适配多端

### 2. 404 报错排查流程

- 检查 GitHub 仓库 → Actions，确认绿色对勾 ✅
- 失败时查看报错日志（通常为 Node.js 版本或路径错误）
- Settings → Pages Source 勾选 GitHub Actions
