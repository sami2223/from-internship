import React, { useEffect, useRef, useState } from "react";
import "./Contacts.css";
import { Modal } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import AdvanceTagSearchModal from "./AdvanceTagSearchModal";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const Contacts = () => {
  const contactsSortByTagModalRef = useRef();

  useEffect(() => {
    //initialize datatable
    $("#tblContacts").DataTable({
      destroy: true,
      dom: "rtipf",
    });
  }, []);

  const TagPopover = () => (
    <div className="tagScoreContainer">
      Assign Tag Score / Value{" "}
      <div className="input-group">
        <input type="text" className="form-control tagScoreInput" />
        <button type="button" className="btn btn-success btnSaveTagScore">
          <FontAwesomeIcon icon={Icons.faCheck} />
        </button>
      </div>
    </div>
  );

  const showModal = (ref) => {
    const modalEle = ref.current;
    const bsModal = new Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  return (
    <>
      <div className="row g-0">
        <div className="col" id="page-urls">
          <div className="row">
            <div className="col-lg-12">
              <select
                style={{ width: "60px" }}
                data-width="55px"
                className="btn-helpDeskTask btn-secondary float-start"
                data-toggle="selectpicker"
              >
                <option value="0" data-icon="" disabled="" selected="">
                  == Saved Filtered Views ==
                </option>
                <option value="1" data-icon="fa-bullseye">
                  Option 1
                </option>
                <option value="2" data-icon="fa-bullseye">
                  Option 2
                </option>
                <option value="3" data-icon="fa-bullseye">
                  Option 3
                </option>
                <option
                  value="Create_New_Filtered_View"
                  data-icon="fa-plus"
                  className="createNewFilterView"
                >
                  Create New Filtered View
                </option>
              </select>
              <div className="float-end">
                <ul className="nav nav-tabs swiftCloudTabs" role="tablist">
                  <li className="nav-item">
                    <div className="btn-group btnAddNewDropdown" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FontAwesomeIcon icon={Icons.faPlus} />{" "}
                        <span className="d-none d-md-inline">Add New</span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        <li>
                          <a className="dropdown-item" href="contact_add.html">
                            <FontAwesomeIcon icon={Icons.faUserPlus} /> Contact
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#newAudienceGroupModal"
                            data-toggle="modal"
                            data-target="#newAudienceGroupModal"
                          >
                            <FontAwesomeIcon icon={Icons.faPlus} /> Audience /
                            Group
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#newFolderWorkroom"
                            data-toggle="modal"
                            data-target="#newFolderWorkroom"
                          >
                            <FontAwesomeIcon icon={Icons.faFolder} /> Folder /{" "}
                            <FontAwesomeIcon icon={Icons.faUsers} /> Workroom
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <FontAwesomeIcon icon={Icons.faTable} /> Upload CSV
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      href="contacts.html"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Contacts"
                    >
                      <FontAwesomeIcon icon={Icons.faUser} />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      href="contact_group.html"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Groups & Audiences"
                    >
                      <FontAwesomeIcon icon={Icons.faUsers} />
                    </a>
                  </li>
                  <li className="nav-item nav-item-trash" role="presentation">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Trash"
                    >
                      <FontAwesomeIcon icon={Icons.faTrashAlt} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <table
                id="tblContacts"
                className="table dataTable"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th width="5%">&nbsp;</th>
                    <th width="70%">
                      Name{" "}
                      <button
                        type="button"
                        className="btn btn-sm float-end me-3"
                        onClick={(event) => {
                          event.stopPropagation();
                          showModal(contactsSortByTagModalRef);
                        }}
                        // data-bs-toggle="modal"
                        // data-bs-target="#ContactsSortByTagModal"
                        title="Advanced Tag Search"
                      >
                        <span data-toggle="tooltip" title="Advanced Tag Search">
                          <FontAwesomeIcon icon={Icons.faTag} />
                        </span>
                      </button>
                    </th>
                    <th width="20%" className="d-none d-md-table-cell">
                      Last Activity
                    </th>
                    <th
                      width="5%"
                      className="text-end d-none d-lg-table-cell"
                    ></th>
                  </tr>
                  <tr className="d-none table_action_container">
                    <td colspan="4" className="text-left">
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
                      <label for="C_ID1" className="css-checkbox-label"></label>
                      <span className="tableColChkSpan btn-secondary">
                        <FontAwesomeIcon icon={Icons.faUser} />
                      </span>
                    </td>
                    <td>
                      <a href="contact_detail.html">SwiftCloud Support</a>
                      <span className="contactListCompany">SwiftCloud</span>
                      <div className="contactListQuickTools">
                        <a
                          className="contactEmail"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="SwiftCloudSupport@domain.com"
                        >
                          <FontAwesomeIcon icon={Icons.faEnvelope} />
                        </a>
                        <a
                          className="contactPhoneSMS"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="SMS to 9876543210"
                        >
                          <FontAwesomeIcon icon={Icons.faMobileAlt} />
                        </a>
                        <a
                          className="contactPhoneCall"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Call to 9876543210"
                        >
                          <FontAwesomeIcon icon={Icons.faPhone} />
                        </a>
                        <a
                          className="contactAddress"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="New street"
                        >
                          <FontAwesomeIcon icon={Icons.faMapMarkerAlt} />
                        </a>
                      </div>
                      <div className="SwiftCloudTableTags">
                        <ul>
                          <li>
                            {/* ---------------- */}
                            {/* <OverlayTrigger
                              ref="userHint"
                              trigger="manual"
                              placement="bottom"
                              overlay={
                                <Popover title="Invalid Username Format">
                                  <strong>Warning!</strong> Valid user
                                  credentials only contain alphanumeric
                                  characters, as well as heifens and
                                  underscores.
                                </Popover>
                              }
                            >
                              <Input
                                type="text"
                                value={value}
                                label="Username"
                                ref="input"
                                groupClassName="input-group"
                                className="form-control"
                                onChange={handleChange}
                              />
                            </OverlayTrigger> */}
                            {/* ---------------- */}
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Designer
                            </a>
                          </li>
                          <li>
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Support
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <time className="timeago" datetime="2022-05-01"></time>
                    </td>
                    <td className="text-end tableColAction d-none d-lg-table-cell">
                      <a
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
                      <label for="C_ID2" className="css-checkbox-label"></label>
                      <span className="tableColChkSpan btn-secondary">
                        <FontAwesomeIcon icon={Icons.faUser} />
                      </span>
                    </td>
                    <td>
                      <a href="contact_detail.html">Roger V.</a>
                      <span className="contactListCompany">SwiftCloud</span>
                      <div className="contactListQuickTools">
                        <a
                          className="contactEmail"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Roger@domain.com"
                        >
                          <FontAwesomeIcon icon={Icons.faEnvelope} />
                        </a>
                        <a
                          className="contactPhoneSMS"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="SMS to 2684139750"
                        >
                          <FontAwesomeIcon icon={Icons.faMobileAlt} />
                        </a>
                        <a
                          className="contactPhoneCall"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Call to 2684139750"
                        >
                          <FontAwesomeIcon icon={Icons.faPhone} />
                        </a>
                        <a
                          className="contactAddress"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="New street"
                        >
                          <FontAwesomeIcon icon={Icons.faMapMarkerAlt} />
                        </a>
                      </div>
                      <div className="SwiftCloudTableTags">
                        <ul>
                          <li>
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Support
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <time className="timeago" datetime="2022-05-15"></time>
                    </td>
                    <td className="text-end tableColAction d-none d-lg-table-cell">
                      <a
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
                        id="C_ID3"
                        className="css-checkbox"
                      />
                      <label for="C_ID3" className="css-checkbox-label"></label>
                      <span className="tableColChkSpan btn-secondary">
                        <FontAwesomeIcon icon={Icons.faUser} />
                      </span>
                    </td>
                    <td>
                      <a href="contact_detail.html">Tejas H.</a>
                      <span className="contactListCompany">CryptousWeb</span>
                      <div className="contactListQuickTools">
                        <a
                          className="contactEmail"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Tejas@domain.com"
                        >
                          <FontAwesomeIcon icon={Icons.faEnvelope} />
                        </a>
                        <a
                          className="contactPhoneSMS"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="SMS to 1397268450"
                        >
                          <FontAwesomeIcon icon={Icons.faMobileAlt} />
                        </a>
                        <a
                          className="contactPhoneCall"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Call to 1397268450"
                        >
                          <FontAwesomeIcon icon={Icons.faPhone} />
                        </a>
                      </div>
                      <div className="SwiftCloudTableTags">
                        <ul>
                          <li>
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              UI/UX
                            </a>
                          </li>
                          <li>
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Designer
                            </a>
                          </li>
                          <li>
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Wordpress
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <time className="timeago" datetime="2022-05-25"></time>
                    </td>
                    <td className="text-end tableColAction d-none d-lg-table-cell">
                      <a
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
                        id="C_ID4"
                        className="css-checkbox"
                      />
                      <label for="C_ID4" className="css-checkbox-label"></label>
                      <span className="tableColChkSpan btn-secondary">
                        <FontAwesomeIcon icon={Icons.faUser} />
                      </span>
                    </td>
                    <td>
                      <a href="contact_detail.html">Zyndall </a>
                      <div className="contactListQuickTools">
                        <a
                          className="contactEmail"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Zyndall@domain.com"
                        >
                          <FontAwesomeIcon icon={Icons.faEnvelope} />
                        </a>
                        <a
                          className="contactPhoneCall"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Call to 1937248605"
                        >
                          <FontAwesomeIcon icon={Icons.faPhone} />
                        </a>
                      </div>
                      <div className="SwiftCloudTableTags">
                        <ul>
                          <li>
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Buyer
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <time className="timeago" datetime="2022-05-25"></time>
                    </td>
                    <td className="text-end tableColAction d-none d-lg-table-cell">
                      <a
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
                        id="C_ID5"
                        className="css-checkbox"
                      />
                      <label for="C_ID5" className="css-checkbox-label"></label>
                      <span className="tableColChkSpan btn-secondary">
                        <FontAwesomeIcon icon={Icons.faUser} />
                      </span>
                    </td>
                    <td>
                      <a href="contact_detail.html">Amitabh </a>
                      <div className="contactListQuickTools">
                        <a
                          className="contactEmail"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="useremail@domain.com"
                        >
                          <FontAwesomeIcon icon={Icons.faEnvelope} />
                        </a>
                      </div>
                      <div className="SwiftCloudTableTags">
                        <ul>
                          <li>
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Actor
                            </a>
                          </li>
                          <li>
                            <a
                              // ref={ref}
                              href
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Bollywood
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <time className="timeago" datetime="2021-07-25"></time>
                    </td>
                    <td className="text-end tableColAction d-none d-lg-table-cell">
                      <a
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Advanced Tag Search modal --> */}
      <AdvanceTagSearchModal
        contactsSortByTagModalRef={contactsSortByTagModalRef}
      />
    </>
  );
};

export default Contacts;
