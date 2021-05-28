export default [
  {
    path: '/',
    component: '@/pages/A/AList',
  },
  {
    path: "/a",
    name: "A",
    icon: "dashboard",
    routes: [
      {
        path: "/a/list",
        name: 'List',
        component: '@/pages/A/AList',
      },
      {
        path: "/a/form",
        name: 'From',
        component: '@/pages/A/AForm',
      },
      {
        path: "/a/card",
        name: 'Card',
        component: '@/pages/A/ACard',
      },
    ]
  },
  // {
  //   path: '/',
  //   component: '../layouts/BlankLayout',
  //   routes: [
  //     {
  //       path: '/user',
  //       component: '../layouts/UserLayout',
  //       routes: [
  //         {
  //           name: 'login',
  //           path: '/user/login',
  //           component: './User/login',
  //         },
  //       ],
  //     },
  //     {
  //       path: '/',
  //       component: '../layouts/SecurityLayout',
  //       routes: [
  //         {
  //           path: '/',
  //           component: '../layouts/BasicLayout',
  //           authority: ['admin', 'user'],
  //           routes: [
  //             {
  //               path: '/',
  //               redirect: '/welcome',
  //             },
  //             {
  //               path: '/welcome',
  //               name: 'welcome',
  //               icon: 'smile',
  //               component: './Welcome',
  //             },
  //             {
  //               path: '/admin',
  //               name: 'admin',
  //               icon: 'crown',
  //               component: './Admin',
  //               authority: ['admin'],
  //               routes: [
  //                 {
  //                   path: '/admin/sub-page',
  //                   name: 'sub-page',
  //                   icon: 'smile',
  //                   component: './Welcome',
  //                   authority: ['admin'],
  //                 },
  //               ],
  //             },
  //             {
  //               name: 'list.table-list',
  //               icon: 'table',
  //               path: '/list',
  //               component: './TableList',
  //             },
  //             {
  //               component: './404',
  //             },
  //           ],
  //         },
  //         {
  //           component: './404',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    component: './404',
  },
];
