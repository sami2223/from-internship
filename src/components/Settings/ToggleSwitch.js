import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    // <div className="container">
    //   {label}{" "}
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="checkbox"
        name={label}
        id={label}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <label className="label" htmlFor={label}>
        <span className="inner" />
        <span className="switch" />
      </label>
    </div>
    // </div>
  );
};

export default ToggleSwitch;
