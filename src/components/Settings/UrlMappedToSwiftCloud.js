import React, { useState } from "react";

const UrlMappedToSwiftCloud = ({Dropdown, DropdownButton, Icons, FontAwesomeIcon }) => {
  const [dropdownIcon, setDropdownIcon] = useState([
    <FontAwesomeIcon icon={Icons.faGlobe} style={{ color: "#125fad" }} />,
  ]);

  const clickHandleDropdownItem = (icon) => {
    if (icon === "eyeSlash") {
      setDropdownIcon([
        <FontAwesomeIcon icon={Icons.faEyeSlash} style={{ color: "#ccc" }} />,
      ]);
    } else if (icon === "globe") {
      setDropdownIcon([
        <FontAwesomeIcon icon={Icons.faGlobe} style={{ color: "#125fad" }} />,
      ]);
    } else if (icon === "users") {
      setDropdownIcon([
        <FontAwesomeIcon icon={Icons.faUsers} style={{ color: "#292b2c" }} />,
      ]);
    }
  };
  return (
    <div className="row adbook-user-other-info align-items-center py-3 border-bottom">
      <div className="col-md-4 text-md-end text-start">
        <label>
          <FontAwesomeIcon icon={Icons.faChain} /> URL Mapped to SwiftCloud
        </label>
      </div>

      <div className="col-md-2 text-center privacy-col dropdown">
        <DropdownButton id="dropdown-item-button" title={dropdownIcon}>
          <Dropdown.Item
            as="button"
            onClick={() => clickHandleDropdownItem("eyeSlash")}
          >
            <FontAwesomeIcon
              icon={Icons.faEyeSlash}
              style={{ color: "#ccc" }}
            />{" "}
            Hidden / Secret
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => clickHandleDropdownItem("users")}
          >
            <FontAwesomeIcon
              icon={Icons.faUsers}
              style={{ color: "#292b2c" }}
            />{" "}
            Connections only
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => clickHandleDropdownItem("globe")}
          >
            <FontAwesomeIcon
              icon={Icons.faGlobe}
              style={{ color: "#125fad" }}
            />{" "}
            Public
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="col-md-4 inputbox">
        <input
          className="form-control"
          type="url"
          placeholder="https://"
          required="required"
        />

        <div className="row align-items-center pt-1">
          <div className="col-sm-3">Root:</div>
          <div className="col-sm-9">
            <select className="form-select MappedUrlOptions">
              <option defaultValue="">== Choose Option ==</option>
              <option defaultValue="listOfDocs">List of Docs</option>
              <option defaultValue="specificDoc">Specific Doc</option>
              <option defaultValue="Webpage">Webpage</option>
              <option defaultValue="SwiftCloudProfile">
                SwiftCloud Profile
              </option>
              <option defaultValue="store">Store</option>
              <option defaultValue="page_form">Page / Form</option>
              <option defaultValue="reviews">Reviews</option>
              <option defaultValue="careersJobs">Careers / Jobs</option>
              <option defaultValue="helpSupport">Help / Support</option>
              <option defaultValue="scheduling">Scheduling</option>
            </select>
          </div>
        </div>
        <div className="row align-items-center pt-1 MappedUrlSpecificDocRow d-none">
          <div className="col-sm-3">Page:</div>
          <div className="col-sm-9">
            <select className="form-select">
              <option defaultValue="">== List of Docs ==</option>
            </select>
          </div>
        </div>
        <div className="row align-items-center pt-1 MappedUrlSpecificPageRow d-none">
          <div className="col-sm-3">Page:</div>
          <div className="col-sm-9">
            <select className="form-select">
              <option defaultValue="">== List of Pages ==</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlMappedToSwiftCloud;
