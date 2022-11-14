import React from 'react'

import { Helmet } from 'react-helmet'
import Menue from '../components/menue';

import './message.css'

const Message = (props) => {
  return (
    <div className="message-container">
      <Helmet>
        <title>Message - exported project</title>
        <meta property="og:title" content="Message - exported project" />
      </Helmet>
      <div className="messsage-message">
          <Menue rootClassName={"menue-home-page"}></Menue>
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

export default Message
