import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "极速蜗牛",
  description: "一只拥有梦想的蜗牛！",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
