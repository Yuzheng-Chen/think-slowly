hexo.extend.helper.register("icon_to_html", (input) =>
  input && input.includes("<")
    ? input // HTML 裸标签
    : input ? `<i class="fa fa-${input}"></i>` : "" // FontAwesome ID 或空字符串
);