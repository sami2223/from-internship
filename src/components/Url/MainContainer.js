import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./MainContainer.css";

const MainContainer = ({
  Dropdown,
  DropdownButton,
  Icons,
  FontAwesomeIcon,
  // showHistory,
  setShowHistory,
}) => {
  const [savedFilterViews, setSavedFilterViews] = useState({
    value: "",
    title: "==",
  });

  const [filterByCampaign, setFilterByCampaign] = useState({
    value: "",
    title: "== All ==",
  });
  const [filterByMetric, setFilterByMetric] = useState({
    value: "",
    title: "== All ==",
  });

  const handleSavedFilterViewsSelect = (e) => {
    let titleText = "";
    if (e === "") titleText = "==";
    else if (e === "1") titleText = <FontAwesomeIcon icon={Icons.faBullseye}/>;
    else if (e === "2") titleText = <FontAwesomeIcon icon={Icons.faBullseye}/>;
    else if (e === "3") titleText = <FontAwesomeIcon icon={Icons.faBullseye}/>;
    else if (e === "4") titleText = <FontAwesomeIcon icon={Icons.faPlus}/>;

    setSavedFilterViews({
      value: e,
      title: titleText,
    });
  };

  const handleFilterByCampaignSelect = (e) => {
    let titleText = "";
    if (e === "") titleText = "== All ==";
    else if (e === "1") titleText = "Compaign 1";
    else if (e === "2") titleText = "Compaign 2";

    setFilterByCampaign({
      value: e,
      title: titleText,
    });
  };

  const handleFilterByMetricSelect = (e) => {
    let titleText = "";
    if (e === "") {
      titleText = "== All ==";
    } else if (e === "Doc") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faEdit}
          title="eSign / Complete a Doc / Form"
        />
      );
    } else if (e === "Product") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faShoppingCart}
          title="Make a Payment (Buy a Product)"
        />                                  
      );
    } else if (e === "Scheduler") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faCalendarPlus}
          title="Schedule an Appointment"
        />                                  
      );
    } else if (e === "ChatBot") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faComments}
          title="Chat with my Bot"
        />                                  
      );
    } else if (e === "Review") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faStar}
          title="Review (Complete Review Form)"
        />                                  
      );
    } else if (e === "ClickThrough") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faSignOut}
          title="Click Through / View Content"
        />                                  
      );
    }

    setFilterByMetric({
      value: e,
      title: titleText,
    });
  };
  
  const LabelWithIcon = ({ icon, title }) => {
    return (
      <div>
        <FontAwesomeIcon icon={icon} /> {title}
      </div>
    );
  };

  return (
    <div className="row g-0">
      <div className="col" id="page-urls">
        <div className="row">
          <div className="col-lg-12 mb-1">
            <DropdownButton
              key="dropdown-item-button"
              title={savedFilterViews.title}
              className="float-start url"
              onSelect={handleSavedFilterViewsSelect}
            >
              <Dropdown.ItemText>==Saved Filtered Views==</Dropdown.ItemText>
              <Dropdown.Item eventKey="1">
                <FontAwesomeIcon icon={Icons.faBullseye} /> Option 1
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                <FontAwesomeIcon icon={Icons.faBullseye} /> Option 2
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">
                <FontAwesomeIcon icon={Icons.faBullseye} /> Option 3
              </Dropdown.Item>
              <Dropdown.Item eventKey="4">
                <FontAwesomeIcon icon={Icons.faPlus} /> Create New Filtered View
              </Dropdown.Item>
            </DropdownButton>

            <div className="float-end">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#Global_URLInjector"
              >
                <FontAwesomeIcon icon={Icons.faPlus} /> <span>Add New</span>
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <table
              id="tblUrls"
              className="table dataTable"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr style={{ backgroundColor: "#a3a1a1", color: "#FFF" }}>
                  <th width="5%">&nbsp;</th>
                  <th width="45%">Short URL</th>
                  <th width="15%" className="d-none d-md-table-cell">
                    <OverlayTrigger
                      placement="right"
                      trigger="click"
                      rootClose={true}
                      overlay={
                        <Popover>
                          <Popover.Header as="h3">
                            <div className="d-flex justify-content-between">
                              <span style={{ marginRight: "55px" }}>
                                Filter By Campaign
                              </span>
                              <button
                                className="btn-sm"
                                style={{ border: "none" }}
                                onClick={() => document.body.click()}
                              >
                                <FontAwesomeIcon icon={Icons.faClose} />
                              </button>
                            </div>
                          </Popover.Header>
                          <Popover.Body>
                            <div
                              id="filterByCampaignContainer"
                              className="filter"
                            >
                              <DropdownButton
                                key="filterByCampaign"
                                title={filterByCampaign.title}
                                className="url"
                                onSelect={handleFilterByCampaignSelect}
                              >
                                <Dropdown.Item eventKey="">
                                  == All ==
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="1">
                                  Campaign 1
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2">
                                  Campaign 2
                                </Dropdown.Item>
                              </DropdownButton>
                            </div>
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <button
                        type="button"
                        className="btn btn-sm btnTHCampaignFilter"
                        id="btnTHCampaignFilter"
                      >
                        <FontAwesomeIcon icon={Icons.faFilter} />
                      </button>
                    </OverlayTrigger>
                  </th>
                  <th width="15%" className="d-none d-md-table-cell">
                    <OverlayTrigger
                      placement="right"
                      trigger="click"
                      rootClose={true}
                      overlay={
                        <Popover>
                          <Popover.Header as="h3">
                            <div className="d-flex justify-content-between">
                              <span style={{ marginRight: "55px" }}>
                                Filter By Metric Container
                              </span>
                              <button
                                className="btn-sm"
                                style={{ border: "none" }}
                                onClick={() => document.body.click()}
                              >
                                <FontAwesomeIcon icon={Icons.faClose} />
                              </button>
                            </div>
                          </Popover.Header>
                          <Popover.Body>
                            <div
                              id="filterByMetricContainer"
                              className="filter"
                            >
                              <DropdownButton
                                key="filterByMetric"
                                title={filterByMetric.title}
                                className="url"
                                onSelect={handleFilterByMetricSelect}
                              >
                                <Dropdown.Item eventKey="">
                                  == All ==
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="Doc">
                                  <FontAwesomeIcon icon={Icons.faEdit} /> eSign
                                  / Complete a Doc / Form
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="Product">
                                  <FontAwesomeIcon
                                    icon={Icons.faShoppingCart}
                                  />{" "}
                                  Make a Payment (Buy a Product)
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="Scheduler">
                                  <FontAwesomeIcon
                                    icon={Icons.faCalendarPlus}
                                  />{" "}
                                  Schedule an Appointment
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="ChatBot">
                                  <FontAwesomeIcon icon={Icons.faComments} />{" "}
                                  Chat with my Bot
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="Review">
                                  <FontAwesomeIcon icon={Icons.faStar} /> Review
                                  (Complete Review Form)
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="ClickThrough">
                                  <FontAwesomeIcon icon={Icons.faSignOut} />{" "}
                                  Click Through / View Content
                                </Dropdown.Item>
                              </DropdownButton>
                            </div>
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <button
                        type="button"
                        className="btn btn-sm btnTHTypeFilter"
                        id="btnTHTypeFilter"
                      >
                        <FontAwesomeIcon icon={Icons.faFilter} />
                      </button>
                    </OverlayTrigger>
                  </th>
                  <th
                    width="20%"
                    className="text-end d-none d-lg-table-cell"
                  ></th>
                </tr>
                <tr className="d-none table_action_container">
                  <td colSpan="5" className="text-left">
                    <div className="batch-action-container">
                      <button className="btn btn-trash">
                        <FontAwesomeIcon icon={Icons.faTrashAlt} /> Move to
                        Trash
                      </button>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center tableColChkDel">
                    <input
                      type="checkbox"
                      name="fileid[]"
                      id="C_ID1"
                      className="css-checkbox"
                    />
                    <label
                      htmlFor="C_ID1"
                      className="css-checkbox-label"
                    ></label>
                    <span className="tableColChkSpan btn-secondary">
                      <FontAwesomeIcon icon={Icons.faChain} />
                    </span>
                  </td>
                  <td>
                    <a href="#">Username.SwiftCRM.com/abc</a>
                  </td>
                  <td className="d-none d-md-table-cell">Campaign 1</td>
                  <td className="d-none d-md-table-cell">
                    0 Completion Yet{" "}
                    <a href="#">
                      <FontAwesomeIcon icon={Icons.faEdit} />
                    </a>
                  </td>
                  <td className="text-end d-none d-lg-table-cell">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowHistory(true);
                      }}
                      className="btn btnOpenChatDock btnURLChatDock"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="History"
                    >
                      <FontAwesomeIcon icon={Icons.faHistory} />
                    </button>{" "}
                    <button
                      className="btn btn-edit"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={Icons.faPencil} />
                    </button>{" "}
                    <button
                      className="btn btn-delete"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="Delete"
                    >
                      <FontAwesomeIcon icon={Icons.faTrashAlt} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center tableColChkDel">
                    <input
                      type="checkbox"
                      name="fileid[]"
                      id="C_ID2"
                      className="css-checkbox"
                    />
                    <label
                      htmlFor="C_ID2"
                      className="css-checkbox-label"
                    ></label>
                    <span className="tableColChkSpan btn-secondary">
                      <FontAwesomeIcon icon={Icons.faChain} />
                    </span>
                  </td>
                  <td>
                    <a href="#">Username.SwiftCRM.com/xyz</a>
                    <div className="SwiftCloudTableTags ms-2">
                      <ul>
                        <li>
                          <a href="#">Tag1</a>
                        </li>
                        <li>
                          <a href="#">Tag2</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td className="d-none d-md-table-cell">Campaign 2</td>
                  <td className="d-none d-md-table-cell">
                    0 Completion Yet{" "}
                    <a href="#">
                      <FontAwesomeIcon icon={Icons.faEdit} />
                    </a>
                  </td>
                  <td className="text-end d-none d-lg-table-cell">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowHistory(true);
                      }}
                      className="btn btnOpenChatDock btnURLChatDock"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="History"
                    >
                      <FontAwesomeIcon icon={Icons.faHistory} />
                    </button>{" "}
                    <a
                      href="#"
                      className="btn btn-edit"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={Icons.faPencil} />
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-delete"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="Delete"
                    >
                      <FontAwesomeIcon icon={Icons.faTrashAlt} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="text-center tableColChkDel">
                    <input
                      type="checkbox"
                      name="fileid[]"
                      id="C_ID3"
                      className="css-checkbox"
                    />
                    <label
                      htmlFor="C_ID3"
                      className="css-checkbox-label"
                    ></label>
                    <span className="tableColChkSpan btn-secondary">
                      <FontAwesomeIcon icon={Icons.faChain} />
                    </span>
                  </td>
                  <td>
                    <a href="#">Username.SwiftCRM.com/jkl</a>
                  </td>
                  <td className="d-none d-md-table-cell">Campaign 3</td>
                  <td className="d-none d-md-table-cell">
                    <FontAwesomeIcon icon={Icons.faSignOut} /> 12 Clicks{" "}
                    <a href="#">
                      <FontAwesomeIcon icon={Icons.faEdit} />
                    </a>
                  </td>
                  <td className="text-end  d-none d-lg-table-cell">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowHistory(true);
                      }}
                      className="btn btnOpenChatDock btnURLChatDock"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="History"
                    >
                      <FontAwesomeIcon icon={Icons.faHistory} />
                    </button>{" "}
                    <a
                      href="#"
                      className="btn btn-edit"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={Icons.faPencil} />
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-delete"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="Delete"
                    >
                      <FontAwesomeIcon icon={Icons.faTrashAlt} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
