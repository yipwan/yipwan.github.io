// docs/js/mathjax-config.js
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],  // 支持 $行内公式$ 和 \(行内公式\)
    displayMath: [['$$', '$$'], ['\\[', '\\]']],  // 支持 $$块级公式$$ 和 \[块级公式\]
    processEscapes: true,  // 允许 \$ 转义为普通美元符号（避免和价格等冲突）
    packages: {'[+]': ['ams']}  // 加载 AMS 包（支持 cases/aligned 等复杂环境）
  },
  svg: {
    fontCache: 'global'  // 字体缓存，提升渲染速度
  },
  startup: {
    typeset: true  // 自动渲染页面中的公式
  }
};