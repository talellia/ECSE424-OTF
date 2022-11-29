import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom"
import Report from './report'



import './big-add.css'

const BigAdd = (props, { onClick }) => {
  const history = useHistory();

  const URUP = () => {
    history.push("/account1")
  }

  const close = () => {
    document.getElementById("val1BigAdd").style.visibility = "hidden";
  }
  const message = () => {
    history.push("/message")
  }
  const report = () => {
    document.getElementById("report").style.visibility = "visible";
  }

  if (props.rootClassName === "val1") {
    return (
      <div id="val1BigAdd" className={`big-add-container ${props.rootClassName} `}>
        <div className="big-add-add-pop-up">
          <div className="big-add-rectangle15">
            <img
              alt="Rectangle14I139"
              src="/playground_assets/rectangle14i139-fog-700h.png"
              className="big-add-rectangle14"
            />
          </div>
          <span id="bigaddtitle" className="big-add-text">
            <span>LF1! Need a duelist in immortal rank to join our 4 stack.</span>
          </span>
          <img
            alt="ScreenShot20221011at34721396"
            src="/playground_assets/screenshot20221011at34721396-l10o-200h.png"
            className="big-add-screen-shot20221011at3472"
          />
          <div className="big-add-add-profile" onClick={URUP}>
            <img
              alt="Rectangle16I139"
              src="/playground_assets/rectangle16i139-3q0e-200h.png"
              className="big-add-rectangle16"
            />
            <span className="big-add-text02">
              <span>
                <span>URUP</span>
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
              <span>
                <br></br>
                We are a group of 4 playuers. We are all in immortal and we want to start a team.
                We are thinking of enroling ourslefts in competitions. We are looking for a duelist main who can
                swap to any role according to the map.
                HMU if you are interested, we practice on weekends.
              </span>
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
            <div class="rectangle1">
              <span className="big-add-rectangle27"> Duelist </span>
            </div>
            <div class="rectangle2">
              <span className="big-add-rectangle32"> 5Stack </span>
            </div>
            <div class="rectangle3">
              <span className="big-add-rectangle33"> Immortal </span>
            </div>
            <div class="rectangle4">
              <span className="big-add-rectangle30"> Practice </span>
            </div>
          </div>
          <button className="big-add-framebasic-outlinemedium-base" onClick={message}>
            <div className="big-add-content">
              <span className="big-add-text13">
                <span>Message</span>
              </span>
              <div className="big-add-iconmedium">
                <img
                  alt="IconI140"
                  src="/playground_assets/iconi140-o99.svg"
                  className="big-add-icon"
                />
              </div>
            </div>
          </button>
          <button className="big-add-basic-outline-button" >
            <div className="big-add-framebasic-outlinemedium-base1" onClick={close}>
              <div className="big-add-content1">
                <span className="big-add-text15">
                  <span>Back</span>
                </span>
              </div>
            </div>
          </button>
          <span className="big-add-text17" onClick={report}>
            <span>Report</span>
          </span>
          <Report rootClassName="Report"></Report>
        </div>
      </div>
    )
  }
  else {
    console.log("here2");
    return (
      <div className={`big-add-container ${props.rootClassName} `}>
        <div className="big-add-add-pop-up">
          <div className="big-add-rectangle15">
            <img
              alt="Rectangle14I139"
              src="/playground_assets/rectangle14i139-fog-700h.png"
              className="big-add-rectangle14"
            />
          </div>
          <span id="bigaddtitle" className="big-add-text">
            <span>LF Diamond Tank. Full team ready</span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/ee7f8a0b-edd2-4111-9d81-047a177021dc?org_if_sml=152095"
            alt="ScreenShot20221011at3472I715"
            className="big-add-screen-shot20221011at34721"
          />
          <div className="big-add-add-profile">

            <span className="big-add-text02">
              <span>
                <span>Potato22</span>
                <br></br>
                <span></span>
              </span>
            </span>
            <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/2b775e3e-383c-48c3-80dc-b13988734763?org_if_sml=115223"
            alt="IMAGE25selc9jemn411I715"
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
              <span> <br></br>
                We are looking for a tank. We have great healer and dps but we keep getting paired with shit tanks. Was not much of a problem before OW2 came out since it used to be 4 players. We play togerther for the past 2 years so we are very close.
                Don't let that scare you! This is to show that once you are part of the team YOU ARE PART OF THE TEAM.
              </span>
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
            <div class="rectangle1">
              <span className="big-add-rectangle27"> Tank </span>
            </div>
            <div class="rectangle2">
              <span className="big-add-rectangle32"> 5Stack </span>
            </div>
            <div class="rectangle3">
              <span className="big-add-rectangle33"> Diamond </span>
            </div>
            <div class="rectangle4">
              <span className="big-add-rectangle30"> Practice </span>
            </div>
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
          <button className="big-add-text17">
            <span>Report</span>
          </button>
        </div>
      </div>
    )
  }


}

BigAdd.defaultProps = {
  rootClassName: '',
}

BigAdd.propTypes = {
  rootClassName: PropTypes.string,
}


export default BigAdd
