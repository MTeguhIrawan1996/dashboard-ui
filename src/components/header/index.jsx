import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilPowerStandby } from "@coreui/icons";
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CBreadcrumb,
  CBreadcrumbItem,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// import routes from "../routes";

const Header = () => {
  const [path, setPath] = useState("");
  const currentLocation = useLocation().pathname.split("/");
  useEffect(() => {
    let isCancle = false;
    if (!isCancle) {
      setPath(
        currentLocation[1].charAt(0).toUpperCase() + currentLocation[1].slice(1)
      );
    }
    return () => {
      isCancle = true;
    };
  }, [currentLocation]);

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
          <CBreadcrumb className="mb-0">
            <CBreadcrumbItem href="#">Loan Market</CBreadcrumbItem>
            <CBreadcrumbItem active>{path}</CBreadcrumbItem>
          </CBreadcrumb>
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
