import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const RaveScore = () => {
  const [openRaveScoring, setOpenRaveScoring] = useState(false);
  const [addRaveScoring, setAddRaveScoring] = useState(false);
  const [raveScoreLow, setRaveScoreLow] = useState(1);
  const [raveScoreHigh, setRaveScoreHigh] = useState(40);

  return (
    <>
      <div className="row g-0 block-content border-bottom">
        <div className="col-lg-12">
          <div className="row editable align-items-center">
            <div className="col-10">
              <h5 className="block-title" onClick={() => {
                  setOpenRaveScoring(
                    (prevOpenRaveScoring) => !prevOpenRaveScoring
                  );
                }}>
                <FontAwesomeIcon icon={Icons.faTag} /> Lead Scoring & RAVE
                Automation
              </h5>
            </div>
            <div className="col-2 text-end">
              <span
                style={{ cursor:"pointer" }}
                className="round-edit-icon"
                onClick={() => {
                    setOpenRaveScoring(
                      (prevOpenRaveScoring) => !prevOpenRaveScoring
                    );
                  }}
              >
                {!openRaveScoring ? (
                  <FontAwesomeIcon icon={Icons.faPencil} />
                ) : (
                  <FontAwesomeIcon icon={Icons.faClose} />
                )}
              </span>
            </div>
          </div>
          {openRaveScoring && (
            <div className="row expand-content">
              <div className="col-lg-10 col-sm-12 col-md-12 col-xs-12 mx-auto">
                <div className="mb-3 row">
                  <div className="col-md-12">
                    <div className="row">
                      {addRaveScoring && (
                        <div
                          className="col-lg-6 col-md-8 mx-auto py-4"
                          id="AddNewRaveScoreContainer"
                        >
                          <div className="row">
                            <div className="col-lg-12 colHeading">
                              <strong>
                                <FontAwesomeIcon icon={Icons.faPlus} /> Add RAVE
                                Score Automation
                              </strong>
                            </div>
                            <div className="col-lg-12 dh-block-body">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="row mb-3 align-items-center">
                                        <div className="col-sm-12">
                                          If TagScore is between
                                          <span className="RaveScoreLeadScoreLowSpan">
                                            {` ${raveScoreLow}`}
                                          </span>{' '}
                                          and
                                          <span className="RaveScoreLeadScoreHigh">
                                            {` ${raveScoreHigh}`}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="row align-items-center mb-3">
                                        <div className="col-lg-5">
                                          <RangeSlider
                                            value={raveScoreLow}
                                            tooltipPlacement='top'
                                            onChange={(e) =>
                                              setRaveScoreLow(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div className="col-lg-2">and</div>
                                        <div className="col-lg-5">
                                        <RangeSlider
                                            value={raveScoreHigh}
                                            tooltipPlacement='top'
                                            onChange={(e) =>
                                              setRaveScoreHigh(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="row row-cols-lg-auto g-2 align-items-center mb-3">
                                        <div className="col-12">
                                          add to Sequence
                                        </div>
                                        <div className="col-12">
                                          <select
                                            name="RaveScoreLeadScoreSequence"
                                            id="RaveScoreLeadScoreSequence"
                                            className="form-select"
                                          >
                                            <option>
                                              == List of sequences ==
                                            </option>
                                          </select>
                                        </div>
                                        <div className="col-12">
                                          & remove if outside this range.
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-sm-12 text-end">
                                          <button
                                            type="button"
                                            name="btnCancel"
                                            id="btnCancelNewRaveScore"
                                            className="btn btn-default"
                                            onClick={() =>
                                              setAddRaveScoring(false)
                                            }
                                          >
                                            <FontAwesomeIcon
                                              icon={Icons.faClose}
                                            />
                                            Cancel
                                          </button>
                                          <button
                                            type="button"
                                            name="btnSave"
                                            id="btnSaveNewRaveScore"
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
                        <h4 className="mb-0">RAVE Score Automation</h4>
                      </div>
                      <div className="col-md-6 text-end">
                        <button
                          className="btn btn-primary btnAddNewRaveScore"
                          onClick={() => setAddRaveScoring(true)}
                        >
                          <FontAwesomeIcon icon={Icons.faPlus} /> Add New
                        </button>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table
                        id="rave_score_table"
                        className="table dataTable"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th width="40%">Trigger Range</th>
                            <th width="40%">Sequence</th>
                            <th width="20%"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1-40</td>
                            <td>Cold Audience Outcome Focused</td>
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
                            <td>1-40</td>
                            <td>Cold Audience Outcome Focused</td>
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
                            <td>1-40</td>
                            <td>Cold Audience Outcome Focused</td>
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

export default RaveScore;
