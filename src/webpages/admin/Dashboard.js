import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { DataTableData, dataTableColumns, dataTableColumns2, userData } from "./TableData";

const Dashboard = ({ ...props }) => {
  return (
    <>
      <Head title="Blank Page" />
      <Content>
        <p>No content yet</p>
      </Content>
    </>
  );
};

export default Dashboard;
