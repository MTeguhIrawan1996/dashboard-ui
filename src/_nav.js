import React from "react";
import CIcon from "@coreui/icons-react";
import { cilHome, cilPencil, cilPuzzle, cilUser } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilHome} height={15} />,
  },
  {
    component: CNavItem,
    name: "User Management",
    to: "/user",
    icon: <CIcon icon={cilUser} height={15} />,
  },
  {
    component: CNavGroup,
    name: "News",
    to: "/news",
    icon: <CIcon icon={cilPencil} height={15} />,
    items: [
      {
        component: CNavItem,
        name: "Add News",
        to: "/buttons/buttons",
      },
    ],
  },
];

export default _nav;
