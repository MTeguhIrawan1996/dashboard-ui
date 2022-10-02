import React from "react";

const Dashboard = React.lazy(() => import("./view/Dashboard/Dashboard"));
const UserManagement = React.lazy(() =>
  import("./view/UserManagement/UserManagement")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  {
    path: "/user",
    name: "User Management",
    element: UserManagement,
  },
];

export default routes;
