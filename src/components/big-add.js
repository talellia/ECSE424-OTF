import React from 'react'

import './big-add.css'

const BigAdd = ({onClick}) => {
  return (
    <div className="big-add-container">
      <div className="big-add-add-pop-up">
        <div className="big-add-rectangle15">
          <img
            alt="Rectangle14I139"
            src="/playground_assets/rectangle14i139-fog-700h.png"
            className="big-add-rectangle14"
          />
        </div>
        <span className="big-add-text">
          <span>Title</span>
        </span>
        <img
          alt="ScreenShot20221011at34721396"
          src="/playground_assets/screenshot20221011at34721396-l10o-200h.png"
          className="big-add-screen-shot20221011at3472"
        />
        <div className="big-add-add-profile">
          <img
            alt="Rectangle16I139"
            src="/playground_assets/rectangle16i139-3q0e-200h.png"
            className="big-add-rectangle16"
          />
          <span className="big-add-text02">
            <span>
              <span>NAME</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img
            alt="IMAGE25selc9jemn411I139"
            src="/playground_assets/image25selc9jemn411i139-wpy-200h.png"
            className="big-add-i-m-a-g-e25selc9jemn411"
          />
        </div>
        <div className="big-add-description">
          <img
            alt="Rectangle25I139"
            src="/playground_assets/rectangle25i139-a08q-600w.png"
            className="big-add-rectangle25"
          />
          <span className="big-add-text07">
            <span>Description:</span>
          </span>
          <span className="big-add-text09">
            <span> Blabla</span>
          </span>
        </div>
        <div className="big-add-frame-t-a-g-box">
          <img
            alt="Rectangle26I139"
            src="/playground_assets/rectangle26i139-uup-200h.png"
            className="big-add-rectangle26"
          />
          <span className="big-add-text11">
            <span>TAG:</span>
          </span>
          <img
            alt="Rectangle27I139"
            src="/playground_assets/rectangle27i139-didi-200h.png"
            className="big-add-rectangle27"
          />
          <img
            alt="Rectangle32I139"
            src="/playground_assets/rectangle32i139-y01-200h.png"
            className="big-add-rectangle32"
          />
          <img
            alt="Rectangle33I139"
            src="/playground_assets/rectangle33i139-yzs-200h.png"
            className="big-add-rectangle33"
          />
          <img
            alt="Rectangle34I139"
            src="/playground_assets/rectangle34i139-33fq-200h.png"
            className="big-add-rectangle34"
          />
          <img
            alt="Rectangle35I139"
            src="/playground_assets/rectangle35i139-pw0c-200h.png"
            className="big-add-rectangle35"
          />
          <img
            alt="Rectangle29I139"
            src="/playground_assets/rectangle29i139-6ed-200h.png"
            className="big-add-rectangle29"
          />
          <img
            alt="Rectangle30I139"
            src="/playground_assets/rectangle30i139-bnc-200h.png"
            className="big-add-rectangle30"
          />
          <img
            alt="Rectangle31I139"
            src="/playground_assets/rectangle31i139-pzyi-200h.png"
            className="big-add-rectangle31"
          />
        </div>
        <div className="big-add-framebasic-outlinemedium-base" onClick={onClick}>
          <div className="big-add-content">
            <span className="big-add-text13">
              <span>Apply</span>
            </span>
            <div className="big-add-iconmedium">
              <img
                alt="IconI140"
                src="/playground_assets/iconi140-o99.svg"
                className="big-add-icon"
              />
            </div>
          </div>
        </div>
        <button className="big-add-basic-outline-button" >
          <div className="big-add-framebasic-outlinemedium-base1" onClick={onClick}>
            <div className="big-add-content1">
              <span className="big-add-text15">
                <span>Back</span>
              </span>
            </div>
          </div>
        </button>
        <span className="big-add-text17">
          <span>Report</span>
        </span>
      </div>
    </div>
  )
}

export default BigAdd
