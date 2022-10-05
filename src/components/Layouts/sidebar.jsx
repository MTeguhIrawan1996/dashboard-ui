import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CNavItem,
  CNavGroup,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import navigation from "_nav";
import { AppSidebarNav } from "./appSidebarNav";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);

  return (
    <CSidebar
      position="fixed"
      // unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-flex flex-column align-items-start py-4 px-3 gap-2">
        {/* <img src={ILogo} alt="" style={{ maxHeight: 60 }} /> */}
        <div className="title">
          <h1>Yosep Duna</h1>
          <span>Author</span>
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        <AppSidebarNav items={navigation} />
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      /> */}
    </CSidebar>
  );
};

export default Sidebar;
