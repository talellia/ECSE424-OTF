import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom"

import './menue.css'

const Menue = (props) => {

  const history = useHistory();

  const message = () => {
    history.push("/message")
  }
  const post = () => {
    history.push("/post")
  }

  const contactUs = () => {
    history.push("/contact-us2")
  }

  const accountEdit = () => {
    history.push("/account")
  }

  const signOut = () => {
    history.push("/")
  }
  //temporary for only home page, only one having menu now
  function home() {
    history.push("/home")
  }
  return (
    <div id="menu" className={`menue-container ${props.rootClassName} `}>
      <div className="menue-menu">
        <img
          alt="Rectangle121788"
          src="/playground_assets/rectangle121788-qebj-400w.png"
          className="menue-rectangle12"
        />
        <button className="menue-main-button" onClick={home}>
          <img
            alt="Rectangle20I178"
            src="/playground_assets/rectangle20i178-qde-200h.png"
            className="menue-rectangle20"
          />
          <div className="menue-frameiconhome">
            <img
              alt="VectorI178"
              src="/playground_assets/vectori178-zvx.svg"
              className="menue-vector"
            />
          </div>
          <span className="menue-text">
            <span>Main</span>
          </span>
        </button>
        <button className="menue-post-button" onClick={post}>
          <img
            alt="Rectangle17I178"
            src="/playground_assets/rectangle17i178-dd6-200h.png"
            className="menue-rectangle17"
          />
          <span className="menue-text02">
            <span>Post</span>
          </span>
          <div className="menue-frameiconcompose">
            <img
              alt="VectorI178"
              src="/playground_assets/vectori178-bgq.svg"
              className="menue-vector1"
            />
          </div>
        </button>
        <button className="menue-message-button" onClick={message}>
          <img
            alt="Rectangle19I178"
            src="/playground_assets/rectangle19i178-ptk-200h.png"
            className="menue-rectangle19"
          />
          <span className="menue-text04">
            <span>Message</span>
          </span>
          <div className="menue-frameiconmessage">
            <img
              alt="VectorI178"
              src="/playground_assets/vectori178-60e.svg"
              className="menue-vector2"
            />
          </div>
        </button>
        <button className="menue-contact-us-button" onClick={contactUs}>
          <img
            alt="Rectangle21I178"
            src="/playground_assets/rectangle21i178-mgqu-200h.png"
            className="menue-rectangle21"
          />
          <div className="menue-frameiconinfo">
            <img
              alt="VectorI178"
              src="/playground_assets/vectori178-4mnl.svg"
              className="menue-vector3"
            />
            <img
              alt="VectorI178"
              src="/playground_assets/vectori178-mvh3.svg"
              className="menue-vector4"
            />
          </div>
          <span className="menue-text10">
            <span>Contact Us</span>
          </span>
        </button>
        <button className="menue-sign-out-button" onClick={signOut}>
          <img
            alt="Rectangle20I178"
            src="/playground_assets/rectangle20i178-0ry9-200h.png"
            className="menue-rectangle201"
          />
          <div className="menue-frameiconsignin">
            <img
              alt="VectorI178"
              src="/playground_assets/vectori178-hgfg.svg"
              className="menue-vector5"
            />
          </div>
          <span className="menue-text12">
            <span>
              <span>Sign Out</span>
              <br></br>
              <span></span>
            </span>
          </span>
        </button>
        <span className="menue-text17">
          <span>Menu</span>
        </span>
        <img
          alt="Line11789"
          src="/playground_assets/line11789-e10g.svg"
          className="menue-line1"
        />
        <button id="accountmenu" className="menue-account" onClick={accountEdit}>
          <span className="menue-text19">
            <span>SamSam5</span>
          </span>
          <img
            alt="Rectangle22I178"
            src="/playground_assets/rectangle22i178-9bo6-300h.png"
            className="menue-rectangle22"
          />
          <img
            alt="ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb51I178"
            src="/playground_assets/ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb51i178-bjeh-200h.png"
            className="menue-ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb51"
          />
        </button>
      </div>
    </div>
  )
}


Menue.defaultProps = {
  rootClassName: '',
}

Menue.propTypes = {
  rootClassName: PropTypes.string,
}

export default Menue
