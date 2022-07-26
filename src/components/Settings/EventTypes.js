import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const EventTypes = () => {
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
    <div className="row block-content g-0 border-bottom">
      <div className="col-lg-12">
        <div className="row editable align-items-center">
          <div className="col-10">
            <h5 className="block-title" onClick={handleModal}>
              <FontAwesomeIcon icon={faCalendarDays} /> Event Types
            </h5>
          </div>
          <div className="col-2 text-end">
            <OpenCloseButton/>
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
                        id="addNewEventTypesContainer"
                      >
                        <div className="row">
                          <div className="col-lg-12 colHeading">
                            <strong>
                              <FontAwesomeIcon icon={Icons.faPlus} /> Add Event
                              Types
                            </strong>
                          </div>
                          <div className="col-lg-12 dh-block-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="row mb-3 align-items-center">
                                      <div className="col-sm-4">Event Types</div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          name="newEventTypes"
                                          id="newEventTypes"
                                          className="form-control"
                                          placeholder="Due date"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-12 text-end">
                                        <CancelButton/>
                                        <button
                                          type="button"
                                          name="btnSave"
                                          id="btnSaveEventType"
                                          className="btn btn-primary"
                                        >
                                          <FontAwesomeIcon icon={Icons.faCheck} />
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
                      <AddNewButton/>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="tblEventTypes"
                      className="table table-striped dataTable no-footer"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th width="80%">Event Type</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Event 1</td>
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
                          <td>Event 2</td>
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
  );
};

export default EventTypes;
