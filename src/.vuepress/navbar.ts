import { navbar } from "vuepress-theme-hope";

export default navbar(
  [
    "/home.md",
    { text: "数据库技术", icon: "database", link: "/database/mysql/introduce.md",  activeMatch: "^/database/$", },
    { text: "分布式技术", icon: "earth-americas", link: "/distributed/zookeeper/introduce.md",  activeMatch: "^/distributed/$",  },
    "/mine/"
  ]
);
