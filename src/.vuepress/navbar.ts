import { navbar } from "vuepress-theme-hope";

export default navbar(
  [
    "/home.md",
    { text: "数据库技术", link: "/database/mysql/introduce.md", icon: "database" },
    // "/frontend/",
    "/mine/"
  ]
);
