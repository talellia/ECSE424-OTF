import React from 'react'

import { Helmet } from 'react-helmet'
import GamesYouPlaySingUp from '../components/games-you-play-sing-up';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

import './sign-up.css'

const SignUp = (props) => {
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
          <span className="sign-up-text">
            <span>Contact Us</span>
          </span>
        </div>
        <img
          alt="Rectangle11799"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/6d35cbde-c6da-4382-98ad-2faf0a315fdb?org_if_sml=15412"
          className="sign-up-rectangle1"
        />
        <div className="sign-up-title">
          <span className="sign-up-text04">T</span>
          <span className="sign-up-text05">
            <span className="sign-up-text06">G</span>
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
        <input className="sign-up-rectangle9"/>
        <input type="button" className="sign-up-rectangle10"/>
        <input className="sign-up-rectangle11"/>
        <input className="sign-up-rectangle6"/>
        <input id="password" type="password" className="sign-up-rectangle7"/>
        <input id="repassword" type="password" className="sign-up-rectangle8"/>
        
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
        
        <GamesYouPlaySingUp rootClassName="dropdown"></GamesYouPlaySingUp>
        
        <button className="sign-up-frameiconchevronbottom" onClick={display}>
          <img
            alt="Vector1815"
            src="/playground_assets/vector1815-3y8g.svg"
            className="sign-up-vector"
          />
        </button>
        <div className="sign-up-framemodernlarge-base">
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
        </div>
        <div className="sign-up-framemodernlarge-base1">
          <div className="sign-up-content1">
            <span className="sign-up-text25">+</span>
          </div>
        </div>
        <Tooltip className='help1' title="Delete">
            <HelpIcon/>
        </Tooltip>
      </div>
    </div>
  )
}

function display() {
  document.getElementById("dropdown").style.visibility="visible";
}

export default SignUp
