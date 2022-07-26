import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const TeamAdmin = () => {
  const [openTeamAdmin, setOpenTeamAdmin] = useState(false);
  const [openAddRole, setOpenAddRole] = useState(false);

  return (
    <>
      <div className="row g-0 block-content border-bottom">
        <div className="col-lg-12">
          <div className="row editable align-items-center" >
            <div className="col-10">
              <h5 className="block-title" onClick={() => {
                  setOpenTeamAdmin(
                    (prevopenTeamAdmin) => !prevopenTeamAdmin
                  );
                }}>
                <FontAwesomeIcon icon={Icons.faUsers} /> Team Admin (IAM - ID &
                Access Management)
              </h5>
            </div>
            <div className="col-2 text-end">
              <span
                onClick={() => {
                    setOpenTeamAdmin(
                      (prevOpenTeamAdmin) => !prevOpenTeamAdmin
                    );
                  }}
                className="round-edit-icon"
                style={{ cursor:"pointer" }}
              >
                {!openTeamAdmin ? (
                  <FontAwesomeIcon icon={Icons.faPencil} />
                ) : (
                  <FontAwesomeIcon icon={Icons.faClose} />
                )}
              </span>
            </div>
          </div>
          <div
            className={`row expand-content ${
              !openTeamAdmin ? "display-none" : ""
            }`}
          >
            <div className="col-lg-12">
              <div className="row">
                <div
                  className={`col-lg-6 col-md-8 mx-auto py-4 ${
                    !openAddRole ? "display-none" : ""
                  }`}
                  id="addNewUserAdminContainer"
                >
                  <div className="row">
                    <div className="col-lg-12 colHeading">
                      <strong>
                        <FontAwesomeIcon icon={Icons.faUsers} /> Add Role
                      </strong>
                    </div>
                    <div className="col-lg-12 dh-block-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="row mb-3 align-items-center">
                                <div className="col-sm-4">Title:</div>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    name="useradmin_title"
                                    id="useradmin_title"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row align-items-center">
                                <div className="col-sm-4">Role:</div>
                                <div className="col-sm-8">
                                  <select
                                    name="useradmin_role"
                                    id="useradmin_role"
                                    className="form-select"
                                  >
                                    <option defaultValue="">
                                      == Select Role ==
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="row mb-3 align-items-center">
                                <div
                                  data-toggle="tooltip"
                                  title="Department Lead / Role this reports to (optional)"
                                  className="col-sm-4"
                                >
                                  Parent (Optional):
                                </div>
                                <div className="col-sm-8">
                                  <select
                                    name="useradmin_parent_role"
                                    id="useradmin_parent_role"
                                    className="form-select"
                                  >
                                    <option>Parent role here...</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row mb-3 align-items-center">
                                <div className="col-sm-4">Tags:</div>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    name="useradmin_tags"
                                    id="useradmin_tags"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12 text-end">
                                  <button
                                    onClick={() => setOpenAddRole(false)}
                                    type="button"
                                    name="btnCancel"
                                    id="btnCancelUserAdmin"
                                    className="btn btn-default"
                                  >
                                    <FontAwesomeIcon icon={Icons.faClose} />
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    name="btnSave"
                                    id="btnSaveUserAdmin"
                                    className="btn btn-primary"
                                  >
                                    <FontAwesomeIcon icon={Icons.faCheck} />{" "}
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
              </div>
              <div className="row">
                <div
                  className="col-lg-6 col-md-8 mx-auto py-4 display-none"
                  id="addPersonToRoleContainer"
                >
                  <div className="row">
                    <div className="col-lg-12 colHeading">
                      <strong>
                        <FontAwesomeIcon icon={Icons.faUserPlus} /> Add / Invite
                        Person to Role
                      </strong>
                    </div>
                    <div className="col-lg-12 dh-block-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-sm-12 BC_Multiple_User">
                              <div className="mb-3 row">
                                <div className="col-sm-12">
                                  <input
                                    type="text"
                                    name="useradmin_input"
                                    id="useradmin_input"
                                    className="form-control addUserAutoSearch"
                                    placeholder="Any Email or Phone"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row align-items-center addNewUserField display-none">
                                <div className="col-sm-6">
                                  <input
                                    name="memberName"
                                    id="memberName"
                                    className="form-control"
                                    type="text"
                                    placeholder="Name"
                                  />
                                </div>
                                <div className="col-sm-6">
                                  <input
                                    name="memberEmail"
                                    id="memberEmail"
                                    className="form-control"
                                    type="text"
                                    placeholder="Email or Phone"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 text-end">
                              <button
                                type="button"
                                name="btnCancel"
                                id="btnCancelAddPersonToRole"
                                className="btn btn-default"
                              >
                                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
                              </button>
                              <button
                                type="button"
                                name="btnSave"
                                id="btnSaveAddPersonToRole"
                                className="btn btn-primary"
                              >
                                <FontAwesomeIcon icon={Icons.faCheck} /> Invite
                                / Request
                                <FontAwesomeIcon icon={Icons.faPaperPlane} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="bg-white border p-3 mb-3">
                        <div className="row">
                          <div className="col-lg-12">
                            <h4 className="d-inline">
                              <FontAwesomeIcon icon={Icons.faUsers} /> User
                              Admin (IAM - ID & Access Management)
                            </h4>
                            <div className="float-end">
                              <button
                                onClick={() => {
                                  setOpenAddRole(true);
                                }}
                                type="button"
                                className="btn btn-primary"
                                id="btnAddNewUserAdmin"
                              >
                                <FontAwesomeIcon icon={Icons.faPlus} /> Add New
                                Role
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <ul
                              id="userAdminTree"
                              className="easyui-tree"
                              data-options="dnd: true,animate:true,lines:true"
                            >
                              <li>
                                <span>
                                  Visionary / Founder / CEO
                                  <div className="teamUserInfoContainer">
                                    <div className="teamUserInfo">
                                      <div className="teamUserInfoAction">
                                        <a
                                          href="#"
                                          className="btnTeamUserInfoActionTrash"
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="Remove Role / Position"
                                        >
                                          <FontAwesomeIcon
                                            icon={Icons.faTrash}
                                          />
                                        </a>
                                        <a
                                          href="#"
                                          className="btnTeamUserInfoActionSettings"
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="Settings & Permissions"
                                        >
                                          <FontAwesomeIcon
                                            icon={Icons.faGear}
                                          />
                                        </a>
                                        <a
                                          href="#"
                                          className="btnTeamUserInfoActionReportingRole"
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="Add Staff Position / Reporting Role Below"
                                        >
                                          {/* <FontAwesomeIcon icon={Icons.faLevelUp} className="fa-rotate-90"/> */}
                                          <FontAwesomeIcon
                                            icon={Icons.faLevelUp}
                                            className="fa-rotate-90"
                                          />
                                        </a>
                                        <a
                                          href="#"
                                          className="btnTeamUserInfoActionAdd"
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="Invite / Assign Role"
                                        >
                                          <FontAwesomeIcon
                                            icon={Icons.faUserPlus}
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                                <ul>
                                  <li>
                                    Integrator / COO
                                    <div className="teamUserInfoContainer">
                                      <div className="teamUserInfo">
                                        <div className="teamUserInfoAction">
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionTrash"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Remove Role / Position"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faTrash}
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionSettings"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Settings & Permissions"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faGear}
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionReportingRole"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Add Staff Position / Reporting Role Below"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faLevelUp}
                                              className="fa-rotate-90"
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionAdd"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Invite / Assign Role"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faUserPlus}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <span>
                                      Product / Operations / Fulfillment
                                      <div className="teamUserInfoContainer">
                                        <div className="teamUserInfo">
                                          <div className="teamUserInfoAction">
                                            <a
                                              href="#"
                                              className="btnTeamUserInfoActionTrash"
                                              data-toggle="tooltip"
                                              data-placement="bottom"
                                              title="Remove Role / Position"
                                            >
                                              <FontAwesomeIcon
                                                icon={Icons.faTrash}
                                              />
                                            </a>
                                            <a
                                              href="#"
                                              className="btnTeamUserInfoActionSettings"
                                              data-toggle="tooltip"
                                              data-placement="bottom"
                                              title="Settings & Permissions"
                                            >
                                              <FontAwesomeIcon
                                                icon={Icons.faGear}
                                              />
                                            </a>
                                            <a
                                              href="#"
                                              className="btnTeamUserInfoActionReportingRole"
                                              data-toggle="tooltip"
                                              data-placement="bottom"
                                              title="Add Staff Position / Reporting Role Below"
                                            >
                                              <FontAwesomeIcon
                                                icon={Icons.faLevelUp}
                                                className="fa-rotate-90"
                                              />
                                            </a>
                                            <a
                                              href="#"
                                              className="btnTeamUserInfoActionAdd"
                                              data-toggle="tooltip"
                                              data-placement="bottom"
                                              title="Invite / Assign Role"
                                            >
                                              <FontAwesomeIcon
                                                icon={Icons.faUserPlus}
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </span>

                                    <ul>
                                      <li>
                                        <span>
                                          Programming
                                          <div className="teamUserInfoContainer">
                                            <div className="teamUserInfo">
                                              <div className="teamUserInfoAction">
                                                <a
                                                  href="#"
                                                  className="btnTeamUserInfoActionTrash"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Remove Role / Position"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={Icons.faTrash}
                                                  />
                                                </a>
                                                <a
                                                  href="#"
                                                  className="btnTeamUserInfoActionSettings"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Settings & Permissions"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={Icons.faGear}
                                                  />
                                                </a>
                                                <a
                                                  href="#"
                                                  className="btnTeamUserInfoActionReportingRole"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Add Staff Position / Reporting Role Below"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={Icons.faLevelUp}
                                                    className="fa-rotate-90"
                                                  />
                                                </a>
                                                <a
                                                  href="#"
                                                  className="btnTeamUserInfoActionAdd"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Invite / Assign Role"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={Icons.faUserPlus}
                                                  />
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </span>

                                        <ul>
                                          <li>
                                            Programmer 1
                                            <div className="teamUserInfoContainer">
                                              <div className="teamUserInfo">
                                                <div className="teamUserInfoAction">
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionTrash"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Remove Role / Position"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faTrash}
                                                    />
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionSettings"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Settings & Permissions"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faGear}
                                                    />
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionReportingRole"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Add Staff Position / Reporting Role Below"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faLevelUp}
                                                      className="fa-rotate-90"
                                                    />
                                                  </a>
                                                </div>

                                                <img src="images/avatar.gif" />
                                                <div className="teamUsername">
                                                  <a href="#">
                                                    Hiren Wama software
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionRemove"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Remove from Role"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faClose}
                                                    />
                                                  </a>
                                                </div>
                                                <div className="teamUserInfoTags">
                                                  <ul>
                                                    <li>
                                                      <a href="#">#Design</a>
                                                    </li>
                                                    <li>
                                                      <a href="#">#Frontend</a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            Programmer 2
                                            <div className="teamUserInfoContainer">
                                              <div className="teamUserInfo">
                                                <div className="teamUserInfoAction">
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionTrash"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Remove Role / Position"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faTrash}
                                                    />
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionSettings"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Settings & Permissions"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faGear}
                                                    />
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionReportingRole"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Add Staff Position / Reporting Role Below"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faLevelUp}
                                                      className="fa-rotate-90"
                                                    />
                                                  </a>
                                                </div>

                                                <img src="images/avatar.gif" />
                                                <div className="teamUsername">
                                                  <a href="#">Mayur Nadiya</a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionRemove"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Remove from Role"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faClose}
                                                    />
                                                  </a>
                                                </div>
                                                <div className="teamUserInfoTags">
                                                  <ul>
                                                    <li>
                                                      <a href="#">#Design</a>
                                                    </li>
                                                    <li>
                                                      <a href="#">#Frontend</a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <span>
                                          UI/UX
                                          <div className="teamUserInfoContainer">
                                            <div className="teamUserInfo">
                                              <div className="teamUserInfoAction">
                                                <a
                                                  href="#"
                                                  className="btnTeamUserInfoActionTrash"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Remove Role / Position"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={Icons.faTrash}
                                                  />
                                                </a>
                                                <a
                                                  href="#"
                                                  className="btnTeamUserInfoActionSettings"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Settings & Permissions"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={Icons.faGear}
                                                  />
                                                </a>
                                                <a
                                                  href="#"
                                                  className="btnTeamUserInfoActionReportingRole"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Add Staff Position / Reporting Role Below"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={Icons.faLevelUp}
                                                    className="fa-rotate-90"
                                                  />
                                                </a>
                                              </div>
                                              <img src="images/avatar.gif" />
                                              <div className="teamUsername">
                                                <a href="#">Tejas Hapani</a>
                                                <a
                                                  href="#"
                                                  className="btnTeamUserInfoActionRemove"
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Remove from Role"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={Icons.faClose}
                                                  />
                                                </a>
                                              </div>
                                              <div className="teamUserInfoTags">
                                                <ul>
                                                  <li>
                                                    <a href="#">#Design</a>
                                                  </li>
                                                  <li>
                                                    <a href="#">#Frontend</a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                        <ul>
                                          <li>
                                            Demo user 1
                                            <div className="teamUserInfoContainer">
                                              <div className="teamUserInfo">
                                                <div className="teamUserInfoAction">
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionTrash"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Remove Role / Position"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faTrash}
                                                    />
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionSettings"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Settings & Permissions"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faGear}
                                                    />
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionReportingRole"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Add Staff Position / Reporting Role Below"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faLevelUp}
                                                      className="fa-rotate-90"
                                                    />
                                                  </a>
                                                </div>
                                                <img src="images/avatar.gif" />
                                                <div className="teamUsername">
                                                  <a href="#">Demo user 1</a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionRemove"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Remove from Role"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faClose}
                                                    />
                                                  </a>
                                                </div>
                                                <div className="teamUserInfoTags">
                                                  <ul>
                                                    <li>
                                                      <a href="#">#Design</a>
                                                    </li>
                                                    <li>
                                                      <a href="#">#Frontend</a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            Demo user 2
                                            <div className="teamUserInfoContainer">
                                              <div className="teamUserInfo">
                                                <div className="teamUserInfoAction">
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionTrash"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Remove Role / Position"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faTrash}
                                                    />
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionSettings"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Settings & Permissions"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faGear}
                                                    />
                                                  </a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionReportingRole"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Add Staff Position / Reporting Role Below"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faLevelUp}
                                                      className="fa-rotate-90"
                                                    />
                                                  </a>
                                                </div>
                                                <img src="images/avatar.gif" />
                                                <div className="teamUsername">
                                                  <a href="#">Demo user 2</a>
                                                  <a
                                                    href="#"
                                                    className="btnTeamUserInfoActionRemove"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Remove from Role"
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={Icons.faClose}
                                                    />
                                                  </a>
                                                </div>
                                                <div className="teamUserInfoTags">
                                                  <ul>
                                                    <li>
                                                      <a href="#">#Design</a>
                                                    </li>
                                                    <li>
                                                      <a href="#">#Frontend</a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    Sales & Marketing
                                    <div className="teamUserInfoContainer">
                                      <div className="teamUserInfo">
                                        <div className="teamUserInfoAction">
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionTrash"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Remove Role / Position"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faTrash}
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionSettings"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Settings & Permissions"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faGear}
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionReportingRole"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Add Staff Position / Reporting Role Below"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faLevelUp}
                                              className="fa-rotate-90"
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionAdd"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Invite / Assign Role"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faUserPlus}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    Finance
                                    <div className="teamUserInfoContainer">
                                      <div className="teamUserInfo">
                                        <div className="teamUserInfoAction">
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionTrash"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Remove Role / Position"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faTrash}
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionSettings"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Settings & Permissions"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faGear}
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionReportingRole"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Add Staff Position / Reporting Role Below"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faLevelUp}
                                              className="fa-rotate-90"
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="btnTeamUserInfoActionAdd"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Invite / Assign Role"
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faUserPlus}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamAdmin;
