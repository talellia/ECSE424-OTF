import React from 'react'

import { Helmet } from 'react-helmet'
import Menue from '../components/menue';
import { useHistory } from "react-router-dom"

import './account.css'
var num = 1;

const Account = (props) => {
  const history = useHistory();

  //TODO: edit this to get the input 
  const accountEdit = () => {
    history.push("/account-edit")
  }
  if (num === 1){
    num = 2;
    return (
      <div className="account-container">
        <Helmet>
          <title>Account - exported project</title>
          <meta property="og:title" content="Account - exported project" />
        </Helmet>
        <div className="account-account">
          <Menue rootClassName={"menue-home-page"}></Menue>
          <div className="home-back-ground">
            <img
              alt="IMAGE5403411I111"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0fd2c00f-c6f3-4997-950d-9075e67bf09d?org_if_sml=13606374"
              className="home-i-m-a-g-e5403411"
            />
            <span className="home-text">
              <span className="home-text01">G</span>
              <span className="home-text02">ames</span>
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
            alt="Rectangle993013"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/cb7ad837-e657-4793-8890-9331b83f1812?org_if_sml=17105"
            className="account-rectangle99"
          />
          <button className="account-basic-outline-button" onClick={accountEdit}>
            <div className="account-framebasic-outlinelarge-base">
              <div className="account-content">
                <span className="account-text09">
                  <span>Edit</span>
                </span>
                <div className="account-iconlarge">
                  <img
                    alt="IconI301"
                    src="/playground_assets/iconi301-8ebb.svg"
                    className="account-icon"
                  />
                </div>
              </div>
            </div>
          </button>
          <div className="account-component18">
            <span className="G1"> Valorant </span>
            <span className="G2"> Valorant </span>
            <span className="G3">  Overwatch </span>
            <span className="G4">  CS:GO </span>
            <a target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S1"> Silver Account </a>
            <a target="_blank" href="https://tracker.gg/overwatch-2" className="S2"> Immortal Account</a>
            <a target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S3"> Diamond Heal</a>
            <a target="_blank" href="https://tracker.gg/overwatch-2" className="S4"> Gold Nova III</a>
  
            <img
              alt="Rectangle1003013"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/ac15bd66-8547-451d-9aa6-f520e9c5f4a9?org_if_sml=13067"
              className="account-rectangle100"
            />
            <img
              alt="Rectangle1013013"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/c3aa2aad-d8c2-431b-ba24-d9d6616dc607?org_if_sml=1903"
              className="account-rectangle101"
            />
            <img
              alt="Rectangle1053013"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/54eecf40-3fb7-4e3b-81df-71a30e056dc9?org_if_sml=1526"
              className="account-rectangle105"
            />
            <img
              alt="Rectangle1073014"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/c9cea69d-807e-44a8-8f6b-3e407aaaa58a?org_if_sml=1526"
              className="account-rectangle107"
            />
            <img
              alt="Line23013"
              src="/playground_assets/line23013-1it.svg"
              className="account-line2"
            />
            <img
              alt="Line33013"
              src="/playground_assets/line33013-mjnc.svg"
              className="account-line3"
            />
            <span className="account-text11">
              <span>Games played</span>
            </span>
            <span className="account-text13">
              <span>Stats</span>
            </span>
          </div>
          <img
            alt="Rectangle1083014"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0a6b4dfb-a4cf-4a6d-9c51-4a65d7931bd7?org_if_sml=110681"
            className="account-rectangle108"
          />
          <img
            alt="ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb513014"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/dc14b0f6-b818-48f0-8a9b-15b4bf05d70b?org_if_sml=167202"
            className="account-ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb51"
          />
          <span className="account-text15">
            <span>SamSam5</span>
          </span>
          <span className="account-text17">
            <span>SamSam@gmail.com</span>
          </span>
        </div>
      </div>
    )
  }else{
    return (
      <div className="account-container">
        <Helmet>
          <title>Account - exported project</title>
          <meta property="og:title" content="Account - exported project" />
        </Helmet>
        <div className="account-account">
          <Menue rootClassName={"menue-home-page"}></Menue>
          <div className="home-back-ground">
            <img
              alt="IMAGE5403411I111"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0fd2c00f-c6f3-4997-950d-9075e67bf09d?org_if_sml=13606374"
              className="home-i-m-a-g-e5403411"
            />
            <span className="home-text">
              <span className="home-text01">G</span>
              <span className="home-text02">ames</span>
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
            alt="Rectangle993013"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/cb7ad837-e657-4793-8890-9331b83f1812?org_if_sml=17105"
            className="account-rectangle99"
          />
          <button className="account-basic-outline-button" onClick={accountEdit}>
            <div className="account-framebasic-outlinelarge-base">
              <div className="account-content">
                <span className="account-text09">
                  <span>Edit</span>
                </span>
                <div className="account-iconlarge">
                  <img
                    alt="IconI301"
                    src="/playground_assets/iconi301-8ebb.svg"
                    className="account-icon"
                  />
                </div>
              </div>
            </div>
          </button>
          <div className="account-component18">
            <span className="G1"> Valorant </span>
            <span className="G2"> Valorant </span>
            <span className="G3">  Overwatch </span>
            <span className="G4">  CS:GO </span>
            <span id="g52" className="G51"> COD </span>
            <a target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S1"> Silver Account </a>
            <a target="_blank" href="https://tracker.gg/overwatch-2" className="S2"> Immortal Account</a>
            <a target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S3"> Diamond Heal</a>
            <a target="_blank" href="https://tracker.gg/overwatch-2" className="S4"> Gold Nova III</a>
            <a id="s52" target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S51"> Rookie </a>
  
            <img
              alt="Rectangle1003013"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/ac15bd66-8547-451d-9aa6-f520e9c5f4a9?org_if_sml=13067"
              className="account-rectangle100"
            />
            <img
              alt="Rectangle1013013"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/c3aa2aad-d8c2-431b-ba24-d9d6616dc607?org_if_sml=1903"
              className="account-rectangle101"
            />
            <img
              alt="Rectangle1053013"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/54eecf40-3fb7-4e3b-81df-71a30e056dc9?org_if_sml=1526"
              className="account-rectangle105"
            />
            <img
              alt="Rectangle1073014"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/c9cea69d-807e-44a8-8f6b-3e407aaaa58a?org_if_sml=1526"
              className="account-rectangle107"
            />
            <img
              alt="Line23013"
              src="/playground_assets/line23013-1it.svg"
              className="account-line2"
            />
            <img
              alt="Line33013"
              src="/playground_assets/line33013-mjnc.svg"
              className="account-line3"
            />
            <span className="account-text11">
              <span>Games played</span>
            </span>
            <span className="account-text13">
              <span>Stats</span>
            </span>
          </div>
          <img
            alt="Rectangle1083014"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0a6b4dfb-a4cf-4a6d-9c51-4a65d7931bd7?org_if_sml=110681"
            className="account-rectangle108"
          />
          <img
            alt="ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb513014"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/dc14b0f6-b818-48f0-8a9b-15b4bf05d70b?org_if_sml=167202"
            className="account-ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb51"
          />
          <span className="account-text15">
            <span>SamSam5</span>
          </span>
          <span className="account-text17">
            <span>SamSam@gmail.com</span>
          </span>
        </div>
      </div>
    )
  }


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

export default Account
