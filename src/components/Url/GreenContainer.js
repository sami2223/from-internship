import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

const GreenContainer = ({ Icons, FontAwesomeIcon }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [tooltip, setTooltip] = useState(false);

  return (
    <>
      {tooltip && <ReactTooltip html={true} effect="solid" />}
      <div className="panel panel-default" id="URLInj_greenContainer">
        <div className="panel-heading">
          <h3 className="panel-title">
            <a
              data-bs-toggle="collapse"
              href="#URLInj_green"
              role="button"
              aria-expanded="true"
              aria-controls="URLInj_green"
            >
              <FontAwesomeIcon icon={Icons.faUser} /> Click Tracking
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
                    <FontAwesomeIcon icon={Icons.faSearch} /> Track individual
                    recipient views & actions if possible{" "}
                    <span
                      data-class="text-center"
                      onMouseEnter={() => setTooltip(true)}
                      onMouseLeave={() => {
                        setTooltip(false);
                        setTimeout(() => setTooltip(true), 50);
                      }}
                      data-tip='Be sure to inject </br>"ref={ReferrerContactIDNumber}"</br> OR</br> "refemail={referrer&#39;s email here}"</br> in the URL you send out.'
                    >
                      <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                    </span>
                  </label>
                </div>
                <p className="mb-0">
                  <strong>NOTE:</strong> Be sure your return URL is set to{" "}
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
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <label
                    htmlFor="GU_notify_you"
                    className="css-checkbox-label radGroup2 mb-0"
                  >
                    <FontAwesomeIcon icon={Icons.faBell} /> Notify
                  </label>
                </div>
                {isChecked && (
                  <div className="GU_notifyMeShow mt-3">
                    <div className="row row-cols-lg-auto g-3 align-items-center mb-3">
                      <div className="col-12">
                        <select
                          name="GU_notify_you_by"
                          id="GU_notify_you_by"
                          className="form-select"
                          value={selectedValue}
                          onChange={(e) => setSelectedValue(e.target.value)}
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
                        {selectedValue === "email_referrer" && (
                          <div className="input-group ml-2 GU_notify_you_by_field GU_email_referrer_container">
                            <span
                              data-class="text-center"
                              onMouseEnter={() => setTooltip(true)}
                              onMouseLeave={() => {
                                setTooltip(false);
                                setTimeout(() => setTooltip(true), 50);
                              }}
                              data-tip='Be sure to inject </br> "ref={ReferrerContactIDNumber}" </br> OR </br> "refemail={referrer&#39;s email here}" </br> in the URL you send out.'
                            >
                              <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                            </span>
                          </div>
                        )}

                        {selectedValue === "email_to" && (
                          <div className="input-group ml-2 GU_notify_you_by_field GU_email_to_container">
                            <div className="input-group-text">
                              <FontAwesomeIcon icon={Icons.faEnvelope} />
                            </div>
                            <input
                              type="text"
                              name="email_to"
                              id="email_to"
                              className="form-control"
                            />
                          </div>
                        )}

                        {selectedValue === "sms_to" && (
                          <div className="input-group ml-2 GU_notify_you_by_field GU_sms_to_container">
                            <div className="input-group-text">
                              <FontAwesomeIcon icon={Icons.faMobilePhone} />
                            </div>
                            <input
                              type="text"
                              name="sms_to"
                              id="sms_to"
                              className="form-control"
                            />
                          </div>
                        )}
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
                          <option value="Not Clicked">Not Clicked</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <span
                          data-class="text-center"
                          data-tip="If we know contact info for this </br> person or people, we'll let you </br> know when they click your link."
                          onMouseEnter={() => setTooltip(true)}
                          onMouseLeave={() => {
                            setTooltip(false);
                            setTimeout(() => setTooltip(true), 50);
                          }}
                        >
                          <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenContainer;
