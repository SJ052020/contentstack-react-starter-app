import React from "react";

export default function EmailTemplateDropDown(props:any){
  const isTemplateOpen = Object.keys(props.entries) && props.openEmailTemplate;
  let customStyles = {};
  if(isTemplateOpen){
    customStyles = {
      height: "inherit"
    }
  }
    return (
        <div className="left-section" style={customStyles}>
            <p className="left-section-heading">Please select the template</p>
            <div className="left-section-select-section">
                <select
                className="select"
                onChange={props.emailChangeHandler}
                >
                <option style={{ display: "none" }}>
                    Select account email template
                </option>
                <option>New account email template</option>
                </select>
            </div>
            <div className="left-section-button-section">
              <button
                className="button-approve"
                disabled={(Object.keys(props.entries).length === 0 || !props.openEmailTemplate) ? true : false}
              >
                Approve
              </button>
              <button
                className="button-reject"
                disabled={(Object.keys(props.entries).length === 0 || !props.openEmailTemplate) ? true : false}
              >
                Reject
              </button>
            </div>
        </div>
    )
}