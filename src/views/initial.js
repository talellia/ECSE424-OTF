import React from 'react'

import { Helmet } from 'react-helmet'
import { useHistory } from "react-router-dom"

import './initial.css'

const Initial = (props) => {
  const history = useHistory();

  const SignUp = () => {
    history.push("/sign-up")
  }

  const SignIn = () => {
    history.push("/log-in")
  }
  const ContactUs = () => {
    history.push("/contact-us1")
  }

  return (
    <div className="initial-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="initial-initial">
        <img
          alt="IMAGE1481196340multiplayergames11761"
          src="/playground_assets/image1481196340multiplayergames11761-nzb-1000w.png"
          className="initial-i-m-a-g-e1481196340multiplayergames1"
        />
        <img
          alt="IMAGE54034111762"
          src="/playground_assets/image54034111762-cqeh-2300w.png"
          className="initial-i-m-a-g-e5403411"
        />
        <img
          alt="Rectangle11763"
          src="/playground_assets/rectangle11763-cloe-1500w.png"
          className="initial-rectangle1"
        />
        <div className="initial-text-info">
          <img
            alt="Ellipse21765"
            src="/playground_assets/ellipse21765-iqe-500h.png"
            className="initial-ellipse2"
          />
          <img
            alt="Ellipse11766"
            src="/playground_assets/ellipse11766-rx7m.svg"
            className="initial-ellipse1"
          />
          <img
            alt="Ellipse41767"
            src="/playground_assets/ellipse41767-6b4v.svg"
            className="initial-ellipse4"
          />
          <span className="initial-text">
            <span>
              <span>
                Post an add for the teamates you are looking
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>for.</span>
            </span>
          </span>
          <span className="initial-text05">
            <span>
                             Describe
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
                           your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
                       game style
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
                  and look for
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
               people who
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> need you.</span>
          </span>
          <span className="initial-text17">
            <span>Enjoy games together</span>
          </span>
        </div>
        <div className="initial-title">
          <span className="initial-text19">
            <span className="initial-text20">T</span>
            <span className="smallsplace">&nbsp</span>
            <span className="titlecolor">EAM</span>
          </span>
          <span className="initial-text22">
            <span className="initial-text23">G</span>
            <span className="smallsplace">&nbsp &nbsp &nbsp</span>
            <span className="titlecolor">AME</span>
          </span>
          <span className="initial-text25">
            <span className="initial-text26">F</span>
            <span className="smallsplace">&nbspsada </span>
            <span className="titlecolor">INDER</span>
          </span>
        </div>
        <button className="initial-framemodernlarge-base" onClick={SignUp}>
          <div className="initial-content">
            <span className="initial-text28">
              <span>SIGN UP</span>
            </span>
            <div className="initial-iconlarge">
              <img
                alt="IconI177"
                src="/playground_assets/iconi177-c92o.svg"
                className="initial-icon"
              />
            </div>
          </div>
        </button>
        <button className="initial-framemodernlarge-base1" onClick={SignIn}>
          <div className="initial-content1">
            <span className="initial-text30">
              <span>LOG IN</span>
            </span>
            <div className="initial-iconlarge1">
              <img
                alt="IconI177"
                src="/playground_assets/iconi177-86wt.svg"
                className="initial-icon1"
              />
            </div>
          </div>
        </button>
        <img
          alt="Rectangle21780"
          src="/playground_assets/rectangle21780-oxp-200h.png"
          className="initial-rectangle2"
        />
        <span className="initial-text32" onClick={ContactUs}>
          <span>Contact Us</span>
        </span>
      </div>
    </div>
  )
}

export default Initial
