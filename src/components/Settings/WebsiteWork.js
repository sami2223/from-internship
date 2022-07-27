import React, { useState } from "react";

const WebsiteWork = ({ Dropdown, DropdownButton, Icons, FontAwesomeIcon }) => {
  const [dropdownIcon, setDropdownIcon] = useState([
    <FontAwesomeIcon icon={Icons.faEyeSlash} style={{ color: "#ccc" }} />,
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
          <FontAwesomeIcon icon={Icons.faChain} /> Website (Work)
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
          type="text"
          className="form-control"
          placeholder="Email"
          defaultValue="https://swiftcrm.com/"
        />
      </div>
    </div>
  );
};

export default WebsiteWork;
