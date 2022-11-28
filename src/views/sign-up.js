import React from 'react'

import { Helmet } from 'react-helmet'
import GamesYouPlaySingUp from '../components/games-you-play-sing-up';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { deepPurple } from '@mui/material/colors';
import { useHistory } from "react-router-dom"


import './sign-up.css'

const SignUp = (props) => {
  const history = useHistory();
  const SignIn = () => {
    var password = document.getElementById("password2").value;
    var repassword = document.getElementById("repassword").value;
    var errorDic = {
      passwordISEmpty: password === "",
      rePasswordIsEmpty: repassword === "",
      passwordNotSameAsRepassword: password != repassword,
      userNameMissing: document.getElementById("userName2").value === "",
      emailMissing: document.getElementById("email").value === ""
    };

    var errorString = "";
    for (var key in errorDic) {
      if (errorDic[key]) {
        errorString = errorString + key.toString() + "\n";
      }
    }
    if (errorString != "") {
      alert(errorString);
    } else {
      history.push("/home")
    }

  }

  const game = `Please select all the game you wish to look for teamates.
  You can always add games later on.`;
  const link = `Design Update. Next update will allow you to link a stat
   to the game from the sign in menue. For now you need to add it once signed 
   in, in the account menue.`;
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
        <input id="email" className="sign-up-rectangle9" />
        <input type="button" className="sign-up-rectangle10" />
        <button className="sign-up-rectangle11">Disabled For Now Please add once signed In</button>
        <input id="userName2" className="sign-up-rectangle6" />
        <input id="password2" type="password" className="sign-up-rectangle7" required />
        <input id="repassword" type="password" className="sign-up-rectangle8" required />

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
        <button className="sign-up-framemodernlarge-base" onClick={SignIn}>
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
        <button className="sign-up-framemodernlarge-base1" onClick={checkGame}>
          <div className="sign-up-content1">
            <span className="sign-up-text25">+</span>
          </div>
        </button>
        <Box
          sx={{
            '& > :not(style)':
              { m: 2, },
            position: 'absolute',
            top: 615,
            left: 1120,
          }}>
          <Tooltip title={link} placement="right">
            <IconButton sx={{ color: deepPurple[900] }} fontSize="large">
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            '& > :not(style)':
              { m: 2, },
            top: 455,
            left: 1200,
            position: 'absolute',
          }}>
          <Tooltip title={game} placement="right">
            <IconButton sx={{ color: deepPurple[900] }} fontSize="large">
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
    </div>
  )
}

function checkGame() {

}

function display() {
  document.getElementById("dropdown").style.visibility = "visible";
}

export default SignUp
