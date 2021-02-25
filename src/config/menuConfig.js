// import {
//   PieChartOutlined,
//   SettingOutlined,
//   BorderOuterOutlined,
//   FileTextOutlined,
//   InsuranceOutlined,
//   CopyOutlined,
//   AppstoreOutlined,
//   AreaChartOutlined,
//   OrderedListOutlined,
//   TableOutlined,
//   HomeOutlined,
//   FileExcelOutlined,
//   FileUnknownOutlined,
//   UserOutlined,
//   UsergroupAddOutlined,
//   BugOutlined
// } from '@ant-design/icons';
// /**
//  * icon:菜单项图标
//  * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
//  */
// const menuList = [
//   {
//     title: "首页",
//     path: "/dashboard",
//     icon: <HomeOutlined/>,
//     roles:["admin","editor","guest"]
//   },
//   {
//     title: "引导页",
//     path: "/guide",
//     icon: <BorderOuterOutlined />,
//     roles:["admin","editor"]
//   },
//   {
//     title: "权限测试",
//     path: "/permission",
//     icon: <InsuranceOutlined />,
//     roles:["admin", "guest", "editor"],
//     children: [
//       {
//         title: "权限说明",
//         path: "/permission/explanation",
//         roles:["admin", "guest", "editor"]
//       },
//       {
//         title: "admin页面",
//         path: "/permission/adminPage",
//         roles:["admin"]
//       },
//       {
//         title: "guest页面",
//         path: "/permission/guestPage",
//         roles:["admin","guest"]
//       },
//       {
//         title: "editor页面",
//         path: "/permission/editorPage",
//         roles:["admin","editor"]
//       },
//     ],
//   },
//   {
//     title: "组件",
//     path: "/components",
//     icon: <AppstoreOutlined />,
//     roles:["admin","editor"],
//     children: [
//       {
//         title: "富文本",
//         path: "/components/richTextEditor",
//         roles:["admin","editor"],
//       },
//       {
//         title: "拖拽列表",
//         path: "/components/draggable",
//         roles:["admin","editor"],
//       },
//       {
//         title: "JSON-表单",
//         path: "/components/JSON-Form",
//         roles:["admin","editor"],
//       },
//     ],
//   },
//   {
//     title: "路由嵌套",
//     path: "/nested",
//     icon: <OrderedListOutlined />,
//     roles:["admin","editor"],
//     children: [
//       {
//         title: "菜单1",
//         path: "/nested/menu1",
//         children: [
//           {
//             title: "菜单1-1",
//             path: "/nested/menu1/menu1-1",
//             roles:["admin","editor"],
//           },
//           {
//             title: "菜单1-2",
//             path: "/nested/menu1/menu1-2",
//             children: [
//               {
//                 title: "菜单1-2-1",
//                 path: "/nested/menu1/menu1-2/menu1-2-1",
//                 roles:["admin","editor"],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "表格",
//     path: "/table",
//     icon: <TableOutlined />,
//     roles:["admin","editor"]
//   },
//   {
//     title: "Excel",
//     path: "/excel",
//     icon: <FileExcelOutlined />,
//     roles:["admin","editor"],
//     children: [
//       {
//         title: "导出Excel",
//         path: "/excel/export",
//         roles:["admin","editor"]
//       },
//       {
//         title: "上传Excel",
//         path: "/excel/upload",
//         roles:["admin","editor"]
//       }
//     ],
//   },
//   {
//     title: "Zip",
//     path: "/zip",
//     icon: <FileUnknownOutlined />,
//     roles:["admin","editor"]
//   },
//   {
//     title: "剪贴板",
//     path: "/clipboard",
//     icon: <CopyOutlined />,
//     roles:["admin","editor"]
//   },
//   {
//     title: "Bug收集",
//     path: "/bug",
//     icon: <BugOutlined />,
//     roles:["admin"]
//   },
//   {
//     title: "404",
//     path: "/404",
//     isNotMenu: true // 不显示到菜单上
//   },
//   {
//     title: "403",
//     path: "/403",
//     isNotMenu: true // 不显示到菜单上
//   },
// ];
// export default menuList;
