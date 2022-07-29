import React from 'react'

const GreenContainer = ({Icons, FontAwesomeIcon}) => {
  return (
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
                              <FontAwesomeIcon icon={Icons.faSearch} /> Track
                              individual recipient views & actions if possible{" "}
                              <span
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-animation="false"
                                title='Be sure to inject "ref={ReferrerContactIDNumber}" OR "refemail={referrer&#39;s email here}" in the URL you send out.'
                              >
                                <FontAwesomeIcon
                                  icon={Icons.faQuestionCircle}
                                />
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
                              <FontAwesomeIcon icon={Icons.faBell} /> Notify
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
                                    <FontAwesomeIcon
                                      icon={Icons.faQuestionCircle}
                                    />
                                  </span>
                                </div>

                                <div className="input-group ml-2 GU_notify_you_by_field GU_email_to_container display-none">
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

                                <div className="input-group ml-2 GU_notify_you_by_field GU_sms_to_container display-none">
                                  <div className="input-group-text">
                                    <FontAwesomeIcon
                                      icon={Icons.faMobilePhone}
                                    />
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
                                  <FontAwesomeIcon
                                    icon={Icons.faQuestionCircle}
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default GreenContainer