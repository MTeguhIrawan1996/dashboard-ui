import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import {
  cilArrowLeft,
  cilArrowRight,
  cilChevronBottom,
  cilFilter,
  cilSearch,
  cilUserPlus,
  cilPlus,
} from "@coreui/icons";
import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CNav,
  CNavItem,
  CNavLink,
  CTable,
} from "@coreui/react";

const UserManagement = () => {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      key: "id",
      label: "No",
      _props: { scope: "col" },
    },
    {
      key: "Name",
      label: "Name",
      _props: { scope: "col", width: "220px" },
    },
    {
      key: "Phone",
      label: "Phone",
      _props: { scope: "col" },
    },
    {
      key: "Email",
      label: "Email",
      _props: { scope: "col" },
    },
    {
      key: "Action",
      label: "Action",
      _props: { scope: "col" },
    },
  ];
  const items = [
    {
      id: 1,
      Name: "Mark",
      Phone: "0812345678",
      Email: "teguhirawan199@gmail.com",
      Action: (
        <div className="btn-wrapper d-flex">
          <button className="btn btn-outline-dark">Edit</button>
          <button className="btn btn-danger ms-2">Delete</button>
        </div>
      ),
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 1,
      Name: "Mark",
      Phone: "0812345678",
      Email: "teguhirawan199@gmail.com",
      Action: (
        <div className="btn-wrapper d-flex">
          <button className="btn btn-outline-dark">Edit</button>
          <button className="btn btn-danger ms-2">Delete</button>
        </div>
      ),
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 1,
      Name: "Mark",
      Phone: "0812345678",
      Email: "teguhirawan199@gmail.com",
      Action: (
        <div className="btn-wrapper d-flex">
          <button className="btn btn-outline-dark">Edit</button>
          <button className="btn btn-danger ms-2">Delete</button>
        </div>
      ),
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 1,
      Name: "Mark",
      Phone: "0812345678",
      Email: "teguhirawan199@gmail.com",
      Action: (
        <div className="btn-wrapper d-flex">
          <button className="btn btn-outline-dark">Edit</button>
          <button className="btn btn-danger ms-2">Delete</button>
        </div>
      ),
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 1,
      Name: "Mark",
      Phone: "0812345678",
      Email: "teguhirawan199@gmail.com",
      Action: (
        <div className="btn-wrapper d-flex">
          <button className="btn btn-outline-dark">Edit</button>
          <button className="btn btn-danger ms-2">Delete</button>
        </div>
      ),
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 1,
      Name: "Mark",
      Phone: "0812345678",
      Email: "teguhirawan199@gmail.com",
      Action: (
        <div className="btn-wrapper d-flex">
          <button className="btn btn-outline-dark">Edit</button>
          <button className="btn btn-danger ms-2">Delete</button>
        </div>
      ),
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 1,
      Name: "Mark",
      Phone: "0812345678",
      Email: "teguhirawan199@gmail.com",
      Action: (
        <div className="btn-wrapper d-flex">
          <button className="btn btn-outline-dark">Edit</button>
          <button className="btn btn-danger ms-2">Delete</button>
        </div>
      ),
      _cellProps: { id: { scope: "row" } },
    },
  ];
  return (
    <div className="user">
      <button
        className="btn btn-crm ms-auto px-4"
        onClick={() => setVisible(!visible)}
      >
        <CIcon icon={cilUserPlus} height={15} />
        Add User
      </button>
      <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader className="border-0">
          <CModalTitle>Add User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              className="mb-2"
              type="text"
              id="exampleFormControlInput1"
              label="Name"
              aria-describedby="exampleFormControlInputHelpInline"
            />
            <CFormSelect
              className="mb-2"
              aria-label="Default select example"
              label="Category"
              options={[
                "Open this select menu",
                { label: "One", value: "1" },
                { label: "Two", value: "2" },
                { label: "Three", value: "2", disabled: true },
              ]}
            />
            <CFormSelect
              className="mb-2"
              aria-label="Default select example"
              label="Office"
              options={[
                "Open this select menu",
                { label: "One", value: "1" },
                { label: "Two", value: "2" },
                { label: "Three", value: "2", disabled: true },
              ]}
            />
            <CFormInput
              className="mb-2"
              type="text"
              id="exampleFormControlInput1"
              label="Phone"
              aria-describedby="exampleFormControlInputHelpInline"
            />
            <CFormInput
              className="mb-2"
              type="email"
              id="exampleFormControlInput1"
              label="email"
              aria-describedby="exampleFormControlInputHelpInline"
            />
            <CFormSelect
              className="mb-2"
              aria-label="Default select example"
              label="Status"
              options={[
                "Open this select menu",
                { label: "One", value: "1" },
                { label: "Two", value: "2" },
                { label: "Three", value: "2", disabled: true },
              ]}
            />
          </CForm>
        </CModalBody>
        <CModalFooter className="border-0">
          <CButton color="info">
            <CIcon icon={cilPlus} /> Add
          </CButton>
        </CModalFooter>
      </CModal>
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
            <CTable
              striped
              columns={columns}
              items={items}
              tableHeadProps={{ color: "dark" }}
              responsive
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
