import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import { AppSidebarNav } from "./AppSidebarNav";
import { ILogo } from "../../assets";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import navigation from "../../_nav";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
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
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default Sidebar;
