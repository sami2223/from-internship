import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import ToggleSwitch from './ToggleSwitch';
import logo from '../../assets/images/SwiftCloud-logo.png';
import favicon from '../../assets/images/favicon.png';

const BrandingCosmetics = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [checked, setChecked] = useState(true);

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
              <FontAwesomeIcon icon={Icons.faPaintbrush} /> Branding & Cosmetics
            </h5>
          </div>
          <div className="col-2 text-end">
            <OpenCloseButton/>
          </div>
        </div>
        {openModal && (<div className="row expand-content">
          <div className="col-lg-10 col-sm-12 col-md-12 col-xs-12 mx-auto">
            <div className="mb-3 row">
              <div className="col-lg-8 col-sm-12 col-md-12 col-xs-12 mx-auto">
                <div className="row mb-3 align-items-center">
                  <div className="col-md-4 setting_label">
                    <label htmlFor="branding_flag" className="col-form-label">
                      Company Branding is
                    </label>
                  </div>
                  <div className="col-md-8 adbook-user-info">
                  <ToggleSwitch id="Branding" label="Branding" checked={checked} onChange={setChecked} />
                  </div>
                </div>
                {checked && (<form className="form-horizontal" id="frmBrandingCompany">
                  <div className="row mb-3 align-items-center">
                    <div className="col-md-4 setting_label">
                      <label htmlFor="company_logo" className="col-form-label">
                        Company Logo over Light BG
                        <span
                          data-toggle="tooltip"
                          title="Recommended: 250px wide by 80px high - jpg, png, or gif"
                        >
                          <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                        </span>
                      </label>
                    </div>
                    <div className="col-md-8">
                      <div className="company_logo_container position-relative">
                        <img
                          src={logo}
                          className="companyLogo"
                        />
                        <button
                          type="button"
                          className="btn btnEditCompanyLogo"
                        >
                          <FontAwesomeIcon icon={Icons.faPencil} />
                        </button>
                        <button
                          type="button"
                          className="btn btnDeleteCompanyLogo"
                        >
                          <FontAwesomeIcon icon={Icons.faClose} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <div className="col-md-4 setting_label">
                      <label
                        htmlFor="company_logo_dark"
                        className="col-form-label"
                      >
                        Company Logo over Dark BG
                        <span
                          data-toggle="tooltip"
                          title="Recommended: 250px wide by 80px high - jpg, png, or gif"
                        >
                          <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                        </span>
                      </label>
                    </div>
                    <div className="col-md-8">
                      <div className="company_logo_dark_container">
                        <img
                          src={logo}
                          className="company_logo_dark"
                        />
                        <button
                          type="button"
                          className="btn btnEditCompanyLogo"
                        >
                          <FontAwesomeIcon icon={Icons.faPencil} />
                        </button>
                        <button
                          type="button"
                          className="btn btnDeleteCompanyLogo"
                        >
                          <FontAwesomeIcon icon={Icons.faClose} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <div className="col-md-4 setting_label">
                      <label htmlFor="favicon" className="col-form-label">
                        Favicon
                        <span
                          data-toggle="tooltip"
                          title="Recommended: 32px wide by 32px high - jpg, png, ico or svg"
                        >
                          <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                        </span>
                      </label>
                    </div>
                    <div className="col-md-8">
                      <div className="favicon_container">
                        <img src={favicon} className="favicon" />
                        <button
                          type="button"
                          className="btn btnEditCompanyLogo"
                        >
                          <FontAwesomeIcon icon={Icons.faPencil} />
                        </button>
                        <button
                          type="button"
                          className="btn btnDeleteCompanyLogo"
                        >
                          <FontAwesomeIcon icon={Icons.faClose} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <div className="col-md-4 setting_label">
                      <label
                        htmlFor="background_color"
                        className="col-form-label"
                      >
                        Custom Background
                      </label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="company_custom_background"
                        id="company_custom_background"
                        className="form-select"
                      >
                        <option defaultValue="Off">Off</option>
                        <option defaultValue="Solid Color">Solid Color</option>
                        <option defaultValue="Image &amp; Color">
                          Image &amp; Color
                        </option>
                        <option defaultValue="Tiled Image">Tiled Image</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center company_background_color_container">
                    <div className="col-md-4 setting_label">
                      <label
                        htmlFor="background_color"
                        className="col-form-label"
                      >
                        Light Background Color
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="company_background_color"
                        name="company_background_color"
                        defaultValue="#563d7c"
                        title="Choose your color"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center company_background_color_dark_container">
                    <div className="col-md-4 setting_label">
                      <label
                        htmlFor="background_color_dark"
                        className="col-form-label"
                      >
                        Dark Background Color
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="company_background_color_dark"
                        name="company_background_color_dark"
                        defaultValue="#563d7c"
                        title="Choose your color"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center company_accent_color_light_container">
                    <div className="col-md-4 setting_label">
                      <label
                        htmlFor="accent_color_light"
                        className="col-form-label"
                      >
                        Accent Color (Lighter Version)
                      </label>
                      <span
                        data-toggle="tooltip"
                        title="Black font should look good over this."
                      >
                        <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                      </span>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="accent_color_light"
                        name="accent_color_light"
                        defaultValue="#563d7c"
                        title="Choose your color"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center company_accent_color_dark_container">
                    <div className="col-md-4 setting_label">
                      <label
                        htmlFor="accent_color_dark"
                        className="col-form-label"
                      >
                        Accent Color (Darker Version)
                      </label>
                      <span
                        data-toggle="tooltip"
                        title="White font should look good over this."
                      >
                        <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                      </span>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="accent_color_dark"
                        name="accent_color_dark"
                        defaultValue="#563d7c"
                        title="Choose your color"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center align-items-center company_background_image_container d-none">
                    <div className="col-md-4 setting_label">
                      <label
                        htmlFor="background_image"
                        className="col-form-label"
                      >
                        Background Image (Optional)
                      </label>
                    </div>
                    <div className="col-md-8">
                      <div className="company_logo_container">
                        <img src="images/no-image.jpg" className="favicon" />
                        <button
                          type="button"
                          className="btn btnEditCompanyLogo"
                        >
                          <FontAwesomeIcon icon={Icons.faPencil} />
                        </button>
                        <button
                          type="button"
                          className="btn btnDeleteCompanyLogo"
                        >
                          <FontAwesomeIcon icon={Icons.faClose} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center company_background_image_container d-none">
                    <div className="col-md-4 setting_label">
                      <label
                        htmlFor="background_image_repeat"
                        className="col-form-label"
                      >
                        Background Image Repeat
                      </label>
                    </div>
                    <div className="col-md-8">
                      <select
                        id="background_image_repeat"
                        name="background_image_repeat"
                        className="form-select"
                      >
                        <option defaultValue="repeat-x">Repeat X</option>
                        <option defaultValue="repeat-y">Repeat Y</option>
                        <option defaultValue="repeat">Tile X&amp;Y</option>
                        <option defaultValue="no-repeat">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <div className="col-md-4 setting_label">
                      <label htmlFor="company_font" className="col-form-label">
                        Font
                      </label>
                    </div>
                    <div className="col-md-8">
                      <select
                        className="form-select"
                        id="company_font"
                        name="company_font"
                      >
                        <option defaultValue="" disabled="disabled">
                          == Select Font Style ==
                        </option>
                        <option defaultValue="Sans-Serif">Sans-Serif</option>
                        <option defaultValue="Serif">Serif</option>
                      </select>
                    </div>
                  </div>
                </form>)}
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default BrandingCosmetics;
