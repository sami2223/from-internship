import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const CustomContactField = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddNew, setOpenAddNew] = useState(false);

  const CancelButton = () => {
    return (
      <button
        type="button"
        name="btnCancel"
        id="btnCancelAddNewCustomField"
        className="btn btn-default"
        onClick={() => setOpenAddNew(false)}
        style={{ cursor: "pointer", marginRight: "3px" }}
      >
        <FontAwesomeIcon icon={Icons.faClose} /> Cancel
      </button>
    );
  };

  const AddNewButton = () => {
    return (
      <button onClick={() => setOpenAddNew(true)} className="btn btn-primary">
        <FontAwesomeIcon icon={Icons.faPlus} /> Add New
      </button>
    );
  };

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
    // setOpenAddNew(false);
  };

  return (
    <>
      <div className="row block-content g-0 border-bottom">
        <div className="col-lg-12">
          <div className="row editable align-items-center">
            <div className="col-10">
              <h5 className="block-title" onClick={handleModal}>
                <FontAwesomeIcon icon={Icons.faUser} /> Custom Contact Fields
                <span
                  data-toggle="tooltip"
                  title="What key info do you need about most clients?"
                >
                  <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                </span>
              </h5>
            </div>
            <div className="col-2 text-end">
              <OpenCloseButton />
            </div>
          </div>
          {openModal && (
            <div className="row expand-content">
              <div className="col-lg-10 col-sm-12 col-md-12 col-xs-12 mx-auto">
                <div className="mb-3 row">
                  <div className="col-md-12">
                    <div className="row">
                      {openAddNew && (
                        <div
                          className="col-lg-6 col-md-8 mx-auto py-4"
                          id="addNewCustomFieldContainer"
                        >
                          <div className="row">
                            <div className="col-lg-12 colHeading">
                              <strong>
                                <FontAwesomeIcon icon={Icons.faPlus} /> Add
                                Custom Contact Field
                              </strong>
                            </div>
                            <div className="col-lg-12 dh-block-body">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="row mb-3 align-items-center">
                                        <div className="col-sm-4">
                                          Field Name / Label
                                        </div>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            name="newCustomField"
                                            id="newCustomField"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3 align-items-center">
                                        <div className="col-sm-4">
                                          Field type
                                          <span
                                            data-toggle="tooltip"
                                            title="You can add these fields to intake forms, chatbot-intake-fields, etc."
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faQuestionCircle}
                                            />
                                          </span>
                                        </div>
                                        <div className="col-sm-8">
                                          <select
                                            name="newCustomFieldOpts"
                                            id="newCustomFieldOpts"
                                            className="form-select"
                                          >
                                            <option defaultValue="txtbox">
                                              TextBox
                                            </option>
                                            <option defaultValue="txtboxNumber">
                                              TextBox (Number Only) (Visible to
                                              Contact)
                                            </option>
                                            <option defaultValue="metered_value_rollover">
                                              Metered Value (Roll-Over) (Visible
                                              to Contact)
                                            </option>
                                            <option defaultValue="metered_value_reset_each_period">
                                              Metered Value (Reset Each Period)
                                            </option>
                                            <option defaultValue="swift_rating_15">
                                              Rating (1-5 Stars)
                                            </option>
                                            <option defaultValue="swift_rating_10">
                                              Ratings Box 0-10
                                            </option>
                                            <option defaultValue="swift_slider_range">
                                              Slider 1-100
                                            </option>
                                            <option defaultValue="txtarea">
                                              Text Area
                                            </option>
                                            <option defaultValue="address">
                                              Address
                                            </option>
                                            <option defaultValue="dropdown">
                                              Dropdown
                                            </option>
                                            <option defaultValue="webURL">
                                              Web URL
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row mb-3 align-items-center fieldOptionsRow d-none">
                                        <div className="col-sm-4">
                                          Field Name / Label
                                          <span
                                            data-toggle="tooltip"
                                            title="Enter Comma Separatd Values"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faQuestionCircle}
                                            />
                                          </span>
                                        </div>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            name="fieldOptions"
                                            id="fieldOptions"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-sm-12 text-end">
                                          <CancelButton />

                                          <button
                                            type="button"
                                            name="btnSave"
                                            id="btnSaveCustomField"
                                            className="btn btn-primary"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faCheck}
                                            />{" "}
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="row mb-2 align-items-center">
                      <div className="col-md-6"></div>
                      <div className="col-md-6 text-end">
                        <AddNewButton />
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table
                        id="tblCustomField"
                        className="table table-striped dataTable no-footer"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th width="40%">Name/Label</th>
                            <th width="40%">Type</th>
                            <th width="20%"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Communication Skills</td>
                            <td>swift_rating_15</td>
                            <td className="text-right tableColAction d-none d-md-table-cell">
                              <a
                                href="#"
                                className="btn btn-edit"
                                data-toggle="tooltip"
                                title="Edit"
                              >
                                <FontAwesomeIcon icon={Icons.faPencil} />
                              </a>
                              <a
                                href="#"
                                className="btn btn-delete"
                                data-toggle="tooltip"
                                title="Delete"
                              >
                                <FontAwesomeIcon icon={Icons.faTrashAlt} />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Custom Web Url</td>
                            <td>webURL</td>
                            <td className="text-right tableColAction d-none d-md-table-cell">
                              <a
                                href="#"
                                className="btn btn-edit"
                                data-toggle="tooltip"
                                title="Edit"
                              >
                                <FontAwesomeIcon icon={Icons.faPencil} />
                              </a>
                              <a
                                href="#"
                                className="btn btn-delete"
                                data-toggle="tooltip"
                                title="Delete"
                              >
                                <FontAwesomeIcon icon={Icons.faTrashAlt} />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Custom Address</td>
                            <td>address</td>
                            <td className="text-right tableColAction d-none d-md-table-cell">
                              <a
                                href="#"
                                className="btn btn-edit"
                                data-toggle="tooltip"
                                title="Edit"
                              >
                                <FontAwesomeIcon icon={Icons.faPencil} />
                              </a>
                              <a
                                href="#"
                                className="btn btn-delete"
                                data-toggle="tooltip"
                                title="Delete"
                              >
                                <FontAwesomeIcon icon={Icons.faTrashAlt} />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomContactField;
