import React from "react";

const Url = () => {
  return (
    <>
      {/* <!--Container Main start--> */}
      <div id="right-section" className="h-100">
        <div className="row g-0">
          <div className="col" id="page-urls">
            <div className="row">
              <div className="col-lg-12 mb-1">
                <select
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#Global_URLInjector"
                  >
                    <i className="fa fa-plus"></i> <span>Add New</span>
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
                    <tr>
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
                          <i className="fa fa-filter"></i>
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
                          <i className="fa fa-filter"></i>
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
                            <i className="fa fa-trash-alt"></i> Move to Trash
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
                          <i className="fa fa-chain"></i>
                        </span>
                      </td>
                      <td>
                        <a href="#">Username.SwiftCRM.com/abc</a>
                      </td>
                      <td className="d-none d-md-table-cell">Campaign 1</td>
                      <td className="d-none d-md-table-cell">
                        0 Completion Yet{" "}
                        <a href="#">
                          <i className="fa fa-edit"></i>
                        </a>
                      </td>
                      <td className="text-end d-none d-lg-table-cell">
                        <a
                          href="#"
                          className="btn btnOpenChatDock btnURLChatDock"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="History"
                        >
                          <i className="fa fa-history"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-edit"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="Edit"
                        >
                          <i className="fa fa-pencil"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-delete"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="Delete"
                        >
                          <i className="fa fa-trash-alt"></i>
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
                          <i className="fa fa-chain"></i>
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
                          <i className="fa fa-edit"></i>
                        </a>
                      </td>
                      <td className="text-end d-none d-lg-table-cell">
                        <a
                          href="#"
                          className="btn btnOpenChatDock btnURLChatDock"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="History"
                        >
                          <i className="fa fa-history"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-edit"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="Edit"
                        >
                          <i className="fa fa-pencil"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-delete"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="Delete"
                        >
                          <i className="fa fa-trash-alt"></i>
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
                          <i className="fa fa-chain"></i>
                        </span>
                      </td>
                      <td>
                        <a href="#">Username.SwiftCRM.com/jkl</a>
                      </td>
                      <td className="d-none d-md-table-cell">Campaign 3</td>
                      <td className="d-none d-md-table-cell">
                        <i className="fa fa-sign-out"></i> 12 Clicks{" "}
                        <a href="#">
                          <i className="fa fa-edit"></i>
                        </a>
                      </td>
                      <td className="text-end  d-none d-lg-table-cell">
                        <a
                          href="#"
                          className="btn btnOpenChatDock btnURLChatDock"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="History"
                        >
                          <i className="fa fa-history"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-edit"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="Edit"
                        >
                          <i className="fa fa-pencil"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-delete"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="Delete"
                        >
                          <i className="fa fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Container Main end--> */}

      {/* <!-- History dock start --> */}
      <div className="SCChatDockNonSocialAssetOnly d-none">
        <div className="ChatDockHeader">
          <select className="ChatDockInputOpt" data-width="200">
            <option value="history" data-icon="fa-history">
              History
            </option>
            <option value="Private_note" data-icon="fa-sticky-note" selected>
              Add Note
            </option>
            <option value="report" data-icon="fa-bar-chart">
              Generate Report
            </option>
          </select>
          <a
            href="#"
            className="btnCloseChatDock"
            data-toggle="tooltip"
            data-placement="left"
            data-animation="false"
            title="Close"
          >
            <i className="fa fa-close"></i>
          </a>
        </div>
        <div className="ChatDockHistoryContainer">
          <ul className="chat">
            <li className="other">
              <div className="chat-msg">
                <div className="avatar">
                  <a
                    href="#"
                    className="quickcontact_userSelect d-block"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-animation="false"
                    title="SwiftCloud"
                  >
                    <img src="images/swift_cloud_flag.jpg" />
                  </a>
                </div>
                <div className="msg">
                  <p>
                    <strong>Welcome to SwiftCloud!</strong>
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <span className="msg-by-time">
                    Private Note by <a href="contact_detail.html">SwiftCloud</a>{" "}
                    at <time>5:48 pm on Friday, June 10, 2022</time>
                  </span>
                </div>
              </div>
            </li>
            <li className="other">
              <div className="chat-msg">
                <div className="avatar">
                  <a
                    href="#"
                    className="quickcontact_userSelect d-block"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-animation="false"
                    title="Roger V."
                  >
                    <img src="images/roger.jpg" />
                  </a>
                </div>
                <div className="msg">
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form,
                  </p>
                  <span className="msg-by-time">
                    Private Note by <a href="contact_detail.html">Roger V.</a>{" "}
                    at <time>10:00 am on Saturday, June 11, 2022</time>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="ChatDockFooterContainer">
          <div className="ChatDockOpt ChatDockPrivateNoteOpt">
            <div className="mb-2">
              <textarea
                className="form-control"
                placeholder="Add Note"
              ></textarea>
            </div>
            <div className="row">
              <div className="col-lg-6 text-start ChatDockPrivateNoteTools">
                <a
                  href="#Global_URLInjector"
                  data-bs-toggle="modal"
                  data-toggle="tooltip"
                  title="Add URL"
                >
                  <i className="fa fa-link"></i>
                </a>
                <a href="#" data-toggle="tooltip" title="Insert Image/Video">
                  <i className="fa fa-camera"></i>
                </a>
                <a
                  href="#"
                  className="chatNoteImg"
                  data-toggle="tooltip"
                  title="Upload file"
                >
                  <i className="fa fa-paperclip"></i>
                </a>
                <a href="#" data-toggle="tooltip" title="Inject Emoji">
                  <i className="fa-regular fa-face-smile"></i>
                </a>
                <input
                  type="file"
                  accept="image/*"
                  className="chatNoteImgFile"
                  style={{ visibility: "hidden", position: "absolute" }}
                />
              </div>
              <div className="col-lg-6 text-end">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-check"></i> Add Note
                </button>
              </div>
            </div>
          </div>
          <div className="ChatDockOpt ChatDockReportOpt d-none">
            <div className="text-center py-3">
              {/* <!-- call to data source and insert as note --> */}
              <button type="button" className="btn btn-primary">
                <i className="fa fa-bar-chart"></i> Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- History dock end --> */}

      {/* <!-- Modal popup for NEW Global Popup - Global_URLInjector --> */}
      <div
        className="modal"
        id="Global_URLInjector"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="mb-0">
                <i className="fa fa-link"></i> Add URL
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="panel panel-default"
                    id="URLInj_pinkBoxContainer"
                  >
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <a
                          data-bs-toggle="collapse"
                          href="#URLInj_pinkBox"
                          role="button"
                          aria-expanded="true"
                          aria-controls="URLInj_pinkBox"
                        >
                          <i className="fa fa-sign-in"></i>FOR THEM: User
                          will...{" "}
                          <span
                            data-toggle="tooltip"
                            data-placement="bottom"
                            data-html="true"
                            data-animation="false"
                            title="Destination(s) / Input Target URL(s)"
                          >
                            <i className="fa fa-question-circle"></i>
                          </span>
                        </a>
                      </h3>
                    </div>
                    <div
                      id="URLInj_pinkBox"
                      className="panel-collapse collapse show"
                    >
                      <div className="panel-body py-3">
                        <div className="">
                          <div className="row align-items-center mb-2">
                            <div className="col-lg-12 hiddenSelectboxContainer">
                              <span className="text-dash-underline userWillGoText">
                                in all cases
                              </span>
                              <select className="form-select inlineSelectBox display-none userWillGo">
                                <option value="in all cases">
                                  in all cases
                                </option>
                                <option value="splitTested50">
                                  be Split Tested (50-50) &
                                </option>
                                <option value="splitTested33">
                                  be Split Tested (33%) &
                                </option>
                                <option value="RAVEScore">
                                  depending on RAVE score
                                </option>
                                <option value="TagScore">
                                  depending on TagScore
                                </option>
                                <option value="Agenda">
                                  depending on Agenda
                                </option>
                                <option value="PayWall">
                                  depending on PayWall
                                </option>
                              </select>
                              be sent to...
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 userWillGoOpts inAllCaseBox">
                              <div className="pinkBoxBorder">
                                <div className="row align-items-center">
                                  <div className="col-lg-12">
                                    <div className="input-group">
                                      <select className="form-select urlTypeList">
                                        <option value="URL" selected="selected">
                                          URL
                                        </option>
                                      </select>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="URLInj_anyurl"
                                        placeholder="https://"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mt-2 splitTested50 splitTested33 userWillGoOpts display-none">
                                    <div className="input-group">
                                      <select className="form-select urlTypeList">
                                        <option value="URL" selected="selected">
                                          URL
                                        </option>
                                      </select>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="URLInj_anyurl"
                                        placeholder="https://"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mt-2 splitTested33 userWillGoOpts display-none">
                                    <div className="input-group">
                                      <select className="form-select urlTypeList">
                                        <option value="URL" selected="selected">
                                          URL
                                        </option>
                                      </select>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="URLInj_anyurl"
                                        placeholder="https://"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 userWillGoOpts raveScoreBox display-none">
                              <div className="pinkBoxBorder mb-3">
                                <div className="row row-cols-lg-auto g-2 align-items-center mb-2">
                                  <div className="col-12">If Score is...</div>
                                  <div className="col-12">
                                    <select
                                      name="tagScoreOpt"
                                      className="form-select mb-1 mb-lg-0"
                                    >
                                      <option
                                        value="lessthan"
                                        selected="selected"
                                      >
                                        {" "}
                                        Less Than
                                      </option>
                                      <option value="morethan">
                                        {" "}
                                        More Than
                                      </option>
                                    </select>
                                  </div>
                                  <div className="col-12">
                                    <input
                                      type="text"
                                      name="tagScoreInput"
                                      className="form-control tagScoreNo"
                                      defaultValue="50"
                                    />
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-lg-12">
                                    <div className="input-group">
                                      <div className="input-group-text">
                                        go to...
                                      </div>
                                      <select className="form-select urlTypeList">
                                        <option value="URL" selected="selected">
                                          URL
                                        </option>
                                      </select>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="https://"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row align-items-center">
                                <div className="col-lg-12 text-center mb-3">
                                  <a
                                    href="#"
                                    className="btnAddNewGreenDashed btnAddNewPinkRaveScoreBox"
                                  >
                                    <i className="fa fa-plus"></i>
                                  </a>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-group">
                                    <div className="input-group-text">
                                      Otherwise go to...
                                    </div>
                                    <select className="form-select urlTypeList">
                                      <option value="URL" selected="selected">
                                        URL
                                      </option>
                                    </select>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="https://"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <small>Rules will run top to bottom.</small>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 userWillGoOpts tagScoreBox display-none">
                              <div className="pinkBoxBorder mb-3">
                                <div className="row row-cols-lg-auto g-2 align-items-center mb-2">
                                  <div className="col-12">If</div>
                                  <div className="col-12 tagsInputContainer">
                                    <input
                                      type="text"
                                      className="form-control tagScoreInput"
                                      defaultValue="EditMe"
                                    />
                                  </div>
                                  <div className="col-12">Score is...</div>
                                  <div className="col-12">
                                    <select
                                      name="tagScoreOpt"
                                      className="form-select mb-1 mb-lg-0"
                                    >
                                      <option
                                        value="lessthan"
                                        selected="selected"
                                      >
                                        Less Than
                                      </option>
                                      <option value="morethan">
                                        {" "}
                                        More Than
                                      </option>
                                    </select>
                                  </div>
                                  <div className="col-12">
                                    <input
                                      type="text"
                                      name="tagScoreInput"
                                      className="form-control tagScoreNo"
                                      defaultValue="50"
                                    />
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-lg-12">
                                    <div className="input-group">
                                      <div className="input-group-text">
                                        go to...
                                      </div>
                                      <select className="form-select urlTypeList">
                                        <option value="URL" selected="selected">
                                          URL
                                        </option>
                                      </select>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="https://"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row align-items-center">
                                <div className="col-lg-12 text-center mb-3">
                                  <a
                                    href="#"
                                    className="btnAddNewGreenDashed btnAddNewPinkTagScoreBox"
                                  >
                                    <i className="fa fa-plus"></i>
                                  </a>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-group">
                                    <div className="input-group-text">
                                      Otherwise go to...
                                    </div>
                                    <select className="form-select urlTypeList">
                                      <option value="URL" selected="selected">
                                        URL
                                      </option>
                                    </select>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="https://"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <small>Rules will run top to bottom.</small>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 userWillGoOpts agendaBox display-none">
                              <div className="pinkBoxBorder mb-3">
                                <div className="row row-cols-lg-auto g-2 align-items-center mb-2">
                                  <div className="col-12">If Agenda is...</div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-lg-12">
                                    <div className="input-group">
                                      <select className="form-select agendaList">
                                        <option value="capture">Capture</option>
                                        <option value="build_trust">
                                          Build Trust
                                        </option>
                                        <option value="tripwire_offer">
                                          Tripwire Offer
                                        </option>
                                        <option value="intro_offer">
                                          Intro Offer
                                        </option>
                                        <option value="main_offer">
                                          Main Offer
                                        </option>
                                        <option value="upsell_offer">
                                          Upsell Offer
                                        </option>
                                        <option value="promoter">
                                          Promoter
                                        </option>
                                      </select>
                                      <div className="input-group-text">
                                        go to...
                                      </div>
                                      <select className="form-select urlTypeList">
                                        <option value="URL" selected="selected">
                                          URL
                                        </option>
                                      </select>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="https://"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row align-items-center">
                                <div className="col-lg-12 text-center mb-3">
                                  <a
                                    href="#"
                                    className="btnAddNewGreenDashed btnAddNewPinkAgendaBox"
                                  >
                                    <i className="fa fa-plus"></i>
                                  </a>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-group">
                                    <div className="input-group-text">
                                      Otherwise go to...
                                    </div>
                                    <select className="form-select urlTypeList">
                                      <option value="URL" selected="selected">
                                        URL
                                      </option>
                                    </select>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="https://"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <small>Rules will run top to bottom.</small>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 userWillGoOpts paywallBox display-none">
                              <div className="pinkBoxBorder mb-3">
                                <div className="row row-cols-lg-auto g-2 align-items-center mb-2">
                                  <div className="col-12">If Paywall is...</div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-lg-12">
                                    <div className="input-group">
                                      <select className="form-select agendaList">
                                        <option value="Allowed">Allowed</option>
                                        <option value="Disallowed">
                                          Disallowed
                                        </option>
                                      </select>
                                      <div className="input-group-text">
                                        go to...
                                      </div>
                                      <select className="form-select urlTypeList">
                                        <option value="URL" selected="selected">
                                          URL
                                        </option>
                                      </select>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="https://"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="input-group">
                                    <div className="input-group-text">
                                      Otherwise go to...
                                    </div>
                                    <select className="form-select urlTypeList">
                                      <option value="URL" selected="selected">
                                        URL
                                      </option>
                                    </select>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="https://"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 pt-3">
                              <div className="mb-3 row g-0 pinkBoxBorder">
                                <div className="col-sm-12">
                                  <div className="form-check-inline mb-0 piggybackCheck">
                                    <input
                                      type="checkbox"
                                      name="piggybackOpt"
                                      id="piggybackOpt"
                                      className="css-checkbox compressURLOn"
                                      defaultValue="piggyBackContent"
                                    />
                                    <label
                                      htmlFor="piggybackOpt"
                                      className="css-checkbox-label radGroup2 mb-0"
                                    >
                                      <i className="fa fa-copy fa-rotate-180 fa-flip-horizontal"></i>{" "}
                                      Add Piggyback Content
                                    </label>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-12 auto display-none py-3 customModalContainer"
                                  id="addNewPiggybackFormContainer"
                                >
                                  <div className="row g-0">
                                    <div className="col-lg-12 colHeading">
                                      <strong>
                                        <i className="fa fa-plus"></i> ADD NEW{" "}
                                        <i className="fa fa-copy fa-rotate-180 fa-flip-horizontal"></i>{" "}
                                        PIGGYBACK
                                      </strong>
                                    </div>
                                    <div className="col-lg-12 dh-block-body">
                                      <form>
                                        <div className="mb-3 row align-items-center">
                                          <div className="col-sm-4">Style</div>
                                          <div className="col-sm-8">
                                            <select
                                              name="styleOpt"
                                              id="styleOpt"
                                              className="form-select"
                                            >
                                              <option value="Chat">Chat</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="mb-3 row align-items-center">
                                          <div className="col-sm-4">
                                            Headline / Offer
                                          </div>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="ctaText"
                                              defaultValue="Free Video: 7 Tips to Triple Your Leads"
                                            />
                                          </div>
                                        </div>
                                        <div className="mb-3 row align-items-center">
                                          <div className="col-sm-4">Button</div>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="ctaBtnText"
                                              defaultValue="Get My Copy"
                                            />
                                          </div>
                                        </div>
                                        <div className="mb-3 row align-items-center">
                                          <div className="col-sm-4">
                                            Button URL
                                          </div>
                                          <div className="col-sm-8">
                                            <input
                                              type="url"
                                              className="form-control"
                                              name="ctaBtnURl"
                                              defaultValue="https://"
                                            />
                                          </div>
                                        </div>
                                        <div className="mb-3 row align-items-center">
                                          <div className="col-sm-4">
                                            Button Text Color
                                          </div>
                                          <div className="col-sm-8">
                                            <div className="input-group colorpicker-component">
                                              {" "}
                                              <input
                                                type="text"
                                                defaultValue="#125fad"
                                                className="form-control"
                                              />{" "}
                                              <span className="input-group-text">
                                                <i></i>
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mb-3 row align-items-center">
                                          <div className="col-sm-4">
                                            Button Background Color
                                          </div>
                                          <div className="col-sm-8">
                                            <div className="input-group colorpicker-component">
                                              {" "}
                                              <input
                                                type="text"
                                                defaultValue="#FFFFFF"
                                                className="form-control"
                                              />{" "}
                                              <span className="input-group-text">
                                                <i></i>
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mb-3 row align-items-center">
                                          <div className="col-sm-4">
                                            Location
                                          </div>
                                          <div className="col-sm-8">
                                            <select className="form-select">
                                              <option value="Bottom Right">
                                                Bottom Right
                                              </option>
                                              <option value="Bottom Left">
                                                Bottom Left
                                              </option>
                                              <option value="Top Right">
                                                Top Right
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-sm-12 text-end">
                                            <button
                                              type="button"
                                              name="btnCancel"
                                              id="btnCancel"
                                              className="btn btn-default"
                                            >
                                              <i className="fa fa-times"></i>{" "}
                                              Cancel
                                            </button>
                                            <button
                                              type="button"
                                              name="btnPreview"
                                              id="btnPreview"
                                              className="btn btn-secondary"
                                            >
                                              <i className="fa fa-external-link"></i>{" "}
                                              Preview / Test
                                            </button>
                                            <button
                                              type="button"
                                              name="btnSave"
                                              id="btnSave"
                                              className="btn btn-primary"
                                            >
                                              <i className="fa fa-save"></i>{" "}
                                              Save
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="row g-0 pinkBoxBorder">
                                <div className="col-sm-12">
                                  <div className="mb-0 chatBotCheck">
                                    <input
                                      type="checkbox"
                                      name="addChatbackOpt"
                                      id="addChatbackOpt"
                                      className="css-checkbox compressURLOn"
                                      defaultValue="addChatbot"
                                    />
                                    <label
                                      htmlFor="addChatbackOpt"
                                      className="css-checkbox-label radGroup2 mb-0"
                                    >
                                      <i className="fa fa-comment"></i> Add
                                      Chatbot
                                    </label>
                                  </div>
                                  <div className="chatbotOptsShow mt-3 display-none">
                                    <select
                                      name="chatBotOpts"
                                      id="chatBotOpts"
                                      className="form-select"
                                    >
                                      <option> == Chatbots ==</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="panel panel-default"
                    id="URLInj_beigeContainer"
                  >
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <a
                          data-bs-toggle="collapse"
                          href="#URLInj_beige"
                          role="button"
                          aria-expanded="true"
                          aria-controls="URLInj_beige"
                        >
                          <i className="fa fa-bullhorn"></i>Macro Tracking
                        </a>
                      </h3>
                    </div>
                    <div id="URLInj_beige" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-lg-12 pt-3">
                            <div className="dataInner">
                              <div className="mb-3 row g-0 initialData">
                                <div
                                  className="col-sm-12 trackingMarketing"
                                  id="marketingTrackingPanel"
                                >
                                  <div className="campaignOptions">
                                    <div className="row utm_campaign_container">
                                      <div className="col-sm-12">
                                        <input
                                          type="checkbox"
                                          name="enableMacroTracking"
                                          id="enableMacroTracking"
                                          className="css-checkbox compressURLOn"
                                          defaultValue="1"
                                        />
                                        <label
                                          htmlFor="enableMacroTracking"
                                          className="css-checkbox-label radGroup2 mb-0"
                                        >
                                          Enable Macro Tracking
                                        </label>
                                      </div>
                                    </div>

                                    <div className="mt-3 row macro_tracking_container d-none">
                                      <div className="col-sm-12">
                                        <div className="mb-3 row utm_campaign_container">
                                          <label
                                            htmlFor="utm_campaign"
                                            className="col-sm-2 col-form-label"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            data-html="true"
                                            data-animation="false"
                                            title="Used for group your spending so you can determine cost-per-lead or cost-per-sale and thus calculate return on investment."
                                          >
                                            {" "}
                                            Experiment / Campaign
                                          </label>
                                          <div className="col-sm-5">
                                            <select
                                              name="utm_campaign"
                                              id="utm_campaign"
                                              className="form-select"
                                            >
                                              <option value="">
                                                == Select ==
                                              </option>
                                              <option value="AddNewCampaign">
                                                == ADD NEW / EDIT CAMPAIGNS ==
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-sm-5 utm_campaign_tooltip campaign_tooltip"></div>
                                        </div>

                                        <div className="mb-3 row">
                                          <label
                                            htmlFor="utm_source"
                                            className="col-sm-2 col-form-label"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            data-html="true"
                                            data-animation="false"
                                            title="Required. Use <strong>utm_medium</strong> to identify a medium such as email or cost-per- click. <em>Example</em>: utm_medium=cpc"
                                          >
                                            Method / Channel
                                          </label>
                                          <div className="col-sm-5">
                                            <select
                                              id="utm_source"
                                              name="utm_source"
                                              className="form-select"
                                            >
                                              <option
                                                disabled
                                                defaultValue="-- ONLINE --"
                                                title="undefined"
                                              >
                                                {" "}
                                                -- ONLINE --{" "}
                                              </option>
                                              <option
                                                value="email"
                                                title="Email"
                                              >
                                                Email
                                              </option>
                                              <option
                                                value="retargeting"
                                                title="Retargeting"
                                              >
                                                Retargeting / Remarketing
                                              </option>
                                              <option
                                                value="content"
                                                title="Inbound / Content"
                                              >
                                                Content Bait / Inbound Marketing
                                              </option>
                                              <option
                                                value="cpc"
                                                title="SEM (Pay Per Click)"
                                              >
                                                SEM Pay-Per-Click (PPC / CPC)
                                              </option>
                                              <option
                                                value="cpm"
                                                title="SEM (Display Media / Cost Per View)"
                                              >
                                                SEM Display Media (CPM)
                                              </option>
                                              <option
                                                value="cpa"
                                                title="SEM (Pay Per Action)"
                                              >
                                                Affiliates / Cost-Per-Action
                                                (CPA)
                                              </option>
                                              <option
                                                value="social_unpaid"
                                                title="Social (Unpaid)"
                                                selected
                                              >
                                                Social (Unpaid Social Posts)
                                              </option>
                                              <option
                                                value="social_paid"
                                                title="Native Ads / Paid Social"
                                              >
                                                Social (Paid) / Native Ads
                                              </option>
                                              <option
                                                value="pr"
                                                title="Press Releases / Public Relations"
                                              >
                                                Press Releases / Public
                                                Relations
                                              </option>
                                              <option
                                                value="seo"
                                                title="SEO (Organic Unpaid)"
                                              >
                                                Search Engine Optimization (SEO)
                                              </option>
                                              <option
                                                value="viral"
                                                title="Viral"
                                              >
                                                Viral Reshared Media
                                              </option>
                                              <option
                                                value="referral"
                                                title="Referral"
                                              >
                                                Online Referral (Unpaid)
                                              </option>
                                              <option
                                                disabled
                                                defaultValue="-- OFFLINE --"
                                                title="undefined"
                                              >
                                                {" "}
                                                -- OFFLINE --{" "}
                                              </option>
                                              <option
                                                value="db"
                                                title="Accounts / Database"
                                              >
                                                Accounts / Database Marketing
                                              </option>
                                              <option
                                                value="past_client"
                                                title="Past Client"
                                              >
                                                Past Client
                                              </option>
                                              <option
                                                value="affiliate"
                                                title="Affiliate (Paid)"
                                              >
                                                Affiliate (Paid) / JV Marketing
                                              </option>
                                              <option
                                                value="direct_mail"
                                                title="Direct Mail"
                                              >
                                                Direct Mail
                                              </option>
                                              <option
                                                value="event"
                                                title="Live Event"
                                              >
                                                Live Events
                                              </option>
                                              <option
                                                value="print"
                                                title="Print Advertising"
                                              >
                                                Print Ad
                                              </option>
                                              <option
                                                value="referral"
                                                title="Referral (Unpaid)"
                                              >
                                                Offline Referral (Unpaid) / Biz
                                                Dev
                                              </option>
                                              <option value="tv" title="TV">
                                                TV
                                              </option>
                                              <option
                                                value="radio"
                                                title="Radio"
                                              >
                                                Radio
                                              </option>
                                              <option
                                                value="cold_call"
                                                title="Phone Cold Call"
                                              >
                                                Phone Cold Call
                                              </option>
                                              <option
                                                disabled
                                                defaultValue="-- Other --"
                                                title="undefined"
                                              >
                                                {" "}
                                                -- OTHER --{" "}
                                              </option>
                                              <option
                                                value="imported"
                                                title="Imported"
                                              >
                                                Imported Leads
                                              </option>
                                              <option
                                                value="live-transfer"
                                                title="Live Transfer"
                                              >
                                                Live Transfer Leads
                                              </option>
                                              <option
                                                value="purchased-data"
                                                title="Purchased Data"
                                              >
                                                Purchased Data
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-sm-5 utm_source_tooltip campaign_tooltip"></div>
                                        </div>

                                        <div className="mb-3 row">
                                          <label
                                            htmlFor="utm_medium"
                                            className="col-sm-2 col-form-label trafficSourceLabel"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            data-html="true"
                                            data-animation="false"
                                            title="Required. Use <strong>utm_source</strong> to identify a search engine, newsletter name, or other source. <em>Example</em>: utm_source=google<br /><strong>{swift_trafficsource}</strong> will automatically change to match the social media channel if you post to multiple locations at once."
                                          >
                                            Traffic Source
                                          </label>
                                          <div className="col-sm-5 utm_medium">
                                            <div className="trafficSourceOpt">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="utm_medium"
                                                name="utm_medium"
                                                placeholder="Facebook.com"
                                                defaultValue="{swift_trafficsource}"
                                              />
                                            </div>
                                            <div className="emailOnlyOption d-none">
                                              <select className="form-select">
                                                <option>== Emails ==</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div className="col-sm-5 utm_medium_tooltip campaign_tooltip">
                                            <p></p>
                                          </div>
                                        </div>

                                        <div className="mb-3 row press_release_row d-none">
                                          <label
                                            htmlFor="utm_medium"
                                            className="col-sm-2 col-form-label"
                                          >
                                            Press Release
                                          </label>
                                          <div className="col-sm-5">
                                            <select className="form-select">
                                              <option>
                                                == Press Release here (doctype)
                                                ==
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-sm-5"></div>
                                        </div>

                                        <div className="mb-3 row group_audience_row d-none">
                                          <label
                                            htmlFor="utm_medium"
                                            className="col-sm-2 col-form-label"
                                          >
                                            Group / Audience
                                          </label>
                                          <div className="col-sm-5">
                                            <select className="form-select">
                                              <option>
                                                == Group / Audience here ==
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-sm-5"></div>
                                        </div>
                                        <div className="mb-3 row direct_mail_row d-none">
                                          <label
                                            htmlFor="utm_medium"
                                            className="col-sm-2 col-form-label"
                                          >
                                            Direct Mail
                                          </label>
                                          <div className="col-sm-5">
                                            <select className="form-select">
                                              <option>
                                                == Uploads / PDFs here ==
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-sm-5"></div>
                                        </div>

                                        <div className="mb-3 row email_subject_row d-none">
                                          <label
                                            htmlFor="email_subject"
                                            className="col-sm-2 col-form-label"
                                          >
                                            Subject Line
                                          </label>
                                          <div className="col-sm-6">
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="email_subject"
                                              name="email_subject"
                                              placeholder=""
                                              defaultValue=""
                                            />
                                          </div>
                                          <div className="col-sm-4"></div>
                                        </div>
                                        <div className="mb-3 row campaignContentImg">
                                          <label className="col-sm-2 col-form-label">
                                            <span className="ContentAdLabel">
                                              Content / Creative / Ad
                                            </span>
                                          </label>
                                          <div className="col-sm-5">
                                            <div
                                              className="imageUploader"
                                              data-toggle="tooltip"
                                              data-placement="bottom"
                                              title="Upload your image. Recommended: 1024x1024"
                                              data-animation="false"
                                            >
                                              <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#global_image_tool_container"
                                              >
                                                <i className="fa fa-cloud-upload"></i>
                                              </a>
                                            </div>
                                            <div
                                              className="videoUploader d-none"
                                              data-toggle="tooltip"
                                              data-placement="bottom"
                                              title="Upload your video"
                                              data-animation="false"
                                            >
                                              <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#global_image_tool_container"
                                              >
                                                <i className="fa fa-cloud-upload"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mb-3 row ContentCreativeAdRow">
                                          <div className="col-sm-2 col-form-label">
                                            <span className="ContentAdLabel">
                                              Content / Creative / Ad
                                            </span>

                                            <div className="contactToolContainer d-none pt-3">
                                              <div className="row">
                                                <div className="col-sm-12 mb-3"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-sm-5 campaignContent campaignContentCol">
                                            <div className="AdContentContainer">
                                              <textarea
                                                name="AdContent"
                                                id="AdContent"
                                                className="form-control"
                                                cols="30"
                                                rows="5"
                                              ></textarea>
                                            </div>
                                            <div className="SEOURLContainer d-none">
                                              <input
                                                type="text"
                                                name="SEOURL"
                                                id="SEOURL"
                                                className="form-control"
                                                defaultValue="https://"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-sm-5 d-none">
                                            <ul
                                              className="nav nav-tabs"
                                              id="uploadCreateTab"
                                              role="tablist"
                                            >
                                              <li className="nav-item">
                                                <a
                                                  className="nav-link active"
                                                  id="Upload-tab"
                                                  data-toggle="tab"
                                                  href="#UploadTab"
                                                  role="tab"
                                                  aria-controls="home"
                                                  aria-selected="true"
                                                >
                                                  Upload
                                                </a>
                                              </li>
                                              <li className="nav-item">
                                                <a
                                                  className="nav-link"
                                                  id="Create-tab"
                                                  data-toggle="tab"
                                                  href="#CreateTab"
                                                  role="tab"
                                                  aria-controls="profile"
                                                  aria-selected="false"
                                                >
                                                  Create
                                                </a>
                                              </li>
                                            </ul>
                                            <div
                                              className="tab-content"
                                              id="uploadCreateTabContent"
                                            >
                                              <div
                                                className="tab-pane fade show active"
                                                id="UploadTab"
                                                role="tabpanel"
                                                aria-labelledby="Upload-tab"
                                              >
                                                <div className="mb-3 text-center">
                                                  <div
                                                    className="imageUploader"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Upload your image. Recommended: 1024x1024"
                                                    data-animation="false"
                                                  >
                                                    <a
                                                      href="#"
                                                      data-toggle="modal"
                                                      data-target="#global_image_tool_container"
                                                    >
                                                      <i className="fa fa-cloud-upload"></i>
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="mb-3">
                                                  <select
                                                    className="form-select reviewSelection"
                                                    name="reviewSelection"
                                                  >
                                                    <option value="">
                                                      == Recent Reviews ==
                                                    </option>
                                                    <option value="1">
                                                      Reviews Show Here
                                                    </option>
                                                  </select>
                                                </div>
                                                <div className="mb-3 reviewPreviewContainer d-none">
                                                  Actual Review Text Coming Soon
                                                  to this space.
                                                </div>
                                              </div>
                                              <div
                                                className="tab-pane fade"
                                                id="CreateTab"
                                                role="tabpanel"
                                                aria-labelledby="Create-tab"
                                              >
                                                Coming soon
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="row">
                                          <label
                                            htmlFor="utm_term"
                                            className="col-sm-2 col-form-label"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            data-html="true"
                                            data-animation="false"
                                            title="Used for paid search. Use <strong>utm_term</strong> to note the keywords for this ad.<br><em>Example</em>: utm_term=running+shoes"
                                          >
                                            {" "}
                                            Campaign Term
                                          </label>
                                          <div className="col-sm-5">
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="utm_term"
                                              name="utm_term"
                                              placeholder=""
                                              defaultValue="KeyWord"
                                            />
                                          </div>
                                          <div className="col-sm-5 utm_term_tooltip campaign_tooltip"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="panel panel-default"
                    id="URLInj_greenContainer"
                  >
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <a
                          data-bs-toggle="collapse"
                          href="#URLInj_green"
                          role="button"
                          aria-expanded="true"
                          aria-controls="URLInj_green"
                        >
                          <i className="fa fa-user"></i>Click Tracking
                        </a>
                      </h3>
                    </div>
                    <div id="URLInj_green" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-lg-12 py-3">
                            <div className="mb-0">
                              <input
                                type="checkbox"
                                name="GU_track_individual"
                                id="GU_track_individual"
                                className="css-checkbox compressURLOn"
                                defaultValue="1"
                              />
                              <label
                                htmlFor="GU_track_individual"
                                className="css-checkbox-label radGroup2 mb-0"
                              >
                                <i className="fa fa-search"></i> Track
                                individual recipient views & actions if possible{" "}
                                <span
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  data-animation="false"
                                  title='Be sure to inject "ref={ReferrerContactIDNumber}" OR "refemail={referrer&#39;s email here}" in the URL you send out.'
                                >
                                  <i className="fa fa-question-circle"></i>
                                </span>
                              </label>
                            </div>
                            <p className="mb-0">
                              <strong>NOTE:</strong> Be sure your return URL is
                              set to{" "}
                              <a href="https://click.swiftcrm.com/username/rr=1">
                                https://click.swiftcrm.com/username/rr=1
                              </a>
                            </p>
                          </div>
                          <div className="col-lg-12 pb-3">
                            <div className="mb-0">
                              <input
                                type="checkbox"
                                name="GU_notify_you"
                                id="GU_notify_you"
                                className="css-checkbox compressURLOn"
                                defaultValue="1"
                              />
                              <label
                                htmlFor="GU_notify_you"
                                className="css-checkbox-label radGroup2 mb-0"
                              >
                                <i className="fa fa-bell"></i> Notify
                              </label>
                            </div>
                            <div className="GU_notifyMeShow mt-3 display-none">
                              <div className="row row-cols-lg-auto g-3 align-items-center mb-3">
                                <div className="col-12">
                                  <select
                                    name="GU_notify_you_by"
                                    id="GU_notify_you_by"
                                    className="form-select"
                                  >
                                    <option value="email_me">
                                      Email Me - PrimaryEmailHere
                                    </option>
                                    <option value="email_to">Email To</option>
                                    <option value="email_referrer">
                                      Email Referrer (Dynamic) + Me
                                    </option>
                                    <option value="sms_me">SMS Me</option>
                                    <option value="sms_to">SMS To</option>
                                  </select>
                                </div>
                                <div className="col-12">
                                  <div className="input-group ml-2 GU_notify_you_by_field GU_email_referrer_container display-none">
                                    <span
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      data-animation="false"
                                      title='Be sure to inject "ref={ReferrerContactIDNumber}" OR "refemail={referrer&#39;s email here}" in the URL you send out.'
                                    >
                                      <i className="fa fa-question-circle"></i>
                                    </span>
                                  </div>

                                  <div className="input-group ml-2 GU_notify_you_by_field GU_email_to_container display-none">
                                    <div className="input-group-text">
                                      <i className="fa fa-envelope"></i>
                                    </div>
                                    <input
                                      type="text"
                                      name="email_to"
                                      id="email_to"
                                      className="form-control"
                                    />
                                  </div>

                                  <div className="input-group ml-2 GU_notify_you_by_field GU_sms_to_container display-none">
                                    <div className="input-group-text">
                                      <i className="fa fa-mobile-phone"></i>
                                    </div>
                                    <input
                                      type="text"
                                      name="sms_to"
                                      id="sms_to"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row row-cols-lg-auto g-3 align-items-center">
                                <div className="col-12">When</div>
                                <div className="col-12">
                                  <select
                                    name="GU_when_to_notify"
                                    id="GU_when_to_notify"
                                    className="form-select"
                                  >
                                    <option value="Goal Return Page Reached">
                                      Goal Return Page Reached
                                    </option>
                                    <option value="Clicked">Clicked</option>
                                    <option value="Not Clicked">
                                      Not Clicked
                                    </option>
                                  </select>
                                </div>
                                <div className="col-12">
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    data-animation="false"
                                    title="If we know contact info for this person or people, we'll let you know when they click your link."
                                  >
                                    <i className="fa fa-question-circle"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="panel panel-default"
                    id="URLInj_blueContainer"
                  >
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <a
                          data-bs-toggle="collapse"
                          href="#URLInj_blue"
                          role="button"
                          aria-expanded="true"
                          aria-controls="URLInj_blue"
                        >
                          <i className="fa fa-gear"></i>Automation
                        </a>
                      </h3>
                    </div>
                    <div id="URLInj_blue" className="panel-collapse collapse">
                      <div className="panel-body pt-3">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="dataInner">
                              <div className="mb-3 row initialData g-0">
                                <div className="col-sm-12">
                                  <div className="mb-0">
                                    <input
                                      type="checkbox"
                                      name="adjustContactTagScore"
                                      id="adjustContactTagScore"
                                      className="css-checkbox compressURLOn"
                                      defaultValue="1"
                                      defaultChecked="checked"
                                    />
                                    <label
                                      htmlFor="adjustContactTagScore"
                                      className="css-checkbox-label radGroup2 mb-0"
                                    >
                                      <i className="fa fa-signal"></i> Adjust
                                      Contact's...{" "}
                                      <a
                                        href="https://swiftcrm.com/support/tagscore"
                                        target="_blank"
                                      >
                                        <i className="fa fa-question-circle"></i>
                                      </a>
                                    </label>
                                  </div>
                                  <div className="mt-3 adjustTagScoreContainer">
                                    <div className="row row-cols-lg-auto g-2 align-items-center mb-3">
                                      <div className="col-12">
                                        RAVE Score &nbsp;{" "}
                                        <a
                                          href="https://SwiftCRM.com/support/rave-score"
                                          target="_blank"
                                        >
                                          <i className="fa fa-question-circle"></i>
                                        </a>
                                      </div>
                                      <div className="col-12">
                                        <select
                                          name="adjust_tag_by"
                                          id="adjust_tag_by"
                                          className="form-select"
                                        >
                                          <option value="by">by</option>
                                          <option value="to">to</option>
                                        </select>
                                      </div>
                                      <div className="col-12">
                                        <select
                                          name="adjust_tag_plus_minus"
                                          id="adjust_tag_plus_minus"
                                          className="form-select"
                                        >
                                          <option value="+">+</option>
                                          <option value="-">-</option>
                                        </select>
                                      </div>
                                      <div className="col-12">
                                        <input
                                          type="text"
                                          name="adjust_tag_score"
                                          id="adjust_tag_score"
                                          className="form-control contactTagScore"
                                          defaultValue="10"
                                        />
                                      </div>
                                    </div>
                                    <div className="row row-cols-lg-auto g-2 align-items-center mb-3">
                                      <div className="col-12">Adjust Tag</div>
                                      <div className="col-12">
                                        <input
                                          type="text"
                                          name="adjust_tag2"
                                          id="adjust_tag2"
                                          className="form-control ml-2"
                                        />
                                      </div>
                                      <div className="col-12">
                                        <select
                                          name="adjust_tag_by2"
                                          id="adjust_tag_by2"
                                          className="form-select"
                                        >
                                          <option value="by">by</option>
                                          <option value="to">to</option>
                                        </select>
                                      </div>
                                      <div className="col-12">
                                        <select
                                          name="adjust_tag_plus_minus2"
                                          id="adjust_tag_plus_minus2"
                                          className="form-select"
                                        >
                                          <option value="+">+</option>
                                          <option value="-">-</option>
                                        </select>
                                      </div>
                                      <div className="col-12">
                                        <input
                                          type="text"
                                          name="adjust_tag_score2"
                                          id="adjust_tag_score2"
                                          className="form-control contactTagScore"
                                          defaultValue="10"
                                        />
                                      </div>
                                    </div>
                                    <div className="row row-cols-lg-auto g-2 align-items-center">
                                      <div className="col-12">Adjust Tag</div>
                                      <div className="col-12">
                                        <input
                                          type="text"
                                          name="adjust_tag3"
                                          id="adjust_tag3"
                                          className="form-control ml-2"
                                        />
                                      </div>
                                      <div className="col-12">
                                        <select
                                          name="adjust_tag_by3"
                                          id="adjust_tag_by3"
                                          className="form-select"
                                        >
                                          <option value="by">by</option>
                                          <option value="to">to</option>
                                        </select>
                                      </div>
                                      <div className="col-12">
                                        <select
                                          name="adjust_tag_plus_minus3"
                                          id="adjust_tag_plus_minus3"
                                          className="form-select"
                                        >
                                          <option value="+">+</option>
                                          <option value="-">-</option>
                                        </select>
                                      </div>
                                      <div className="col-12">
                                        <input
                                          type="text"
                                          name="adjust_tag_score3"
                                          id="adjust_tag_score3"
                                          className="form-control contactTagScore"
                                          defaultValue="10"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row row-cols-lg-auto g-0 align-items-center mb-3 initialData">
                                <div className="col-12">
                                  <input
                                    type="checkbox"
                                    name="visitor_funnel_status"
                                    id="visitorFunnelStatusCheckbox"
                                    className="css-checkbox compressURLOn"
                                    defaultValue="move"
                                  />
                                  <label
                                    htmlFor="visitorFunnelStatusCheckbox"
                                    className="css-checkbox-label radGroup2"
                                  >
                                    Set Visitor Funnel Status / Agenda to{" "}
                                  </label>
                                </div>
                                <div className="col-12">
                                  <select
                                    className="form-select ms-2"
                                    name="visitor_funnel_status_options"
                                    id="visitorFunnelStatusOptions"
                                  >
                                    <option value="capture">Capture</option>
                                    <option value="build_trust">
                                      Build Trust
                                    </option>
                                    <option value="tripwire_offer">
                                      Tripwire Offer
                                    </option>
                                    <option value="intro_offer">
                                      Intro Offer
                                    </option>
                                    <option value="main_offer">
                                      Main Offer
                                    </option>
                                    <option value="upsell_offer">
                                      Upsell Offer
                                    </option>
                                    <option value="promoter">Promoter</option>
                                  </select>
                                </div>
                              </div>
                              <div className="mb-3 row initialData extraForYouOpt g-0">
                                <div className="col-sm-12 googlTag">
                                  <div className="mb-0">
                                    <input
                                      type="checkbox"
                                      name="tagOpt"
                                      id="tagOpt"
                                      className="css-checkbox compressURLOn"
                                      defaultValue="tagContent"
                                    />
                                    <label
                                      htmlFor="tagOpt"
                                      className="css-checkbox-label radGroup2 mb-0"
                                    >
                                      <i className="fa fa-tag"></i> Fire Google
                                      Tag (i.e. Retargeting Pixel){" "}
                                    </label>
                                  </div>
                                  <div className="tagOptShow display-none mt-3">
                                    <div className="row">
                                      <div className="col-sm-6 mb-sm-0 mb-3">
                                        <label>Tag Name</label>
                                        <input
                                          type="text"
                                          name="tagName"
                                          id="tagName"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-sm-6 mb-sm-0 mb-3">
                                        <label>Value (Optional)</label>
                                        <input
                                          type="text"
                                          name="tagValue"
                                          id="tagValue"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mb-3 row initialData extraForYouOpt g-0">
                                <div className="col-sm-12 additionalVars">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="mb-0">
                                        <input
                                          type="checkbox"
                                          name="additional_var_opt"
                                          id="additionalVarOpt"
                                          className="css-checkbox compressURLOn"
                                          defaultValue="additionalVar"
                                        />
                                        <label
                                          htmlFor="additionalVarOpt"
                                          className="css-checkbox-label radGroup2 mb-0"
                                        >
                                          <i className="fa fa-user"></i>{" "}
                                          Additional Variables
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row addAdditionalVarsContainer pt-3 display-none">
                                    <div className="col-lg-12 used_variables_container">
                                      <div className="row row-cols-lg-auto g-2 align-items-center additionalVarsRow">
                                        <div className="col-12">
                                          <input
                                            type="checkbox"
                                            name="user_variables_active_0"
                                            className="css-checkbox"
                                            id="var1"
                                          />
                                          <label
                                            htmlFor="var1"
                                            className="css-checkbox-label radGroup2 mb-0 h28"
                                          ></label>
                                        </div>
                                        <div className="col-12">
                                          <input
                                            name="user_variables_name_0"
                                            type="text"
                                            className="form-control variable_name"
                                            placeholder="Variable Name"
                                          />
                                        </div>
                                        <div className="col-12">=</div>
                                        <div className="col-12">
                                          <input
                                            name="user_variables_value_0"
                                            type="text"
                                            className="form-control ml-sm-2 variable_value"
                                            placeholder="Variable Value"
                                          />
                                        </div>
                                        <div className="col-12">
                                          <a
                                            href="#"
                                            className="btn-edit"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            data-animation="false"
                                            title="Edit"
                                          >
                                            <i className="fa fa-pencil"></i>
                                          </a>
                                          <a
                                            href="#"
                                            className="btn-delete"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            data-animation="false"
                                            title="Delete"
                                          >
                                            <i className="fa fa-trash-alt"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="row">
                                        <div className="col-lg-12 text-left mt-2">
                                          <button
                                            type="button"
                                            className="btnAddNewGreenDashed"
                                            id="addNewCampaignVar"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Add New"
                                            data-animation="false"
                                          >
                                            <i className="fa fa-plus"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <!-- SHOW THIS TABLE ONLY TO ADD NEW OR EDIT AN ITEM --> */}
                                    <div className="col-lg-12 d-none user_variables_management">
                                      <div className="table-responsive">
                                        <table
                                          id="userVariables_table"
                                          className="table table-striped customCheckbox table-head-color dataTable no-footer"
                                          cellSpacing="0"
                                          width="100%"
                                        >
                                          <thead>
                                            <tr>
                                              <th className="text-center">#</th>
                                              <th>Used For…</th>
                                              <th>Variable Name</th>
                                              <th>Variable Value</th>
                                              <th></th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr className="utm_campaign_addnew">
                                              <td
                                                colSpan="5"
                                                className="text-center"
                                              >
                                                <button
                                                  type="button"
                                                  className="btnAddNew btnAddNewVar"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Add New"
                                                  data-animation="false"
                                                ></button>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mb-3 row initialData extraForYouOpt g-0">
                                <div className="col-sm-12">
                                  <div className="mb-0">
                                    <input
                                      type="checkbox"
                                      name="urlVerStickyOpt"
                                      id="urlVerStickyOpt"
                                      className="css-checkbox compressURLOn"
                                      defaultValue="urlVerSticky"
                                    />
                                    <label
                                      htmlFor="urlVerStickyOpt"
                                      className="css-checkbox-label radGroup2 mb-0"
                                    >
                                      <i className="fa-solid fa-puzzle-piece"></i>{" "}
                                      Make URL Variables Sticky{" "}
                                      <span
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        data-animation="false"
                                        title="If you need variables tracked through multiple domains (such as a user leaving your site to pay then returning), this can solve that."
                                      >
                                        <i className="fa fa-question-circle"></i>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="urlVerStickyOptShow display-none">
                                    {/* <!-- IF CHECKED, CONVERT URL-VARS TO WRITE COOKIE, THEN UPON RETURN IF bh=return READ COOKIE & RE-APPEND URL VARIABLES --> */}
                                    <div className="row">
                                      <div className="col-sm-12 mt-3">
                                        <p>
                                          <strong>NOTE:</strong> Be sure your
                                          return URL is set to{" "}
                                          <a href="https://click.swiftcrm.com/username/rr=1">
                                            https://click.swiftcrm.com/username/rr=1
                                          </a>
                                        </p>
                                      </div>
                                      <div className="col-sm-12 mb-3">
                                        <label>
                                          URL we should forward this returning
                                          traffic to after reattaching tracking
                                          variables{" "}
                                          <span
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            data-animation="false"
                                            title=""
                                            data-original-title="This could be another EZLink if needed"
                                          >
                                            <i className="fa fa-question-circle"></i>
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          name="returningUrl"
                                          id="returningUrl"
                                          defaultValue="https://"
                                          className="form-control"
                                          placeholder="https://"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="panel panel-default"
                    id="URLInj_grayContainer"
                  >
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <a
                          data-bs-toggle="collapse"
                          href="#URLInj_gray"
                          role="button"
                          aria-expanded="true"
                          aria-controls="URLInj_gray"
                        >
                          <i className="fa fa-ellipsis-h"></i>More Options
                        </a>
                      </h3>
                    </div>
                    <div id="URLInj_gray" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-lg-12 py-3">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="row">
                                  <div className="col-lg-12 mb-3">
                                    <div className="colHeading">
                                      <strong>
                                        <i className="fa fa-tags"></i> Tags
                                      </strong>
                                    </div>
                                    <div className="dh-block-body">
                                      <input
                                        type="text"
                                        name="url_tags"
                                        id="url_tags"
                                        className="form-control"
                                        defaultValue="#tag"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-12 mb-3">
                                    <div className="colHeading">
                                      <strong>
                                        <i className="fa fa-sign-out"></i>{" "}
                                        Redirect
                                      </strong>
                                    </div>
                                    <div className="dh-block-body">
                                      <select className="form-select">
                                        <option>302 Temporary</option>
                                        <option>301 Permanent</option>
                                        <option>307 Temporary</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-lg-12 mb-3">
                                    <div className="colHeading">
                                      <strong>
                                        <i className="fa-solid fa-snowflake"></i>{" "}
                                        Forward Parameters
                                      </strong>
                                    </div>
                                    <div className="dh-block-body">
                                      <div className="col-sm-12">
                                        <input
                                          type="checkbox"
                                          name="forwardParameters"
                                          id="forwardParameters"
                                          className="css-checkbox"
                                          defaultValue="1"
                                        />
                                        <label
                                          htmlFor="forwardParameters"
                                          className="css-checkbox-label radGroup2 mb-0"
                                        >
                                          Forward Parameters{" "}
                                          <span
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Pass through any URL variables"
                                          >
                                            <i className="fa fa-question-circle"></i>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="row">
                                  <div className="col-lg-12 mb-3">
                                    <div className="colHeading">
                                      <strong>
                                        <i className="fa fa-file-image"></i>{" "}
                                        Featured Image
                                      </strong>
                                    </div>
                                    <div className="dh-block-body">
                                      <div className="folderIcon">
                                        <img src="images/avatar.gif" />
                                      </div>
                                      <button
                                        type="button"
                                        className="btn btn-default btnDocFormIconEdit"
                                      >
                                        <span
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="Edit folder image"
                                        >
                                          <i className="fa fa-pencil"></i>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="colHeading">
                                      <strong>
                                        <i className="fa fa-globe"></i> SEO{" "}
                                      </strong>
                                    </div>
                                    <div className="dh-block-body">
                                      <p>
                                        No Follow{" "}
                                        <input
                                          type="checkbox"
                                          name="nofollow"
                                          id="nofollow"
                                          className="lc_switch"
                                          defaultValue="1"
                                        />
                                      </p>
                                      <p className="mb-0">
                                        No Index{" "}
                                        <input
                                          type="checkbox"
                                          name="noindex"
                                          id="noindex"
                                          className="lc_switch"
                                          defaultValue="1"
                                        />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shortenURLContainer display-none">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <p className="py-3 mb-0">
                        <span className="globalLongURL">SUPERLONGURLHERE</span>
                        <a
                          className="btnSuperLongURLAction"
                          href="#"
                          id="btnGlobalURLSuperLongURLPreview"
                          target="_blank"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-animation="false"
                          title="Preview This URL"
                        >
                          <i className="fa fa-external-link"></i>
                        </a>
                        <a
                          className="btnSuperLongURLAction"
                          href="#"
                          id="btnGlobalURLSuperLongURLCopyLink"
                          data-clipboard-target="#GlobalURLCompressedURLCopyLink"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-animation="false"
                          title="Copy This URL"
                        >
                          <i className="fa fa-copy"></i>
                        </a>
                        <input
                          id="GlobalURLSuperLongURLCopyLink"
                          defaultValue="#"
                        />
                      </p>
                    </div>

                    <div className="col-lg-12 shortenURLActionContainer">
                      <p className="text-center">
                        is shortened / customized to
                      </p>

                      <div className="compressed_url_viewer pb-3">
                        <div className="input-group mt-3 compressed_url_editor justify-content-center">
                          <div className="input-group-text input-group-text-https">
                            https://
                          </div>
                          <select className="form-control publicBaseURLSelection">
                            <option value="click.swiftcrm.com/username">
                              click.swiftcrm.com/username
                            </option>
                            <option value="newMappingURL">
                              Add New Mapped URL
                            </option>
                          </select>
                          <span className="input-group-text input-group-text-dash">
                            /
                          </span>
                          <input
                            type="text"
                            className="form-control GlobalURLHashInput"
                            defaultValue="AutoGenButAllowInputOverride"
                          />
                        </div>
                        <div className="text-center mt-1 compressed_url_viewer">
                          <a
                            href="https://click.swiftcrm.com/username/AutoGenButAllowInputOverride"
                            target="_blank"
                            className="text-dash-underline btnPreviewLinkYourWebsite"
                          >
                            click.swiftcrm.com/username/
                            <span className="GlobalURLHash">
                              AutoGenButAllowInputOverride
                            </span>
                          </a>
                          <a
                            href="https://click.swiftcrm.com/username/AutoGenButAllowInputOverride"
                            id="btnGlobalURLCompressedURLPreview"
                            target="_blank"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-animation="false"
                            title="Preview This URL"
                          >
                            <i className="fa fa-external-link"></i>
                          </a>
                          <a
                            href="#"
                            id="btnGlobalURLCompressedURLCopyLink"
                            data-clipboard-target="#GlobalURLCompressedURLCopyLink"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-animation="false"
                            title="Copy This URL"
                          >
                            <i className="fa fa-copy"></i>
                          </a>
                          <input
                            id="GlobalURLCompressedURLCopyLink"
                            defaultValue="https://click.swiftcrm.com/username/AutoGenButAllowInputOverride"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 text-center shareContainer">
                      <div className="row align-items-center">
                        <div className="col-lg-12 shareAction">
                          <ul>
                            <li className="black-bg">
                              <a
                                href="#"
                                className="btnGlobalURLQRCode"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-animation="false"
                                title="Scan QR Code"
                              >
                                <i className="fa fa-qrcode"></i>
                              </a>
                            </li>
                            <li className="paper-plane-bg">
                              <a
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-animation="false"
                                title="Email This Page"
                                href="mailto:?subject=You would like this&amp;body=Hello%0A%0AYou%20will%20like%20this%3A%0Ahttps://click.SwiftCRM.com/username/AutoGenButAllowInputOverride"
                                target="_blank"
                              >
                                <i className="fa fa-paper-plane"></i>
                              </a>
                            </li>
                            <li className="fb-bg">
                              <a
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-animation="false"
                                title="Share On Facebook"
                                href="https://www.facebook.com/sharer/sharer.php?u=https://click.SwiftCRM.com/{username}/AutoGenButAllowInputOverride"
                                target="_blank"
                              >
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="twitter-bg">
                              <a
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-animation="false"
                                title="Tweet This Page"
                                href="https://twitter.com/share?url=https://click.SwiftCRM.com/{username}/AutoGenButAllowInputOverride&amp;text=Hello%0A%0AYou%20will%20like%20this%3A%0A"
                                target="_blank"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="pinterest-bg">
                              <a
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-animation="false"
                                title="Share This Page on Pinterest"
                                href="https://www.pinterest.com/pin/create/button/?url=https://click.SwiftCRM.com/{username}/AutoGenButAllowInputOverride&amp;media=https://swiftcrm.com/images/user_/"
                                target="_blank"
                              >
                                <i className="fab fa-pinterest-p"></i>
                              </a>
                            </li>
                            <li className="linkedin-bg">
                              <a
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-animation="false"
                                title="Share This Page on LinkedIn"
                                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://click.SwiftCRM.com/{username}/AutoGenButAllowInputOverride&amp;title=You%20will%20like%20this&amp;summary=Hello%0A%0AYou%20will%20like%20this%3A%0A%0A"
                                target="_blank"
                              >
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row g-0 rowQRCode pt-3 display-none">
                        <div className="col-lg-12 colHeading">
                          <strong>
                            <i className="fa fa-qrcode"></i> QR Code
                          </strong>
                        </div>
                        <div className="col-lg-12 dh-block-body">
                          <div className="row">
                            <div className="col-lg-12 text-center">
                              <div id="shareurl_qrcode"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="container p-0 border-0">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-end">
                    <button
                      type="button"
                      className="btn btn-primary btnAddURLInjector"
                    >
                      <i className="fa fa-check"></i> Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal popup for NEW Global Popup - Global_URLInjector --> */}
    </>
  );
};

export default Url;
