import React from "react";
import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import { AppSidebarNav } from "./AppSidebarNav";
import { ILogo } from "../../assets";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import navigation from "../../_nav";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-flex flex-column align-items-start py-4 px-3 gap-2">
        <img src={ILogo} alt="" style={{ maxHeight: 60 }} />
        <div className="title">
          <h1>Yosep Duna</h1>
          <span>Author</span>
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
