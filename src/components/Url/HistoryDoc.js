import React, { useRef, useState } from "react";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/images/swift_cloud_flag.jpg";

const HistoryDoc = ({
  Dropdown,
  DropdownButton,
  Icons,
  FontAwesomeIcon,
  showHistory,
  setShowHistory,
}) => {
  const inputFileRef = useRef();
  const [dropdownSelectedValue, setDropdownSelectedValue] = useState({
    title: "Nothing selected",
    value: "",
  });

  const LabelWithIcon = ({ icon, title }) => {
    return (
      <div>
        <FontAwesomeIcon icon={icon} /> {title}
      </div>
    );
  };

  const handleSelect = (e) => {
    let titleText = ""
    if (e === "History") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faHistory}
          title="History"
        />
      );
    } else if (e === "Add Note") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faStickyNote}
          title="Add Note"
        />
      );
    } else if (e === "Generate Report") {
      titleText = (
        <LabelWithIcon
          icon={Icons.faBarChart}
          title="Generate Report"
        />
      );
    }

    setDropdownSelectedValue({
      value: e,
      title: titleText,
    });
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log("fileObj is", fileObj);
    // 👇️ reset file input
    event.target.value = null;
    console.log(fileObj.name);
  };

  const handleFileUploadClick = () => {
    inputFileRef.current.click();
  };

  return (
    <>
      {showHistory && (
        <div className="SCChatDockNonSocialAssetOnly">
          <div className="ChatDockHeader historyDropdownbtn">
            <DropdownButton
              key="dropdown-item-button2"
              // title={dropdownIcon}
              title={dropdownSelectedValue.title}
              className="ChatDockInputOpt url"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="History">
                <FontAwesomeIcon icon={Icons.faHistory} /> History
              </Dropdown.Item>
              <Dropdown.Item eventKey="Add Note">
                <FontAwesomeIcon icon={Icons.faStickyNote} /> Add Note
              </Dropdown.Item>
              <Dropdown.Item eventKey="Generate Report">
                <FontAwesomeIcon icon={Icons.faBarChart} /> Generate Report
              </Dropdown.Item>
            </DropdownButton>
            <span
              onClick={() => {
                setShowHistory(false);
              }}
              className="btnCloseChatDock"
              data-toggle="tooltip"
              data-placement="left"
              data-animation="false"
              title="Close"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={Icons.faClose} />
            </span>
          </div>
          <div className="ChatDockHistoryContainer">
            <ul className="chat">
              <li className="other">
                <div className="chat-msg">
                  <div className="avatar">
                    <a
                      href="#"
                      className="quickcontact_userSelect d-block"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="SwiftCloud"
                    >
                      <img src={logo} />
                    </a>
                  </div>
                  <div className="msg">
                    <p>
                      <strong>Welcome to SwiftCloud!</strong>
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    <span className="msg-by-time">
                      Private Note by{" "}
                      <a href="contact_detail.html">SwiftCloud</a> at{" "}
                      <time>5:48 pm on Friday, June 10, 2022</time>
                    </span>
                  </div>
                </div>
              </li>
              <li className="other">
                <div className="chat-msg">
                  <div className="avatar">
                    <a
                      href="#"
                      className="quickcontact_userSelect d-block"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-animation="false"
                      title="Roger V."
                    >
                      <img src="images/roger.jpg" />
                    </a>
                  </div>
                  <div className="msg">
                    <p>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      are also reproduced in their exact original form,
                    </p>
                    <span className="msg-by-time">
                      Private Note by <a href="contact_detail.html">Roger V.</a>{" "}
                      at <time>10:00 am on Saturday, June 11, 2022</time>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ChatDockFooterContainer">
            {dropdownSelectedValue.value === "Add Note" && (
              <div className="ChatDockOpt ChatDockPrivateNoteOpt">
                <div className="mb-2">
                  <textarea
                    className="form-control"
                    placeholder="Add Note"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-lg-6 text-start ChatDockPrivateNoteTools">
                    <a
                      href="#Global_URLInjector"
                      data-bs-toggle="modal"
                      data-toggle="tooltip"
                      title="Add URL"
                    >
                      <FontAwesomeIcon icon={Icons.faLink} />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Insert Image/Video"
                    >
                      <FontAwesomeIcon icon={Icons.faCamera} />
                    </a>
                    <span
                      className="chatNoteImg"
                      data-toggle="tooltip"
                      title="Upload file"
                      onClick={handleFileUploadClick}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon icon={Icons.faPaperclip} />
                    </span>
                    <a href="#" data-toggle="tooltip" title="Inject Emoji">
                      <FontAwesomeIcon icon={faFaceSmile} />
                    </a>
                    <input
                      type="file"
                      ref={inputFileRef}
                      accept="image/*"
                      className="chatNoteImgFile"
                      style={{ visibility: "hidden", position: "absolute" }}
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="col-lg-6 text-end">
                    <button type="button" className="btn btn-primary">
                      <FontAwesomeIcon icon={Icons.faCheck} /> Add Note
                    </button>
                  </div>
                </div>
              </div>
            )}
            {dropdownSelectedValue.value === "Generate Report" && (
              <div className="ChatDockOpt ChatDockReportOpt">
                <div className="text-center py-3">
                  {/* <!-- call to data source and insert as note --> */}
                  <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon={Icons.faBarChart} /> Generate Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryDoc;
