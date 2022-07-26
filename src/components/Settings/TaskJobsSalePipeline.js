import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { IconPicker } from 'react-fa-icon-picker'

const TaskJobsSalePipeline = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [value, setValue] = useState("");

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
              <FontAwesomeIcon icon={faHandshake} /> Task / Job / Sales
              Opportunity Type Pipelines
              <a
                href="#"
                data-toggle="tooltip"
                title="A task or project can only be in 1 category, but can have many tags. Status is specific to category."
              >
                <FontAwesomeIcon icon={Icons.faQuestionCircle} />
              </a>
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
                        id="addNewTransactionTypesContainer"
                      >
                        <div className="row">
                          <div className="col-lg-12 colHeading">
                            <strong>
                              <FontAwesomeIcon icon={faHandshake} />
                              Add Transaction Type
                            </strong>
                          </div>
                          <div className="col-lg-12 dh-block-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="row mb-3 align-items-center">
                                      <div className="col-sm-4">
                                        Select Your Industry & Transaction Type
                                        <span
                                          data-toggle="tooltip"
                                          title="This will load configurations for SwiftCloud into your account, which you can then further customize as needed."
                                        >
                                          <FontAwesomeIcon
                                            icon={Icons.faQuestionCircle}
                                          />
                                        </span>
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="input-group">
                                          <div className="input-group-prepend">
                                            <button
                                              type="button"
                                              className="btn btn-default iconpicker-component"
                                            >
                                              {/* <IconPicker value={value} onChange={(v) => setValue(v)}/> */}
                                              <FontAwesomeIcon icon={Icons.faHome}/>
                                            </button>
                                            <input
                                              type="text"
                                              name="typeIcon[]"
                                              id="transactionTypeIcon"
                                              className="form-control typeIcon"
                                              defaultValue="fa fa-home"
                                            />
                                          </div>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="asset_name"
                                            id="asset_name"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-12 text-end">
                                        <CancelButton/>
                                        <button
                                          type="button"
                                          name="btnSave"
                                          id="btnSaveTransactionTypes"
                                          className="btn btn-primary"
                                        >
                                          <FontAwesomeIcon
                                            icon={Icons.faCheck}
                                          />
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
                    <div className="col-md-6">
                      <h4 className="mb-0">
                        <FontAwesomeIcon icon={faHandshake} /> Task / Job /
                        Sales Opportunity Type Pipelines
                      </h4>
                    </div>
                    <div className="col-md-6 text-end">
                      <AddNewButton/>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="tblTransactionTypes"
                      className="table table-striped dataTable"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th width="40%">Transaction Type</th>
                          <th width="20%">Default Tags</th>
                          <th width="20%">Default Role(s)</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" target="_blank">
                              <FontAwesomeIcon icon={Icons.faFolder} /> Real
                              estate listing
                            </a>
                            <a href="#" className="transTypeShowOnHover">
                              <FontAwesomeIcon icon={Icons.faExternalLink} />
                            </a>
                          </td>
                          <td>
                            <div className="SwiftCloudTableTags">
                              <ul>
                                <li>
                                  <a href="#" data-tagname="tag1">
                                    tag1
                                  </a>
                                </li>
                                <li>
                                  <a href="#" data-tagname="tag2">
                                    tag2
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                          <td></td>
                          <td className="text-right tableColAction d-none d-md-table-cell">
                            <a
                              href="#"
                              className="btn btn-secondary"
                              data-toggle="tooltip"
                              title="Make Primary"
                            >
                              <FontAwesomeIcon icon={Icons.faCheck} />
                            </a>
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
                          <td>
                            <a href="#" target="_blank">
                              <FontAwesomeIcon icon={Icons.faCheck} /> Plumber
                              Transaction
                            </a>
                            <a href="#" className="transTypeShowOnHover">
                              <FontAwesomeIcon icon={Icons.faExternalLink} />
                            </a>
                          </td>
                          <td>
                            <div className="SwiftCloudTableTags">
                              <ul>
                                <li>
                                  <a href="#" data-tagname="Plumber">
                                    Plumber
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                          <td></td>
                          <td className="text-right tableColAction d-none d-md-table-cell">
                            <a
                              href="#"
                              className="btn btn-secondary"
                              data-toggle="tooltip"
                              title="Primary"
                            >
                              <FontAwesomeIcon icon={Icons.faCheck} />
                            </a>
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
                          <td>
                            <a href="#" target="_blank">
                              <FontAwesomeIcon icon={Icons.faUser} /> Doctors
                              Appointment
                            </a>
                            <a href="#" className="transTypeShowOnHover">
                              <FontAwesomeIcon icon={Icons.faExternalLink} />
                            </a>
                          </td>
                          <td>
                            <div className="SwiftCloudTableTags">
                              <ul>
                                <li>
                                  <a href="#" data-tagname="Doctors">
                                    Doctors
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                          <td></td>
                          <td className="text-right tableColAction d-none d-md-table-cell">
                            <a
                              href="#"
                              className="btn btn-secondary"
                              data-toggle="tooltip"
                              title="Make Primary"
                            >
                              <FontAwesomeIcon icon={Icons.faCheck} />
                            </a>
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

export default TaskJobsSalePipeline;
