# 图片资源文件夹说明

## 📁 文件夹结构

```
assets/
└── images/          # 存放操作手册中使用的所有图片资源
    ├── icons/       # 图标文件
    ├── screenshots/  # 截图文件
    └── diagrams/    # 示意图表文件
```

## 🖼️ 支持的图片格式

- **PNG** - 推荐用于图标和透明背景图片
- **JPG** - 适用于照片和复杂图像
- **SVG** - 适用于矢量图标和可缩放图形
- **GIF** - 适用于简单动画效果

## 📏 图片尺寸建议

### 图标类图片
- 尺寸：16x16, 24x24, 32x32 像素
- 格式：PNG 或 SVG

### 截图类图片
- 宽度：不超过 800 像素
- 格式：PNG 或 JPG
- 压缩：保持清晰度的同时优化文件大小

### 示意图表
- 宽度：600-800 像素
- 格式：PNG 或 SVG
- 文字：使用中文简体，确保清晰可读

## 🔗 在HTML中引用图片

```html
<!-- 相对路径引用 -->
<img src="assets/images/example.png" alt="示例图片">

<!-- 图标引用 -->
<img src="assets/images/icons/help.png" alt="帮助图标">

<!-- 截图引用 -->
<img src="assets/images/screenshots/dashboard.jpg" alt="后台界面截图">
```

## 📝 命名规范

- 使用小写字母和连字符：`file-name.png`
- 使用描述性名称：`login-button.png`, `data-table.jpg`
- 避免空格和特殊字符

## 🎨 样式集成

图片可以与现有的CSS类配合使用：

```html
<!-- 带样式的图片 -->
<img src="assets/images/example.png" class="responsive-image" alt="示例">

<!-- 卡片中的图标 -->
<div class="card">
  <div class="card-title">
    <img src="assets/images/icons/settings.png" class="card-icon" alt="设置">
    设置选项
  </div>
</div>
```

## 📋 使用建议

1. **优化文件大小**：使用工具压缩图片，提高加载速度
2. **保持一致性**：使用统一的风格和色彩方案
3. **提供alt文本**：为所有图片添加描述性alt属性
4. **响应式设计**：确保图片在不同设备上正常显示

---

*此文件夹用于存放代理后台操作手册的所有图片资源*
