import React, { useState } from "react";
import avatar from "../../assets/images/avatar.gif";
import ToggleSwitch from "../Settings/ToggleSwitch";
import ReactTooltip from "react-tooltip";

const GrayContainer = ({ Icons, FontAwesomeIcon }) => {
  const [noFollowChecked, setNoFollowChecked] = useState(true);
  const [noIndexChecked, setNoIndexChecked] = useState(true);
  const [tooltip, setTooltip] = useState(false);
  return (
    <>
      {tooltip && <ReactTooltip html={true} effect="solid" />}
      <div className="panel panel-default" id="URLInj_grayContainer">
        <div className="panel-heading">
          <h3 className="panel-title">
            <a
              data-bs-toggle="collapse"
              href="#URLInj_gray"
              role="button"
              aria-expanded="true"
              aria-controls="URLInj_gray"
            >
              <FontAwesomeIcon icon={Icons.faEllipsisH} /> More Options
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
                            <FontAwesomeIcon icon={Icons.faTags} /> Tags
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
                            <FontAwesomeIcon icon={Icons.faSignOut} /> Redirect
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
                            <FontAwesomeIcon icon={Icons.faSnowflake} /> Forward
                            Parameters
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
                                data-tip="Pass through any URL variables"
                                onMouseEnter={() => setTooltip(true)}
                                onMouseLeave={() => {
                                  setTooltip(false);
                                  setTimeout(() => setTooltip(true), 50);
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={Icons.faQuestionCircle}
                                />
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
                            <FontAwesomeIcon icon={Icons.faFileImage} />{" "}
                            Featured Image
                          </strong>
                        </div>
                        <div className="dh-block-body">
                          <div className="folderIcon">
                            <img src={avatar} />
                          </div>
                          <button
                            type="button"
                            className="btn btn-default btnDocFormIconEdit"
                          >
                            <span
                              data-tip="Edit folder image"
                              onMouseEnter={() => setTooltip(true)}
                              onMouseLeave={() => {
                                setTooltip(false);
                                setTimeout(() => setTooltip(true), 50);
                              }}
                            >
                              <FontAwesomeIcon icon={Icons.faPencil} />
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="colHeading">
                          <strong>
                            <FontAwesomeIcon icon={Icons.faGlobe} /> SEO{" "}
                          </strong>
                        </div>
                        <div className="dh-block-body">
                          <div className="url_seo">
                            No Follow{" "}
                            <ToggleSwitch
                              id="nofollow"
                              label="No Follow"
                              checked={noFollowChecked}
                              onChange={setNoFollowChecked}
                            />
                          </div>
                          <div className="mb-0 url_seo">
                            No Index{" "}
                            <ToggleSwitch
                              id="noindex"
                              label="No Index"
                              checked={noIndexChecked}
                              onChange={setNoIndexChecked}
                              style={{
                                top: "13px !important",
                                marginLeft: "13px !important",
                              }}
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
    </>
  );
};

export default GrayContainer;
