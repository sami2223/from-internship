import React, { useState } from "react";

const MainContainer = ({
  Dropdown,
  DropdownButton,
  Icons,
  FontAwesomeIcon,
  showHistory,
  setShowHistory,
}) => {
  const [dropdownIcon, setDropdownIcon] = useState([
    // <FontAwesomeIcon icon={Icons.faPlus} />,
    "==",
  ]);
  const dropDownStyle = {
    color: "red",
  };
  return (
    <div className="row g-0">
      <div className="col" id="page-urls">
        <div className="row">
          <div className="col-lg-12 mb-1">
            <DropdownButton
              key="dropdown-item-button"
              title={dropdownIcon}
              className="float-start url"
              // style={dropDownStyle}
            >
              <Dropdown.ItemText>== Saved Filtered Views ==</Dropdown.ItemText>
              <Dropdown.Item as="button" onClick={() => {}}>
                <FontAwesomeIcon icon={Icons.faBullseye} /> Option 1
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => {}}>
                <FontAwesomeIcon icon={Icons.faBullseye} /> Option 2
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => {}}>
                <FontAwesomeIcon icon={Icons.faBullseye} /> Option 3
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => {}}>
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
            <div id="filterByCampaignContainer">
              <select id="filterByCampaign">
                <option value="">== All ==</option>
                <option value="1">Campaign 1</option>
                <option value="2">Campaign 2</option>
              </select>
            </div>
            <div id="filterByMetricContainer">
              <select id="filterByMetric">
                <option value="">== All ==</option>
                <option value="Doc" data-icon="fa-edit">
                  eSign / Complete a Doc / Form
                </option>
                <option value="Product" data-icon="fa-shopping-cart">
                  Make a Payment (Buy a Product)
                </option>
                <option value="Scheduler" data-icon="fa-calendar-plus">
                  Schedule an Appointment
                </option>
                <option value="Chatbot" data-icon="fa-comments">
                  Chat with my Bot
                </option>
                <option value="Review" data-icon="fa-star">
                  Review (Complete Review Form)
                </option>
                <option
                  value="ClickThrough"
                  selected="selected"
                  data-icon="fa-sign-out"
                >
                  Click Through / View Content
                </option>
              </select>
            </div>
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
                    <button
                      type="button"
                      className="btn btn-sm btnTHCampaignFilter"
                      id="btnTHCampaignFilter"
                      onClick={(event) => event.stopPropagation()}
                      data-bs-toggle="campaign-popover"
                    >
                      <FontAwesomeIcon icon={Icons.faFilter} />
                    </button>
                  </th>
                  <th width="15%" className="d-none d-md-table-cell">
                    <button
                      type="button"
                      className="btn btn-sm btnTHTypeFilter"
                      id="btnTHTypeFilter"
                      onClick={(event) => event.stopPropagation()}
                      data-bs-toggle="metric-popover"
                    >
                      <FontAwesomeIcon icon={Icons.faFilter} />
                    </button>
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
                    <a
                      href
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
                    </a>{" "}
                    <a
                      href
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="btn btn-edit"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={Icons.faPencil} />
                    </a>{" "}
                    <a
                      href
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
                    <a
                      href
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
                    </a>{" "}
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
                    <a
                      href
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
                    </a>{" "}
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
