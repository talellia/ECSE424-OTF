import React from 'react'
import PropTypes from 'prop-types';

import './report.css'

const Report = (props) => {
  return (
    <div id="report" className={`report-container ${props.rootClassName}`}>
      <div className="report-report">
        <span className="reportTitle">Reason For Report</span>
        <img
          src="/playground_assets/rectangle373511-k47-500w.png"
          alt="Rectangle373511"
          className="report-rectangle37"
        />
        <textarea 
          src="/playground_assets/rectangle383511-ow3j-200h.png"
          alt="Rectangle383511"
          className="report-rectangle38"
        ></textarea>
        <span className="report-text">
          <span>Message</span>
        </span>
        <button className="report-basic-outline-button" onClick={closereport}>
          <div className="report-framebasic-outlinemedium-base">
            <div className="report-content">
              <span className="report-text02">
                <span>Back</span>
              </span>
            </div>
          </div>
        </button>
        <button className="report-framebasic-outlinemedium-base1" onClick={submitreport}>
          <div className="report-content1">
            <span className="report-text04">
              <span>Send</span>
            </span>
            <div className="report-iconmedium">
              <img
                src="/playground_assets/iconi351-q7jk.svg"
                alt="IconI351"
                className="report-icon"
              />
            </div>
          </div>
        </button>
        <div className="report-radiowithlabel">
        <input name="rad" type="radio" className="report-radio"/>
          <span className="report-text06">
            <span>Old</span>
          </span>
        </div>
        <div className="report-radiowithlabel1">
        <input name="rad" type="radio" className="report-radio1"/>
          <span className="report-text08">
            <span>Scam</span>
          </span>
        </div>
        <div className="report-radiowithlabel2">
          <input name="rad" type="radio" className="report-radio2"/>
          <span className="report-text10">
            <span>Bad Title</span>
          </span>
        </div>
        <div className="report-radiowithlabel3">
          <input name="rad" type="radio" className="report-radio3"/>
          <span className="report-text12">
            <span>Inapropriet</span>
          </span>
        </div>
        <div className="report-radiowithlabel4">
          <input name="rad" type="radio" className="report-radio4"/>
          <span className="report-text14">
            <span>Wrong game</span>
          </span>
        </div>
        <div className="report-radiowithlabel5">
          <input name="rad" type="radio" className="report-radio5"/>
          <span className="report-text16">
            <span>Other</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function closereport(){
  document.getElementById("report").style.visibility = "hidden";
}

function submitreport(){
  document.getElementById("report").style.visibility = "hidden";
  alert("Your report has sucessfully ben send. Thank you for your help.")
}



Report.defaultProps = {
  rootClassName: '',
}

Report.propTypes = {
  rootClassName: PropTypes.string,
}

export default Report
