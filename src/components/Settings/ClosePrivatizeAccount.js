import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ClosePrivatizeAccount = () => {
  const [openModal, setOpenModal] = useState(false);

  const OpenCloseButton = () => {
    return (
      <span
        onClick={handleModal}
        className="round-edit-icon"
        style={{ cursor: "pointer" }}
      >
        {!openModal ? (
          <FontAwesomeIcon icon={Icons.faPencil} />
        ) : (
          <FontAwesomeIcon icon={Icons.faClose} />
        )}
      </span>
    );
  };

  const handleModal = () => {
    setOpenModal((prevOpenModal) => !prevOpenModal);
  };

  return (
    <div className="row g-0 block-content">
      <div className="col-lg-12">
        <div className="row editable align-items-center">
          <div className="col-10">
            <h5 className="block-title" onClick={handleModal}>
              Close Or Privatize Account
            </h5>
          </div>
          <div className="col-2 text-end">
            <OpenCloseButton />
          </div>
        </div>
        {openModal && (
          <div className="row expand-content">
            <div className="col-lg-8 col-sm-12 col-md-12 col-xs-12 mx-auto">
              <p>
                SwiftCloud contains a social address book, and as such, anyone
                can store information about anyone. For those who want the
                greatest degree of privacy, we recommend opening or keeping an
                account, then setting phones and emails and other information to
                "Private" (on your contact editor), which will prevent the
                information from being public on the web. Note that privatizing
                info will not remove other users' privately-stored information.
                Privatizing info will remove it from your auto-linked public
                profile, and unpublish it from the our servers.
              </p>
              <p>
                <FontAwesomeIcon icon={Icons.faEyeSlash} className="fa-lg" /> To
                set your account to maximum privacy and automatically privatize
                all info known about you, <a href="#">click here</a>.
              </p>
              <p>
                <FontAwesomeIcon icon={Icons.faPowerOff} className="fa-lg" />{" "}
                Note that once you close your account, if someone publishes new
                info about you, then you will not have the ability to control
                and/or privatize info published after account closure. If you
                are not sure, leave the account open, but set to maximum privacy
                &amp; auto-privatize. To ignore this and close your account
                anyway,
                <a href="#">click here</a>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClosePrivatizeAccount;
