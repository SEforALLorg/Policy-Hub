import React from "react";
import { CSVDownload } from "react-csv";

const DownloadCsv = ({ csvData }) => {
  if (Boolean(csvData)) return <CSVDownload data={csvData} target="_blank" />;
};

export default DownloadCsv;
