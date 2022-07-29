import React from "react";

const BlueContainer = ({Icons, FontAwesomeIcon}) => {
  return (
    <div className="panel panel-default" id="URLInj_blueContainer">
      <div className="panel-heading">
        <h3 className="panel-title">
          <a
            data-bs-toggle="collapse"
            href="#URLInj_blue"
            role="button"
            aria-expanded="true"
            aria-controls="URLInj_blue"
          >
            <FontAwesomeIcon icon={Icons.faGear} /> Automation
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
                        <FontAwesomeIcon icon={Icons.faSignal} /> Adjust
                        Contact's...{" "}
                        <a
                          href="https://swiftcrm.com/support/tagscore"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={Icons.faQuestionCircle} />
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
                            <FontAwesomeIcon icon={Icons.faQuestionCircle} />
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
                      <option value="build_trust">Build Trust</option>
                      <option value="tripwire_offer">Tripwire Offer</option>
                      <option value="intro_offer">Intro Offer</option>
                      <option value="main_offer">Main Offer</option>
                      <option value="upsell_offer">Upsell Offer</option>
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
                        <FontAwesomeIcon icon={Icons.faTag} /> Fire Google Tag
                        (i.e. Retargeting Pixel){" "}
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
                            <FontAwesomeIcon icon={Icons.faUser} /> Additional
                            Variables
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
                              <FontAwesomeIcon icon={Icons.faPencil} />
                            </a>
                            <a
                              href="#"
                              className="btn-delete"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              data-animation="false"
                              title="Delete"
                            >
                              <FontAwesomeIcon icon={Icons.faTrashAlt} />
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
                              <FontAwesomeIcon icon={Icons.faPlus} />
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
                                <td colSpan="5" className="text-center">
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
                        <FontAwesomeIcon icon={Icons.faPuzzlePiece} /> Make URL
                        Variables Sticky{" "}
                        <span
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-animation="false"
                          title="If you need variables tracked through multiple domains (such as a user leaving your site to pay then returning), this can solve that."
                        >
                          <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                        </span>
                      </label>
                    </div>
                    <div className="urlVerStickyOptShow display-none">
                      {/* <!-- IF CHECKED, CONVERT URL-VARS TO WRITE COOKIE, THEN UPON RETURN IF bh=return READ COOKIE & RE-APPEND URL VARIABLES --> */}
                      <div className="row">
                        <div className="col-sm-12 mt-3">
                          <p>
                            <strong>NOTE:</strong> Be sure your return URL is
                            set to{" "}
                            <a href="https://click.swiftcrm.com/username/rr=1">
                              https://click.swiftcrm.com/username/rr=1
                            </a>
                          </p>
                        </div>
                        <div className="col-sm-12 mb-3">
                          <label>
                            URL we should forward this returning traffic to
                            after reattaching tracking variables{" "}
                            <span
                              data-toggle="tooltip"
                              data-placement="bottom"
                              data-animation="false"
                              title=""
                              data-original-title="This could be another EZLink if needed"
                            >
                              <FontAwesomeIcon icon={Icons.faQuestionCircle} />
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
  );
};

export default BlueContainer;
