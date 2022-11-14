import React from 'react'

import { Helmet } from 'react-helmet'
import Menue from '../components/menue';

import './contact-us2.css'

const ContactUs2 = (props) => {
  return (
    <div className="contact-us2-container">
      <Helmet>
        <title>ContactUs2 - exported project</title>
        <meta property="og:title" content="ContactUs2 - exported project" />
      </Helmet>
      <Menue rootClassName={"menue-home-page"}></Menue>
      <div className="contact-us2-contactus2">
      <div className="home-back-ground">
          <img
            alt="IMAGE5403411I111"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0fd2c00f-c6f3-4997-950d-9075e67bf09d?org_if_sml=13606374"
            className="home-i-m-a-g-e5403411"
          />
          <span className="home-text">
            <span className="home-text01">O</span>
            <span className="home-text02">games</span>
            <span className="home-text03">T</span>
            <span className="home-text04">eam</span>
            <span className="home-text05">F</span>
            <span className="home-text06">inder</span>
          </span>
          <img
            alt="Rectangle13I111"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/42d5471f-603b-4450-9aa3-d5a56e0b2e06?org_if_sml=18841"
            className="home-rectangle13"
          />
          <button id="menueIcon" onClick={openMenue} className="home-frameiconmenu">
            <img
              type="menu-fold"
              alt="VectorI111"
              src="/playground_assets/vectori111-ikra.svg"
              className="home-vector"
            />
          </button>
          <span className="home-text07">
            <span>Message</span>
          </span>
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/3b47f242-3d28-42de-a8d1-81bde8737a46?org_if_sml=17105"
          alt="Rectangle993014"
          className="contact-us2-rectangle99"
        />
        <button className="contact-us2-basic-outline-button"></button>
        <div className="contact-us2-component19">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/ff0c1b40-0964-4a7d-a9fe-f2fcf5b7dc5a?org_if_sml=17105"
            alt="Rectangle100I301"
            className="contact-us2-rectangle100"
          />
          <button className="contact-us2-basic-outline-button1">
            <div className="contact-us2-framebasic-outlinelarge-base">
              <div className="contact-us2-content">
                <span className="contact-us2-text09">
                  <span>Send</span>
                </span>
                <div className="contact-us2-iconlarge">
                  <img
                    src="/playground_assets/iconi301-vt5r.svg"
                    alt="IconI301"
                    className="contact-us2-icon"
                  />
                </div>
              </div>
            </div>
          </button>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/bf03592a-cdf3-49b0-a76e-85205a615e22?org_if_sml=12761"
            alt="Rectangle101I301"
            className="contact-us2-rectangle101"
          />
          <span className="contact-us2-text11">
            <span>Message</span>
          </span>
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/dbe9a62e-e100-4b10-b02c-9f4f71964403?org_if_sml=11104"
          alt="Rectangle1023014"
          className="contact-us2-rectangle102"
        />
        <img
          src="/playground_assets/vector13015-v6w.svg"
          alt="Vector13015"
          className="contact-us2-vector1"
        />
        <span className="contact-us2-text13">
          <span>Reason</span>
        </span>
      </div>
    </div>
  )
}

function   openMenue() {
  if (document.getElementById("menu").style.visibility === "visible"){
    document.getElementById("menu").style.visibility = "hidden"
    document.getElementById("menueIcon").style.left = "204px"
  }else{
    document.getElementById("menu").style.visibility = "visible"
    document.getElementById("menueIcon").style.left = "calc(204px + 353px)"
  }

}

export default ContactUs2
