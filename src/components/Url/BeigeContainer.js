import React, { useEffect, useState } from "react";

const BeigeContainer = ({ Icons, FontAwesomeIcon }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [compaignTerm, setCompaignTerm] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [trafficSource, setTrafficSource] = useState("");

  const utmSourceSelectHandler = (e) => {
    const value = e.target.value;
    setSelectedSource(value);
    if (value === "social_unpaid") {
      setCompaignTerm("AdSummaryHere");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "social_paid") {
      setCompaignTerm("AdSummaryHere");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "email") {
      setCompaignTerm("Newsletter");
    } else if (value === "retargeting") {
      setCompaignTerm("trustbuilder");
      setTrafficSource("Remarketing");
    } else if (value === "content") {
      setCompaignTerm("trustbuilder");
      setTrafficSource("content_marketing");
    } else if (value === "cpc") {
      setCompaignTerm("KeyWord");
      setTrafficSource("Google");
    } else if (value === "cpm") {
      setCompaignTerm("AdSummaryHere");
      setTrafficSource("Google_DisplayNetwork");
    } else if (value === "cpa") {
      setCompaignTerm("Referring Affiliate Name Here");
      setTrafficSource("referral_paid");
    } else if (value === "pr") {
      setCompaignTerm("AdSummaryHere");
      setTrafficSource("press_PR");
    } else if (value === "seo") {
      setCompaignTerm("Exact Phrase they searched for");
      setTrafficSource("seo");
    } else if (value === "viral") {
      setCompaignTerm("AdSummaryHere");
      setTrafficSource("viral");
    } else if (value === "referral") {
      setCompaignTerm(
        "KeyWord we should change to Referring Affiliate Name Here"
      );
      setTrafficSource("referral");
    } else if (value === "db") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "affiliate") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "past_client") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "direct_mail") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "event") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "print") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "offline_referral") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "imported") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "cold_call") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "live_transfer") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "purchased_data") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "radio") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    } else if (value === "tv") {
      setCompaignTerm("KeyWord");
      setTrafficSource("{swift_trafficsource}");
    }
  };

  useEffect(() => {
    setSelectedSource("social_unpaid");
    setCompaignTerm("KeyWord");
    setTrafficSource("{swift_trafficsource}");
  }, []);

  const TrafficSource = ({ trafficSource, setTrafficSource }) => {
    return (
      <div className="mb-3 row TrafficSource">
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
              value={trafficSource}
              onChange={() => setTrafficSource(trafficSource)}
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
    );
  };

  const CompaignContentImg = () => {
    return (
      <div className="mb-3 row campaignContentImg">
        <label className="col-sm-2 col-form-label">
          <span className="ContentAdLabel">Content / Creative / Ad</span>
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
              <FontAwesomeIcon icon={Icons.faCloudUpload} />
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
              <FontAwesomeIcon icon={Icons.faCloudUpload} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const URL = () => {
    return (
      <div className="mb-3 row ContentCreativeAdRow">
        <div className="col-sm-2 col-form-label">
          <span className="ContentAdLabel">URL</span>

          <div className="contactToolContainer d-none pt-3">
            <div className="row">
              <div className="col-sm-12 mb-3"></div>
            </div>
          </div>
        </div>
        <div className="col-sm-5 campaignContent campaignContentCol">
          <div className="SEOURLContainer">
            <input
              type="text"
              name="SEOURL"
              id="SEOURL"
              className="form-control"
              defaultValue="https://"
            />
          </div>
        </div>
      </div>
    );
  };

  const ContentCreativeAd = () => {
    return (
      <div className="mb-3 row ContentCreativeAdRow">
        <div className="col-sm-2 col-form-label">
          <span className="ContentAdLabel">Content / Creative / Ad</span>

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
        </div>
        <div className="col-sm-5 d-none">
          <ul className="nav nav-tabs" id="uploadCreateTab" role="tablist">
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
          <div className="tab-content" id="uploadCreateTabContent">
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
                    <FontAwesomeIcon icon={Icons.faCloudUpload} />
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <select
                  className="form-select reviewSelection"
                  name="reviewSelection"
                >
                  <option value="">== Recent Reviews ==</option>
                  <option value="1">Reviews Show Here</option>
                </select>
              </div>
              <div className="mb-3 reviewPreviewContainer d-none">
                Actual Review Text Coming Soon to this space.
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
    );
  };

  const GroupAudiance = () => {
    return (
      <div className="mb-3 row group_audience_row">
        <label htmlFor="utm_medium" className="col-sm-2 col-form-label">
          Group / Audience
        </label>
        <div className="col-sm-5">
          <select className="form-select">
            <option>== Group / Audience here ==</option>
          </select>
        </div>
        <div className="col-sm-5"></div>
      </div>
    );
  };

  const PressRelease = () => {
    return (
      <div className="mb-3 row press_release_row">
        <label htmlFor="utm_medium" className="col-sm-2 col-form-label">
          Press Release
        </label>
        <div className="col-sm-5">
          <select className="form-select">
            <option>== Press Release here (doctype) ==</option>
          </select>
        </div>
        <div className="col-sm-5"></div>
      </div>
    );
  };

  const MailSubject = () => {
    return (
      <div className="mb-3 row email_subject_row">
        <label htmlFor="email_subject" className="col-sm-2 col-form-label">
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
    );
  };

  const Directmail = () => {
    return (
      <div className="mb-3 row direct_mail_row">
        <label htmlFor="utm_medium" className="col-sm-2 col-form-label">
          Direct Mail
        </label>
        <div className="col-sm-5">
          <select className="form-select">
            <option>== Uploads / PDFs here ==</option>
          </select>
        </div>
        <div className="col-sm-5"></div>
      </div>
    );
  };

  return (
    <div className="panel panel-default" id="URLInj_beigeContainer">
      <div className="panel-heading">
        <h3 className="panel-title">
          <a
            data-bs-toggle="collapse"
            href="#URLInj_beige"
            role="button"
            aria-expanded="true"
            aria-controls="URLInj_beige"
          >
            <FontAwesomeIcon icon={Icons.faBullhorn} /> Macro Tracking
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
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                          />
                          <label
                            htmlFor="enableMacroTracking"
                            className="css-checkbox-label radGroup2 mb-0"
                          >
                            Enable Macro Tracking
                          </label>
                        </div>
                      </div>

                      {isChecked && (
                        <div className="mt-3 row macro_tracking_container">
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
                                  <option value="">== Select ==</option>
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
                                  value={selectedSource}
                                  onChange={utmSourceSelectHandler}
                                >
                                  <option
                                    disabled
                                    defaultValue="-- ONLINE --"
                                    title="undefined"
                                  >
                                    {" "}
                                    -- ONLINE --{" "}
                                  </option>
                                  <option value="email" title="Email">
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
                                    Affiliates / Cost-Per-Action (CPA)
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
                                    Press Releases / Public Relations
                                  </option>
                                  <option
                                    value="seo"
                                    title="SEO (Organic Unpaid)"
                                  >
                                    Search Engine Optimization (SEO)
                                  </option>
                                  <option value="viral" title="Viral">
                                    Viral Reshared Media
                                  </option>
                                  <option value="referral" title="Referral">
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
                                  <option value="event" title="Live Event">
                                    Live Events
                                  </option>
                                  <option
                                    value="print"
                                    title="Print Advertising"
                                  >
                                    Print Ad
                                  </option>
                                  <option
                                    value="offline_referral"
                                    title="Referral (Unpaid)"
                                  >
                                    Offline Referral (Unpaid) / Biz Dev
                                  </option>
                                  <option value="tv" title="TV">
                                    TV
                                  </option>
                                  <option value="radio" title="Radio">
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
                                  <option value="imported" title="Imported">
                                    Imported Leads
                                  </option>
                                  <option
                                    value="live_transfer"
                                    title="Live Transfer"
                                  >
                                    Live Transfer Leads
                                  </option>
                                  <option
                                    value="purchased_data"
                                    title="Purchased Data"
                                  >
                                    Purchased Data
                                  </option>
                                </select>
                              </div>
                              <div className="col-sm-5 utm_source_tooltip campaign_tooltip"></div>
                            </div>

                            {(selectedSource === "social_unpaid" ||
                              // selectedSource === "social_paid" ||
                              selectedSource === "retargeting" ||
                              selectedSource === "content" ||
                              selectedSource === "cpm" ||
                              selectedSource === "cpa" ||
                              selectedSource === "pr" ||
                              selectedSource === "seo") && (
                              <TrafficSource
                                trafficSource={trafficSource}
                                setTrafficSource={setTrafficSource}
                              />
                            )}

                            {selectedSource === "social_paid" && (
                              <TrafficSource
                                trafficSource={trafficSource}
                                setTrafficSource={setTrafficSource}
                              />
                            )}

                            {selectedSource === "pr" && <PressRelease />}

                            {(selectedSource === "email" ||
                              selectedSource === "cpa") && <GroupAudiance />}

                            {selectedSource === "email" && <MailSubject />}

                            {(selectedSource === "social_unpaid" ||
                              selectedSource === "social_paid" ||
                              selectedSource === "retargeting" ||
                              selectedSource === "cpm") && (
                              <CompaignContentImg />
                            )}

                            {(selectedSource === "social_unpaid" ||
                              selectedSource === "social_paid" ||
                              selectedSource === "email" ||
                              selectedSource === "cpc" ||
                              selectedSource === "cpa" ||
                              selectedSource === "pr") && <ContentCreativeAd />}

                            {(selectedSource === "content" ||
                              selectedSource === "seo") && <URL />}

                            {selectedSource === "viral" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <CompaignContentImg />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "referral" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "db" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "past_client" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "affiliate" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "direct_mail" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <Directmail />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "event" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "print" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <CompaignContentImg />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "offline_referral" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "tv" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}

                            {selectedSource === "radio" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}
                            {selectedSource === "cold_call" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}
                            {selectedSource === "imported" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}
                            {selectedSource === "live_transfer" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}
                            {selectedSource === "purchased_data" && (
                              <>
                                <TrafficSource
                                  trafficSource={trafficSource}
                                  setTrafficSource={setTrafficSource}
                                />
                                <ContentCreativeAd />
                              </>
                            )}

                            <div className="row compaignTerm">
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
                                  value={compaignTerm}
                                  onChange={() => setCompaignTerm(compaignTerm)}
                                />
                              </div>
                              <div className="col-sm-5 utm_term_tooltip campaign_tooltip"></div>
                            </div>
                          </div>
                        </div>
                      )}
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

export default BeigeContainer;
