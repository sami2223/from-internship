import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ReviewsRefferels = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

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
              <FontAwesomeIcon icon={Icons.faStar} /> Reviews, Referrals,
              Reputation
              <span
                data-toggle="tooltip"
                title="Reviews &amp; Reputation Monitoring"
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
                        id="addNewReviewContainer"
                      >
                        <div className="row">
                          <div className="col-lg-12 colHeading">
                            <strong>
                              <FontAwesomeIcon icon={Icons.faPlus} /> Add Review
                              Location
                            </strong>
                          </div>
                          <div className="col-lg-12 dh-block-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="row mb-3 align-items-center">
                                      <div className="col-sm-4">
                                        <a
                                          href="https://swiftcloud.ai/support/reviews"
                                          target="_blank"
                                        >
                                          Review Location URL
                                        </a>
                                        <span
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="i.e. Google Reviews, Yelp, Facebook, etc."
                                        >
                                          <FontAwesomeIcon
                                            icon={Icons.faQuestionCircle}
                                          />
                                        </span>
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="url"
                                          name="review_location"
                                          id="review_location"
                                          className="form-control"
                                          placeholder="https://"
                                          defaultValue="https://"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-12 text-end">
                                        <CancelButton />
                                        <button
                                          type="button"
                                          name="btnSave"
                                          id="btnSaveReview"
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
                  <div className="row">
                    {openSettings && (
                      <div
                        className="col-lg-6 col-md-8 mx-auto py-4"
                        id="addNewReviewSettingsContainer"
                      >
                        <div className="row">
                          <div className="col-lg-12 colHeading">
                            <strong>
                              <FontAwesomeIcon icon={Icons.faPlus} /> Reviews &
                              Refer-a-Friend Settings
                            </strong>
                          </div>
                          <div className="col-lg-12 dh-block-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="row mb-3 align-items-center">
                                      <div className="col-sm-4">
                                        Form to Review Your Business
                                      </div>
                                      <div className="col-sm-8">
                                        <select
                                          name="refer_a_friend_form"
                                          id="refer_a_friend_form"
                                          className="form-select"
                                        >
                                          <option defaultValue="">
                                            == Form List ==
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3 align-items-center">
                                      <div className="col-sm-4">
                                        Refer a Friend Form
                                      </div>
                                      <div className="col-sm-8">
                                        <select
                                          name="review_page"
                                          id="review_page"
                                          className="form-select"
                                        >
                                          <option defaultValue="">
                                            == Web page List ==
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-12 text-end">
                                        <button
                                          type="button"
                                          name="btnCancel"
                                          id="btnCancelAddNewCustomField"
                                          className="btn btn-default"
                                          onClick={() => setOpenSettings(false)}
                                          style={{
                                            cursor: "pointer",
                                            marginRight: "3px",
                                          }}
                                        >
                                          <FontAwesomeIcon
                                            icon={Icons.faClose}
                                          />{" "}
                                          Cancel
                                        </button>
                                        <button
                                          type="button"
                                          name="btnSave"
                                          id="btnSaveReviewSettings"
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
                        <FontAwesomeIcon icon={Icons.faStar} /> Websites with
                        reviews of your business
                      </h4>
                    </div>
                    <div className="col-md-6 text-end">
                      <button
                        onClick={() => setOpenSettings(true)}
                        className="btn btn-default btnAddNewReviewSettings"
                        style={{
                          marginRight: "3px",
                        }}
                      >
                        <FontAwesomeIcon icon={Icons.faGear} />
                      </button>
                      <AddNewButton />
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="reviewsOfBusiness"
                      className="table table-striped dataTable no-footer"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th width="80%">Review Location</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="https://www.tripadvisor.in/"
                              target="_blank"
                            >
                              https://www.tripadvisor.in
                            </a>
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
                          <td>
                            <a
                              href="http://themetropolehotel.co.in/"
                              target="_blank"
                            >
                              http://themetropolehotel.co.in
                            </a>
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

export default ReviewsRefferels;
