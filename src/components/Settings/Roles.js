import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const Roles = () => {
  const [openRoles, setOpenRoles] = useState(false);
  const [openNewRole, setOpenNewRole] = useState(false);

  return (
    <div className="row block-content g-0 border-bottom">
      <div className="col-lg-12">
        <div className="row editable align-items-center">
          <div className="col-10">
            <h5
              className="block-title"
              onClick={() => {
                setOpenRoles((prevOpenRoles) => !prevOpenRoles);
              }}
            >
              <FontAwesomeIcon icon={Icons.faUser} /> Roles
              <span
                data-toggle="tooltip"
                title="What roles apply to your business? Client, patient, vendor, etc."
              >
                <FontAwesomeIcon icon={Icons.faQuestionCircle} />
              </span>
            </h5>
          </div>
          <div className="col-2 text-end">
            <a
              href
              onClick={(e) => {
                e.preventDefault();
                setOpenRoles((prevOpenRoles) => !prevOpenRoles);
              }}
              className="round-edit-icon"
              style={{ cursor:"pointer" }}
            >
              {!openRoles ? (
                  <FontAwesomeIcon icon={Icons.faPencil} />
                ) : (
                  <FontAwesomeIcon icon={Icons.faClose} />
                )}
            </a>
          </div>
        </div>
        {openRoles && (
            <div className="row expand-content">
            <div className="col-lg-10 col-sm-12 col-md-12 col-xs-12 mx-auto">
              <div className="mb-3 row">
                <div className="col-md-12">
                  <div className="row">
                    {openNewRole && (
                        <div
                        className="col-lg-6 col-md-8 mx-auto py-4"
                        id="addNewRoleContainer"
                      >
                        <div className="row">
                          <div className="col-lg-12 colHeading">
                            <strong>
                              <FontAwesomeIcon icon={Icons.faPlus} /> Add RAVE Score
                              Automation
                            </strong>
                          </div>
                          <div className="col-lg-12 dh-block-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="row mb-3 align-items-center">
                                      <div className="col-sm-4">
                                        Role
                                        <span
                                          data-toggle="tooltip"
                                          title="i.e. Patient, Borrower, Client, Customer... just for you."
                                        >
                                          <FontAwesomeIcon
                                            icon={Icons.faQuestionCircle}
                                          />
                                        </span>
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          name="role_field"
                                          id="role_field"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3 align-items-center">
                                      <div className="col-sm-4">
                                        Default Role Tags
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          name="Default_Role_Tags"
                                          id="Default_Role_Tags"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-12 text-end">
                                        <button
                                          type="button"
                                          name="btnCancel"
                                          id="btnCancelNewRole"
                                          className="btn btn-default"
                                          onClick={()=>setOpenNewRole(false)}
                                        >
                                          <FontAwesomeIcon icon={Icons.faClose} />
                                          Cancel
                                        </button>
                                        <button
                                          type="button"
                                          name="btnSave"
                                          id="btnSaveNewRole"
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
                    <div className="col-md-6">
                      <h4 className="mb-0">
                        <FontAwesomeIcon icon={Icons.faUser} /> Roles for Your
                        Business
                      </h4>
                    </div>
                    <div className="col-md-6 text-end">
                      <button onClick={()=>setOpenNewRole(true)} className="btn btn-primary">
                        <FontAwesomeIcon icon={Icons.faPlus} /> Add New
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table id="roles_for_business"
                      className="table dataTable"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th width="40%">Role</th>
                          <th width="40%">Default Tags</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Client</td>
                          <td>
                            <div className="SwiftCloudTableTags">
                              <ul>
                                <li>
                                  <a href="#">Tag1</a>
                                </li>
                                <li>
                                  <a href="#">Tag2</a>
                                </li>
                                <li>
                                  <a href="#">Tag3</a>
                                </li>
                              </ul>
                            </div>
                          </td>
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
                          <td>Seller</td>
                          <td>
                            <div className="SwiftCloudTableTags">
                              <ul>
                                <li>
                                  <a href="#">Tag1</a>
                                </li>
                                <li>
                                  <a href="#">Tag2</a>
                                </li>
                              </ul>
                            </div>
                          </td>
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
                          <td>User</td>
                          <td>
                            <div className="SwiftCloudTableTags">
                              <ul>
                                <li>
                                  <a href="#">Tag1</a>
                                </li>
                              </ul>
                            </div>
                          </td>
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

export default Roles;
