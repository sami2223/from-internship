import React, { useRef, useState } from "react";
import { Modal } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import './AdvanceTagSearchModal.css';

const AdvanceTagSearchModal = ({ contactsSortByTagModalRef }) => {
  const [addSearchInput, setAddSearchInput] = useState(false);
  const [addInput, setAddInput] = useState(false);
//   const [addInputList, setAddInputList] = useState([]);
  const sortByTagDropResultModalRef = useRef();

  const showModal = (ref) => {
    const modalEle = ref.current;
    const bsModal = new Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  const hideModal = (ref) => {
    const modalEle = ref.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
  };

  return (
    <>
      {/* <!-- Advanced Tag Search modal -->  */}
      <div
        className="modal fade"
        ref={contactsSortByTagModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="ContactsSortByTagModalTitle"
        aria-hidden="true"
        id="ContactsSortByTagModal"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ContactsSortByTagModalTitle">
                <FontAwesomeIcon icon={Icons.faSort} /> Advanced Tag Search
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 sortbytag_row">
                  <div className="input-group mb-3">
                    <select
                      name="sortbytag_with_or_without"
                      id="sortbytag_with_or_without"
                      className="form-select"
                    >
                      <option value="Tagged with">Tagged with</option>
                      <option value="Not Tagged with">Not Tagged with</option>
                    </select>
                    <input
                      type="text"
                      name="sortbytag_input"
                      id="sortbytag_input"
                      className="form-control"
                      placeholder="Tag"
                    />
                    <select
                      name="sortbytag_score_opt"
                      id="sortbytag_score_opt"
                      className="form-select"
                    >
                      <option value="Any">Any TagScore</option>
                      <option value="Above">TagScore Above</option>
                      <option value="Below">TagScore Below</option>
                    </select>
                    <input
                      type="number"
                      name="sortbytag_score_input"
                      id="sortbytag_score_input"
                      className="form-control d-none"
                      placeholder="Value"
                      value="50"
                    />
                    <select name="sortbytag_asc_desc" className="form-select">
                      <option value="Ascending">Ascending</option>
                      <option value="Descending">Descending</option>
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                    </select>
                  </div>
                </div>
                <div className={`hidden_sortbytag_filter_condition_row ${
                    addInput ? "" : "display-none"
                  }`}>
                <div className="col-lg-12 sortbytag_filter_condition_row">
                  <div className="input-group mb-3">
                    <select
                      name="sortbytagSearchCondition"
                      className="form-select"
                    >
                      <option value="OR">OR Tag...</option>
                      <option value="AND">AND Tag...</option>
                      <option value="NOT">NOT Tag...</option>
                    </select>
                    <input
                      type="text"
                      className="form-control sortbytagSearchTaginput"
                    />
                  </div>
                  <a
                    href
                    onClick={(e) => {e.preventDefault(); setAddInput(false)}}
                    className="btnRemoveSortbyTagFilter"
                    data-toggle="tooltip"
                    title="Remove filter"
                  >
                    <FontAwesomeIcon icon={Icons.faClose} />
                  </a>
                </div>
              </div>
                <div
                  className={`col-lg-12 mb-3 sortbytag_search_within_row ${
                    addSearchInput ? "" : "display-none"
                  }`}
                >
                  <input
                    type="text"
                    name="sortbytag_search_within"
                    id="sortbytag_search_within"
                    placeholder="Search Within Results"
                    className="form-control"
                  />
                  <a
                    href
                    onClick={(e) => {
                        e.preventDefault();
                      setAddSearchInput(false);
                    }}
                    className="btnRemoveSearchWithinTag"
                    data-toggle="tooltip"
                    title="Remove search"
                  >
                    <FontAwesomeIcon icon={Icons.faClose} />
                  </a>
                </div>
                <div className="col-lg-12 addsortbytag_search_within_row">
                  <button
                    type="button"
                    className="btnAddNewGreenDashed btnAddSortbyTagFilerCondition"
                    data-toggle="tooltip"
                    title="Add filter condition"
                    onClick={(e)=>{e.preventDefault(); setAddInput(true)}}
                  >
                    <FontAwesomeIcon icon={Icons.faPlus} />
                  </button>
                  <button
                    type="button"
                    className="btnAddNewGreenDashed btnAddSortbyTagSearchCondition"
                    data-toggle="tooltip"
                    title="Search"
                    onClick={(e)=>{e.preventDefault(); setAddSearchInput(true)}}
                  >
                    <FontAwesomeIcon icon={Icons.faSearch} />
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              
              <button
                type="button"
                onClick={() => {
                  showModal(sortByTagDropResultModalRef);
                  hideModal(contactsSortByTagModalRef);
                }}
                className="btn btn-danger btnDropResult"
              >
                <FontAwesomeIcon icon={Icons.faTrashAlt} /> Drop Results
              </button>
              <button type="button" className="btn btn-secondary">
                <FontAwesomeIcon icon={Icons.faSave} /> Save Filtered View{" "}
                <FontAwesomeIcon icon={Icons.faBullseye} />
              </button>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={Icons.faSearch} /> Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Advanced Tag Search - Drop result modal -->  */}
      <div
        className="modal fade"
        ref={sortByTagDropResultModalRef}
        tabindex="-1"
        role="dialog"
        aria-labelledby="sortByTagDropResultModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sortByTagDropResultModalTitle">
                <FontAwesomeIcon icon={Icons.faTrashAlt} /> Drop Results
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="sortbytag_drop_result_container mx-auto w-100 text-center">
                <div className="alert alert-warning" role="alert">
                  <FontAwesomeIcon icon={Icons.faTriangleExclamation} /> Ok to
                  drop 1234 matches? This cannot be undone.
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                <FontAwesomeIcon icon={Icons.faClose} /> Abort Unchanged
              </button>
              <button type="button" className="btn btn-danger btnDropResult">
                <FontAwesomeIcon icon={Icons.faCheck} /> Yes, Proceed & Drop{" "}
                <FontAwesomeIcon icon={Icons.faTrashAlt} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceTagSearchModal;
