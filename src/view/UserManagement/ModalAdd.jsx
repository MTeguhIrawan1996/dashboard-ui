import React from "react";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";

const ModalAdd = (props) => {
  const { show, onClose } = props;
  return (
    <CModal scrollable visible={show} onClose={onClose}>
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
  );
};

export default ModalAdd;
