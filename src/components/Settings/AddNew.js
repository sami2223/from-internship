import React, { useState } from "react";

const AddNew = ({Dropdown, DropdownButton, Icons, FontAwesomeIcon }) => {
  const [show, setShow] = useState(false);
  const [dropdownIcon, setDropdownIcon] = useState([
    <FontAwesomeIcon icon={Icons.faEyeSlash} style={{ color: "#ccc" }} />
  ]);

  const clickHandleDropdownItem = (icon) => {
    if (icon === "eyeSlash") {
      setDropdownIcon([
        <FontAwesomeIcon icon={Icons.faEyeSlash} style={{ color: "#ccc" }} />
      ]);
    } else if (icon === "globe") {
      setDropdownIcon([
        <FontAwesomeIcon icon={Icons.faGlobe} style={{ color: "#125fad" }} />
      ]);
    } else if (icon === "users") {
      setDropdownIcon([
        <FontAwesomeIcon icon={Icons.faUsers} style={{ color: "#292b2c" }} />
      ]);
    }
  };

  return (
    <>
      {!show && (
        <div className="row align-items-center py-3 border-bottom">
          <div className="col-md-4"></div>
          <div className="col-md-2 text-center">
            <a
              href
              onClick={(e) => {
                e.preventDefault();
                setShow(true);
              }}
              className="btnAddNewUserDetail"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={Icons.faPlus} />
            </a>
          </div>
          <div className="col-md-6"></div>
        </div>
      )}

      {show && (
        <div className="row adbook-user-other-info align-items-center py-3 border-bottom addNewDetailsContainer">
          <div className="col-md-4 text-md-end text-start">
          
            <select
              className="form-select"
              style={{ display: "inline", width: "55%" }}
            >
              <option defaultValue="" data-icon="" disabled="disabled">
                PHONES
              </option>
              <option defaultValue="MobileNo">Mobile</option>
              <option defaultValue="MainNo" data-icon="fa-phone">
                Main
              </option>
              <option defaultValue="PersonalNo" data-icon="fa-phone">
                Personal
              </option>
              <option defaultValue="BusinessNo" data-icon="fa-phone">
                Business
              </option>
              <option defaultValue="iPhoneNo" data-icon="fa-mobile-phone">
                iPhone
              </option>
              <option defaultValue="FaxNo" data-icon="fa-fax">
                Fax
              </option>

              <option
                defaultValue=""
                data-icon="fa-envelope"
                disabled="disabled"
              >
                EMAILS
              </option>
              <option defaultValue="Primarymail" data-icon="fa-envelope">
                Primary
              </option>
              <option defaultValue="WorkMail" data-icon="fa-envelope">
                Work
              </option>
              <option defaultValue="PersonalMail" data-icon="fa-envelope">
                Personal
              </option>
              <option defaultValue="PayPalMail" data-icon="fa-envelope">
                PayPal
              </option>

              <option defaultValue="" data-icon="fa-home" disabled="disabled">
                ADDRESSES
              </option>
              <option defaultValue="HomeAddress" data-icon="fa-home">
                Home
              </option>
              <option defaultValue="MailingAddress" data-icon="fa-home">
                Mailing
              </option>
              <option defaultValue="BillingAddress" data-icon="fa-home">
                Billing
              </option>
              <option defaultValue="WorkAddress" data-icon="fa-home">
                Work
              </option>
              <option defaultValue="OtherAddress" data-icon="fa-home">
                Other
              </option>

              <option defaultValue="" data-icon="" disabled="disabled">
                MESSENGERS
              </option>
              <option defaultValue="Skype" data-icon="fa-skype">
                Skype
              </option>
              <option defaultValue="Google Chat" data-icon="fa-google-plus-g">
                Google Chat
              </option>
              <option defaultValue="Telegram" data-icon="fa-telegram">
                Telegram
              </option>
              <option defaultValue="Whatsapp" data-icon="fa-whatsapp">
                Whatsapp
              </option>

              <option
                defaultValue=""
                data-icon="fa-calendar"
                disabled="disabled"
              >
                CALENDAR
              </option>
              <option defaultValue="Birthday" data-icon="fa-birthday-cake">
                Birthday
              </option>
              <option defaultValue="Anniversary" data-icon="fa-bell">
                Anniversary
              </option>
              <option defaultValue="Other Date" data-icon="fa-bell">
                Other Date
              </option>

              <option defaultValue="" data-icon="" disabled="disabled">
                EMPLOYMENT
              </option>
              <option defaultValue="CompanyName" data-icon="fa-building">
                Company Name
              </option>
              <option defaultValue="ContactatCompany" data-icon="fa-user">
                Contact at Company
              </option>
              <option defaultValue="Job Title" data-icon="fa-graduation-cap">
                Job Title
              </option>
              <option
                defaultValue="Link to CV / Resume"
                data-icon="fa-file-pdf-o"
              >
                Link to CV / Resume
              </option>
              <option defaultValue="Former Employer URL" data-icon="fa-anchor">
                Former Employer URL
              </option>
              <option
                defaultValue="Portfolio / Work Example"
                data-icon="fa-briefcase"
              >
                Portfolio / Work Example
              </option>
              <option defaultValue="Employer" data-icon="fa-user">
                Employer
              </option>
              <option defaultValue="Employer" data-icon="fa-user">
                Employer
              </option>

              <option
                defaultValue=""
                data-icon="fa-up-right-from-square"
                disabled="disabled"
              >
                LINKS
              </option>
              <option defaultValue="Website Personal" data-icon="fa-anchor">
                Website Personal
              </option>
              <option defaultValue="Website (Work)" data-icon="fa-anchor">
                Website (Work)
              </option>
              <option
                defaultValue="URL Mapped to SwiftCloud"
                data-icon="fa-anchor"
              >
                URL Mapped to SwiftCloud
              </option>
              <option defaultValue="RSS (Follow)" data-icon="fa-rss">
                RSS (for Follower's Feed)
              </option>
              <option defaultValue="Facebook" data-icon="fa-facebook-f">
                Facebook
              </option>
              <option defaultValue="Google" data-icon="fa-google">
                Google
              </option>
              <option defaultValue="Twitter" data-icon="fa-twitter">
                Twitter
              </option>
              <option defaultValue="Linkedin" data-icon="fa-linkedin-in">
                Linkedin
              </option>
              <option defaultValue="GitHub" data-icon="fa-github">
                GitHub
              </option>
              <option defaultValue="YouTube" data-icon="fa-youtube">
                YouTube
              </option>

              <option
                defaultValue=""
                data-icon="fa-pencil-square-o"
                disabled="disabled"
              >
                CUSTOM FIELDS
              </option>
              <option defaultValue="customField" data-icon="fa-pencil-square-o">
                Custom Fields
              </option>
              <option
                defaultValue=""
                data-icon="fa-sitemap"
                disabled="disabled"
              >
                ACCOUNT MANAGEMENT
              </option>
              <option defaultValue="parentAccount" data-icon="fa-sitemap">
                Parent Account
              </option>
              <option defaultValue="childAccount" data-icon="fa-user">
                Child Account
              </option>
              <option defaultValue="spouseAccount" data-icon="fa-user">
                Spouse Account
              </option>
              <option defaultValue="OtherRelationship" data-icon="fa-user">
                Other Relationship
              </option>
            </select>
          </div>

          <div className="col-md-2 text-center privacy-col dropdown">
            <DropdownButton key="add-new" title={dropdownIcon}>
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
              name="customDetailName"
              id="customDetailName"
              className="form-control"
            />
          </div>
          <div className="col-md-2 inputbox">
            <button
              className="btn btn-round btn-primary"
              id="saveDetails"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Save"
              data-animation="false"
            >
              <FontAwesomeIcon icon={Icons.faSave} />
            </button>{" "}
            <button
              className="btn btn-round btn-trash"
              id="cancelDetails"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Cancel"
              data-animation="false"
              onClick={() => setShow(false)}
            >
              <FontAwesomeIcon icon={Icons.faClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNew;
