import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import {
  cilArrowLeft,
  cilArrowRight,
  cilChevronBottom,
  cilFilter,
  cilSearch,
  cilUserPlus,
} from "@coreui/icons";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import ModalAdd from "./modalAdd";
import data from "json/dataTabel.json";
import ModalUpdate from "./modalUpdate";

const UserManagement = () => {
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [datas, setDatas] = useState(data.user);
  return (
    <div className="user">
      <button
        className="btn btn-crm ms-auto px-4"
        onClick={() => setVisible(!visible)}
      >
        <CIcon icon={cilUserPlus} height={15} />
        Add User
      </button>
      <ModalAdd onClose={() => setVisible(false)} show={visible} />
      <div className="card card-body mt-3 px-3 px-md-5 py-3 py-md-4">
        <div className="row">
          <div className="col-12 header-wrapper rounded-2">
            <div className="header-search">
              <div className="header-search-item">
                <CIcon className="headerIcon" icon={cilSearch} />
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  className="header-search-input"
                />
              </div>
              <button className="btn btn-filter px-3">
                <CIcon icon={cilFilter} height={15} />
                Filters
              </button>
            </div>
          </div>
          <div className="col-12 mt-3">
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink href="#/user" active>
                  Customer
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Customer</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Author</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Super Admin</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">BDE</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Advisor</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Admin Office</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Participal</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Participal LMI</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Bank Officer</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/user">Bank Admin</CNavLink>
              </CNavItem>
            </CNav>
          </div>
          <div className="col-12 mt-3">
            <CTable striped responsive>
              <CTableHead
                style={{ backgroundColor: "rgb(19, 35, 65)", color: "#fff" }}
              >
                <CTableRow>
                  <CTableHeaderCell scope="col">No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {datas.map((user, i) => {
                  return (
                    <CTableRow key={i}>
                      <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                      <CTableDataCell>{user.name}</CTableDataCell>
                      <CTableDataCell>{user.phone}</CTableDataCell>
                      <CTableDataCell>{user.email}</CTableDataCell>
                      <CTableDataCell>
                        <div className="btn-wrapper d-flex">
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => setVisibleUpdate(!visibleUpdate)}
                          >
                            Edit
                          </button>
                          <button className="btn btn-danger ms-2">
                            Delete
                          </button>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  );
                })}
              </CTableBody>
            </CTable>
            <ModalUpdate
              onClose={() => setVisibleUpdate(false)}
              show={visibleUpdate}
            />
          </div>
        </div>
      </div>
      <div className="table-buttom mt-3">
        <div className="card">
          <div className="page-of">
            <span>1 - 15 of 60</span>
          </div>
          <div className="pagination">
            <span>The page your one</span>
            <button className="btn-pagination arrow">
              1 <CIcon icon={cilChevronBottom} height={12} />
            </button>
            |
            <button className="btn-pagination">
              <CIcon icon={cilArrowLeft} height={12} />
            </button>
            <button className="btn-pagination">
              <CIcon icon={cilArrowRight} height={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
