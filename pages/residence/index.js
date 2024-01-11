import DataTable from "@/components/data-table/Data-Table";
import DeductionBox from "@/components/deduction-box/DeductionBox";
import Header from "@/components/header/Header";
import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import Sidebar from "@/components/sidebar/Sidebar";
import Tabs from "@/components/tabs/Tabs";
import WithAuth from "@/utils/withAuth";
import React from "react";
import { Col, Row } from "reactstrap";

const Residence = () => {
  const tableData = [
    {
      apartmentNumber: "30106",
      utility: "1358.06",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30107",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30105",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30104",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30103",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30102",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30101",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30100",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
  ];

  const headers = [
    "Apartment Number",
    "June-July 2023 Utility",
    "Service Charges",
    "HSKP",
    "EN",
  ];

  return (
    <>
      <Sidebar />
      <Header />
      <div className="dashboard-main">
        <h2 className="res-txt">residence</h2>
        <span className="span1">Residence</span>
        <span className="arrow">{">"}</span>
        <span className="span2">Detailed view</span>

        <Tabs first={"Deductions"} second={"View Finances"} />
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex mb-5">
            <div className="me-4">
              <SelectDropdown placeholder="July" />
            </div>
            <div className="me-4">
              <SelectDropdown placeholder="2023" />
            </div>
          </div>
          <div className="chat-wrapper">
            <img src="/images/chat.png" className="img-fluid" alt="" />
          </div>
          <div className="search-box-wrapper">
            <img src="/images/search.png" className="img-fluid" alt="" />
            <input type="text" className="form-control search-box" />
          </div>
        </div>

        <Row>
          <Col md={9} lg={9}>
            <DataTable data={tableData} headers={headers} />
          </Col>
          <Col md={3} lg={3}>
            <DeductionBox />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Residence;
