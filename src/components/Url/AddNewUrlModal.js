import React, { useEffect, useState } from "react";
import {
  faFacebookF,
  faLinkedin,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PinkContainerInModal from "./PinkContainerInModal";
import BeigeContainer from "./BeigeContainer";
import GreenContainer from "./GreenContainer";
import BlueContainer from "./BlueContainer";
import GrayContainer from "./GrayContainer";

const AddNewUrlModal = ({ FontAwesomeIcon, Icons }) => {
  
  return (
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
              <FontAwesomeIcon icon={Icons.faLink} /> Add URL
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
                {/* Pink Container */}
                <PinkContainerInModal
                  Icons={Icons}
                  FontAwesomeIcon={FontAwesomeIcon}
                />

                {/* Beige Container */}
                <BeigeContainer
                  Icons={Icons}
                  FontAwesomeIcon={FontAwesomeIcon}
                />

                {/* Green Container */}
                <GreenContainer
                  Icons={Icons}
                  FontAwesomeIcon={FontAwesomeIcon}
                />

                {/* Blue Container */}
                <BlueContainer
                  Icons={Icons}
                  FontAwesomeIcon={FontAwesomeIcon}
                />

                {/* Gray Container */}
                <GrayContainer
                  Icons={Icons}
                  FontAwesomeIcon={FontAwesomeIcon}
                />

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
                        <FontAwesomeIcon icon={Icons.faExternalLink} />
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
                        <FontAwesomeIcon icon={Icons.faCopy} />
                      </a>
                      <input
                        id="GlobalURLSuperLongURLCopyLink"
                        defaultValue="#"
                      />
                    </p>
                  </div>

                  <div className="col-lg-12 shortenURLActionContainer">
                    <p className="text-center">is shortened / customized to</p>

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
                          <FontAwesomeIcon icon={Icons.faExternalLink} />
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
                          <FontAwesomeIcon icon={Icons.faCopy} />
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
                              <FontAwesomeIcon icon={Icons.faQrcode} />
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
                              <FontAwesomeIcon icon={Icons.faPaperPlane} />
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
                              <FontAwesomeIcon icon={faFacebookF} />
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
                              <FontAwesomeIcon icon={faTwitter} />
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
                              <FontAwesomeIcon icon={faPinterestP} />
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
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row g-0 rowQRCode pt-3 display-none">
                      <div className="col-lg-12 colHeading">
                        <strong>
                          <FontAwesomeIcon icon={Icons.faQrcode} /> QR Code
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
                    <FontAwesomeIcon icon={Icons.faCheck} /> Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUrlModal;
