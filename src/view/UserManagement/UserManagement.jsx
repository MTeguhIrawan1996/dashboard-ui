import React from "react";
import CIcon from "@coreui/icons-react";
import { cilFilter, cilSearch, cilUserPlus } from "@coreui/icons";

const UserManagement = () => {
  return (
    <section className="container user">
      <button className="btn btn-crm ms-auto px-4">
        <CIcon icon={cilUserPlus} height={15} />
        Add User
      </button>
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
        </div>
      </div>
    </section>
  );
};

export default UserManagement;
