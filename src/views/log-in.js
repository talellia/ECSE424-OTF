import React from 'react'

import { Helmet } from 'react-helmet'
import { useHistory } from "react-router-dom"

import './log-in.css'

const LogIn = (props) => {
  const history = useHistory();

  const logIn = () => {
    var x = document.getElementById("password").value;

    if(x === "ECSE424123." ){
      history.push("/home")
    }else{
      alert("Wrong Password")
    }
  }

  const ContactUs = () => {
    history.push("/contact-us1")
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
          <span className="log-in-text" onClick={ContactUs}>
            <span>Contact Us</span>
          </span>
        </div>
        <img
          alt="Rectangle11787"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/80ba29e2-588e-44ee-b3dc-396ecd5dded4?org_if_sml=15412"
          className="log-in-rectangle1"
        />
        <div className="log-in-title">
          <span className="log-in-text04">
            <span className="log-in-text05">T</span>
            <span className="smallsplace">&nbsp</span>
            <span className="titlecolor">EAM</span>
          </span>
          <span className="log-in-text07">
            <span className="log-in-text08">G</span>
            <span className="smallsplace">&nbsp &nbsp &nbsp</span>
            <span className="titlecolor">AME</span>
          </span>
          <span className="log-in-text10">
            <span className="log-in-text11">F</span>
            <span className="smallsplace">&nbspsada </span>
            <span className="titlecolor">INDER</span>
          </span>
        </div>
        <button className="log-in-framemodernlarge-base"  onClick={logIn}>
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
          <span className="log-in-text15">
            <span>Password</span>
          </span>
          <input id="password" type="password" className="log-in-rectangle5"/>
          <span className="log-in-text17">
            <span>User Name</span>
          </span>
          <input className="log-in-rectangle6"/>

        </div>
      </div>
    </div>
  )
}

export default LogIn
