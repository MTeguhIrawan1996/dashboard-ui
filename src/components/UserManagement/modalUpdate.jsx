import React, { useState } from "react";
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

const ModalUpdate = (props) => {
  const { show, onClose } = props;
  const [name, setName] = useState("DJoni Gunawan");
  return (
    <CModal scrollable visible={show} onClose={onClose}>
      <CModalHeader className="border-0">
        <CModalTitle>Edit Data</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CFormInput
            className="mb-2"
            type="text"
            id="exampleFormControlInput1"
            label="Name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
        <CButton color="outline-dark" onClick={onClose}>
          Cancle
        </CButton>
        <CButton color="info">Add</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalUpdate;
