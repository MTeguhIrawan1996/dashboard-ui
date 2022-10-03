import React from "react";

const Dashboard = React.lazy(() => import("./view/Dashboard/Dashboard"));
const UserManagement = React.lazy(() =>
  import("./view/UserManagement/UserManagement")
);
const News = React.lazy(() => import("./view/News/News"));

export const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  {
    path: "/user",
    name: "User Management",
    element: UserManagement,
  },
  { path: "/news", name: "News", element: News },
];

// export const routesTab = [{ path: "/user/tab1", name: "Tab1", element: Tab1 }];
