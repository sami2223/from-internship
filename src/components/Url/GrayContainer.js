import React from "react";
import avatar from "../../assets/images/avatar.gif";

const GrayContainer = ({ Icons, FontAwesomeIcon }) => {
  return (
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
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Pass through any URL variables"
                            >
                              <FontAwesomeIcon icon={Icons.faQuestionCircle} />
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
                          <FontAwesomeIcon icon={Icons.faFileImage} /> Featured
                          Image
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
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Edit folder image"
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
  );
};

export default GrayContainer;
