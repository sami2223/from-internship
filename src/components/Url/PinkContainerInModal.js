import React, { useState } from "react";

const PinkContainerInModal = ({ Icons, FontAwesomeIcon }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedAddChatbot, setIsCheckedAddChatbot] = useState(false);
  return (
    <div className="panel panel-default" id="URLInj_pinkBoxContainer">
      <div className="panel-heading">
        <h3 className="panel-title">
          <a
            data-bs-toggle="collapse"
            href="#URLInj_pinkBox"
            role="button"
            aria-expanded="true"
            aria-controls="URLInj_pinkBox"
          >
            <FontAwesomeIcon icon={Icons.faSignIn} /> FOR THEM: User will...{" "}
            <span
              data-toggle="tooltip"
              data-placement="bottom"
              data-html="true"
              data-animation="false"
              title="Destination(s) / Input Target URL(s)"
            >
              <FontAwesomeIcon icon={Icons.faQuestionCircle} />
            </span>
          </a>
        </h3>
      </div>
      <div id="URLInj_pinkBox" className="panel-collapse collapse show">
        <div className="panel-body py-3">
          <div className="">
            <div className="row align-items-center mb-2">
              <div className="col-lg-12 hiddenSelectboxContainer">
                <span className="text-dash-underline userWillGoText">
                  in all cases
                </span>
                <select className="form-select inlineSelectBox display-none userWillGo">
                  <option value="in all cases">in all cases</option>
                  <option value="splitTested50">
                    be Split Tested (50-50) &
                  </option>
                  <option value="splitTested33">be Split Tested (33%) &</option>
                  <option value="RAVEScore">depending on RAVE score</option>
                  <option value="TagScore">depending on TagScore</option>
                  <option value="Agenda">depending on Agenda</option>
                  <option value="PayWall">depending on PayWall</option>
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
                        <option value="lessthan" selected="selected">
                          {" "}
                          Less Than
                        </option>
                        <option value="morethan"> More Than</option>
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
                        <div className="input-group-text">go to...</div>
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
                      <FontAwesomeIcon icon={Icons.faPlus} />
                    </a>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-group">
                      <div className="input-group-text">Otherwise go to...</div>
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
                        <option value="lessthan" selected="selected">
                          Less Than
                        </option>
                        <option value="morethan"> More Than</option>
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
                        <div className="input-group-text">go to...</div>
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
                      <FontAwesomeIcon icon={Icons.faPlus} />
                    </a>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-group">
                      <div className="input-group-text">Otherwise go to...</div>
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
                          <option value="build_trust">Build Trust</option>
                          <option value="tripwire_offer">Tripwire Offer</option>
                          <option value="intro_offer">Intro Offer</option>
                          <option value="main_offer">Main Offer</option>
                          <option value="upsell_offer">Upsell Offer</option>
                          <option value="promoter">Promoter</option>
                        </select>
                        <div className="input-group-text">go to...</div>
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
                      <FontAwesomeIcon icon={Icons.faPlus} />
                    </a>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-group">
                      <div className="input-group-text">Otherwise go to...</div>
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
                          <option value="Disallowed">Disallowed</option>
                        </select>
                        <div className="input-group-text">go to...</div>
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
                      <div className="input-group-text">Otherwise go to...</div>
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
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      />
                      <label
                        htmlFor="piggybackOpt"
                        className="css-checkbox-label radGroup2 mb-0"
                      >
                        <FontAwesomeIcon
                          icon={Icons.faCopy}
                          rotation={180}
                          flip="horizontal"
                        />{" "}
                        Add Piggyback Content
                      </label>
                    </div>
                  </div>
                  {isChecked && (
                    <div
                      className="col-lg-12 auto py-3 customModalContainer"
                      id="addNewPiggybackFormContainer"
                    >
                      <div className="row g-0">
                        <div className="col-lg-12 colHeading">
                          <strong>
                            <FontAwesomeIcon icon={Icons.faPlus} /> ADD NEW{" "}
                            <FontAwesomeIcon
                              icon={Icons.faCopy}
                              rotation={180}
                              flip="horizontal"
                            />{" "}
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
                              <div className="col-sm-4">Headline / Offer</div>
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
                              <div className="col-sm-4">Button URL</div>
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
                              <div className="col-sm-4">Button Text Color</div>
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
                              <div className="col-sm-4">Location</div>
                              <div className="col-sm-8">
                                <select className="form-select">
                                  <option value="Bottom Right">
                                    Bottom Right
                                  </option>
                                  <option value="Bottom Left">
                                    Bottom Left
                                  </option>
                                  <option value="Top Right">Top Right</option>
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
                                  <FontAwesomeIcon icon={Icons.faTimes} />{" "}
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  name="btnPreview"
                                  id="btnPreview"
                                  className="btn btn-secondary"
                                >
                                  <FontAwesomeIcon
                                    icon={Icons.faExternalLink}
                                  />{" "}
                                  Preview / Test
                                </button>
                                <button
                                  type="button"
                                  name="btnSave"
                                  id="btnSave"
                                  className="btn btn-primary"
                                >
                                  <FontAwesomeIcon icon={Icons.faSave} /> Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
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
                        checked={isCheckedAddChatbot}
                        onChange={()=>setIsCheckedAddChatbot(!isCheckedAddChatbot)}
                      />
                      <label
                        htmlFor="addChatbackOpt"
                        className="css-checkbox-label radGroup2 mb-0"
                      >
                        <FontAwesomeIcon icon={Icons.faComment} /> Add Chatbot
                      </label>
                    </div>
                    {isCheckedAddChatbot && (<div className="chatbotOptsShow mt-3">
                      <select
                        name="chatBotOpts"
                        id="chatBotOpts"
                        className="form-select"
                      >
                        <option> == Chatbots ==</option>
                      </select>
                    </div>)}
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

export default PinkContainerInModal;
