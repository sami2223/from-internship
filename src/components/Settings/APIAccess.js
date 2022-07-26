import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const APIAccess = () => {
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
              API Access
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
                  Outbound API Token Secret
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Readonly input here..."
                    aria-label="readonly input example"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default APIAccess;
