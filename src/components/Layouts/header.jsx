import React from "react";
import CIcon from "@coreui/icons-react";
import { cilPowerStandby } from "@coreui/icons";
import { CContainer, CHeader, CHeaderNav, CHeaderToggler } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "./breadcrumb";

const Header = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <span className="header-toggler-icon"></span>
        </CHeaderToggler>
        <CHeaderNav className="">
          <Breadcrumb />
        </CHeaderNav>
        <button className="btn btn-logout ms-auto">
          <CIcon className="nav-icon" icon={cilPowerStandby} />
          Log Out
        </button>
      </CContainer>
    </CHeader>
  );
};

export default Header;
