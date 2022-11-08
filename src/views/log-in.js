import React from 'react'

import { Helmet } from 'react-helmet'
import { useHistory } from "react-router-dom"

import './log-in.css'

const LogIn = (props) => {

  const history = useHistory();

  //TODO: edit this to get the input 
  const home = () => {
    history.push("/home")
  }
  return (
    <div className="log-in-container">
      <Helmet>
        <title>LogIn - exported project</title>
        <meta property="og:title" content="LogIn - exported project" />
      </Helmet>
      <div className="log-in-log-in">
        <img
          alt="IMAGE54034111783"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/a8a198e7-13e5-4713-ada1-8262043e632b?org_if_sml=13601864"
          className="log-in-i-m-a-g-e5403411"
        />
        <div className="log-in-footnote">
          <img
            alt="Rectangle21785"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/d6a9a15d-9b4e-4853-93f6-d0d74f57d1bc?org_if_sml=1607"
            className="log-in-rectangle2"
          />
          <span className="log-in-text">
            <span>Contact Us</span>
          </span>
        </div>
        <img
          alt="Rectangle11787"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/80ba29e2-588e-44ee-b3dc-396ecd5dded4?org_if_sml=15412"
          className="log-in-rectangle1"
        />
        <div className="initial-title">
          <span className="initial-text19">
            <span className="initial-text20">T</span>
            <span className="smallspace"> </span>
            <span>EAM</span>
          </span>
          <span className="initial-text22">
            <span className="initial-text23">O</span>
            <span>GAME</span>
          </span>
          <span className="initial-text25">
            <span className="initial-text26">F</span>
            <span className="smallspace"> </span>
            <span>INDER</span>
          </span>
        </div>
        <button type="button" className="log-in-framemodernlarge-base" onClick={home}> 
          <div className="log-in-content">
            <span className="log-in-text13">
              <span>LOG IN</span>
            </span>
            <div className="log-in-iconlarge">
              <img
                alt="IconI178"
                src="/playground_assets/iconi178-6jpg.svg"
                className="log-in-icon"
              />
            </div>
          </div>
        </button>
        <div className="log-in-login1">
          <img
            alt="Rectangle31791"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/58d71eb3-9e34-41bf-b9eb-70f6c9e194bb?org_if_sml=13737"
            className="log-in-rectangle3"
          />
          <span className="loginInfo">
            <b>LOG IN</b>
          </span>
          <span className="loginInfo1">
            txtx
          </span>
          <span className="log-in-text15">
            <span>Password</span>
          </span>
          <input type="text" id="password" name="password"
            alt="Rectangle51793"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/2d3f24ec-499d-4d2c-a808-da3d163cbea4?org_if_sml=1890"
            className="log-in-rectangle5"
          />
          <input type="text" id="username" name="username"
            alt="Rectangle61794"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/ba9bc22e-672a-490a-b859-1596af4ba09d?org_if_sml=1890"
            className="log-in-rectangle6"
          />
          <span className="log-in-text17">
            <span>User Name</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LogIn
