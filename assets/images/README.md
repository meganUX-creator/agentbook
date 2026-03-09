# 图片使用示例

## 📸 在操作手册中使用图片的方法

### 1. 基本图片插入

```html
<!-- 插入截图 -->
<img src="assets/images/screenshots/dashboard-view.jpg" alt="后台仪表板界面" class="screenshot">

<!-- 插入图标 -->
<img src="assets/images/icons/add-user.png" alt="添加用户图标" class="icon">
```

### 2. 带说明的图片

```html
<div class="image-with-caption">
  <img src="assets/images/screenshots/agent-management.png" alt="代理管理界面">
  <p class="image-caption">图1：代理管理界面示意图</p>
</div>
```

### 3. 步骤说明中的图片

```html
<div class="step-item">
  <div class="step-num">1</div>
  <div class="step-content">
    <div class="step-title">登录系统</div>
    <div class="step-desc">
      <img src="assets/images/screenshots/login-page.png" alt="登录页面" class="step-image">
      在登录页面输入用户名和密码
    </div>
  </div>
</div>
```

### 4. 表格中的图标

```html
<table>
  <thead>
    <tr>
      <th>功能</th>
      <th>图标</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>用户管理</td>
      <td><img src="assets/images/icons/users.png" alt="用户图标" class="table-icon"></td>
      <td>管理系统用户</td>
    </tr>
  </tbody>
</table>
```

## 🎨 CSS样式类

可以在 `style.css` 中添加以下样式类：

```css
/* 截图样式 */
.screenshot {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin: 10px 0;
}

/* 图标样式 */
.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 8px;
}

/* 带说明的图片 */
.image-with-caption {
  text-align: center;
  margin: 20px 0;
}

.image-caption {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 8px;
}

/* 步骤中的图片 */
.step-image {
  max-width: 300px;
  border: 1px solid var(--border);
  border-radius: 4px;
  margin: 10px 0;
}

/* 表格中的图标 */
.table-icon {
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 auto;
}
```

## 📝 命名建议

### 截图文件
- `dashboard-overview.png` - 仪表板概览
- `user-management.jpg` - 用户管理界面
- `report-generation.png` - 报表生成
- `language-switcher.gif` - 语言切换动画

### 图标文件
- `add-icon.png` - 添加图标
- `edit-icon.png` - 编辑图标
- `delete-icon.png` - 删除图标
- `help-icon.png` - 帮助图标

### 示意图表
- `hierarchy-structure.svg` - 层级结构图
- `data-flow.png` - 数据流程图
- `commission-calculation.jpg` - 占成比计算示意图

## 🚀 使用建议

1. **图片优化**：使用 TinyPNG 或类似工具压缩图片
2. **格式选择**：
   - 截图：PNG（保持清晰度）
   - 照片：JPG（较小文件大小）
   - 图标：SVG（可缩放）
3. **一致性**：保持所有图片的风格统一
4. **可访问性**：始终提供有意义的 alt 文本

---

*此文件说明如何在操作手册中有效使用图片资源*
