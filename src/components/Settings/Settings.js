import React, { useRef, useState } from "react";
import avatar from "../../assets/images/avatar.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import "./Settings.css";
import {
  faCalendarDays,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import RaveScore from "./RaveScore";
import TeamAdmin from "./TeamAdmin";
import Roles from "./Roles";
import CustomContactField from "./CustomContactField";
import EventTypes from "./EventTypes";
import TaskJobsSalePipeline from "./TaskJobsSalePipeline";
import CustomAssetTypes from "./CustomAssetTypes";
import ReviewsRefferels from "./ReviewsRefferels";
import CustomerSupportPortal from "./CustomerSupportPortal";
import SocialMedia from "./SocialMedia";
import BrandingCosmetics from "./BrandingCosmetics";
import ClientPortal from "./ClientPortal";
import ChangePassword from "./ChangePassword";
import APIAccess from "./APIAccess";
import ClosePrivatizeAccount from "./ClosePrivatizeAccount";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Settings = () => {
  const [show, setShow] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const drop = useRef();
  return (
    <>
      <div className="row g-0">
        <div className="col" id="addressbook">
          <div className="row">
            <div className="col text-center">
              <div className="adbook-profile-pic">
                <img className="main_profile_pic" src={avatar} />
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#global_image_tool_container_images"
                  className="adbook-profile-pic-edit-btn"
                >
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Update your avatar"
                    data-animation="false"
                  >
                    <FontAwesomeIcon icon={Icons.faPencil} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto pt-5 mb-3 inputbox">
              <input
                type="text"
                className="form-control form-control-lg text-center realName"
                placeholder="Your Real Name - Verifiable"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto mb-3 inputbox">
              <input
                type="text"
                className="form-control form-control-lg text-center slogan"
                placeholder="Slogan / Mantra / Overview (Max 140 Characters)"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tags"
                data-toggle="tagsinput"
              />
            </div>
          </div>
          <div className="row adbook-user-other-info align-items-center py-3 border-top border-bottom">
            <div className="col-md-4 text-md-end text-start">
              <label>Username</label>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 inputbox">
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
            </div>
          </div>
          <div className="row adbook-user-other-info align-items-center py-3 border-bottom">
            <div className="col-md-4 text-md-end text-start">
              <label>This account is for a...</label>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 inputbox">
              <select
                name="userAccountType"
                id="userAccountType"
                className="form-select"
              >
                <option defaultValue="">== Select ==</option>
                <option defaultValue="Personal">
                  Personal account (Students or Job Seekers)
                </option>
                <option defaultValue="Solopreneur">
                  Solopreneur Company Account
                </option>
                <option defaultValue="Individual">
                  Individual Contributor (Linked to Company)
                </option>
                <option defaultValue="Branch">
                  Branch / Division (Sub-Accounts + Data UpFlow)
                </option>
                <option defaultValue="Company">
                  Company (with Sub-Accounts)
                </option>
              </select>

              <div className="company_info_row mt-3">
                <a href="#" className="linkManageStaff">
                  Manage Staff
                </a>
              </div>
              <div className="personal_info_row connect_to_company_row mt-3">
                Optional: Connect to Company Account
                <a href="#" className="btnConnectToCompany">
                  <FontAwesomeIcon icon={Icons.faPlus} />
                </a>
              </div>
            </div>
          </div>
          <div className="row adbook-user-other-info align-items-center py-3 border-bottom company_info_row">
            <div className="col-md-4 text-md-end text-start">
              <label>Company / Organisation</label>
            </div>
            <div
              ref={drop}
              className="col-md-2 text-center privacy-col dropdown"
            >
              <button
                type="button"
                tabindex="-1"
                class="btn btn-outline-secondary"
                style={{ border: "none" }}
                // onClick={()=>{
                //   setOpenDropdown(openDropdown => !openDropdown)
                // }}
              >
                <FontAwesomeIcon
                  icon={Icons.faGlobe}
                  style={{ color: "#125fad", marginTop: "1px" }}
                />
              </button>
              {openDropdown && (
                <div>
                  <ul>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faEyeSlash} /> Hidden /
                      Secret
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faUsers} /> Connections only
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faGlobe} /> Public
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="col-md-4 inputbox">
              <input
                type="text"
                className="form-control"
                placeholder="Company name"
              />
            </div>
          </div>
          <div className="row adbook-user-other-info align-items-center py-3 border-bottom company_info_row">
            <div className="col-md-4 text-md-end text-start">
              <label>Industry</label>
            </div>
            <div
              ref={drop}
              className="col-md-2 text-center privacy-col dropdown"
            >
              <button
                type="button"
                tabindex="-1"
                class="btn btn-outline-secondary"
                style={{ border: "none" }}
                // onClick={()=>{
                //   setOpenDropdown(openDropdown => !openDropdown)
                // }}
              >
                <FontAwesomeIcon
                  icon={Icons.faGlobe}
                  style={{ color: "#125fad", marginTop: "1px" }}
                />
              </button>
              {openDropdown && (
                <div>
                  <ul>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faEyeSlash} /> Hidden /
                      Secret
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faUsers} /> Connections only
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faGlobe} /> Public
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="col-md-4 inputbox">
              <input
                type="text"
                className="form-control"
                placeholder="Industry name"
              />
            </div>
          </div>
          <div className="row adbook-user-other-info align-items-center py-3 border-bottom company_info_row">
            <div className="col-md-4 text-md-end text-start">
              <label>Service Area</label>
            </div>
            <div
              ref={drop}
              className="col-md-2 text-center privacy-col dropdown"
            >
              <button
                type="button"
                tabindex="-1"
                class="btn btn-outline-secondary"
                style={{ border: "none" }}
                // onClick={()=>{
                //   setOpenDropdown(openDropdown => !openDropdown)
                // }}
              >
                <FontAwesomeIcon
                  icon={Icons.faGlobe}
                  style={{ color: "#125fad", marginTop: "1px" }}
                />
              </button>
              {openDropdown && (
                <div>
                  <ul>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faEyeSlash} /> Hidden /
                      Secret
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faUsers} /> Connections only
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faGlobe} /> Public
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="col-md-4 inputbox">
              <select
                name="company_serve"
                id="company_serve"
                className="form-select"
              >
                <option defaultValue="">== Select ==</option>
                <option defaultValue="Local-Address">
                  Local (From Address)
                </option>
                <option defaultValue="Local-Service">
                  Local (Service Area)
                </option>
                <option defaultValue="State">State / Region</option>
                <option defaultValue="Country">Country</option>
                <option defaultValue="Global">Global / Anywhere</option>
              </select>
            </div>
          </div>
          <div className="row adbook-user-other-info align-items-center py-3 border-bottom">
            <div className="col-md-4 text-md-end text-start">
              <label>
                <FontAwesomeIcon icon={Icons.faEnvelope} /> Primary
              </label>
            </div>
            <div
              ref={drop}
              className="col-md-2 text-center privacy-col dropdown"
            >
              <button
                type="button"
                tabindex="-1"
                class="btn btn-outline-secondary"
                style={{ border: "none" }}
                // onClick={()=>{
                //   setOpenDropdown(openDropdown => !openDropdown)
                // }}
              >
                <FontAwesomeIcon
                  icon={Icons.faGlobe}
                  style={{ color: "#125fad", marginTop: "1px" }}
                />
              </button>
              {openDropdown && (
                <div>
                  <ul>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faEyeSlash} /> Hidden /
                      Secret
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faUsers} /> Connections only
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faGlobe} /> Public
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="col-md-4 inputbox">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                defaultValue="example@domain.com"
              />
            </div>
          </div>
          <div className="row adbook-user-other-info align-items-center py-3 border-bottom">
            <div className="col-md-4 text-md-end text-start">
              <label>
                <FontAwesomeIcon icon={Icons.faChain} /> Website (Work)
              </label>
            </div>
            <div
              ref={drop}
              className="col-md-2 text-center privacy-col dropdown"
            >
              <button
                type="button"
                tabindex="-1"
                class="btn btn-outline-secondary"
                style={{ border: "none" }}
                // onClick={()=>{
                //   setOpenDropdown(openDropdown => !openDropdown)
                // }}
              >
                <FontAwesomeIcon
                  icon={Icons.faEyeSlash}
                  style={{ color: "grey", marginTop: "1px" }}
                />
              </button>
              {openDropdown && (
                <div>
                  <ul>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faEyeSlash} /> Hidden /
                      Secret
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faUsers} /> Connections only
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faGlobe} /> Public
                    </li>
                  </ul>
                </div>
              )}
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
          <div className="row adbook-user-other-info align-items-center py-3 border-bottom">
            <div className="col-md-4 text-md-end text-start">
              <label>
                <FontAwesomeIcon icon={Icons.faChain} /> URL Mapped to
                SwiftCloud
              </label>
            </div>

            <div
              ref={drop}
              className="col-md-2 text-center privacy-col dropdown"
            >
              <button
                type="button"
                tabindex="-1"
                class="btn btn-outline-secondary"
                style={{ border: "none" }}
                // onClick={()=>{
                //   setOpenDropdown(openDropdown => !openDropdown)
                // }}
              >
                <FontAwesomeIcon
                  icon={Icons.faGlobe}
                  style={{ color: "#125fad", marginTop: "1px" }}
                />
              </button>
              {openDropdown && (
                <div>
                  <ul>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faEyeSlash} /> Hidden /
                      Secret
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faUsers} /> Connections only
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faGlobe} /> Public
                    </li>
                  </ul>
                </div>
              )}
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
          <div className="row adbook-user-other-info align-items-center py-3 border-bottom">
            <div className="col-md-4 text-md-end text-start">
              <label>
                <FontAwesomeIcon icon={Icons.faChain} /> URL Mapped to
                SwiftCloud
              </label>
            </div>
            <div
              ref={drop}
              className="col-md-2 text-center privacy-col dropdown"
            >
              <button
                type="button"
                tabindex="-1"
                class="btn btn-outline-secondary"
                style={{ border: "none" }}
                // onClick={()=>{
                //   setOpenDropdown(openDropdown => !openDropdown)
                // }}
              >
                <FontAwesomeIcon
                  icon={Icons.faGlobe}
                  style={{ color: "#125fad", marginTop: "1px" }}
                />
              </button>
              {openDropdown && (
                <div>
                  <ul>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faEyeSlash} /> Hidden /
                      Secret
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faUsers} /> Connections only
                    </li>
                    <li onClick={() => setOpenDropdown(false)}>
                      <FontAwesomeIcon icon={Icons.faGlobe} /> Public
                    </li>
                  </ul>
                </div>
              )}
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
                  style={{ display: "inline", width: "43%" }}
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

                  <option
                    defaultValue=""
                    data-icon="fa-home"
                    disabled="disabled"
                  >
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
                  <option
                    defaultValue="Google Chat"
                    data-icon="fa-google-plus-g"
                  >
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
                  <option
                    defaultValue="Job Title"
                    data-icon="fa-graduation-cap"
                  >
                    Job Title
                  </option>
                  <option
                    defaultValue="Link to CV / Resume"
                    data-icon="fa-file-pdf-o"
                  >
                    Link to CV / Resume
                  </option>
                  <option
                    defaultValue="Former Employer URL"
                    data-icon="fa-anchor"
                  >
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
                  <option
                    defaultValue="customField"
                    data-icon="fa-pencil-square-o"
                  >
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

              <div
                // ref={drop}
                className="col-md-2 text-center privacy-col dropdown"
              >
                <DropdownButton
                  id="dropdown-item-button"
                  // className="btn btn-outline-secondary"
                  title={<FontAwesomeIcon icon={Icons.faEyeSlash} />}
                  
                >
                  <Dropdown.Item as="button"><FontAwesomeIcon icon={Icons.faEyeSlash} /> Hidden /
                        Secret</Dropdown.Item>
                  <Dropdown.Item as="button"><FontAwesomeIcon icon={Icons.faUsers} /> Connections
                        only</Dropdown.Item>
                  <Dropdown.Item as="button"><FontAwesomeIcon icon={Icons.faGlobe} /> Public</Dropdown.Item>
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
        </div>
      </div>

      <div className="row g-0 pt-5">
        <div className="col-lg-12 generalSettings">
          <div className="accordion" id="SwiftfCloudSettings">
            <div className="accordion-item">
              <h2
                className="accordion-header accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#generalSettings"
                aria-expanded="false"
                aria-controls="generalSettings"
              >
                <FontAwesomeIcon icon={Icons.faBriefcase} className="me-2" />{" "}
                About Your Business
              </h2>
              <div
                id="generalSettings"
                className="accordion-collapse collapse"
                aria-labelledby="generalSettings"
                data-bs-parent="#SwiftfCloudSettings"
              >
                <div className="accordion-body">
                  {/* <!-- Team Admin --> */}
                  <TeamAdmin />

                  {/* <!-- Lead Scoring & RAVE Automation --> */}
                  <RaveScore />

                  {/* <!-- Roles --> */}
                  <Roles />

                  {/* <!-- Custom Contact Fields --> */}
                  <CustomContactField />

                  {/* <!-- Event Types --> */}
                  <EventTypes />

                  {/* <!-- Task / Job / Sales Opportunity Type Pipelines --> */}
                  <TaskJobsSalePipeline />

                  {/* <!-- Custom Asset Types --> */}
                  <CustomAssetTypes />

                  {/* <!-- Reviews, Referrals, Reputation --> */}
                  <ReviewsRefferels />

                  {/* <!-- Customer Support Self-Service Portal --> */}
                  <CustomerSupportPortal />

                  {/* <!-- Social Media --> */}
                  <SocialMedia />

                  {/* <!-- Branding & Cosmetics --> */}
                  <BrandingCosmetics />

                  {/* <!-- Client Portal --> */}
                  <ClientPortal />
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#accessingSwiftCloud"
              aria-expanded="false"
              aria-controls="accessingSwiftCloud"
            >
              <FontAwesomeIcon icon={Icons.faSignIn} className="me-2" />{" "}
              Accessing SwiftCloud
            </h2>
            <div
              id="accessingSwiftCloud"
              className="accordion-collapse collapse"
              aria-labelledby="accessingSwiftCloud"
              data-bs-parent="#SwiftfCloudSettings"
            >
              <div className="accordion-body">
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Your Username</h5>
                  </div>
                  <div className="col-6 text-end pr-15">'Username'</div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Email You Login With</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <a href="#" className="unverifiedEmail">
                      youremail@domain.com
                    </a>
                    <a
                      href="#"
                      className="unverifiedEmail"
                      data-toggle="tooltip"
                      title="Click to verify"
                    >
                      <FontAwesomeIcon icon={Icons.faTriangleExclamation} />
                    </a>
                  </div>
                </div>
                {/* Change Password */}
                <ChangePassword />

                {/* API Access */}
                <APIAccess />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#languageLocations"
              aria-expanded="false"
              aria-controls="languageLocations"
            >
              <FontAwesomeIcon icon={Icons.faGlobe} className="me-2" /> Language
              & Location
            </h2>
            <div
              id="languageLocations"
              className="accordion-collapse collapse"
              aria-labelledby="languageLocations"
              data-bs-parent="#SwiftfCloudSettings"
            >
              <div className="accordion-body">
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Country</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select name="Country" id="Country" className="form-select">
                      <option defaultValue="AF">Afghanistan</option>
                      <option defaultValue="AX">Åland Islands</option>
                      <option defaultValue="AL">Albania</option>
                      <option defaultValue="DZ">Algeria</option>
                      <option defaultValue="AS">American Samoa</option>
                      <option defaultValue="AD">Andorra</option>
                      <option defaultValue="AO">Angola</option>
                      <option defaultValue="AI">Anguilla</option>
                      <option defaultValue="AQ">Antarctica</option>
                      <option defaultValue="AG">Antigua and Barbuda</option>
                      <option defaultValue="AR">Argentina</option>
                      <option defaultValue="AM">Armenia</option>
                      <option defaultValue="AW">Aruba</option>
                      <option defaultValue="AU">Australia</option>
                      <option defaultValue="AT">Austria</option>
                      <option defaultValue="AZ">Azerbaijan</option>
                      <option defaultValue="BS">Bahamas</option>
                      <option defaultValue="BH">Bahrain</option>
                      <option defaultValue="BD">Bangladesh</option>
                      <option defaultValue="BB">Barbados</option>
                      <option defaultValue="BY">Belarus</option>
                      <option defaultValue="BE">Belgium</option>
                      <option defaultValue="BZ">Belize</option>
                      <option defaultValue="BJ">Benin</option>
                      <option defaultValue="BM">Bermuda</option>
                      <option defaultValue="BT">Bhutan</option>
                      <option defaultValue="BO">
                        Bolivia, Plurinational State of
                      </option>
                      <option defaultValue="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option defaultValue="BA">Bosnia and Herzegovina</option>
                      <option defaultValue="BW">Botswana</option>
                      <option defaultValue="BV">Bouvet Island</option>
                      <option defaultValue="BR">Brazil</option>
                      <option defaultValue="IO">
                        British Indian Ocean Territory
                      </option>
                      <option defaultValue="BN">Brunei Darussalam</option>
                      <option defaultValue="BG">Bulgaria</option>
                      <option defaultValue="BF">Burkina Faso</option>
                      <option defaultValue="BI">Burundi</option>
                      <option defaultValue="KH">Cambodia</option>
                      <option defaultValue="CM">Cameroon</option>
                      <option defaultValue="CA">Canada</option>
                      <option defaultValue="CV">Cape Verde</option>
                      <option defaultValue="KY">Cayman Islands</option>
                      <option defaultValue="CF">
                        Central African Republic
                      </option>
                      <option defaultValue="TD">Chad</option>
                      <option defaultValue="CL">Chile</option>
                      <option defaultValue="CN">China</option>
                      <option defaultValue="CX">Christmas Island</option>
                      <option defaultValue="CC">Cocos (Keeling) Islands</option>
                      <option defaultValue="CO">Colombia</option>
                      <option defaultValue="KM">Comoros</option>
                      <option defaultValue="CG">Congo</option>
                      <option defaultValue="CD">
                        Congo, the Democratic Republic of the
                      </option>
                      <option defaultValue="CK">Cook Islands</option>
                      <option defaultValue="CR">Costa Rica</option>
                      <option defaultValue="CI">Côte d'Ivoire</option>
                      <option defaultValue="HR">Croatia</option>
                      <option defaultValue="CU">Cuba</option>
                      <option defaultValue="CW">Curaçao</option>
                      <option defaultValue="CY">Cyprus</option>
                      <option defaultValue="CZ">Czech Republic</option>
                      <option defaultValue="DK">Denmark</option>
                      <option defaultValue="DJ">Djibouti</option>
                      <option defaultValue="DM">Dominica</option>
                      <option defaultValue="DO">Dominican Republic</option>
                      <option defaultValue="EC">Ecuador</option>
                      <option defaultValue="EG">Egypt</option>
                      <option defaultValue="SV">El Salvador</option>
                      <option defaultValue="GQ">Equatorial Guinea</option>
                      <option defaultValue="ER">Eritrea</option>
                      <option defaultValue="EE">Estonia</option>
                      <option defaultValue="ET">Ethiopia</option>
                      <option defaultValue="FK">
                        Falkland Islands (Malvinas)
                      </option>
                      <option defaultValue="FO">Faroe Islands</option>
                      <option defaultValue="FJ">Fiji</option>
                      <option defaultValue="FI">Finland</option>
                      <option defaultValue="FR">France</option>
                      <option defaultValue="GF">French Guiana</option>
                      <option defaultValue="PF">French Polynesia</option>
                      <option defaultValue="TF">
                        French Southern Territories
                      </option>
                      <option defaultValue="GA">Gabon</option>
                      <option defaultValue="GM">Gambia</option>
                      <option defaultValue="GE">Georgia</option>
                      <option defaultValue="DE">Germany</option>
                      <option defaultValue="GH">Ghana</option>
                      <option defaultValue="GI">Gibraltar</option>
                      <option defaultValue="GR">Greece</option>
                      <option defaultValue="GL">Greenland</option>
                      <option defaultValue="GD">Grenada</option>
                      <option defaultValue="GP">Guadeloupe</option>
                      <option defaultValue="GU">Guam</option>
                      <option defaultValue="GT">Guatemala</option>
                      <option defaultValue="GG">Guernsey</option>
                      <option defaultValue="GN">Guinea</option>
                      <option defaultValue="GW">Guinea-Bissau</option>
                      <option defaultValue="GY">Guyana</option>
                      <option defaultValue="HT">Haiti</option>
                      <option defaultValue="HM">
                        Heard Island and McDonald Islands
                      </option>
                      <option defaultValue="VA">
                        Holy See (Vatican City State)
                      </option>
                      <option defaultValue="HN">Honduras</option>
                      <option defaultValue="HK">Hong Kong</option>
                      <option defaultValue="HU">Hungary</option>
                      <option defaultValue="IS">Iceland</option>
                      <option defaultValue="IN">India</option>
                      <option defaultValue="ID">Indonesia</option>
                      <option defaultValue="IR">
                        Iran, Islamic Republic of
                      </option>
                      <option defaultValue="IQ">Iraq</option>
                      <option defaultValue="IE">Ireland</option>
                      <option defaultValue="IM">Isle of Man</option>
                      <option defaultValue="IL">Israel</option>
                      <option defaultValue="IT">Italy</option>
                      <option defaultValue="JM">Jamaica</option>
                      <option defaultValue="JP">Japan</option>
                      <option defaultValue="JE">Jersey</option>
                      <option defaultValue="JO">Jordan</option>
                      <option defaultValue="KZ">Kazakhstan</option>
                      <option defaultValue="KE">Kenya</option>
                      <option defaultValue="KI">Kiribati</option>
                      <option defaultValue="KP">
                        Korea, Democratic People's Republic of
                      </option>
                      <option defaultValue="KR">Korea, Republic of</option>
                      <option defaultValue="KW">Kuwait</option>
                      <option defaultValue="KG">Kyrgyzstan</option>
                      <option defaultValue="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option defaultValue="LV">Latvia</option>
                      <option defaultValue="LB">Lebanon</option>
                      <option defaultValue="LS">Lesotho</option>
                      <option defaultValue="LR">Liberia</option>
                      <option defaultValue="LY">Libya</option>
                      <option defaultValue="LI">Liechtenstein</option>
                      <option defaultValue="LT">Lithuania</option>
                      <option defaultValue="LU">Luxembourg</option>
                      <option defaultValue="MO">Macao</option>
                      <option defaultValue="MK">
                        Macedonia, the former Yugoslav Republic of
                      </option>
                      <option defaultValue="MG">Madagascar</option>
                      <option defaultValue="MW">Malawi</option>
                      <option defaultValue="MY">Malaysia</option>
                      <option defaultValue="MV">Maldives</option>
                      <option defaultValue="ML">Mali</option>
                      <option defaultValue="MT">Malta</option>
                      <option defaultValue="MH">Marshall Islands</option>
                      <option defaultValue="MQ">Martinique</option>
                      <option defaultValue="MR">Mauritania</option>
                      <option defaultValue="MU">Mauritius</option>
                      <option defaultValue="YT">Mayotte</option>
                      <option defaultValue="MX">Mexico</option>
                      <option defaultValue="FM">
                        Micronesia, Federated States of
                      </option>
                      <option defaultValue="MD">Moldova, Republic of</option>
                      <option defaultValue="MC">Monaco</option>
                      <option defaultValue="MN">Mongolia</option>
                      <option defaultValue="ME">Montenegro</option>
                      <option defaultValue="MS">Montserrat</option>
                      <option defaultValue="MA">Morocco</option>
                      <option defaultValue="MZ">Mozambique</option>
                      <option defaultValue="MM">Myanmar</option>
                      <option defaultValue="NA">Namibia</option>
                      <option defaultValue="NR">Nauru</option>
                      <option defaultValue="NP">Nepal</option>
                      <option defaultValue="NL">Netherlands</option>
                      <option defaultValue="NC">New Caledonia</option>
                      <option defaultValue="NZ">New Zealand</option>
                      <option defaultValue="NI">Nicaragua</option>
                      <option defaultValue="NE">Niger</option>
                      <option defaultValue="NG">Nigeria</option>
                      <option defaultValue="NU">Niue</option>
                      <option defaultValue="NF">Norfolk Island</option>
                      <option defaultValue="MP">
                        Northern Mariana Islands
                      </option>
                      <option defaultValue="NO">Norway</option>
                      <option defaultValue="OM">Oman</option>
                      <option defaultValue="PK">Pakistan</option>
                      <option defaultValue="PW">Palau</option>
                      <option defaultValue="PS">
                        Palestinian Territory, Occupied
                      </option>
                      <option defaultValue="PA">Panama</option>
                      <option defaultValue="PG">Papua New Guinea</option>
                      <option defaultValue="PY">Paraguay</option>
                      <option defaultValue="PE">Peru</option>
                      <option defaultValue="PH">Philippines</option>
                      <option defaultValue="PN">Pitcairn</option>
                      <option defaultValue="PL">Poland</option>
                      <option defaultValue="PT">Portugal</option>
                      <option defaultValue="PR">Puerto Rico</option>
                      <option defaultValue="QA">Qatar</option>
                      <option defaultValue="RE">Réunion</option>
                      <option defaultValue="RO">Romania</option>
                      <option defaultValue="RU">Russian Federation</option>
                      <option defaultValue="RW">Rwanda</option>
                      <option defaultValue="BL">Saint Barthélemy</option>
                      <option defaultValue="SH">
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                      <option defaultValue="KN">Saint Kitts and Nevis</option>
                      <option defaultValue="LC">Saint Lucia</option>
                      <option defaultValue="MF">
                        Saint Martin (French part)
                      </option>
                      <option defaultValue="PM">
                        Saint Pierre and Miquelon
                      </option>
                      <option defaultValue="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option defaultValue="WS">Samoa</option>
                      <option defaultValue="SM">San Marino</option>
                      <option defaultValue="ST">Sao Tome and Principe</option>
                      <option defaultValue="SA">Saudi Arabia</option>
                      <option defaultValue="SN">Senegal</option>
                      <option defaultValue="RS">Serbia</option>
                      <option defaultValue="SC">Seychelles</option>
                      <option defaultValue="SL">Sierra Leone</option>
                      <option defaultValue="SG">Singapore</option>
                      <option defaultValue="SX">
                        Sint Maarten (Dutch part)
                      </option>
                      <option defaultValue="SK">Slovakia</option>
                      <option defaultValue="SI">Slovenia</option>
                      <option defaultValue="SB">Solomon Islands</option>
                      <option defaultValue="SO">Somalia</option>
                      <option defaultValue="ZA">South Africa</option>
                      <option defaultValue="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option defaultValue="SS">South Sudan</option>
                      <option defaultValue="ES">Spain</option>
                      <option defaultValue="LK">Sri Lanka</option>
                      <option defaultValue="SD">Sudan</option>
                      <option defaultValue="SR">Suriname</option>
                      <option defaultValue="SJ">Svalbard and Jan Mayen</option>
                      <option defaultValue="SZ">Swaziland</option>
                      <option defaultValue="SE">Sweden</option>
                      <option defaultValue="CH">Switzerland</option>
                      <option defaultValue="SY">Syrian Arab Republic</option>
                      <option defaultValue="TW">
                        Taiwan, Province of China
                      </option>
                      <option defaultValue="TJ">Tajikistan</option>
                      <option defaultValue="TZ">
                        Tanzania, United Republic of
                      </option>
                      <option defaultValue="TH">Thailand</option>
                      <option defaultValue="TL">Timor-Leste</option>
                      <option defaultValue="TG">Togo</option>
                      <option defaultValue="TK">Tokelau</option>
                      <option defaultValue="TO">Tonga</option>
                      <option defaultValue="TT">Trinidad and Tobago</option>
                      <option defaultValue="TN">Tunisia</option>
                      <option defaultValue="TR">Turkey</option>
                      <option defaultValue="TM">Turkmenistan</option>
                      <option defaultValue="TC">
                        Turks and Caicos Islands
                      </option>
                      <option defaultValue="TV">Tuvalu</option>
                      <option defaultValue="UG">Uganda</option>
                      <option defaultValue="UA">Ukraine</option>
                      <option defaultValue="AE">United Arab Emirates</option>
                      <option defaultValue="GB">United Kingdom</option>
                      <option defaultValue="US">United States</option>
                      <option defaultValue="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option defaultValue="UY">Uruguay</option>
                      <option defaultValue="UZ">Uzbekistan</option>
                      <option defaultValue="VU">Vanuatu</option>
                      <option defaultValue="VE">
                        Venezuela, Bolivarian Republic of
                      </option>
                      <option defaultValue="VN">Viet Nam</option>
                      <option defaultValue="VG">Virgin Islands, British</option>
                      <option defaultValue="VI">Virgin Islands, U.S.</option>
                      <option defaultValue="WF">Wallis and Futuna</option>
                      <option defaultValue="EH">Western Sahara</option>
                      <option defaultValue="YE">Yemen</option>
                      <option defaultValue="ZM">Zambia</option>
                      <option defaultValue="ZW">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Language</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select
                      name="Language"
                      id="Language"
                      className="form-select"
                    >
                      <option defaultValue="af">Afrikaans</option>
                      <option defaultValue="sq">Albanian</option>
                      <option defaultValue="ar-dz">Arabic (Algeria)</option>
                      <option defaultValue="ar-bh">Arabic (Bahrain)</option>
                      <option defaultValue="ar-eg">Arabic (Egypt)</option>
                      <option defaultValue="ar-iq">Arabic (Iraq)</option>
                      <option defaultValue="ar-jo">Arabic (Jordan)</option>
                      <option defaultValue="ar-kw">Arabic (Kuwait)</option>
                      <option defaultValue="ar-lb">Arabic (Lebanon)</option>
                      <option defaultValue="ar-ly">Arabic (Libya)</option>
                      <option defaultValue="ar-ma">Arabic (Morocco)</option>
                      <option defaultValue="ar-om">Arabic (Oman)</option>
                      <option defaultValue="ar-qa">Arabic (Qatar)</option>
                      <option defaultValue="ar-sa">
                        Arabic (Saudi Arabia)
                      </option>
                      <option defaultValue="ar-sy">Arabic (Syria)</option>
                      <option defaultValue="ar-tn">Arabic (Tunisia)</option>
                      <option defaultValue="ar-ae">Arabic (U.a.e.)</option>
                      <option defaultValue="ar-ye">Arabic (Yemen)</option>
                      <option defaultValue="eu">Basque</option>
                      <option defaultValue="be">Belarusian</option>
                      <option defaultValue="bs">Bosnian</option>
                      <option defaultValue="bg">Bulgarian</option>
                      <option defaultValue="ca">Catalan</option>
                      <option defaultValue="zh-hk">Chinese (Hong Kong)</option>
                      <option defaultValue="zh-cn">Chinese (Prc)</option>
                      <option defaultValue="zh-sg">Chinese (Singapore)</option>
                      <option defaultValue="zh-tw">Chinese (Taiwan)</option>
                      <option defaultValue="hr">Croatian</option>
                      <option defaultValue="cs">Czech</option>
                      <option defaultValue="da">Danish</option>
                      <option defaultValue="nl-be">Dutch (Belgium)</option>
                      <option defaultValue="nl">Dutch (Standard)</option>
                      <option defaultValue="en">English</option>
                      <option defaultValue="en-au">English (Australia)</option>
                      <option defaultValue="en-bz">English (Belize)</option>
                      <option defaultValue="en-ca">English (Canada)</option>
                      <option defaultValue="en-ie">English (Ireland)</option>
                      <option defaultValue="en-jm">English (Jamaica)</option>
                      <option defaultValue="en-nz">
                        English (New Zealand)
                      </option>
                      <option defaultValue="en-za">
                        English (South Africa)
                      </option>
                      <option defaultValue="en-tt">English (Trinidad)</option>
                      <option defaultValue="en">
                        English (United Kingdom)
                      </option>
                      <option defaultValue="en-us">
                        English (United States)
                      </option>
                      <option defaultValue="et">Estonian</option>
                      <option defaultValue="fo">Faeroese</option>
                      <option defaultValue="fa">Farsi</option>
                      <option defaultValue="fi">Finnish</option>
                      <option defaultValue="fr-be">French (Belgium)</option>
                      <option defaultValue="fr-ca">French (Canada)</option>
                      <option defaultValue="fr-lu">French (Luxembourg)</option>
                      <option defaultValue="fr">French (Standard)</option>
                      <option defaultValue="fr-ch">French (Switzerland)</option>
                      <option defaultValue="gd">Gaelic (Scotland)</option>
                      <option defaultValue="de-at">German (Austria)</option>
                      <option defaultValue="de-li">
                        German (Liechtenstein)
                      </option>
                      <option defaultValue="de-lu">German (Luxembourg)</option>
                      <option defaultValue="de">German (Standard)</option>
                      <option defaultValue="de-ch">German (Switzerland)</option>
                      <option defaultValue="el">Greek</option>
                      <option defaultValue="he">Hebrew</option>
                      <option defaultValue="hi">Hindi</option>
                      <option defaultValue="hu">Hungarian</option>
                      <option defaultValue="is">Icelandic</option>
                      <option defaultValue="id">Indonesian</option>
                      <option defaultValue="ga">Irish</option>
                      <option defaultValue="it">Italian (Standard)</option>
                      <option defaultValue="it-ch">
                        Italian (Switzerland)
                      </option>
                      <option defaultValue="ja">Japanese</option>
                      <option defaultValue="ko">Korean</option>
                      <option defaultValue="ko">Korean (Johab)</option>
                      <option defaultValue="ku">Kurdish</option>
                      <option defaultValue="lv">Latvian</option>
                      <option defaultValue="lt">Lithuanian</option>
                      <option defaultValue="mk">Macedonian (Fyrom)</option>
                      <option defaultValue="ml">Malayalam</option>
                      <option defaultValue="ms">Malaysian</option>
                      <option defaultValue="mt">Maltese</option>
                      <option defaultValue="sr-me">Montenegrin</option>
                      <option defaultValue="no">Norwegian</option>
                      <option defaultValue="nb">Norwegian (Bokmål)</option>
                      <option defaultValue="nn">Norwegian (Nynorsk)</option>
                      <option defaultValue="pl">Polish</option>
                      <option defaultValue="pt-br">Portuguese (Brazil)</option>
                      <option defaultValue="pt">Portuguese (Portugal)</option>
                      <option defaultValue="pa">Punjabi</option>
                      <option defaultValue="rm">Rhaeto-Romanic</option>
                      <option defaultValue="ro">Romanian</option>
                      <option defaultValue="ro-md">
                        Romanian (Republic Of Moldova)
                      </option>
                      <option defaultValue="ru">Russian</option>
                      <option defaultValue="ru-md">
                        Russian (Republic Of Moldova)
                      </option>
                      <option defaultValue="sr">Serbian</option>
                      <option defaultValue="sk">Slovak</option>
                      <option defaultValue="sl">Slovenian</option>
                      <option defaultValue="sb">Sorbian</option>
                      <option defaultValue="es-ar">Spanish (Argentina)</option>
                      <option defaultValue="es-bo">Spanish (Bolivia)</option>
                      <option defaultValue="es-cl">Spanish (Chile)</option>
                      <option defaultValue="es-co">Spanish (Colombia)</option>
                      <option defaultValue="es-cr">Spanish (Costa Rica)</option>
                      <option defaultValue="es-do">
                        Spanish (Dominican Republic)
                      </option>
                      <option defaultValue="es-ec">Spanish (Ecuador)</option>
                      <option defaultValue="es-sv">
                        Spanish (El Salvador)
                      </option>
                      <option defaultValue="es-gt">Spanish (Guatemala)</option>
                      <option defaultValue="es-hn">Spanish (Honduras)</option>
                      <option defaultValue="es-mx">Spanish (Mexico)</option>
                      <option defaultValue="es-ni">Spanish (Nicaragua)</option>
                      <option defaultValue="es-pa">Spanish (Panama)</option>
                      <option defaultValue="es-py">Spanish (Paraguay)</option>
                      <option defaultValue="es-pe">Spanish (Peru)</option>
                      <option defaultValue="es-pr">
                        Spanish (Puerto Rico)
                      </option>
                      <option defaultValue="es">Spanish (Spain)</option>
                      <option defaultValue="es-uy">Spanish (Uruguay)</option>
                      <option defaultValue="es-ve">Spanish (Venezuela)</option>
                      <option defaultValue="sw">Swahili</option>
                      <option defaultValue="sv">Swedish</option>
                      <option defaultValue="sv-fi">Swedish (Finland)</option>
                      <option defaultValue="th">Thai</option>
                      <option defaultValue="ts">Tsonga</option>
                      <option defaultValue="tn">Tswana</option>
                      <option defaultValue="tr">Turkish</option>
                      <option defaultValue="uk">Ukrainian</option>
                      <option defaultValue="ur">Urdu</option>
                      <option defaultValue="ve">Venda</option>
                      <option defaultValue="vi">Vietnamese</option>
                      <option defaultValue="cy">Welsh</option>
                      <option defaultValue="xh">Xhosa</option>
                      <option defaultValue="ji">Yiddish</option>
                      <option defaultValue="zu">Zulu</option>
                    </select>
                  </div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Time Zone</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select
                      name="timeZone"
                      id="timeZone"
                      className="form-select"
                    >
                      <option defaultValue="">Please, select timezone</option>
                      <option defaultValue="Pacific/Pago_Pago">
                        Pacific/Pago_Pago(GMT-11:00)
                      </option>
                      <option defaultValue="Pacific/Midway">
                        Pacific/Midway(GMT-11:00)
                      </option>
                      <option defaultValue="Pacific/Niue">
                        Pacific/Niue(GMT-11:00)
                      </option>
                      <option defaultValue="Pacific/Honolulu">
                        Pacific/Honolulu(GMT-10:00)
                      </option>
                      <option defaultValue="Pacific/Johnston">
                        Pacific/Johnston(GMT-10:00)
                      </option>
                      <option defaultValue="Pacific/Tahiti">
                        Pacific/Tahiti(GMT-10:00)
                      </option>
                      <option defaultValue="Pacific/Rarotonga">
                        Pacific/Rarotonga(GMT-10:00)
                      </option>
                      <option defaultValue="Pacific/Marquesas">
                        Pacific/Marquesas(GMT-09:30)
                      </option>
                      <option defaultValue="Pacific/Gambier">
                        Pacific/Gambier(GMT-09:00)
                      </option>
                      <option defaultValue="America/Adak">
                        America/Adak(GMT-09:00)
                      </option>
                      <option defaultValue="America/Juneau">
                        America/Juneau(GMT-08:00)
                      </option>
                      <option defaultValue="America/Nome">
                        America/Nome(GMT-08:00)
                      </option>
                      <option defaultValue="America/Metlakatla">
                        America/Metlakatla(GMT-08:00)
                      </option>
                      <option defaultValue="America/Yakutat">
                        America/Yakutat(GMT-08:00)
                      </option>
                      <option defaultValue="Pacific/Pitcairn">
                        Pacific/Pitcairn(GMT-08:00)
                      </option>
                      <option defaultValue="America/Anchorage">
                        America/Anchorage(GMT-08:00)
                      </option>
                      <option defaultValue="America/Sitka">
                        America/Sitka(GMT-08:00)
                      </option>
                      <option defaultValue="America/Whitehorse">
                        America/Whitehorse(GMT-07:00)
                      </option>
                      <option defaultValue="America/Tijuana">
                        America/Tijuana(GMT-07:00)
                      </option>
                      <option defaultValue="America/Los_Angeles">
                        America/Los_Angeles(GMT-07:00)
                      </option>
                      <option defaultValue="America/Dawson_Creek">
                        America/Dawson_Creek(GMT-07:00)
                      </option>
                      <option defaultValue="America/Dawson">
                        America/Dawson(GMT-07:00)
                      </option>
                      <option defaultValue="America/Phoenix">
                        America/Phoenix(GMT-07:00)
                      </option>
                      <option defaultValue="America/Creston">
                        America/Creston(GMT-07:00)
                      </option>
                      <option defaultValue="America/Vancouver">
                        America/Vancouver(GMT-07:00)
                      </option>
                      <option defaultValue="America/Fort_Nelson">
                        America/Fort_Nelson(GMT-07:00)
                      </option>
                      <option defaultValue="America/Hermosillo">
                        America/Hermosillo(GMT-07:00)
                      </option>
                      <option defaultValue="America/Swift_Current">
                        America/Swift_Current(GMT-06:00)
                      </option>
                      <option defaultValue="America/Guatemala">
                        America/Guatemala(GMT-06:00)
                      </option>
                      <option defaultValue="America/Cambridge_Bay">
                        America/Cambridge_Bay(GMT-06:00)
                      </option>
                      <option defaultValue="America/Tegucigalpa">
                        America/Tegucigalpa(GMT-06:00)
                      </option>
                      <option defaultValue="America/Boise">
                        America/Boise(GMT-06:00)
                      </option>
                      <option defaultValue="America/Costa_Rica">
                        America/Costa_Rica(GMT-06:00)
                      </option>
                      <option defaultValue="America/Chihuahua">
                        America/Chihuahua(GMT-06:00)
                      </option>
                      <option defaultValue="America/Managua">
                        America/Managua(GMT-06:00)
                      </option>
                      <option defaultValue="America/Ojinaga">
                        America/Ojinaga(GMT-06:00)
                      </option>
                      <option defaultValue="America/Denver">
                        America/Denver(GMT-06:00)
                      </option>
                      <option defaultValue="America/Belize">
                        America/Belize(GMT-06:00)
                      </option>
                      <option defaultValue="America/El_Salvador">
                        America/El_Salvador(GMT-06:00)
                      </option>
                      <option defaultValue="Pacific/Easter">
                        Pacific/Easter(GMT-06:00)
                      </option>
                      <option defaultValue="America/Edmonton">
                        America/Edmonton(GMT-06:00)
                      </option>
                      <option defaultValue="America/Yellowknife">
                        America/Yellowknife(GMT-06:00)
                      </option>
                      <option defaultValue="America/Regina">
                        America/Regina(GMT-06:00)
                      </option>
                      <option defaultValue="Pacific/Galapagos">
                        Pacific/Galapagos(GMT-06:00)
                      </option>
                      <option defaultValue="America/Mazatlan">
                        America/Mazatlan(GMT-06:00)
                      </option>
                      <option defaultValue="America/Inuvik">
                        America/Inuvik(GMT-06:00)
                      </option>
                      <option defaultValue="America/Merida">
                        America/Merida(GMT-05:00)
                      </option>
                      <option defaultValue="America/Matamoros">
                        America/Matamoros(GMT-05:00)
                      </option>
                      <option defaultValue="America/Menominee">
                        America/Menominee(GMT-05:00)
                      </option>
                      <option defaultValue="America/Atikokan">
                        America/Atikokan(GMT-05:00)
                      </option>
                      <option defaultValue="America/Jamaica">
                        America/Jamaica(GMT-05:00)
                      </option>
                      <option defaultValue="America/Bogota">
                        America/Bogota(GMT-05:00)
                      </option>
                      <option defaultValue="America/Cancun">
                        America/Cancun(GMT-05:00)
                      </option>
                      <option defaultValue="America/Bahia_Banderas">
                        America/Bahia_Banderas(GMT-05:00)
                      </option>
                      <option defaultValue="America/Lima">
                        America/Lima(GMT-05:00)
                      </option>
                      <option defaultValue="America/Cayman">
                        America/Cayman(GMT-05:00)
                      </option>
                      <option defaultValue="America/Chicago">
                        America/Chicago(GMT-05:00)
                      </option>
                      <option defaultValue="America/Panama">
                        America/Panama(GMT-05:00)
                      </option>
                      <option defaultValue="America/Rio_Branco">
                        America/Rio_Branco(GMT-05:00)
                      </option>
                      <option defaultValue="America/Resolute">
                        America/Resolute(GMT-05:00)
                      </option>
                      <option defaultValue="America/Mexico_City">
                        America/Mexico_City(GMT-05:00)
                      </option>
                      <option defaultValue="America/Indiana/Knox">
                        America/Indiana/Knox(GMT-05:00)
                      </option>
                      <option defaultValue="America/Eirunepe">
                        America/Eirunepe(GMT-05:00)
                      </option>
                      <option defaultValue="America/Winnipeg">
                        America/Winnipeg(GMT-05:00)
                      </option>
                      <option defaultValue="America/Guayaquil">
                        America/Guayaquil(GMT-05:00)
                      </option>
                      <option defaultValue="America/Rainy_River">
                        America/Rainy_River(GMT-05:00)
                      </option>
                      <option defaultValue="America/Rankin_Inlet">
                        America/Rankin_Inlet(GMT-05:00)
                      </option>
                      <option defaultValue="America/Indiana/Tell_City">
                        America/Indiana/Tell_City(GMT-05:00)
                      </option>
                      <option defaultValue="America/Monterrey">
                        America/Monterrey(GMT-05:00)
                      </option>
                      <option defaultValue="America/North_Dakota/Center">
                        America/North_Dakota/Center(GMT-05:00)
                      </option>
                      <option defaultValue="America/North_Dakota/Beulah">
                        America/North_Dakota/Beulah(GMT-05:00)
                      </option>
                      <option defaultValue="America/Port-au-Prince">
                        America/Port-au-Prince(GMT-05:00)
                      </option>
                      <option defaultValue="America/North_Dakota/New_Salem">
                        America/North_Dakota/New_Salem(GMT-05:00)
                      </option>
                      <option defaultValue="America/Guyana">
                        America/Guyana(GMT-04:00)
                      </option>
                      <option defaultValue="America/Indiana/Vevay">
                        America/Indiana/Vevay(GMT-04:00)
                      </option>
                      <option defaultValue="America/Indiana/Winamac">
                        America/Indiana/Winamac(GMT-04:00)
                      </option>
                      <option defaultValue="America/Havana">
                        America/Havana(GMT-04:00)
                      </option>
                      <option defaultValue="America/Indiana/Indianapolis">
                        America/Indiana/Indianapolis(GMT-04:00)
                      </option>
                      <option defaultValue="America/Indiana/Petersburg">
                        America/Indiana/Petersburg(GMT-04:00)
                      </option>
                      <option defaultValue="America/Indiana/Vincennes">
                        America/Indiana/Vincennes(GMT-04:00)
                      </option>
                      <option defaultValue="America/Indiana/Marengo">
                        America/Indiana/Marengo(GMT-04:00)
                      </option>
                      <option defaultValue="America/Nassau">
                        America/Nassau(GMT-04:00)
                      </option>
                      <option defaultValue="America/St_Barthelemy">
                        America/St_Barthelemy(GMT-04:00)
                      </option>
                      <option defaultValue="America/St_Kitts">
                        America/St_Kitts(GMT-04:00)
                      </option>
                      <option defaultValue="America/Santo_Domingo">
                        America/Santo_Domingo(GMT-04:00)
                      </option>
                      <option defaultValue="America/Santiago">
                        America/Santiago(GMT-04:00)
                      </option>
                      <option defaultValue="America/Puerto_Rico">
                        America/Puerto_Rico(GMT-04:00)
                      </option>
                      <option defaultValue="America/St_Lucia">
                        America/St_Lucia(GMT-04:00)
                      </option>
                      <option defaultValue="America/St_Thomas">
                        America/St_Thomas(GMT-04:00)
                      </option>
                      <option defaultValue="America/Tortola">
                        America/Tortola(GMT-04:00)
                      </option>
                      <option defaultValue="Antarctica/Palmer">
                        Antarctica/Palmer(GMT-04:00)
                      </option>
                      <option defaultValue="America/Toronto">
                        America/Toronto(GMT-04:00)
                      </option>
                      <option defaultValue="America/Thunder_Bay">
                        America/Thunder_Bay(GMT-04:00)
                      </option>
                      <option defaultValue="America/St_Vincent">
                        America/St_Vincent(GMT-04:00)
                      </option>
                      <option defaultValue="America/Porto_Velho">
                        America/Porto_Velho(GMT-04:00)
                      </option>
                      <option defaultValue="America/Port_of_Spain">
                        America/Port_of_Spain(GMT-04:00)
                      </option>
                      <option defaultValue="America/La_Paz">
                        America/La_Paz(GMT-04:00)
                      </option>
                      <option defaultValue="America/Lower_Princes">
                        America/Lower_Princes(GMT-04:00)
                      </option>
                      <option defaultValue="America/Kralendijk">
                        America/Kralendijk(GMT-04:00)
                      </option>
                      <option defaultValue="America/Kentucky/Monticello">
                        America/Kentucky/Monticello(GMT-04:00)
                      </option>
                      <option defaultValue="America/Kentucky/Louisville">
                        America/Kentucky/Louisville(GMT-04:00)
                      </option>
                      <option defaultValue="America/Marigot">
                        America/Marigot(GMT-04:00)
                      </option>
                      <option defaultValue="America/Martinique">
                        America/Martinique(GMT-04:00)
                      </option>
                      <option defaultValue="America/Nipigon">
                        America/Nipigon(GMT-04:00)
                      </option>
                      <option defaultValue="America/Pangnirtung">
                        America/Pangnirtung(GMT-04:00)
                      </option>
                      <option defaultValue="America/New_York">
                        America/New_York(GMT-04:00)
                      </option>
                      <option defaultValue="America/Guadeloupe">
                        America/Guadeloupe(GMT-04:00)
                      </option>
                      <option defaultValue="America/Montserrat">
                        America/Montserrat(GMT-04:00)
                      </option>
                      <option defaultValue="America/Iqaluit">
                        America/Iqaluit(GMT-04:00)
                      </option>
                      <option defaultValue="America/Manaus">
                        America/Manaus(GMT-04:00)
                      </option>
                      <option defaultValue="America/Blanc-Sablon">
                        America/Blanc-Sablon(GMT-04:00)
                      </option>
                      <option defaultValue="America/Boa_Vista">
                        America/Boa_Vista(GMT-04:00)
                      </option>
                      <option defaultValue="America/Campo_Grande">
                        America/Campo_Grande(GMT-04:00)
                      </option>
                      <option defaultValue="America/Caracas">
                        America/Caracas(GMT-04:00)
                      </option>
                      <option defaultValue="America/Barbados">
                        America/Barbados(GMT-04:00)
                      </option>
                      <option defaultValue="America/Asuncion">
                        America/Asuncion(GMT-04:00)
                      </option>
                      <option defaultValue="America/Grenada">
                        America/Grenada(GMT-04:00)
                      </option>
                      <option defaultValue="America/Anguilla">
                        America/Anguilla(GMT-04:00)
                      </option>
                      <option defaultValue="America/Aruba">
                        America/Aruba(GMT-04:00)
                      </option>
                      <option defaultValue="America/Cuiaba">
                        America/Cuiaba(GMT-04:00)
                      </option>
                      <option defaultValue="America/Antigua">
                        America/Antigua(GMT-04:00)
                      </option>
                      <option defaultValue="America/Curacao">
                        America/Curacao(GMT-04:00)
                      </option>
                      <option defaultValue="America/Dominica">
                        America/Dominica(GMT-04:00)
                      </option>
                      <option defaultValue="America/Detroit">
                        America/Detroit(GMT-04:00)
                      </option>
                      <option defaultValue="America/Grand_Turk">
                        America/Grand_Turk(GMT-04:00)
                      </option>
                      <option defaultValue="America/Moncton">
                        America/Moncton(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Buenos_Aires">
                        America/Argentina/Buenos_Aires(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Catamarca">
                        America/Argentina/Catamarca(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Jujuy">
                        America/Argentina/Jujuy(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/La_Rioja">
                        America/Argentina/La_Rioja(GMT-03:00)
                      </option>
                      <option defaultValue="America/Araguaina">
                        America/Araguaina(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Cordoba">
                        America/Argentina/Cordoba(GMT-03:00)
                      </option>
                      <option defaultValue="America/Sao_Paulo">
                        America/Sao_Paulo(GMT-03:00)
                      </option>
                      <option defaultValue="America/Recife">
                        America/Recife(GMT-03:00)
                      </option>
                      <option defaultValue="Antarctica/Rothera">
                        Antarctica/Rothera(GMT-03:00)
                      </option>
                      <option defaultValue="Atlantic/Bermuda">
                        Atlantic/Bermuda(GMT-03:00)
                      </option>
                      <option defaultValue="America/Santarem">
                        America/Santarem(GMT-03:00)
                      </option>
                      <option defaultValue="America/Goose_Bay">
                        America/Goose_Bay(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Mendoza">
                        America/Argentina/Mendoza(GMT-03:00)
                      </option>
                      <option defaultValue="America/Montevideo">
                        America/Montevideo(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Rio_Gallegos">
                        America/Argentina/Rio_Gallegos(GMT-03:00)
                      </option>
                      <option defaultValue="America/Bahia">
                        America/Bahia(GMT-03:00)
                      </option>
                      <option defaultValue="America/Thule">
                        America/Thule(GMT-03:00)
                      </option>
                      <option defaultValue="America/Halifax">
                        America/Halifax(GMT-03:00)
                      </option>
                      <option defaultValue="America/Glace_Bay">
                        America/Glace_Bay(GMT-03:00)
                      </option>
                      <option defaultValue="America/Belem">
                        America/Belem(GMT-03:00)
                      </option>
                      <option defaultValue="America/Cayenne">
                        America/Cayenne(GMT-03:00)
                      </option>
                      <option defaultValue="America/Fortaleza">
                        America/Fortaleza(GMT-03:00)
                      </option>
                      <option defaultValue="America/Paramaribo">
                        America/Paramaribo(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Ushuaia">
                        America/Argentina/Ushuaia(GMT-03:00)
                      </option>
                      <option defaultValue="America/Maceio">
                        America/Maceio(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/San_Juan">
                        America/Argentina/San_Juan(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Salta">
                        America/Argentina/Salta(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/San_Luis">
                        America/Argentina/San_Luis(GMT-03:00)
                      </option>
                      <option defaultValue="America/Argentina/Tucuman">
                        America/Argentina/Tucuman(GMT-03:00)
                      </option>
                      <option defaultValue="Atlantic/Stanley">
                        Atlantic/Stanley(GMT-03:00)
                      </option>
                      <option defaultValue="America/St_Johns">
                        America/St_Johns(GMT-02:30)
                      </option>
                      <option defaultValue="Atlantic/South_Georgia">
                        Atlantic/South_Georgia(GMT-02:00)
                      </option>
                      <option defaultValue="America/Noronha">
                        America/Noronha(GMT-02:00)
                      </option>
                      <option defaultValue="America/Godthab">
                        America/Godthab(GMT-02:00)
                      </option>
                      <option defaultValue="America/Miquelon">
                        America/Miquelon(GMT-02:00)
                      </option>
                      <option defaultValue="Atlantic/Cape_Verde">
                        Atlantic/Cape_Verde(GMT-01:00)
                      </option>
                      <option defaultValue="Africa/Bissau">
                        Africa/Bissau(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Nouakchott">
                        Africa/Nouakchott(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Lome">
                        Africa/Lome(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Bamako">
                        Africa/Bamako(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Freetown">
                        Africa/Freetown(GMT 00:00)
                      </option>
                      <option defaultValue="Atlantic/St_Helena">
                        Atlantic/St_Helena(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Banjul">
                        Africa/Banjul(GMT 00:00)
                      </option>
                      <option defaultValue="America/Scoresbysund">
                        America/Scoresbysund(GMT 00:00)
                      </option>
                      <option defaultValue="UTC">UTC(GMT 00:00)</option>
                      <option defaultValue="Africa/Sao_Tome">
                        Africa/Sao_Tome(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Monrovia">
                        Africa/Monrovia(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Ouagadougou">
                        Africa/Ouagadougou(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Conakry">
                        Africa/Conakry(GMT 00:00)
                      </option>
                      <option defaultValue="America/Danmarkshavn">
                        America/Danmarkshavn(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Abidjan">
                        Africa/Abidjan(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Dakar">
                        Africa/Dakar(GMT 00:00)
                      </option>
                      <option defaultValue="Atlantic/Reykjavik">
                        Atlantic/Reykjavik(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Accra">
                        Africa/Accra(GMT 00:00)
                      </option>
                      <option defaultValue="Atlantic/Azores">
                        Atlantic/Azores(GMT 00:00)
                      </option>
                      <option defaultValue="Africa/Brazzaville">
                        Africa/Brazzaville(GMT+01:00)
                      </option>
                      <option defaultValue="Europe/Lisbon">
                        Europe/Lisbon(GMT+01:00)
                      </option>
                      <option defaultValue="Europe/Dublin">
                        Europe/Dublin(GMT+01:00)
                      </option>
                      <option defaultValue="Europe/Guernsey">
                        Europe/Guernsey(GMT+01:00)
                      </option>
                      <option defaultValue="Europe/Isle_of_Man">
                        Europe/Isle_of_Man(GMT+01:00)
                      </option>
                      <option defaultValue="Europe/Jersey">
                        Europe/Jersey(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Algiers">
                        Africa/Algiers(GMT+01:00)
                      </option>
                      <option defaultValue="Europe/London">
                        Europe/London(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Bangui">
                        Africa/Bangui(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Casablanca">
                        Africa/Casablanca(GMT+01:00)
                      </option>
                      <option defaultValue="Atlantic/Madeira">
                        Atlantic/Madeira(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Ndjamena">
                        Africa/Ndjamena(GMT+01:00)
                      </option>
                      <option defaultValue="Atlantic/Canary">
                        Atlantic/Canary(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Malabo">
                        Africa/Malabo(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Niamey">
                        Africa/Niamey(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Porto-Novo">
                        Africa/Porto-Novo(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Windhoek">
                        Africa/Windhoek(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Tunis">
                        Africa/Tunis(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Luanda">
                        Africa/Luanda(GMT+01:00)
                      </option>
                      <option defaultValue="Atlantic/Faroe">
                        Atlantic/Faroe(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Kinshasa">
                        Africa/Kinshasa(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Libreville">
                        Africa/Libreville(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Douala">
                        Africa/Douala(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/Lagos">
                        Africa/Lagos(GMT+01:00)
                      </option>
                      <option defaultValue="Africa/El_Aaiun">
                        Africa/El_Aaiun(GMT+01:00)
                      </option>
                      <option defaultValue="Europe/Malta">
                        Europe/Malta(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Madrid">
                        Europe/Madrid(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Luxembourg">
                        Europe/Luxembourg(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Belgrade">
                        Europe/Belgrade(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Monaco">
                        Europe/Monaco(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Oslo">
                        Europe/Oslo(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Prague">
                        Europe/Prague(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Podgorica">
                        Europe/Podgorica(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Paris">
                        Europe/Paris(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Ljubljana">
                        Europe/Ljubljana(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Bratislava">
                        Europe/Bratislava(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Rome">
                        Europe/Rome(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Andorra">
                        Europe/Andorra(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Copenhagen">
                        Europe/Copenhagen(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Busingen">
                        Europe/Busingen(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Gibraltar">
                        Europe/Gibraltar(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Amsterdam">
                        Europe/Amsterdam(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Kaliningrad">
                        Europe/Kaliningrad(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Berlin">
                        Europe/Berlin(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Brussels">
                        Europe/Brussels(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Budapest">
                        Europe/Budapest(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Cairo">
                        Africa/Cairo(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Bujumbura">
                        Africa/Bujumbura(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Ceuta">
                        Africa/Ceuta(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Gaborone">
                        Africa/Gaborone(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Blantyre">
                        Africa/Blantyre(GMT+02:00)
                      </option>
                      <option defaultValue="Antarctica/Troll">
                        Antarctica/Troll(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/San_Marino">
                        Europe/San_Marino(GMT+02:00)
                      </option>
                      <option defaultValue="Arctic/Longyearbyen">
                        Arctic/Longyearbyen(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Zurich">
                        Europe/Zurich(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Harare">
                        Africa/Harare(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Johannesburg">
                        Africa/Johannesburg(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Maseru">
                        Africa/Maseru(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Mbabane">
                        Africa/Mbabane(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Tripoli">
                        Africa/Tripoli(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Maputo">
                        Africa/Maputo(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Lusaka">
                        Africa/Lusaka(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Kigali">
                        Africa/Kigali(GMT+02:00)
                      </option>
                      <option defaultValue="Africa/Lubumbashi">
                        Africa/Lubumbashi(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Warsaw">
                        Europe/Warsaw(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Zagreb">
                        Europe/Zagreb(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Vatican">
                        Europe/Vatican(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Tirane">
                        Europe/Tirane(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Vaduz">
                        Europe/Vaduz(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Stockholm">
                        Europe/Stockholm(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Vienna">
                        Europe/Vienna(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Skopje">
                        Europe/Skopje(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Sarajevo">
                        Europe/Sarajevo(GMT+02:00)
                      </option>
                      <option defaultValue="Europe/Tallinn">
                        Europe/Tallinn(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Riga">
                        Europe/Riga(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Mariehamn">
                        Europe/Mariehamn(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Simferopol">
                        Europe/Simferopol(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Moscow">
                        Europe/Moscow(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Athens">
                        Europe/Athens(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Sofia">
                        Europe/Sofia(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Minsk">
                        Europe/Minsk(GMT+03:00)
                      </option>
                      <option defaultValue="Indian/Mayotte">
                        Indian/Mayotte(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Kiev">
                        Europe/Kiev(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Zaporozhye">
                        Europe/Zaporozhye(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Helsinki">
                        Europe/Helsinki(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Vilnius">
                        Europe/Vilnius(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Istanbul">
                        Europe/Istanbul(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Kirov">
                        Europe/Kirov(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Chisinau">
                        Europe/Chisinau(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Volgograd">
                        Europe/Volgograd(GMT+03:00)
                      </option>
                      <option defaultValue="Indian/Comoro">
                        Indian/Comoro(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Bucharest">
                        Europe/Bucharest(GMT+03:00)
                      </option>
                      <option defaultValue="Indian/Antananarivo">
                        Indian/Antananarivo(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Uzhgorod">
                        Europe/Uzhgorod(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Aden">
                        Asia/Aden(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Qatar">
                        Asia/Qatar(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Amman">
                        Asia/Amman(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Kuwait">
                        Asia/Kuwait(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Nairobi">
                        Africa/Nairobi(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Mogadishu">
                        Africa/Mogadishu(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Khartoum">
                        Africa/Khartoum(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Riyadh">
                        Asia/Riyadh(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Jerusalem">
                        Asia/Jerusalem(GMT+03:00)
                      </option>
                      <option defaultValue="Antarctica/Syowa">
                        Antarctica/Syowa(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Bahrain">
                        Asia/Bahrain(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Baghdad">
                        Asia/Baghdad(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Beirut">
                        Asia/Beirut(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Damascus">
                        Asia/Damascus(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Hebron">
                        Asia/Hebron(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Gaza">
                        Asia/Gaza(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Kampala">
                        Africa/Kampala(GMT+03:00)
                      </option>
                      <option defaultValue="Asia/Nicosia">
                        Asia/Nicosia(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Asmara">
                        Africa/Asmara(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Addis_Ababa">
                        Africa/Addis_Ababa(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Dar_es_Salaam">
                        Africa/Dar_es_Salaam(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Djibouti">
                        Africa/Djibouti(GMT+03:00)
                      </option>
                      <option defaultValue="Africa/Juba">
                        Africa/Juba(GMT+03:00)
                      </option>
                      <option defaultValue="Europe/Astrakhan">
                        Europe/Astrakhan(GMT+04:00)
                      </option>
                      <option defaultValue="Indian/Mahe">
                        Indian/Mahe(GMT+04:00)
                      </option>
                      <option defaultValue="Europe/Ulyanovsk">
                        Europe/Ulyanovsk(GMT+04:00)
                      </option>
                      <option defaultValue="Asia/Dubai">
                        Asia/Dubai(GMT+04:00)
                      </option>
                      <option defaultValue="Asia/Muscat">
                        Asia/Muscat(GMT+04:00)
                      </option>
                      <option defaultValue="Europe/Samara">
                        Europe/Samara(GMT+04:00)
                      </option>
                      <option defaultValue="Indian/Mauritius">
                        Indian/Mauritius(GMT+04:00)
                      </option>
                      <option defaultValue="Asia/Baku">
                        Asia/Baku(GMT+04:00)
                      </option>
                      <option defaultValue="Indian/Reunion">
                        Indian/Reunion(GMT+04:00)
                      </option>
                      <option defaultValue="Asia/Tbilisi">
                        Asia/Tbilisi(GMT+04:00)
                      </option>
                      <option defaultValue="Asia/Yerevan">
                        Asia/Yerevan(GMT+04:00)
                      </option>
                      <option defaultValue="Asia/Kabul">
                        Asia/Kabul(GMT+04:30)
                      </option>
                      <option defaultValue="Asia/Tehran">
                        Asia/Tehran(GMT+04:30)
                      </option>
                      <option defaultValue="Antarctica/Mawson">
                        Antarctica/Mawson(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Karachi">
                        Asia/Karachi(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Tashkent">
                        Asia/Tashkent(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Aqtobe">
                        Asia/Aqtobe(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Dushanbe">
                        Asia/Dushanbe(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Oral">
                        Asia/Oral(GMT+05:00)
                      </option>
                      <option defaultValue="Indian/Kerguelen">
                        Indian/Kerguelen(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Yekaterinburg">
                        Asia/Yekaterinburg(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Aqtau">
                        Asia/Aqtau(GMT+05:00)
                      </option>
                      <option defaultValue="Indian/Maldives">
                        Indian/Maldives(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Ashgabat">
                        Asia/Ashgabat(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Samarkand">
                        Asia/Samarkand(GMT+05:00)
                      </option>
                      <option defaultValue="Asia/Colombo">
                        Asia/Colombo(GMT+05:30)
                      </option>
                      <option defaultValue="Asia/Kolkata">
                        Asia/Kolkata(GMT+05:30)
                      </option>
                      <option defaultValue="Asia/Kathmandu">
                        Asia/Kathmandu(GMT+05:45)
                      </option>
                      <option defaultValue="Antarctica/Vostok">
                        Antarctica/Vostok(GMT+06:00)
                      </option>
                      <option defaultValue="Indian/Chagos">
                        Indian/Chagos(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Urumqi">
                        Asia/Urumqi(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Omsk">
                        Asia/Omsk(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Novosibirsk">
                        Asia/Novosibirsk(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Almaty">
                        Asia/Almaty(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Qyzylorda">
                        Asia/Qyzylorda(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Thimphu">
                        Asia/Thimphu(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Dhaka">
                        Asia/Dhaka(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Bishkek">
                        Asia/Bishkek(GMT+06:00)
                      </option>
                      <option defaultValue="Asia/Rangoon">
                        Asia/Rangoon(GMT+06:30)
                      </option>
                      <option defaultValue="Indian/Cocos">
                        Indian/Cocos(GMT+06:30)
                      </option>
                      <option defaultValue="Asia/Tomsk">
                        Asia/Tomsk(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Ho_Chi_Minh">
                        Asia/Ho_Chi_Minh(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Bangkok">
                        Asia/Bangkok(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Novokuznetsk">
                        Asia/Novokuznetsk(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Phnom_Penh">
                        Asia/Phnom_Penh(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Pontianak">
                        Asia/Pontianak(GMT+07:00)
                      </option>
                      <option defaultValue="Antarctica/Davis">
                        Antarctica/Davis(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Barnaul">
                        Asia/Barnaul(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Vientiane">
                        Asia/Vientiane(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Krasnoyarsk">
                        Asia/Krasnoyarsk(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Jakarta">
                        Asia/Jakarta(GMT+07:00)
                      </option>
                      <option defaultValue="Indian/Christmas">
                        Indian/Christmas(GMT+07:00)
                      </option>
                      <option defaultValue="Asia/Brunei">
                        Asia/Brunei(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Kuala_Lumpur">
                        Asia/Kuala_Lumpur(GMT+08:00)
                      </option>
                      <option defaultValue="Australia/Perth">
                        Australia/Perth(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Hong_Kong">
                        Asia/Hong_Kong(GMT+08:00)
                      </option>
                      <option defaultValue="Antarctica/Casey">
                        Antarctica/Casey(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Taipei">
                        Asia/Taipei(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Singapore">
                        Asia/Singapore(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Makassar">
                        Asia/Makassar(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Manila">
                        Asia/Manila(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Irkutsk">
                        Asia/Irkutsk(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Hovd">
                        Asia/Hovd(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Shanghai">
                        Asia/Shanghai(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Kuching">
                        Asia/Kuching(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Macau">
                        Asia/Macau(GMT+08:00)
                      </option>
                      <option defaultValue="Asia/Pyongyang">
                        Asia/Pyongyang(GMT+08:30)
                      </option>
                      <option defaultValue="Australia/Eucla">
                        Australia/Eucla(GMT+08:45)
                      </option>
                      <option defaultValue="Pacific/Palau">
                        Pacific/Palau(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Dili">
                        Asia/Dili(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Khandyga">
                        Asia/Khandyga(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Yakutsk">
                        Asia/Yakutsk(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Seoul">
                        Asia/Seoul(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Tokyo">
                        Asia/Tokyo(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Ulaanbaatar">
                        Asia/Ulaanbaatar(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Jayapura">
                        Asia/Jayapura(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Choibalsan">
                        Asia/Choibalsan(GMT+09:00)
                      </option>
                      <option defaultValue="Asia/Chita">
                        Asia/Chita(GMT+09:00)
                      </option>
                      <option defaultValue="Australia/Adelaide">
                        Australia/Adelaide(GMT+09:30)
                      </option>
                      <option defaultValue="Australia/Broken_Hill">
                        Australia/Broken_Hill(GMT+09:30)
                      </option>
                      <option defaultValue="Australia/Darwin">
                        Australia/Darwin(GMT+09:30)
                      </option>
                      <option defaultValue="Pacific/Guam">
                        Pacific/Guam(GMT+10:00)
                      </option>
                      <option defaultValue="Australia/Brisbane">
                        Australia/Brisbane(GMT+10:00)
                      </option>
                      <option defaultValue="Asia/Ust-Nera">
                        Asia/Ust-Nera(GMT+10:00)
                      </option>
                      <option defaultValue="Pacific/Saipan">
                        Pacific/Saipan(GMT+10:00)
                      </option>
                      <option defaultValue="Antarctica/DumontDUrville">
                        Antarctica/DumontDUrville(GMT+10:00)
                      </option>
                      <option defaultValue="Pacific/Port_Moresby">
                        Pacific/Port_Moresby(GMT+10:00)
                      </option>
                      <option defaultValue="Asia/Vladivostok">
                        Asia/Vladivostok(GMT+10:00)
                      </option>
                      <option defaultValue="Australia/Currie">
                        Australia/Currie(GMT+10:00)
                      </option>
                      <option defaultValue="Australia/Lindeman">
                        Australia/Lindeman(GMT+10:00)
                      </option>
                      <option defaultValue="Australia/Hobart">
                        Australia/Hobart(GMT+10:00)
                      </option>
                      <option defaultValue="Australia/Melbourne">
                        Australia/Melbourne(GMT+10:00)
                      </option>
                      <option defaultValue="Pacific/Chuuk">
                        Pacific/Chuuk(GMT+10:00)
                      </option>
                      <option defaultValue="Australia/Sydney">
                        Australia/Sydney(GMT+10:00)
                      </option>
                      <option defaultValue="Australia/Lord_Howe">
                        Australia/Lord_Howe(GMT+10:30)
                      </option>
                      <option defaultValue="Asia/Magadan">
                        Asia/Magadan(GMT+11:00)
                      </option>
                      <option defaultValue="Antarctica/Macquarie">
                        Antarctica/Macquarie(GMT+11:00)
                      </option>
                      <option defaultValue="Pacific/Norfolk">
                        Pacific/Norfolk(GMT+11:00)
                      </option>
                      <option defaultValue="Asia/Srednekolymsk">
                        Asia/Srednekolymsk(GMT+11:00)
                      </option>
                      <option defaultValue="Pacific/Kosrae">
                        Pacific/Kosrae(GMT+11:00)
                      </option>
                      <option defaultValue="Pacific/Pohnpei">
                        Pacific/Pohnpei(GMT+11:00)
                      </option>
                      <option defaultValue="Pacific/Noumea">
                        Pacific/Noumea(GMT+11:00)
                      </option>
                      <option defaultValue="Asia/Sakhalin">
                        Asia/Sakhalin(GMT+11:00)
                      </option>
                      <option defaultValue="Pacific/Bougainville">
                        Pacific/Bougainville(GMT+11:00)
                      </option>
                      <option defaultValue="Pacific/Efate">
                        Pacific/Efate(GMT+11:00)
                      </option>
                      <option defaultValue="Pacific/Guadalcanal">
                        Pacific/Guadalcanal(GMT+11:00)
                      </option>
                      <option defaultValue="Pacific/Fiji">
                        Pacific/Fiji(GMT+12:00)
                      </option>
                      <option defaultValue="Antarctica/McMurdo">
                        Antarctica/McMurdo(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Tarawa">
                        Pacific/Tarawa(GMT+12:00)
                      </option>
                      <option defaultValue="Asia/Kamchatka">
                        Asia/Kamchatka(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Wallis">
                        Pacific/Wallis(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Wake">
                        Pacific/Wake(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Kwajalein">
                        Pacific/Kwajalein(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Funafuti">
                        Pacific/Funafuti(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Nauru">
                        Pacific/Nauru(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Majuro">
                        Pacific/Majuro(GMT+12:00)
                      </option>
                      <option defaultValue="Asia/Anadyr">
                        Asia/Anadyr(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Auckland">
                        Pacific/Auckland(GMT+12:00)
                      </option>
                      <option defaultValue="Pacific/Chatham">
                        Pacific/Chatham(GMT+12:45)
                      </option>
                      <option defaultValue="Pacific/Fakaofo">
                        Pacific/Fakaofo(GMT+13:00)
                      </option>
                      <option defaultValue="Pacific/Apia">
                        Pacific/Apia(GMT+13:00)
                      </option>
                      <option defaultValue="Pacific/Tongatapu">
                        Pacific/Tongatapu(GMT+13:00)
                      </option>
                      <option defaultValue="Pacific/Enderbury">
                        Pacific/Enderbury(GMT+13:00)
                      </option>
                      <option defaultValue="Pacific/Kiritimati">
                        Pacific/Kiritimati(GMT+14:00)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Time Formatting</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select
                      name="Language"
                      id="Language"
                      className="form-select"
                    >
                      <option defaultValue="24 Hour Clock">
                        24 Hour Clock
                      </option>
                      <option defaultValue="12 Hour Clock">
                        12 Hour AM &amp; PM
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Date Formatting</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select
                      name="dateFormatting"
                      id="dateFormatting"
                      className="form-select"
                    >
                      <option defaultValue="1">MM/DD/YYYY (USA)</option>
                      <option defaultValue="2">DD/MM/YYYY</option>
                    </select>
                  </div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Currency</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select name="currency" className="form-select">
                      <option defaultValue="0">== Select Currency ==</option>
                      <option
                        defaultValue="Afghan Afghani"
                        className="currency"
                      >
                        Afghanistan Afghani
                      </option>
                      <option defaultValue="Albanian Lek" className="currency">
                        Albania Lek
                      </option>
                      <option
                        defaultValue="Algerian Dinar"
                        className="currency"
                      >
                        Algeria Dinar
                      </option>
                      <option
                        defaultValue="Angolan Kwanza"
                        className="currency"
                      >
                        Angola Kwanza
                      </option>
                      <option
                        defaultValue="Argentine Peso"
                        className="currency"
                      >
                        Argentina Peso
                      </option>
                      <option defaultValue="Armenian Dram" className="currency">
                        Armenia Dram
                      </option>
                      <option defaultValue="Aruban Florin" className="currency">
                        Aruba Guilder
                      </option>
                      <option
                        defaultValue="Australian Dollar"
                        className="currency"
                      >
                        Australia Dollar
                      </option>
                      <option
                        defaultValue="Azerbaijani Manat"
                        className="currency"
                      >
                        Azerbaijan New Manat
                      </option>
                      <option
                        defaultValue="Bahamian Dollar"
                        className="currency"
                      >
                        Bahamas Dollar
                      </option>
                      <option
                        defaultValue="Bahraini Dinar"
                        className="currency"
                      >
                        Bahrain Dinar
                      </option>
                      <option
                        defaultValue="Bangladeshi Taka"
                        className="currency"
                      >
                        Bangladesh Taka
                      </option>
                      <option
                        defaultValue="Barbadian Dollar"
                        className="currency"
                      >
                        Barbados Dollar
                      </option>
                      <option
                        defaultValue="Belarusian Ruble"
                        className="currency"
                      >
                        Belarus Ruble
                      </option>
                      <option defaultValue="Belize Dollar" className="currency">
                        Belize Dollar
                      </option>
                      <option
                        defaultValue="Bermudan Dollar"
                        className="currency"
                      >
                        Bermuda Dollar
                      </option>
                      <option
                        defaultValue="Bhutanese Ngultrum"
                        className="currency"
                      >
                        Bhutan Ngultrum
                      </option>
                      <option defaultValue="Bitcoin" className="currency">
                        Bitcoin
                      </option>
                      <option
                        defaultValue="Bosnia-Herzegovina Convertible Mark"
                        className="currency"
                      >
                        Bosnia and Herzegovina Convertible Marka
                      </option>
                      <option
                        defaultValue="Botswanan Pula"
                        className="currency"
                      >
                        Botswana Pula
                      </option>
                      <option
                        defaultValue="Brazilian Real"
                        className="currency"
                      >
                        Brazil Real
                      </option>
                      <option defaultValue="Brunei Dollar" className="currency">
                        Brunei Darussalam Dollar
                      </option>
                      <option defaultValue="Bulgarian Lev" className="currency">
                        Bulgaria Lev
                      </option>
                      <option
                        defaultValue="Burundian Franc"
                        className="currency"
                      >
                        Burundi Franc
                      </option>
                      <option
                        defaultValue="Cambodian Riel"
                        className="currency"
                      >
                        Cambodia Riel
                      </option>
                      <option
                        defaultValue="Canadian Dollar"
                        className="currency"
                      >
                        Canada Dollar
                      </option>
                      <option
                        defaultValue="Cape Verdean Escudo"
                        className="currency"
                      >
                        Cape Verde Escudo
                      </option>
                      <option
                        defaultValue="Cayman Islands Dollar"
                        className="currency"
                      >
                        Cayman Islands Dollar
                      </option>
                      <option defaultValue="Chilean Peso" className="currency">
                        Chile Peso
                      </option>
                      <option defaultValue="Chinese Yuan" className="currency">
                        China Yuan Renminbi
                      </option>
                      <option
                        defaultValue="Colombian Peso"
                        className="currency"
                      >
                        Colombia Peso
                      </option>
                      <option
                        defaultValue="West African CFA Franc"
                        className="currency"
                      >
                        Communaute Financiere Africaine (BCEAO) Franc
                      </option>
                      <option
                        defaultValue="Central African CFA Franc"
                        className="currency"
                      >
                        Communaute Financiere Africaine (BEAC) CFA Franc BEAC
                      </option>
                      <option
                        defaultValue="Comorian Franc"
                        className="currency"
                      >
                        Comoros Franc
                      </option>
                      <option defaultValue="CFP Franc" className="currency">
                        Comptoirs Francais du Pacifique (CFP) Franc
                      </option>
                      <option
                        defaultValue="Congolese Franc"
                        className="currency"
                      >
                        Congo/Kinshasa Franc
                      </option>
                      <option
                        defaultValue="Costa Rican Colón"
                        className="currency"
                      >
                        Costa Rica Colon
                      </option>
                      <option defaultValue="Croatian Kuna" className="currency">
                        Croatia Kuna
                      </option>
                      <option
                        defaultValue="Cuban Convertible Peso"
                        className="currency"
                      >
                        Cuba Convertible Peso
                      </option>
                      <option defaultValue="Cuban Peso" className="currency">
                        Cuba Peso
                      </option>
                      <option defaultValue="Czech Koruna" className="currency">
                        Czech Republic Koruna
                      </option>
                      <option defaultValue="Danish Krone" className="currency">
                        Denmark Krone
                      </option>
                      <option
                        defaultValue="Djiboutian Franc"
                        className="currency"
                      >
                        Djibouti Franc
                      </option>
                      <option
                        defaultValue="Dominican Peso"
                        className="currency"
                      >
                        Dominican Republic Peso
                      </option>
                      <option
                        defaultValue="East Caribbean Dollar"
                        className="currency"
                      >
                        East Caribbean Dollar
                      </option>
                      <option
                        defaultValue="Egyptian Pound"
                        className="currency"
                      >
                        Egypt Pound
                      </option>
                      <option
                        defaultValue="Salvadoran Colón"
                        className="currency"
                      >
                        El Salvador Colon
                      </option>
                      <option
                        defaultValue="Eritrean Nakfa"
                        className="currency"
                      >
                        Eritrea Nakfa
                      </option>
                      <option
                        defaultValue="Ethiopian Birr"
                        className="currency"
                      >
                        Ethiopia Birr
                      </option>
                      <option defaultValue="Euro" className="currency">
                        Euro Member Countries
                      </option>
                      <option
                        defaultValue="Falkland Islands Pound"
                        className="currency"
                      >
                        Falkland Islands (Malvinas) Pound
                      </option>
                      <option defaultValue="Fijian Dollar" className="currency">
                        Fiji Dollar
                      </option>
                      <option
                        defaultValue="Gambian Dalasi"
                        className="currency"
                      >
                        Gambia Dalasi
                      </option>
                      <option defaultValue="Georgian Lari" className="currency">
                        Georgia Lari
                      </option>
                      <option defaultValue="Ghanian Cedi" className="currency">
                        Ghana Cedi
                      </option>
                      <option
                        defaultValue="Gibraltar Pound"
                        className="currency"
                      >
                        Gibraltar Pound
                      </option>
                      <option
                        defaultValue="Guatemalan Quetzal"
                        className="currency"
                      >
                        Guatemala Quetzal
                      </option>
                      <option
                        defaultValue="Guernsey Pound"
                        className="currency"
                      >
                        Guernsey Pound
                      </option>
                      <option defaultValue="Guinean Franc" className="currency">
                        Guinea Franc
                      </option>
                      <option
                        defaultValue="Guyanaese Dollar"
                        className="currency"
                      >
                        Guyana Dollar
                      </option>
                      <option
                        defaultValue="Haitian Gourde"
                        className="currency"
                      >
                        Haiti Gourde
                      </option>
                      <option
                        defaultValue="Honduran Lempira"
                        className="currency"
                      >
                        Honduras Lempira
                      </option>
                      <option
                        defaultValue="Hong Kong Dollar"
                        className="currency"
                      >
                        Hong Kong Dollar
                      </option>
                      <option
                        defaultValue="Hungarian Forint"
                        className="currency"
                      >
                        Hungary Forint
                      </option>
                      <option
                        defaultValue="Icelandic Króna"
                        className="currency"
                      >
                        Iceland Krona
                      </option>
                      <option defaultValue="Indian Rupee" className="currency">
                        India Rupee
                      </option>
                      <option
                        defaultValue="Indonesian Rupiah"
                        className="currency"
                      >
                        Indonesia Rupiah
                      </option>
                      <option
                        defaultValue="International Monetary Fund (IMF) Special Drawing Rights"
                        className="currency"
                      >
                        International Monetary Fund (IMF) Special Drawing Rights
                      </option>
                      <option defaultValue="Iranian Rial" className="currency">
                        Iran Rial
                      </option>
                      <option defaultValue="Iraqi Dinar" className="currency">
                        Iraq Dinar
                      </option>
                      <option
                        defaultValue="Isle of Man Pound"
                        className="currency"
                      >
                        Isle of Man Pound
                      </option>
                      <option
                        defaultValue="Israeli New Shekel"
                        className="currency"
                      >
                        Israel Shekel
                      </option>
                      <option
                        defaultValue="Jamaican Dollar"
                        className="currency"
                      >
                        Jamaica Dollar
                      </option>
                      <option defaultValue="Japanese Yen" className="currency">
                        Japan Yen
                      </option>
                      <option defaultValue="Jersey Pound" className="currency">
                        Jersey Pound
                      </option>
                      <option
                        defaultValue="Jordanian Dinar"
                        className="currency"
                      >
                        Jordan Dinar
                      </option>
                      <option
                        defaultValue="Kazakhstani Tenge"
                        className="currency"
                      >
                        Kazakhstan Tenge
                      </option>
                      <option
                        defaultValue="Kenyan Shilling"
                        className="currency"
                      >
                        Kenya Shilling
                      </option>
                      <option
                        defaultValue="North Korean Won"
                        className="currency"
                      >
                        Korea (North) Won
                      </option>
                      <option
                        defaultValue="South Korean Won"
                        className="currency"
                      >
                        Korea (South) Won
                      </option>
                      <option defaultValue="Kuwaiti Dinar" className="currency">
                        Kuwait Dinar
                      </option>
                      <option
                        defaultValue="Kyrgystani Som"
                        className="currency"
                      >
                        Kyrgyzstan Som
                      </option>
                      <option defaultValue="Laotian Kip" className="currency">
                        Laos Kip
                      </option>
                      <option defaultValue="Latvian Lats" className="currency">
                        Latvian Lats
                      </option>
                      <option
                        defaultValue="Lebanese Pound"
                        className="currency"
                      >
                        Lebanon Pound
                      </option>
                      <option defaultValue="Lesotho Loti" className="currency">
                        Lesotho Loti
                      </option>
                      <option
                        defaultValue="Liberian Dollar"
                        className="currency"
                      >
                        Liberia Dollar
                      </option>
                      <option defaultValue="Libyan Dinar" className="currency">
                        Libya Dinar
                      </option>
                      <option
                        defaultValue="Lithuanian litas"
                        className="currency"
                      >
                        Lithuanian litas
                      </option>
                      <option
                        defaultValue="Macanese Pataca"
                        className="currency"
                      >
                        Macau Pataca
                      </option>
                      <option
                        defaultValue="Macedonian Denar"
                        className="currency"
                      >
                        Macedonia Denar
                      </option>
                      <option
                        defaultValue="Malagasy Ariary"
                        className="currency"
                      >
                        Madagascar Ariary
                      </option>
                      <option
                        defaultValue="Malawian Kwacha"
                        className="currency"
                      >
                        Malawi Kwacha
                      </option>
                      <option
                        defaultValue="Malaysian Ringgit"
                        className="currency"
                      >
                        Malaysia Ringgit
                      </option>
                      <option
                        defaultValue="Maldivian Rufiya"
                        className="currency"
                      >
                        Maldives (Maldive Islands) Rufiyaa
                      </option>
                      <option
                        defaultValue="Mauritanian Ouguiya"
                        className="currency"
                      >
                        Mauritania Ouguiya
                      </option>
                      <option
                        defaultValue="Mauritian Rupee"
                        className="currency"
                      >
                        Mauritius Rupee
                      </option>
                      <option defaultValue="Mexican Peso" className="currency">
                        Mexico Peso
                      </option>
                      <option defaultValue="Moldovan Leu" className="currency">
                        Moldova Leu
                      </option>
                      <option
                        defaultValue="Mongolian Tugrik"
                        className="currency"
                      >
                        Mongolia Tughrik
                      </option>
                      <option
                        defaultValue="Moroccan Dirham"
                        className="currency"
                      >
                        Morocco Dirham
                      </option>
                      <option
                        defaultValue="Mozambican Metical"
                        className="currency"
                      >
                        Mozambique Metical
                      </option>
                      <option defaultValue="Myanmar Kyat" className="currency">
                        Myanmar (Burma) Kyat
                      </option>
                      <option
                        defaultValue="Namibian Dollar"
                        className="currency"
                      >
                        Namibia Dollar
                      </option>
                      <option
                        defaultValue="Nepalese Rupee"
                        className="currency"
                      >
                        Nepal Rupee
                      </option>
                      <option
                        defaultValue="Netherlands Antillean Guilder"
                        className="currency"
                      >
                        Netherlands Antilles Guilder
                      </option>
                      <option
                        defaultValue="New Zealand Dollar"
                        className="currency"
                      >
                        New Zealand Dollar
                      </option>
                      <option
                        defaultValue="Nicaraguan Córdoba"
                        className="currency"
                      >
                        Nicaragua Cordoba
                      </option>
                      <option
                        defaultValue="Nigerian Naira"
                        className="currency"
                      >
                        Nigeria Naira
                      </option>
                      <option
                        defaultValue="Norwegian Krone"
                        className="currency"
                      >
                        Norway Krone
                      </option>
                      <option defaultValue="Omani Rial" className="currency">
                        Oman Rial
                      </option>
                      <option
                        defaultValue="Pakistani Rupee"
                        className="currency"
                      >
                        Pakistan Rupee
                      </option>
                      <option
                        defaultValue="Panamanian Balboa"
                        className="currency"
                      >
                        Panama Balboa
                      </option>
                      <option
                        defaultValue="Papua New Guinean Kina"
                        className="currency"
                      >
                        Papua New Guinea Kina
                      </option>
                      <option
                        defaultValue="Paraguayan Guarani"
                        className="currency"
                      >
                        Paraguay Guarani
                      </option>
                      <option defaultValue="Peruvian Sol" className="currency">
                        Peru Sol
                      </option>
                      <option
                        defaultValue="Philippine Peso"
                        className="currency"
                      >
                        Philippines Peso
                      </option>
                      <option defaultValue="Polish Zloty" className="currency">
                        Poland Zloty
                      </option>
                      <option defaultValue="Qatari Riyal" className="currency">
                        Qatar Riyal
                      </option>
                      <option defaultValue="Romanian Leu" className="currency">
                        Romania New Leu
                      </option>
                      <option defaultValue="Russian Ruble" className="currency">
                        Russia Ruble
                      </option>
                      <option defaultValue="Rwandan Franc" className="currency">
                        Rwanda Franc
                      </option>
                      <option
                        defaultValue="St. Helena Pound"
                        className="currency"
                      >
                        Saint Helena Pound
                      </option>
                      <option defaultValue="Samoan Tala" className="currency">
                        Samoa Tala
                      </option>
                      <option
                        defaultValue="São Tomé &amp; Príncipe Dobra"
                        className="currency"
                      >
                        Sao Tome and Principe Dobra
                      </option>
                      <option defaultValue="Saudi Riyal" className="currency">
                        Saudi Arabia Riyal
                      </option>
                      <option
                        defaultValue="Seborga Luigino"
                        className="currency"
                      >
                        Seborga Luigino
                      </option>
                      <option defaultValue="Serbian Dinar" className="currency">
                        Serbia Dinar
                      </option>
                      <option
                        defaultValue="Seychellois Rupee"
                        className="currency"
                      >
                        Seychelles Rupee
                      </option>
                      <option
                        defaultValue="Sierra Leonean Leone"
                        className="currency"
                      >
                        Sierra Leone Leone
                      </option>
                      <option
                        defaultValue="Singapore Dollar"
                        className="currency"
                      >
                        Singapore Dollar
                      </option>
                      <option
                        defaultValue="Solomon Islands Dollar"
                        className="currency"
                      >
                        Solomon Islands Dollar
                      </option>
                      <option
                        defaultValue="Somali Shilling"
                        className="currency"
                      >
                        Somalia Shilling
                      </option>
                      <option
                        defaultValue="South African Rand"
                        className="currency"
                      >
                        South Africa Rand
                      </option>
                      <option
                        defaultValue="Sri Lankan Rupee"
                        className="currency"
                      >
                        Sri Lanka Rupee
                      </option>
                      <option
                        defaultValue="Sudanese Pound"
                        className="currency"
                      >
                        Sudan Pound
                      </option>
                      <option
                        defaultValue="Surinamese Dollar"
                        className="currency"
                      >
                        Suriname Dollar
                      </option>
                      <option
                        defaultValue="Swazi Lilangeni"
                        className="currency"
                      >
                        Swaziland Lilangeni
                      </option>
                      <option defaultValue="Swedish Krona" className="currency">
                        Sweden Krona
                      </option>
                      <option defaultValue="Swiss Franc" className="currency">
                        Switzerland Franc
                      </option>
                      <option defaultValue="Syrian Pound" className="currency">
                        Syria Pound
                      </option>
                      <option
                        defaultValue="New Taiwan Dollar"
                        className="currency"
                      >
                        Taiwan New Dollar
                      </option>
                      <option
                        defaultValue="Tajikistani Somoni"
                        className="currency"
                      >
                        Tajikistan Somoni
                      </option>
                      <option
                        defaultValue="Tanzanian Shilling"
                        className="currency"
                      >
                        Tanzania Shilling
                      </option>
                      <option defaultValue="Thai Baht" className="currency">
                        Thailand Baht
                      </option>
                      <option
                        defaultValue="Tongan Paʻanga"
                        className="currency"
                      >
                        Tonga Pa'anga
                      </option>
                      <option
                        defaultValue="Transnistrian ruble"
                        className="currency"
                      >
                        Transnistrian ruble
                      </option>
                      <option
                        defaultValue="Trinidad &amp; Tobago Dollar"
                        className="currency"
                      >
                        Trinidad and Tobago Dollar
                      </option>
                      <option
                        defaultValue="Tunisian Dinar"
                        className="currency"
                      >
                        Tunisia Dinar
                      </option>
                      <option defaultValue="Turkish Lira" className="currency">
                        Turkey Lira
                      </option>
                      <option
                        defaultValue="Turkmenistani Manat"
                        className="currency"
                      >
                        Turkmenistan Manat
                      </option>
                      <option defaultValue="Tuvalu Dollar" className="currency">
                        Tuvalu Dollar
                      </option>
                      <option
                        defaultValue="Ugandan Shilling"
                        className="currency"
                      >
                        Uganda Shilling
                      </option>
                      <option
                        defaultValue="Ukrainian Hryvnia"
                        className="currency"
                      >
                        Ukraine Hryvnia
                      </option>
                      <option
                        defaultValue="United Arab Emirates Dirham"
                        className="currency"
                      >
                        United Arab Emirates Dirham
                      </option>
                      <option defaultValue="British Pound" className="currency">
                        United Kingdom Pound
                      </option>
                      <option defaultValue="US Dollar" className="currency">
                        United States Dollar
                      </option>
                      <option
                        defaultValue="Uruguayan Peso"
                        className="currency"
                      >
                        Uruguay Peso
                      </option>
                      <option
                        defaultValue="Uzbekistani Som"
                        className="currency"
                      >
                        Uzbekistan Som
                      </option>
                      <option defaultValue="Vanuatu Vatu" className="currency">
                        Vanuatu Vatu
                      </option>
                      <option
                        defaultValue="Venezuelan Bolívar"
                        className="currency"
                      >
                        Venezuela Bolivar
                      </option>
                      <option
                        defaultValue="Vietnamese Dong"
                        className="currency"
                      >
                        Viet Nam Dong
                      </option>
                      <option defaultValue="Yemeni Rial" className="currency">
                        Yemen Rial
                      </option>
                      <option
                        defaultValue="Zambian Kwacha"
                        className="currency"
                      >
                        Zambia Kwacha
                      </option>
                      <option
                        defaultValue="Zimbabwean Dollar (2009)"
                        className="currency"
                      >
                        Zimbabwe Dollar
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Number Format</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select name="amtFormatting" className="form-select">
                      <option defaultValue="1">X,XXX.yy</option>
                      <option defaultValue="2">X.XXX,yy</option>
                    </select>
                  </div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Phone Format</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select className="form-select">
                      <option defaultValue="1">USA</option>
                      <option defaultValue="2">India</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#privacyCommnication"
              aria-expanded="false"
              aria-controls="privacyCommnication"
            >
              <FontAwesomeIcon icon={Icons.faLock} className="me-2" /> Privacy &
              Communication
            </h2>
            <div
              id="privacyCommnication"
              className="accordion-collapse collapse"
              aria-labelledby="privacyCommnication"
              data-bs-parent="#SwiftfCloudSettings"
            >
              <div className="accordion-body">
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">Who Can Contact You</h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select className="form-select">
                      <option defaultValue="Friends of Friends">
                        Friends of Friends
                      </option>
                      <option defaultValue="Friends Only">Friends Only</option>
                      <option defaultValue="All SwiftCloud Users">
                        All SwiftCloud Users
                      </option>
                      <option defaultValue="Anyone">Anyone</option>
                    </select>
                  </div>
                </div>
                <div className="row g-0 block-content align-items-center border-bottom">
                  <div className="col-6">
                    <h5 className="block-title">
                      SwiftCloud Only Communication Preferences
                    </h5>
                  </div>
                  <div className="col-6 text-end pr-15">
                    <select className="form-select">
                      <option defaultValue="Low - Almost Never">
                        Low - Almost Never
                      </option>
                      <option defaultValue="Medium - Summary &amp; Digest Only">
                        Medium - Summary &amp; Digest Only
                      </option>
                      <option defaultValue="High - Keep Me Fully Informed">
                        High - Keep Me Fully Informed
                      </option>
                      <option defaultValue="Anyone">Anyone</option>
                    </select>
                  </div>
                </div>
                {/* Close Or Privatize Account */}
                <ClosePrivatizeAccount />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header accordion-button collapsed"
              // onClick="window.location.href = 'finance.html'"
            >
              <FontAwesomeIcon icon={Icons.faDollar} className="me-2" />{" "}
              Financial
            </h2>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#commnication"
              aria-expanded="false"
              aria-controls="commnication"
            >
              <FontAwesomeIcon icon={Icons.faComments} className="me-2" />{" "}
              Communication
            </h2>
            <div
              id="commnication"
              className="accordion-collapse collapse"
              aria-labelledby="commnication"
              data-bs-parent="#SwiftfCloudSettings"
            >
              <div className="accordion-body">
                <h4 className="text-center py-4">Coming soon</h4>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#myRadar"
              aria-expanded="false"
              aria-controls="myRadar"
            >
              <FontAwesomeIcon icon={Icons.faBullseye} className="me-2" /> On My
              Radar
            </h2>
            <div
              id="myRadar"
              className="accordion-collapse collapse"
              aria-labelledby="myRadar"
              data-bs-parent="#SwiftfCloudSettings"
            >
              <div className="accordion-body">
                <h4 className="text-center py-4">Coming soon</h4>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#advanced"
              aria-expanded="false"
              aria-controls="advanced"
            >
              <FontAwesomeIcon icon={Icons.faGear} className="me-2" /> Advanced
            </h2>
            <div
              id="advanced"
              className="accordion-collapse collapse"
              aria-labelledby="advanced"
              data-bs-parent="#SwiftfCloudSettings"
            >
              <div className="accordion-body">
                <h4 className="text-center py-4">Coming soon</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
