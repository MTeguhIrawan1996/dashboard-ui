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

import { routes } from "../../routes";

const Header = () => {
  const currentLocation = useLocation().pathname;

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname);
    return currentRoute ? currentRoute.name : false;
  };

  const getBreadcrumbs = (location) => {
    const breadcrumbs = [];
    location.split("/").reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      const routeName = getRouteName(currentPathname, routes);
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        });
      return currentPathname;
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);

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
            {breadcrumbs.map((breadcrumb, index) => {
              return (
                <CBreadcrumbItem
                  {...(breadcrumb.active
                    ? { active: true }
                    : { href: breadcrumb.pathname })}
                  key={index}
                >
                  {breadcrumb.name}
                </CBreadcrumbItem>
              );
            })}
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
