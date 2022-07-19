import React, { useRef, useState } from "react";
import { Modal } from "bootstrap";
import "./Drive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  faClone,
  faFileZipper,
  faFileVideo,
  faFileAudio,
  faFilePdf,
} from "@fortawesome/free-regular-svg-icons";

const Drive = () => {
  const [addSearchInput, setAddSearchInput] = useState(false);

  const newDocModalRef = useRef();
  const contactsSortByTagModalRef = useRef();
  const sortByTagDropResultModalRef = useRef();
  const newSheetModalRef = useRef();
  const newInvoiceModalRef = useRef();
  const newWebFormModalRef = useRef();
  const newFolderWorkRoomModalRef = useRef();
  const newEnvelopeModalRef = useRef();
  const newItemModalRef = useRef();
  const newSequenceModalRef = useRef();
  const newSchedulerModalRef = useRef();
  const newPhoneModalRef = useRef();
  const newPaywallModalRef = useRef();
  const freeBaitLeadGenRef = useRef();
  const directSellUpsellRef = useRef();
  const qualifierAppointmentSchedulerRef = useRef();
  const newtoMarketValidatorRef = useRef();
  const freeShippingUpsellsRef = useRef();
  const freeTripwireSaleRef = useRef();
  const freeBaitWebinarVideoRef = useRef();

  const showModal = (ref) => {
    const modalEle = ref.current;
    const bsModal = new Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  //   const hideModal = () => {
  //     const modalEle = newDocModalRef.current;
  //     const bsModal = Modal.getInstance(modalEle);
  //     bsModal.hide();
  //   };
  return (
    <>
      <div className="row g-0">
        <div className="col" id="page-urls">
          <div className="row">
            <div className="col-lg-12">
              <select
                data-width="55px"
                className="btn-DriveFilterView btn-secondary float-start"
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
                <ul
                  className="nav nav-tabs swiftCloudTabs d-none d-md-flex"
                  role="tablist"
                >
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
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newDocModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faFile} /> Doc
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newSheetModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faTable} /> Spreadsheet
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newInvoiceModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faTable} /> Estimate /
                            Invoice / Etc.
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newWebFormModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faThList} /> Web Form
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newFolderWorkRoomModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faFolder} /> Folder /{" "}
                            <FontAwesomeIcon icon={Icons.faUsers} /> Workroom
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newEnvelopeModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faEnvelope} /> Envelope
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newItemModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faShoppingCart} /> SKU
                            / Item You Sell
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newSequenceModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faEllipsisH} />{" "}
                            Sequence of Events
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newSchedulerModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faCalendar} />{" "}
                            Scheduler
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <FontAwesomeIcon icon={Icons.faClone} /> Template
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a
                            className="dropdown-item dropdown-toggle"
                            href="#"
                            id="multilevelDropdownMenu1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <FontAwesomeIcon icon={Icons.faFilter} />
                            1-Click Funnels
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="multilevelDropdownMenu1"
                          >
                            <li className="dropdown-item">
                              <a
                                tabindex="-1"
                                href
                                onClick={(e) => {
                                  e.preventDefault();
                                  showModal(freeBaitLeadGenRef);
                                }}
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                Free Bait + LeadGen
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                tabindex="-1"
                                href
                                onClick={(e) => {
                                  e.preventDefault();
                                  showModal(directSellUpsellRef);
                                }}
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                Direct Sell + Upsell
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                tabindex="-1"
                                href
                                onClick={(e) => {
                                  e.preventDefault();
                                  showModal(qualifierAppointmentSchedulerRef);
                                }}
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                Qualifier + Appointment Scheduler
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                tabindex="-1"
                                href
                                onClick={(e) => {
                                  e.preventDefault();
                                  showModal(newtoMarketValidatorRef);
                                }}
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                New-to-Market Validator
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                tabindex="-1"
                                href
                                onClick={(e) => {
                                  e.preventDefault();
                                  showModal(freeShippingUpsellsRef);
                                }}
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                Free w/ Shipping + Upsells
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                tabindex="-1"
                                href
                                onClick={(e) => {
                                  e.preventDefault();
                                  showModal(freeTripwireSaleRef);
                                }}
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                Free &gt; Tripwire &gt; Sale
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                tabindex="-1"
                                href
                                onClick={(e) => {
                                  e.preventDefault();
                                  showModal(freeBaitWebinarVideoRef);
                                }}
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                Free Bait &gt; Webinar / Video
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newPhoneModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faPhone} /> Phone
                            Number
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(newPaywallModalRef);
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faSignIn} /> Paywall
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            onClick={(e) => {
                              e.preventDefault();
                              //   showModal();
                            }}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={Icons.faExchange} /> Ledger
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newShortcutModal"
                          >
                            <FontAwesomeIcon icon={Icons.faSignOut} /> Shortcut
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newSignalMonitorModal"
                          >
                            <FontAwesomeIcon icon={Icons.faBullseye} /> Signal
                            Monitor
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-secondary btnUpload"
                    >
                      <FontAwesomeIcon icon={Icons.faCloudArrowUp} />{" "}
                      <span className="d-none d-md-inline">Upload</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="drive-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#drive"
                      role="tab"
                      aria-controls="drive"
                      aria-selected="false"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Drive"
                    >
                      <FontAwesomeIcon icon={Icons.faDatabase} />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="small-icon-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#small-icon"
                      role="tab"
                      aria-controls="small-icon"
                      aria-selected="false"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Small Icons"
                    >
                      <FontAwesomeIcon icon={Icons.faTableCellsLarge} />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="large-icon-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#large-icon"
                      role="tab"
                      aria-controls="large-icon"
                      aria-selected="false"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Large Icons"
                    >
                      <FontAwesomeIcon icon={Icons.faStop} />
                    </a>
                  </li>
                  <li className="nav-item nav-item-trash" role="presentation">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="View Templates"
                    >
                      <FontAwesomeIcon icon={faClone} />
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

                {/* <!-- mobile view--> */}
                <ul
                  className="nav nav-tabs swiftCloudTabs mobileTabs d-md-none d-flex mb-1"
                  role="tablist"
                >
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-secondary btnUpload me-1"
                    >
                      <FontAwesomeIcon icon={Icons.faCloudArrowUp} />
                    </button>
                  </li>
                  <li className="nav-item">
                    <div className="btn-group btnAddNewDropdown" role="group">
                      <button
                        id="btnGroupDrop2"
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FontAwesomeIcon icon={Icons.faPlus} />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop2"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newDocModal"
                          >
                            <FontAwesomeIcon icon={Icons.faFile} /> Doc
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newSheetModal"
                          >
                            <FontAwesomeIcon icon={Icons.faTable} /> Spreadsheet
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newInvoiceModal"
                          >
                            <FontAwesomeIcon icon={Icons.faTable} /> Estimate /
                            Invoice / Etc.
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newWebFormModal"
                          >
                            <FontAwesomeIcon icon={Icons.faThList} /> Web Form
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newFolderWorkroomModal"
                          >
                            <FontAwesomeIcon icon={Icons.faFolder} /> Folder /{" "}
                            <FontAwesomeIcon icon={Icons.faUsers} /> Workroom
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newEnvelopeModal"
                          >
                            <FontAwesomeIcon icon={Icons.faEnvelope} /> Envelope
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newItemModal"
                          >
                            <FontAwesomeIcon icon={Icons.faShoppingCart} /> SKU
                            / Item You Sell
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newSequenceModal"
                          >
                            <FontAwesomeIcon icon={Icons.faEllipsisH} />{" "}
                            Sequence of Events
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newSchedulerModal"
                          >
                            <FontAwesomeIcon icon={Icons.faCalendar} />{" "}
                            Scheduler
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <FontAwesomeIcon icon={Icons.faClone} /> Template
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a
                            className="dropdown-item dropdown-toggle"
                            href="#"
                            id="multilevelDropdownMenu1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <FontAwesomeIcon icon={Icons.faFilter} /> 1-Click
                            Funnels
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="multilevelDropdownMenu1"
                          >
                            <li className="dropdown-item">
                              <a
                                className="dropdown-item"
                                tabindex="-1"
                                href="#FreeBaitLeadGen"
                                data-bs-toggle="modal"
                              >
                                Free Bait + LeadGen
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                className="dropdown-item"
                                tabindex="-1"
                                href="#DirectSellUpsell"
                                data-bs-toggle="modal"
                              >
                                Direct Sell + Upsell
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                className="dropdown-item"
                                tabindex="-1"
                                href="#QualifierAppointmentScheduler"
                                data-bs-toggle="modal"
                              >
                                Qualifier + Appointment Scheduler
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                className="dropdown-item"
                                tabindex="-1"
                                href="#NewtoMarketValidator"
                                data-bs-toggle="modal"
                              >
                                New-to-Market Validator
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                className="dropdown-item"
                                tabindex="-1"
                                href="#FreeShippingUpsells"
                                data-bs-toggle="modal"
                              >
                                Free w/ Shipping + Upsells
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                className="dropdown-item"
                                tabindex="-1"
                                href="#FreeTripwireSale"
                                data-bs-toggle="modal"
                              >
                                Free &gt; Tripwire &gt; Sale
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a
                                className="dropdown-item"
                                tabindex="-1"
                                href="#FreeBaitWebinarVideo"
                                data-bs-toggle="modal"
                              >
                                Free Bait &gt; Webinar / Video
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newLedgerModal"
                          >
                            <FontAwesomeIcon icon={Icons.faExchange} /> Ledger
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newShortcutModal"
                          >
                            <FontAwesomeIcon icon={Icons.faSignOut} /> Shortcut
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            href="#newSignalMonitorModal"
                          >
                            <FontAwesomeIcon icon={Icons.faBullseye} /> Signal
                            Monitor
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="btn-group btnDriveView" role="group">
                      <button
                        id="btnGroupDrop3"
                        type="button"
                        className="btn btn-default dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {/* <FontAwesomeIcon icon={faDatabase}/> */}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop3"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            id="drive-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#drive"
                            role="tab"
                            aria-controls="drive"
                            aria-selected="false"
                          >
                            {/* <FontAwesomeIcon icon={faDatabase}/> */}
                            Drive
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            id="small-icon-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#small-icon"
                            role="tab"
                            aria-controls="small-icon"
                            aria-selected="false"
                          >
                            <FontAwesomeIcon icon={Icons.faTableCellsLarge} />{" "}
                            Small Icons
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            id="large-icon-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#large-icon"
                            role="tab"
                            aria-controls="large-icon"
                            aria-selected="false"
                          >
                            <FontAwesomeIcon icon={Icons.faStop} /> Large Icons
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <FontAwesomeIcon icon={faClone} /> Templates
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <FontAwesomeIcon icon={Icons.faTrashAlt} /> Trash
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="drive"
                  role="tabpanel"
                  aria-labelledby="drive-tab"
                >
                  <table
                    id="tblDrive"
                    className="table dataTable"
                    cellspacing="0"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th width="5%">&nbsp;</th>
                        <th width="70%">
                          Name/Label{" "}
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
                            <span
                              data-toggle="tooltip"
                              title="Advanced Tag Search"
                            >
                              <FontAwesomeIcon icon={Icons.faTag} />
                            </span>
                          </button>
                        </th>
                        <th width="18%" className="d-none d-md-table-cell">
                          Last Activity
                        </th>
                        <th
                          width="7%"
                          className="text-end d-none d-lg-table-cell"
                        ></th>
                      </tr>
                      <tr className="d-none table_action_container">
                        <td colspan="4" className="text-left">
                          <div className="batch-action-container">
                            <button className="btn btn-trash">
                              <FontAwesomeIcon icon={Icons.faTrashAlt} /> Move
                              to Trash
                            </button>
                            <button
                              className="btn btn-default"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Archive (Searchable but Hidden)"
                            >
                              <FontAwesomeIcon icon={Icons.faArchive} /> Archive
                            </button>
                            <button className="btn btn-secondary">
                              <FontAwesomeIcon icon={Icons.faTags} /> Apply
                              Tag(s)
                            </button>
                            <button className="btn btn-success">
                              <FontAwesomeIcon icon={Icons.faUserPlus} /> Manage
                              Sharing
                            </button>
                            <button className="btn btn-primary">
                              <FontAwesomeIcon icon={Icons.faUnlock} /> Manage
                              Permissions
                            </button>
                            <button className="btn btn-secondary">
                              <FontAwesomeIcon icon={Icons.faArrows} /> Move
                              To...
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="d-none filter_table_action_container">
                        <td colspan="4" className="">
                          <div className="filter-batch-action-container">
                            <div className="row">
                              <div className="col-lg-9 col-sm-12">
                                <form
                                  id="filterViewForm"
                                  className="filterViewRowForm"
                                >
                                  <div className="row row-cols-lg-auto g-2 align-items-center mb-3">
                                    <div className="col-12">Show me</div>
                                    <div className="col-12">
                                      <select
                                        data-width="220px"
                                        className="helpDeskTaskFilter filesOpt"
                                        name="mainCriteria"
                                        id="helpDeskTaskFilterSelect"
                                        data-toggle="selectpicker"
                                      >
                                        <option
                                          value="people"
                                          data-icon="fa-user"
                                          selected="selected"
                                        >
                                          Contacts
                                        </option>
                                        <option
                                          value="tasks&amp;Projects"
                                          data-icon="fa-check"
                                        >
                                          Task / Job / Sales Opportunities
                                        </option>
                                        <option
                                          value="Messages&amp;Notifications"
                                          data-icon="fa-inbox"
                                        >
                                          Messages &amp; Notifications
                                        </option>
                                        <option
                                          value="calendar"
                                          data-icon="fa-calendar"
                                        >
                                          Calendar Events
                                        </option>
                                        <option
                                          value="accounting"
                                          data-icon="fa-exchange"
                                        >
                                          Accounting Records
                                        </option>
                                        <option
                                          value="agreements"
                                          data-icon="fa-handshake"
                                        >
                                          Agreements
                                        </option>
                                        <option
                                          value="filesWorkrooms"
                                          data-icon="fa-folder"
                                        >
                                          Files / Workrooms / Custom Assets
                                        </option>
                                        <option
                                          value="timeclockRecords"
                                          data-icon="fa-clock"
                                        >
                                          Timeclock Records
                                        </option>
                                      </select>
                                    </div>
                                    <div className="col-12">that are</div>
                                    <div className="col-12">
                                      <select
                                        className="form-select inputFeedType"
                                        name="options[]"
                                      >
                                        <option value="opt_1">
                                          Tagged with...
                                        </option>
                                        <option value="opt_3">
                                          Search Results Include
                                        </option>
                                        <option value="ScheduledInto">
                                          Scheduled Into...
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col-lg-12">
                                      <div
                                        className="filterOpts"
                                        id="newfilter_1"
                                      >
                                        <div className="row">
                                          <div className="col-lg-12">
                                            <div className="columnFilter opt_1">
                                              <div className="row">
                                                <div className="col-lg-12 sortbytag_row">
                                                  <div className="input-group mb-3">
                                                    <select
                                                      name="FV_sortbytag_with_or_without"
                                                      id="FV_sortbytag_with_or_without"
                                                      className="form-select"
                                                    >
                                                      <option value="Tagged with">
                                                        Tagged with
                                                      </option>
                                                      <option value="Not Tagged with">
                                                        Not Tagged with
                                                      </option>
                                                    </select>
                                                    <input
                                                      type="text"
                                                      name="FV_sortbytag_input"
                                                      id="FV_sortbytag_input"
                                                      className="form-control"
                                                      value="tag"
                                                    />
                                                    <select
                                                      name="FV_sortbytag_score_opt"
                                                      id="FV_sortbytag_score_opt"
                                                      className="form-select"
                                                    >
                                                      <option value="Any">
                                                        Any TagScore
                                                      </option>
                                                      <option value="Above">
                                                        TagScore Above
                                                      </option>
                                                      <option value="Below">
                                                        TagScore Below
                                                      </option>
                                                    </select>
                                                    <input
                                                      type="number"
                                                      name="FV_sortbytag_score_input"
                                                      id="FV_sortbytag_score_input"
                                                      className="form-control d-none"
                                                      placeholder="Value"
                                                      value="50"
                                                    />
                                                    <select
                                                      name="FV_sortbytag_asc_desc"
                                                      className="form-select"
                                                    >
                                                      <option value="Ascending">
                                                        Ascending
                                                      </option>
                                                      <option value="Descending">
                                                        Descending
                                                      </option>
                                                      <option value="Newest">
                                                        Newest
                                                      </option>
                                                      <option value="Oldest">
                                                        Oldest
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                                <div
                                                  className={`col-lg-12 mb-3 FV_sortbytag_search_within_row ${
                                                    !addSearchInput
                                                      ? "display-none"
                                                      : ""
                                                  }`}
                                                >
                                                  <input
                                                    type="text"
                                                    name="FV_sortbytag_search_within"
                                                    id="FV_sortbytag_search_within"
                                                    placeholder="Search Within Results"
                                                    className="form-control"
                                                  />
                                                  <a
                                                    href
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      setAddSearchInput(false);
                                                    }}
                                                    className="btnRemoveSearchWithinTag"
                                                    data-toggle="tooltip"
                                                    title="Remove search"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faClose}
                                                    />
                                                  </a>
                                                </div>
                                                <div className="col-lg-12 FV_addsortbytag_search_within_row">
                                                  <button
                                                    type="button"
                                                    className="btnAddNewGreenDashed btnAddSortbyTagFilerCondition"
                                                    data-toggle="tooltip"
                                                    title="Add filter condition"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faPlus}
                                                    />
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btnAddNewGreenDashed btnAddSortbyTagSearchCondition"
                                                    data-toggle="tooltip"
                                                    title="Search"
                                                    onClick={(e)=>{
                                                      e.preventDefault();
                                                      setAddSearchInput(true);
                                                    }
                                                  }
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faSearch}
                                                    />
                                                  </button>
                                                  <div className="hidden_FV_sortbytag_filter_condition_row display-none">
                                                    <div className="input-group mb-3">
                                                      <select
                                                        name="sortbytagSearchCondition"
                                                        className="form-select"
                                                      >
                                                        <option value="OR">
                                                          OR Tag...
                                                        </option>
                                                        <option value="AND">
                                                          AND Tag...
                                                        </option>
                                                        <option value="NOT">
                                                          NOT Tag...
                                                        </option>
                                                      </select>
                                                      <input
                                                        type="text"
                                                        className="form-control FV_sortbytagSearchTaginput"
                                                      />
                                                    </div>
                                                    <a
                                                      href
                                                      onClick={(e) =>
                                                        e.preventDefault()
                                                      }
                                                      className="btnRemoveSortbyTagFilter"
                                                      data-toggle="tooltip"
                                                      title="Remove filter"
                                                    >
                                                      <FontAwesomeIcon
                                                        icon={Icons.faClose}
                                                      />
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="columnFilter opt_3 d-none">
                                              <input
                                                type="text"
                                                name="search_keyword"
                                                value=""
                                                className="form-control"
                                              />
                                            </div>
                                            <div className="columnFilter ScheduledInto d-none">
                                              <select className="form-control form-select">
                                                <option value="All Calendars">
                                                  All Calendars (Blended View)
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group text-center mb-0 filteredViewBtnGroup">
                                    <button
                                      type="button"
                                      className="btn btn-default btnCloseFilteredView"
                                    >
                                      <FontAwesomeIcon icon={Icons.faClose} />
                                      Cancel
                                    </button>
                                    <button
                                      className="btn btn-secondary btnSaveFilteredView"
                                      data-toggle="modal"
                                      data-target="#newFilterModal"
                                    >
                                      <FontAwesomeIcon icon={Icons.faSave} />{" "}
                                      Save Filtered View{" "}
                                      <FontAwesomeIcon
                                        icon={Icons.faBullseye}
                                      />
                                    </button>
                                    <button
                                      className="btn btn-primary"
                                      id="viewFilterResult"
                                    >
                                      <FontAwesomeIcon icon={Icons.faCheck} />{" "}
                                      View Results{" "}
                                      <FontAwesomeIcon
                                        icon={Icons.faBullseye}
                                      />
                                    </button>
                                    <button className="btn btnDeleteFilterView display-none">
                                      <FontAwesomeIcon icon={Icons.faTrash} />{" "}
                                      Delete Filtered View
                                    </button>
                                  </div>
                                </form>
                              </div>
                              <div className="col-lg-3 col-sm-12 savedFilterdView mt-3 mt-lg-0">
                                <h4>Saved Filtered Views</h4>
                                <ul id="savedFilteredList">
                                  <li>
                                    <a href="#" className="btn btn-default">
                                      <FontAwesomeIcon icon={Icons.faFolder} />{" "}
                                      Real estate listing
                                    </a>
                                    <a
                                      href
                                      onClick={(e) => e.preventDefault()}
                                      data-toggle="tooltip"
                                      title="Edit"
                                      className="editFiltered"
                                    >
                                      <FontAwesomeIcon icon={Icons.faEdit} />
                                    </a>
                                    <a
                                      href
                                      onClick={(e) => e.preventDefault()}
                                      data-toggle="tooltip"
                                      title="Delete"
                                      className="deleteFilter"
                                    >
                                      <FontAwesomeIcon icon={Icons.faTrash} />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="btn btn-default">
                                      <FontAwesomeIcon icon={Icons.faCheck} />{" "}
                                      Plumber Transaction
                                    </a>
                                    <a
                                      href
                                      onClick={(e) => e.preventDefault()}
                                      data-toggle="tooltip"
                                      title="Edit"
                                      className="editFiltered"
                                    >
                                      <FontAwesomeIcon icon={Icons.faEdit} />
                                    </a>
                                    <a
                                      href
                                      onClick={(e) => e.preventDefault()}
                                      data-toggle="tooltip"
                                      title="Delete"
                                      className="deleteFilter"
                                    >
                                      <FontAwesomeIcon icon={Icons.faTrash} />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="btn btn-default">
                                      <FontAwesomeIcon icon={Icons.faUser} />{" "}
                                      Doctors Appointment
                                    </a>
                                    <a
                                      href
                                      onClick={(e) => e.preventDefault()}
                                      data-toggle="tooltip"
                                      title="Edit"
                                      className="editFiltered"
                                    >
                                      <FontAwesomeIcon icon={Icons.faEdit} />
                                    </a>
                                    <a
                                      href
                                      onClick={(e) => e.preventDefault()}
                                      data-toggle="tooltip"
                                      title="Delete"
                                      className="deleteFilter"
                                    >
                                      <FontAwesomeIcon icon={Icons.faTrash} />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="folderRow">
                        <td className="text-center tableColChkDel">
                          <input
                            type="checkbox"
                            name="fileid[]"
                            id="C_ID1"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID1"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-folder">
                            <FontAwesomeIcon icon={Icons.faFolder} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Incoming</a>
                          <div className="SwiftCloudTableTags">
                            <ul>
                              <li>
                                <a
                                  href
                                  onClick={(e) => e.preventDefault()}
                                  data-tagname="Tag1"
                                >
                                  Tag1
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-01"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={Icons.faTrashAlt} />
                          </a>
                        </td>
                      </tr>
                      <tr className="folderRow">
                        <td className="text-center tableColChkDel">
                          <input
                            type="checkbox"
                            name="fileid[]"
                            id="C_ID2"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID2"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-folder">
                            <FontAwesomeIcon icon={Icons.faFolder} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Tasks and Projects</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-01"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID14"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID14"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan archiveIconBg">
                            <FontAwesomeIcon icon={faFileZipper} />
                          </span>
                        </td>
                        <td>
                          <a href="file_zip.html">Abc.zip</a>
                          <div className="SwiftCloudTableTags">
                            <ul>
                              <li>
                                <a
                                  href
                                  onClick={(e) => e.preventDefault()}
                                  data-tagname="Zip"
                                >
                                  Zip
                                </a>
                              </li>
                              <li>
                                <a
                                  href
                                  onClick={(e) => e.preventDefault()}
                                  data-tagname="Tag1"
                                >
                                  Tag1
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="SwiftCloudSharedWithUsers">
                            <ul>
                              <li>
                                <a
                                  href="SOCIALIZERPOPUP_SHOWCURRENTSTATUS"
                                  data-toggle="tooltip"
                                  title="SwiftCloud"
                                >
                                  <img src="images/swift_cloud_flag.jpg" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="SOCIALIZERPOPUP_SHOWCURRENTSTATUS"
                                  data-toggle="tooltip"
                                  title="Rover V."
                                >
                                  <img src="images/roger.jpg" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="SOCIALIZERPOPUP_SHOWCURRENTSTATUS"
                                  data-toggle="tooltip"
                                  title="Amitabh Bachchan"
                                >
                                  <img src="images/bachchan-amitabh-image.jpg" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-edit"
                            data-toggle="tooltip"
                            title="Download"
                          >
                            <FontAwesomeIcon icon={Icons.faCloudArrowDown} />
                          </a>
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID15"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID15"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan videoIconBg">
                            <FontAwesomeIcon icon={faFileVideo} />
                          </span>
                        </td>
                        <td>
                          <a href="file_video.html">Video.mp4</a>
                          <div className="SwiftCloudTableTags">
                            <ul>
                              <li>
                                <a
                                  href
                                  onClick={(e) => e.preventDefault()}
                                  data-tagname="Video"
                                >
                                  Video
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="SwiftCloudSharedWithUsers">
                            <ul>
                              <li>
                                <a
                                  href="SOCIALIZERPOPUP_SHOWCURRENTSTATUS"
                                  data-toggle="tooltip"
                                  title="Stephanie Harris"
                                >
                                  <img src="images/Stephanie_Harris.jpg" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-edit"
                            data-toggle="tooltip"
                            title="Download"
                          >
                            <FontAwesomeIcon icon={Icons.faCloudArrowDown} />
                          </a>
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID16"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID16"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan audioIconBg">
                            <FontAwesomeIcon icon={faFileAudio} />
                          </span>
                        </td>
                        <td>
                          <a href="file_audio.html">Audio.mp3</a>
                          <div className="SwiftCloudTableTags">
                            <ul>
                              <li>
                                <a
                                  href
                                  onClick={(e) => e.preventDefault()}
                                  data-tagname="Audio"
                                >
                                  Audio
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="SwiftCloudSharedWithUsers">
                            <ul>
                              <li>
                                <a
                                  href="SOCIALIZERPOPUP_SHOWCURRENTSTATUS"
                                  data-toggle="tooltip"
                                  title="Rover V."
                                >
                                  <img src="images/roger.jpg" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-edit"
                            data-toggle="tooltip"
                            title="Download"
                          >
                            <FontAwesomeIcon icon={Icons.faCloudArrowDown} />
                          </a>
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID17"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID17"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan pdfIconBg">
                            <FontAwesomeIcon icon={faFilePdf} />
                          </span>
                        </td>
                        <td>
                          <a href="file_pdf.html">XYZ.pdf</a>
                          <div className="SwiftCloudSharedWithUsers">
                            <ul>
                              <li>
                                <a
                                  href="SOCIALIZERPOPUP_SHOWCURRENTSTATUS"
                                  data-toggle="tooltip"
                                  title="SwiftCloud"
                                >
                                  <img src="images/swift_cloud_flag.jpg" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="SOCIALIZERPOPUP_SHOWCURRENTSTATUS"
                                  data-toggle="tooltip"
                                  title="Rover V."
                                >
                                  <img src="images/roger.jpg" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="SOCIALIZERPOPUP_SHOWCURRENTSTATUS"
                                  data-toggle="tooltip"
                                  title="Amitabh Bachchan"
                                >
                                  <img src="images/bachchan-amitabh-image.jpg" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-edit"
                            data-toggle="tooltip"
                            title="Download"
                          >
                            <FontAwesomeIcon icon={Icons.faCloudArrowDown} />
                          </a>
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID18"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID18"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan">
                            <img src="images/1.jpg" />
                          </span>
                        </td>
                        <td>
                          <a href="file_image.html">Image.jpg</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-edit"
                            data-toggle="tooltip"
                            title="Download"
                          >
                            <FontAwesomeIcon icon={Icons.faCloudArrowDown} />
                          </a>
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            for="C_ID3"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faFile} />
                          </span>
                        </td>
                        <td>
                          <a href="#">eDoc</a>
                          <div className="SwiftCloudTableTags">
                            <ul>
                              <li>
                                <a
                                  href
                                  onClick={(e) => e.preventDefault()}
                                  data-tagname="Tag1"
                                >
                                  Tag1
                                </a>
                              </li>
                              <li>
                                <a
                                  href
                                  onClick={(e) => e.preventDefault()}
                                  data-tagname="Tag2"
                                >
                                  Tag2
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                          <label
                            for="C_ID4"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faTable} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Spreadsheet</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                          <label
                            for="C_ID5"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faTable} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Invoice</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID6"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID6"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faThList} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Web form</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID7"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID7"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faEnvelope} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Envelope</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID19"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID19"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faUsers} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Workroom</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID8"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID8"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faShoppingCart} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Item you sell</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID9"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID9"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faEllipsisH} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Sequence</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID10"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID10"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faCalendar} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Scheduler</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID11"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID11"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faClone} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Template</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID12"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID12"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faPhone} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Phone number</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
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
                            id="C_ID13"
                            className="css-checkbox"
                          />
                          <label
                            for="C_ID13"
                            className="css-checkbox-label"
                          ></label>
                          <span className="tableColChkSpan btn-secondary">
                            <FontAwesomeIcon icon={Icons.faSignIn} />
                          </span>
                        </td>
                        <td>
                          <a href="#">Paywall</a>
                          <a
                            href="LINK_TO_SOCIALIZER_POPUP"
                            className="btnSocializer"
                            data-toggle="tooltip"
                            title="Share / Attach to Contact"
                          >
                            <FontAwesomeIcon icon={Icons.faUserPlus} />
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <time
                            className="timeago"
                            datetime="2022-05-15"
                          ></time>
                        </td>
                        <td className="text-end tableColAction d-none d-lg-table-cell">
                          <a
                            href
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-delete"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={Icons.faTrashAlt} />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade"
                  id="small-icon"
                  role="tabpanel"
                  aria-labelledby="small-icon-tab"
                >
                  <ul className="smallIconList">
                    <li className="folderIcon">
                      <a href="#">
                        <span>
                          <FontAwesomeIcon icon={Icons.faFolder} />
                        </span>
                        <span className="fileName">Incoming</span>
                      </a>
                    </li>
                    <li className="folderIcon">
                      <a href="#">
                        <span>
                          <FontAwesomeIcon icon={Icons.faFolder} />
                        </span>
                        <span className="fileName">Tasks and Projects</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faFile} />
                        </span>
                        <span className="fileName">eDoc</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faTable} />
                        </span>
                        <span className="fileName">Spreadsheet</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faTable} />
                        </span>
                        <span className="fileName">Invoice</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faThList} />
                        </span>
                        <span className="fileName">Web form</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faEnvelope} />
                        </span>
                        <span className="fileName">Envelope</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faUsers} />
                        </span>
                        <span className="fileName">Workroom</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faShoppingCart} />
                        </span>
                        <span className="fileName">Item you sell</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faEllipsisH} />
                        </span>
                        <span className="fileName">Sequence</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faCalendar} />
                        </span>
                        <span className="fileName">Scheduler</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faClone} />
                        </span>
                        <span className="fileName">Template</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faPhone} />
                        </span>
                        <span className="fileName">Phone number</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn-secondary fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faSignIn} />
                        </span>
                        <span className="fileName">Paywall</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fileTypeIcon"></span>
                        <span className="fileName">
                          Doc with featured image
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="large-icon"
                  role="tabpanel"
                  aria-labelledby="large-icon-tab"
                >
                  <ul className="largeIconList">
                    <li className="folderIcon">
                      <a href="#">
                        <span>
                          <FontAwesomeIcon icon={Icons.faFolder} />
                        </span>
                        <span className="fileName">Incoming</span>
                      </a>
                    </li>
                    <li className="folderIcon">
                      <a href="#">
                        <span>
                          <FontAwesomeIcon icon={Icons.faFolder} />
                        </span>
                        <span className="fileName">Tasks and Projects</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faFile} />
                        </span>
                        <span className="fileName">eDoc</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faTable} />
                        </span>
                        <span className="fileName">Spreadsheet</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faTable} />
                        </span>
                        <span className="fileName">Invoice</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faThList} />
                        </span>
                        <span className="fileName">Web form</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faEnvelope} />
                        </span>
                        <span className="fileName">Envelope</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faUsers} />
                        </span>
                        <span className="fileName">Workroom</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faShoppingCart} />
                        </span>
                        <span className="fileName">Item you sell</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faEllipsisH} />
                        </span>
                        <span className="fileName">Sequence</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faCalendar} />
                        </span>
                        <span className="fileName">Scheduler</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faClone} />
                        </span>
                        <span className="fileName">Template</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faPhone} />
                        </span>
                        <span className="fileName">Phone number</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileTypeIcon">
                          <FontAwesomeIcon icon={Icons.faSignIn} />
                        </span>
                        <span className="fileName">Paywall</span>
                      </a>
                    </li>
                    <li className="btn-secondary">
                      <a href="#">
                        <span className="fileName">
                          Doc with featured image
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Doc modal --> */}
      <div className="modal fade" ref={newDocModalRef} tabindex="-1">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newDocModalTitle">
                <FontAwesomeIcon icon={Icons.faFile} /> Doc
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="docName" className="col-sm-4 col-form-label">
                  Doc Name
                </label>
                <div className="col-sm-8">
                  <input
                    name="docName"
                    id="docName"
                    placeholder="Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="row align-items-center">
                <label for="docType" className="col-sm-4 col-form-label">
                  Type
                </label>
                <div className="col-sm-8">
                  <select name="docType" id="docType" className="form-select">
                    <option value="eSignDoc">E-Sign Doc</option>
                    <option value="form">Doc Form</option>
                    <option value="embedform">Embeddable Form</option>
                    <option value="playbook">Playbook / SOP / Policy</option>
                    <option value="dashboardFullscreen">
                      Dashboard / Fullscreen TV / Radar
                    </option>
                    <option value="faq">FAQs/Snippets</option>
                    <option value="review">Review</option>
                    <option value="emailTemplate">Template</option>
                    <option value="mailMergeDoc">Mail Merge Doc</option>
                    <option value="jobPostOpening">Job Post Opening</option>
                    <option value="CVResume">CV Resume</option>
                    <option value="ComplianceChecklist">
                      Compliance Checklist
                    </option>
                    <option value="RFP">RFP (Request for Proposal)</option>
                    <option value="quiz">Quiz / Test</option>
                    <option value="poll">Poll</option>
                    <option value="election">Election</option>
                    <option value="regularDoc">Regular Doc (No Inputs)</option>
                    <option value="Mini">Mini / Mobile / Focused</option>
                    <option value="vLandigPage">Landing Page</option>
                    <option value="vPSUPage">Sales / Upsell Page</option>
                    <option value="vOnDemandPage">
                      Video on Demand / Webinar Style
                    </option>
                    <option value="webpage">Webpage</option>
                    <option value="Fullscreen">Fullscreen</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#" className="justify-content-start me-auto">
                <small>Templates</small>
              </a>
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Advanced Tag Search modal --> */}
      <div
        className="modal fade"
        ref={contactsSortByTagModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="ContactsSortByTagModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ContactsSortByTagModalTitle">
                <FontAwesomeIcon icon={Icons.faSort} /> Advanced Tag Search
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 sortbytag_row">
                  <div className="input-group mb-3">
                    <select
                      name="sortbytag_with_or_without"
                      id="sortbytag_with_or_without"
                      className="form-select"
                    >
                      <option value="Tagged with">Tagged with</option>
                      <option value="Not Tagged with">Not Tagged with</option>
                    </select>
                    <input
                      type="text"
                      name="sortbytag_input"
                      id="sortbytag_input"
                      className="form-control"
                      value="tag"
                    />
                    <select
                      name="sortbytag_score_opt"
                      id="sortbytag_score_opt"
                      className="form-select"
                    >
                      <option value="Any">Any TagScore</option>
                      <option value="Above">TagScore Above</option>
                      <option value="Below">TagScore Below</option>
                    </select>
                    <input
                      type="number"
                      name="sortbytag_score_input"
                      id="sortbytag_score_input"
                      className="form-control d-none"
                      placeholder="Value"
                      value="50"
                    />
                    <select name="sortbytag_asc_desc" className="form-select">
                      <option value="Ascending">Ascending</option>
                      <option value="Descending">Descending</option>
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12 mb-3 sortbytag_search_within_row display-none">
                  <input
                    type="text"
                    name="sortbytag_search_within"
                    id="sortbytag_search_within"
                    placeholder="Search Within Results"
                    className="form-control"
                  />
                  <a
                    href
                    onClick={(e) => e.preventDefault()}
                    className="btnRemoveSearchWithinTag"
                    data-toggle="tooltip"
                    title="Remove search"
                  >
                    <FontAwesomeIcon icon={Icons.faClose} />
                  </a>
                </div>
                <div className="col-lg-12 addsortbytag_search_within_row">
                  <button
                    type="button"
                    className="btnAddNewGreenDashed btnAddSortbyTagFilerCondition"
                    data-bs-toggle="tooltip"
                    title="Add filter condition"
                  >
                    <FontAwesomeIcon icon={Icons.faPlus} />
                  </button>
                  <button
                    type="button"
                    className="btnAddNewGreenDashed btnAddSortbyTagSearchCondition"
                    data-toggle="tooltip"
                    title="Search"
                  >
                    <FontAwesomeIcon icon={Icons.faSearch} />
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="hidden_sortbytag_filter_condition_row display-none">
                <div className="col-lg-12 sortbytag_filter_condition_row">
                  <div className="input-group mb-3">
                    <select
                      name="sortbytagSearchCondition"
                      className="form-select"
                    >
                      <option value="OR">OR Tag...</option>
                      <option value="AND">AND Tag...</option>
                      <option value="NOT">NOT Tag...</option>
                    </select>
                    <input
                      type="text"
                      className="form-control sortbytagSearchTaginput"
                    />
                  </div>
                  <a
                    href
                    onClick={(e) => e.preventDefault()}
                    className="btnRemoveSortbyTagFilter"
                    data-toggle="tooltip"
                    title="Remove filter"
                  >
                    <FontAwesomeIcon icon={Icons.faClose} />
                  </a>
                </div>
              </div>
              <button type="button" className="btn btn-danger btnDropResult">
                <FontAwesomeIcon icon={Icons.faTrashAlt} /> Drop Results
              </button>
              <button type="button" className="btn btn-secondary">
                <FontAwesomeIcon icon={Icons.faSave} /> Save Filtered View{" "}
                <FontAwesomeIcon icon={Icons.faBullseye} />
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faSearch} /> Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Advanced Tag Search - Drop result modal --> */}
      <div
        className="modal fade"
        ref={sortByTagDropResultModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="sortByTagDropResultModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sortByTagDropResultModalTitle">
                <FontAwesomeIcon icon={Icons.faTrashAlt} /> Drop Results
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="sortbytag_drop_result_container mx-auto w-100 text-center">
                <div className="alert alert-warning" role="alert">
                  <FontAwesomeIcon icon={Icons.faTriangleExclamation} /> Ok to
                  drop 1234 matches? This cannot be undone.
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Abort Unchanged
              </button>
              <button type="button" className="btn btn-danger btnDropResult">
                <FontAwesomeIcon icon={Icons.faCheck} /> Yes, Proceed & Drop{" "}
                <FontAwesomeIcon icon={Icons.faTrashAlt} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New SpreadSheet modal --> */}
      <div
        className="modal fade"
        ref={newSheetModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newSheetModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newSheetModalTitle">
                <FontAwesomeIcon icon={Icons.faTable} /> SpreadSheet
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="sheetName" className="col-sm-4 col-form-label">
                  SpreadSheet Name
                </label>
                <div className="col-sm-8">
                  <input
                    name="sheetName"
                    id="sheetName"
                    placeholder="Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Invoice modal --> */}
      <div
        className="modal fade"
        ref={newInvoiceModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newInvoiceModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newInvoiceModalTitle">
                <FontAwesomeIcon icon={Icons.faTable} /> Estimate / Invoice /
                Receipt / Etc.
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="invoiceName" className="col-sm-4 col-form-label">
                  Title{" "}
                  <span
                    data-toggle="tooltip"
                    title="A descriptive name so you know what it's for. Will display to all parties."
                  >
                    <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                  </span>
                </label>
                <div className="col-sm-8">
                  <input
                    name="invoiceName"
                    id="invoiceName"
                    placeholder="Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3 row align-items-center">
                <label
                  for="invoiceTypeOpts"
                  className="col-sm-4 col-form-label"
                >
                  Status
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <select
                      className="form-select mb-1"
                      name="invoiceType"
                      id="invoiceTypeOpts"
                    >
                      <option value="Invoice">Invoice</option>
                      <option value="Estimate" selected="selected">
                        Estimate
                      </option>
                      <option value="Proposal">Proposal</option>
                      <option value="Quote">Quote</option>
                      <option value="Purchase_Order">Purchase Order</option>
                      <option value="Credit_Memo">Credit Memo</option>
                      <option value="Receipt">Receipt</option>
                    </select>
                    <select
                      className="form-select mb-1"
                      name="invoiceStatus"
                      id="invoice_status_opts"
                    >
                      <option value="Not_Yet_Committed" selected="selected">
                        Not Yet Committed
                      </option>
                      <option value="Committed">Committed</option>
                      <option value="Due">Due</option>
                      <option value="Paid_Partial">Paid Partial</option>
                      <option value="Paid">PAID</option>
                      <option value="Canceled">Canceled</option>
                      <option value="Refunded">Refunded</option>
                      <option value="Unpaid_Overdue">Unpaid Overdue</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Form modal --> */}
      <div
        className="modal fade"
        ref={newWebFormModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newWebFormModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newWebFormModalTitle">
                <FontAwesomeIcon icon={Icons.faThList} /> Web Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="formName" className="col-sm-4 col-form-label">
                  Web Form Name
                </label>
                <div className="col-sm-8">
                  <input
                    name="formName"
                    id="formName"
                    placeholder="Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Folder / Workroom modal --> */}
      <div
        className="modal fade"
        ref={newFolderWorkRoomModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newFolderWorkroomModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newFolderWorkroomModalTitle">
                <FontAwesomeIcon icon={Icons.faFolder} /> Folder /{" "}
                <FontAwesomeIcon icon={Icons.faUsers} /> Workroom
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pt-0">
              <div className="row stepProcess d-none">
                <div className="col-lg-12 p-0">
                  {/* <!-- ONLY YELLOW (ACTIVE STEP) SHOW FULL LABEL, ALL OTHERS ICON ONLY -->
                                <!-- THIS STATUS CORRESPONDS TO NEXT STEP, WHICH ALSO CORRESPONDS TO PREVIOUS DISPOSITION --> */}
                  <ul className="nav nav-wizard">
                    <li className="SaleStatus_Pending" data-step="1">
                      <a href data-toggle="tooltip" title="Recipient(s)">
                        <FontAwesomeIcon icon={Icons.faUser} />{" "}
                        <span>Recipient(s)</span>
                      </a>
                    </li>
                    <li className="SaleStatus_NotStarted" data-step="2">
                      <a
                        href
                        onClick={(e) => e.preventDefault()}
                        data-toggle="tooltip"
                        title="Edit & Send Message"
                        onclick="event.stopPropagation();"
                      >
                        <FontAwesomeIcon icon={Icons.faPaperPlane} />{" "}
                        <span>Send Message</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="my-3 row align-items-center">
                <label for="folderName" className="col-sm-4 col-form-label">
                  Folder Name
                </label>
                <div className="col-sm-8">
                  <input
                    name="folderName"
                    id="folderName"
                    placeholder="Name / Label"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3 row align-items-center">
                <div className="col-md-12 shareWithOtherPeopleOpts">
                  <input
                    type="checkbox"
                    name="sendWorkroomInvitation"
                    id="sendWithOtherPeople"
                    className="css-checkbox"
                  />
                  <label
                    for="sendWithOtherPeople"
                    className="css-checkbox-label radGroup2 form-inline mr-sm-2"
                  >
                    <FontAwesomeIcon icon={Icons.faUsers} /> Share with other
                    people
                  </label>
                </div>
              </div>
              <div className="mb-3 row align-items-center shareWithOtherPeopleContainer d-none">
                <div className="col-md-12">
                  <div className="row mb-3 position-relative">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        name="userEmailName"
                        placeholder="Email or Username"
                        autocomplete="off"
                      />
                    </div>
                    <div className="col-lg-6">
                      <select name="userRoleSelect" className="form-select">
                        <option>List of Roles</option>
                      </select>
                      <a
                        href
                        onClick={(e) => e.preventDefault()}
                        className="btnRemovePeople"
                        data-toggle="tooltip"
                        title="Remove User"
                      >
                        <FontAwesomeIcon icon={Icons.faTrashAlt} />
                      </a>
                    </div>
                  </div>
                  <div className="row mb-3 btnAddNewPeopleRow">
                    <div className="col-lg-12 text-center">
                      <button
                        type="button"
                        className="btnAddNewGreenDashed btnAddNewPeople"
                        data-toggle="tooltip"
                        title="Add New"
                      >
                        <FontAwesomeIcon icon={Icons.faPlus} />
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="checkbox"
                        name="sendInvitation"
                        id="sendInvitation"
                        className="css-checkbox"
                      />
                      <label
                        for="sendInvitation"
                        className="css-checkbox-label"
                      >
                        <FontAwesomeIcon icon={Icons.faPaperPlane} /> Send
                        Invitation
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Envelope modal --> */}
      <div
        className="modal fade"
        ref={newEnvelopeModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newEnvelopeModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newEnvelopeModalTitle">
                <FontAwesomeIcon icon={Icons.faEnvelope} /> Envelope
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="envelopeName" className="col-sm-4 col-form-label">
                  Envelope Name
                </label>
                <div className="col-sm-8">
                  <input
                    name="envelopeName"
                    id="envelopeName"
                    placeholder="Name / Label"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Item modal --> */}
      <div
        className="modal fade"
        ref={newItemModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newItemModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newItemModalTitle">
                <FontAwesomeIcon icon={Icons.faShoppingCart} /> SKU / Item You
                Sell
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="itemName" className="col-sm-4 col-form-label">
                  Item Name
                </label>
                <div className="col-sm-8">
                  <input
                    name="itemName"
                    id="itemName"
                    placeholder="Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Sequence modal --> */}
      <div
        className="modal fade"
        ref={newSequenceModalRef}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="newSequenceModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newSequenceModalTitle">
                <FontAwesomeIcon icon={Icons.faEllipsisH} /> New Sequence
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="sequenceName" className="col-sm-4 col-form-label">
                  Sequence Name{" "}
                  <span
                    data-toggle="tooltip"
                    title="Often yourself, but could be an employee, or any asset (i.e. boat, backhoe, or conference room, etc) - anything or anyone you want to schedule access to."
                  >
                    <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                  </span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="sequenceName"
                    id="sequenceName"
                    placeholder="Sequence Name"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Scheduler modal --> */}
      <div
        className="modal fade"
        ref={newSchedulerModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newSchedulerModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newSchedulerModalTitle">
                <FontAwesomeIcon icon={Icons.faCalendar} /> Add New Scheduler
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="schedulerName" className="col-sm-4 col-form-label">
                  Name{" "}
                  <span
                    data-toggle="tooltip"
                    title="Who or what? i.e. Jane Doe, Boardroom A. You'll define purpose and block of time on the next step."
                  >
                    <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                  </span>
                </label>
                <div className="col-sm-8">
                  <input
                    name="schedulerName"
                    id="schedulerName"
                    placeholder="Name"
                    className="form-control"
                    type="text"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Phone modal --> */}
      <div
        className="modal fade"
        ref={newPhoneModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newPhoneModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newPhoneModalTitle">
                <FontAwesomeIcon icon={Icons.faPhone} /> Phone Number
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-5 row align-items-center">
                <div className="col-sm-12">
                  {/* <!--Add {PHONE} to 01_Settings >> Phone AND to Main Drive --> */}
                  <input
                    className="form-control form-control-lg"
                    type="tel"
                    name="add_phone_search"
                    id="add_phone_search"
                    placeholder=""
                  />
                  <div className="phone_search_result_container display-none">
                    <div className="phone_search_loader display-none">
                      <div className="phone_search_loader_content">
                        <FontAwesomeIcon icon={Icons.faSpinner} /> Provisioning
                      </div>
                    </div>
                    <ul id="show_phone_number_ul"></ul>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-12 text-center">
                  <p>What country & area code?</p>
                  <p>
                    <a
                      href="https://portal.SwiftCRM.com/swiftcloud/phoneportrequest"
                      target="_blank"
                    >
                      Click here to migrate (port in) an existing phone number.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Paywall modal --> */}
      <div
        className="modal fade"
        ref={newPaywallModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="newPaywallModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newPaywallModalTitle">
                <FontAwesomeIcon icon={Icons.faSignIn} /> Paywall
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <label for="paywallName" className="col-sm-4 col-form-label">
                  Paywall Name
                </label>
                <div className="col-sm-8">
                  <input
                    name="paywallName"
                    id="paywallName"
                    placeholder="Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- FreeBaitLeadGen modal --> */}
      <div
        className="modal fade"
        ref={freeBaitLeadGenRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="FreeBaitLeadGenTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="FreeBaitLeadGenTitle">
                <FontAwesomeIcon icon={Icons.faFolder} /> Select Folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <div className="col-sm-12">
                  <select className="form-select">
                    <option>Select Folder</option>
                    <option>Root</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- DirectSellUpsell modal --> */}
      <div
        className="modal fade"
        ref={directSellUpsellRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="DirectSellUpsellTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="DirectSellUpsellTitle">
                <FontAwesomeIcon icon={Icons.faFolder} /> Select Folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <div className="col-sm-12">
                  <select className="form-select">
                    <option>Select Folder</option>
                    <option>Root</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- QualifierAppointmentScheduler modal --> */}
      <div
        className="modal fade"
        ref={qualifierAppointmentSchedulerRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="QualifierAppointmentSchedulerTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="QualifierAppointmentSchedulerTitle"
              >
                <FontAwesomeIcon icon={Icons.faFolder} /> Select Folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <div className="col-sm-12">
                  <select className="form-select">
                    <option>Select Folder</option>
                    <option>Root</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- NewtoMarketValidator modal --> */}
      <div
        className="modal fade"
        ref={newtoMarketValidatorRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="NewtoMarketValidatorTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="NewtoMarketValidatorTitle">
                <FontAwesomeIcon icon={Icons.faFolder} /> Select Folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <div className="col-sm-12">
                  <select className="form-select">
                    <option>Select Folder</option>
                    <option>Root</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- FreeShippingUpsells modal --> */}
      <div
        className="modal fade"
        ref={freeShippingUpsellsRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="FreeShippingUpsellsTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="FreeShippingUpsellsTitle">
                <FontAwesomeIcon icon={Icons.faFolder} /> Select Folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <div className="col-sm-12">
                  <select className="form-select">
                    <option>Select Folder</option>
                    <option>Root</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- FreeTripwireSale modal --> */}
      <div
        className="modal fade"
        ref={freeTripwireSaleRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="FreeTripwireSaleTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="FreeTripwireSaleTitle">
                <FontAwesomeIcon icon={Icons.faFolder} /> Select Folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <div className="col-sm-12">
                  <select className="form-select">
                    <option>Select Folder</option>
                    <option>Root</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- FreeBaitWebinarVideo modal --> */}
      <div
        className="modal fade"
        ref={freeBaitWebinarVideoRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="FreeBaitWebinarVideoTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="FreeBaitWebinarVideoTitle">
                <FontAwesomeIcon icon={Icons.faFolder} /> Select Folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row align-items-center">
                <div className="col-sm-12">
                  <select className="form-select">
                    <option>Select Folder</option>
                    <option>Root</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faCheck} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drive;
