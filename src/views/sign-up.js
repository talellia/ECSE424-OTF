import React from 'react'

import { Helmet } from 'react-helmet'
import { useHistory } from "react-router-dom"


import './sign-up.css'

const SignUp = (props) => {
  const history = useHistory();

  //TODO: edit this to get the input 
  const home = () => {
    history.push("/home")
  }

  const contactUs = () =>{
    history.push("/contact-us1")
  }
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-Up - exported project</title>
        <meta property="og:title" content="Sign-Up - exported project" />
      </Helmet>
      <div className="sign-up-signin">
        <img
          alt="IMAGE54034111797"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/d5de8812-4070-4ecd-a503-6ca3c7848277?org_if_sml=13601864"
          className="sign-up-i-m-a-g-e5403411"
        />
        <div className="sign-up-footnote">
          <img
            alt="Rectangle2I179"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/d112a30b-5fc4-42a1-a18d-22be7527ba46?org_if_sml=1607"
            className="sign-up-rectangle2"
          />
          <a className="sign-up-text02" onClick={contactUs}>Contact Us</a>
          
        </div>
        <img
          alt="Rectangle11799"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/6d35cbde-c6da-4382-98ad-2faf0a315fdb?org_if_sml=15412"
          className="sign-up-rectangle1"
        />
        <div className="sign-up-title">
          <span className="sign-up-text04">T</span>
          <span className="sign-up-text05">
            <span className="sign-up-text06">O</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="sign-up-text08">
            <span className="sign-up-text09">F</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <img
          alt="Rectangle31801"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/44387211-67e5-48d8-86b6-965d827826f3?org_if_sml=15189"
          className="sign-up-rectangle3"
        />
        <input type="text" id="email" name="email"
          alt="Rectangle91802"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/c6a9b796-93d4-4058-8235-d6d11822fb95?org_if_sml=1936"
          className="sign-up-rectangle9"
        />
        <select id="gameyouplay" name="gameyouplay"
          alt="Rectangle101803"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/9e9d6490-febc-4dab-94f6-f818bdedb032?org_if_sml=1936"
          className="sign-up-rectangle10"
        >
          <option value="valorant">Valorant</option>
          <option value="callofduty">Call of Duty</option>
          <option value="fifa">Fifa</option>
          <option value="overwatch">Overwatch</option>
          <option value="csgo">CSGO</option>
          <option value="lol">League of Legends</option>
          </select>
        <img
          alt="Rectangle111804"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/26386342-df4c-4026-974d-e88dd134e6cb?org_if_sml=1836"
          className="sign-up-rectangle11"
        />
        <input type="text" id="username" name="username"
          alt="Rectangle61805"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/cbdcf521-c4d1-4705-977e-c24ad475e44d?org_if_sml=1890"
          className="sign-up-rectangle6"
        />
        <input type="password" id="password" name="password"
          alt="Rectangle71806"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/953247da-90b9-4802-925f-bfae792aeeca?org_if_sml=1890"
          className="sign-up-rectangle7"
        />
        <input type="password" id="repeatPassword" name="repeatPassword"
          alt="Rectangle81807"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0d810cc7-0bfa-4941-bf1d-7dbf6fd875f9?org_if_sml=1890"
          className="sign-up-rectangle8"
        />
        <span className="sign-up-text11">
          <span>User Name</span>
        </span>
        <span className="sign-up-text13">
          <span>Email</span>
        </span>
        <span className="sign-up-text15">
          <span>Game You play</span>
        </span>
        <span className="sign-up-text17">
          <span>Stats Link</span>
        </span>
        <span className="sign-up-text19">
          <span>Password</span>
        </span>
        <span className="sign-up-text21">
          <span>Repeat Password</span>
        </span>
        <div className="sign-up-frameiconchevronbottom">
          <img
            alt="Vector1815"
            src="/playground_assets/vector1815-3y8g.svg"
            className="sign-up-vector"
          />
        </div>
        <button type="button" className="log-in-framemodernlarge-base" onClick={home}> 
          <div className="sign-up-content">
            <span className="sign-up-text23">
              <span>SIGN UP</span>
            </span>
            <div className="sign-up-iconlarge">
              <img
                alt="IconI181"
                src="/playground_assets/iconi181-vab.svg"
                className="sign-up-icon"
              />
            </div>
          </div>
        </button>
        <div className="sign-up-framemodernlarge-base1">
          <div className="sign-up-content1">
            <span className="sign-up-text25">+</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
