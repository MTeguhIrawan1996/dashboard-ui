import React from "react";

const Dashboard = React.lazy(() => import("./view/Dashboard/Dashboard"));
const UserManagement = React.lazy(() =>
  import("./view/UserManagement/UserManagement")
);
// const Tab1 = React.lazy(() => import("./view/UserManagement/Tab1"));

export const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  {
    path: "/user",
    name: "User Management",
    element: UserManagement,
  },
];

// export const routesTab = [{ path: "/user/tab1", name: "Tab1", element: Tab1 }];
