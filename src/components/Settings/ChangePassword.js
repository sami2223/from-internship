import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ChangePassword = () => {
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
    <div className="row g-0 block-content border-bottom">
      <div className="col-lg-12">
        <div className="row editable align-items-center">
          <div className="col-10">
            <h5 className="block-title" onClick={handleModal}>
              Password Change
            </h5>
          </div>
          <div className="col-2 text-end">
            <OpenCloseButton />
          </div>
        </div>
        {openModal && (
          <div className="row expand-content">
            <div className="col-lg-8 col-sm-12 col-md-12 col-xs-12 mx-auto">
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label text-end">
                  Current Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Current password"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label text-end">
                  New Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New password"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label text-end">
                  Confirm Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label text-end"></label>
                <div className="col-sm-8">
                  <button className="btn btn-default">
                    <FontAwesomeIcon icon={Icons.faKey} /> Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
