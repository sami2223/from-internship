import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
// import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import "./GlobalUrlinjector.css";
import "./ChatDock.css";
import "./Url.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MainContainer from "./MainContainer";
import HistoryDoc from "./HistoryDoc";
import AddNewUrlModal from "./AddNewUrlModal";

const Url = () => {
  const [showHistory, setShowHistory] = useState(false);
  useEffect(() => {
    //initialize datatable
    $("#tblUrls").DataTable({
      destroy: true,
      dom: "rtipf",
      language: { search: "", searchPlaceholder: "" },
    });
  }, []);

  return (
    <>
      {/* <!--Container Main start--> */}
      <MainContainer
        Dropdown={Dropdown}
        DropdownButton={DropdownButton}
        Icons={Icons}
        FontAwesomeIcon={FontAwesomeIcon}
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        
      />

      {/* <!-- History dock start --> */}
      <HistoryDoc
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        Icons={Icons}
        FontAwesomeIcon={FontAwesomeIcon}
        Dropdown={Dropdown}
        DropdownButton={DropdownButton}
      />

      {/* <!-- Modal popup for NEW Global Popup - Global_URLInjector --> */}
      <AddNewUrlModal FontAwesomeIcon={FontAwesomeIcon} Icons={Icons} />
    </>
  );
};

export default Url;
