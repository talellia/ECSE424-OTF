import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom"
import Report from './report'



import './big-add.css'

const BigAdd = (props,{onClick}) => {
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
  
    if(props.rootClassName === "val1"){
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
    else{
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
              <span>Test2</span>
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
