import React from 'react'
import Addgame from '../components/addgame'
import { Helmet } from 'react-helmet'

import './account-edit.css'

import { useHistory } from "react-router-dom"

const AccountEdit = (props) => {

  const history = useHistory();

  //TODO: edit this to get the input 
  const account = () => {
    history.push("/account")
  }
  return (
    <div className="account-edit-container">
      <Helmet>
        <title>AccountEdit - exported project</title>
        <meta property="og:title" content="AccountEdit - exported project" />
      </Helmet>
      <div className="account-edit-account-edit">
        <div  className="account-edit-back-ground">
          <img
            alt="IMAGE5403411I351"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/48cf20b6-df2e-409e-a1b6-1254c39d5096?org_if_sml=13606374"
            className="account-edit-i-m-a-g-e5403411"
          />
          <img
            id="backgournd"
            alt="Rectangle13I351"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/1d53ab6b-839c-4dbc-88ff-6c94273c9b40?org_if_sml=18841"
            className="account-edit-rectangle13"
          />
          <span className="account-edit-text">
            <span className="account-edit-text01">G</span>
            <span className="account-edit-text02">ames</span>
            <span className="account-edit-text03">T</span>
            <span className="account-edit-text04">eam</span>
            <span className="account-edit-text05">F</span>
            <span className="account-edit-text06">inder</span>
          </span>
        </div>
        <img
          id="blur10"
          alt="Rectangle993511"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/59f0faa2-04e7-492d-a93f-579d397b0e16?org_if_sml=17105"
          className="account-edit-rectangle99"
        />
        <button id="blur1" className="account-edit-framemodernlarge-base" onClick={addgame}>
          <div className="account-edit-content">
            <span className="account-edit-text07">+</span>
          </div>
        </button>
        <button id="blur2" className="account-edit-basic-outline-button" onClick={account}>
          <div className="account-edit-framebasic-outlinelarge-base">
            <div className="account-edit-content1">
              <span className="account-edit-text08">
                <span>Done</span>
              </span>
              <div className="account-edit-iconlarge">
                <img
                  alt="IconI351"
                  src="/playground_assets/iconi351-54ol.svg"
                  className="account-edit-icon"
                />
              </div>
            </div>
          </div>
        </button>
        <div id="blur3" className="account-edit-component18">
        <span className="G1"> Valorant </span>
          <span className="G2"> Valorant </span>
          <span className="G3">  Overwatch </span>
          <span className="G4">  CS:GO </span>
          <span id="g51" className="G5"> COD </span>
          <a target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S1"> Silver Account </a>
          <a target="_blank" href="https://tracker.gg/overwatch-2" className="S2"> Immortal Account</a>
          <a target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S3"> Diamond Heal</a>
          <a target="_blank" href="https://tracker.gg/overwatch-2" className="S4"> Gold Nova III</a>
          <a id="s51" target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S5"> Rookie </a>

          <img
            alt="Rectangle100I351"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0dfbb31f-e9ba-4f4d-923a-12717172d272?org_if_sml=13067"
            className="account-edit-rectangle100"
          />
          <img
            alt="Rectangle101I351"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/23c99a63-cc3e-44aa-bc49-701ce11ab882?org_if_sml=1903"
            className="account-edit-rectangle101"
          />
          <img
            alt="Rectangle105I351"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/086ce1a1-2b32-438d-afe8-38af2a9ff34f?org_if_sml=1526"
            className="account-edit-rectangle105"
          />
          <img
            alt="Rectangle107I351"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/37ae0cf0-131d-4c8b-9edf-8998c646a33c?org_if_sml=1526"
            className="account-edit-rectangle107"
          />
          <img
            alt="Line2I351"
            src="/playground_assets/line2i351-iwkq.svg"
            className="account-edit-line2"
          />
          <img
            alt="Line3I351"
            src="/playground_assets/line3i351-duyu.svg"
            className="account-edit-line3"
          />
          <span className="account-edit-text10">
            <span>Games played</span>
          </span>
          <span className="account-edit-text12">
            <span>Stats</span>
          </span>
        </div>
        <img
          id="blur11"
          alt="Rectangle1083511"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/15ecfea5-24a7-4438-9a90-c614ef3ad8ef?org_if_sml=113017"
          className="account-edit-rectangle108"
        />
        <div id="blur4" className="account-edit-framebasic-outlinesmall-base">
          <div className="account-edit-content2">
            <span className="account-edit-text14">
              <span>Change Image</span>
            </span>
            <div className="account-edit-iconsmall">
              <img
                alt="IconI351"
                src="/playground_assets/iconi351-xnkb.svg"
                className="account-edit-icon1"
              />
            </div>
          </div>
        </div>
        <input
          id="blur5"
          alt="Rectangle63511"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/fee56a40-93ec-4d28-869a-a24e86a37827?org_if_sml=1899"
          className="account-edit-rectangle6"
        />
        <input
                  id="blur6"
          alt="Rectangle1093511"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/72be59f7-7830-479f-b78d-304139ffd033?org_if_sml=1899"
          className="account-edit-rectangle109"
        />
        <img
                  id="blur7"
          alt="ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb513511"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/d832d152-cabf-4ca1-a749-9ed46827e91a?org_if_sml=167202"
          className="account-edit-ssc1e38723a15f3f8659e5a14b2194cdf1692f2cb51"
        />
        <span           id="blur8" className="account-edit-text16">
          <span>UserName</span>
        </span>
        <span           id="blur9" className="account-edit-text18">
          <span>Email</span>
        </span>
        <Addgame rootClassName="addgame"></Addgame>
      </div>
    </div>
  )
}

function addgame(){
  document.getElementById("addgame").style.visibility="visible";
  document.getElementById("blur1").style.filter="blur(3px)"
  document.getElementById("blur2").style.filter="blur(3px)"
  document.getElementById("blur3").style.filter="blur(3px)"
  document.getElementById("blur4").style.filter="blur(3px)"
  document.getElementById("blur5").style.filter="blur(3px)"
  document.getElementById("blur6").style.filter="blur(3px)"
  document.getElementById("blur7").style.filter="blur(3px)"
  document.getElementById("blur8").style.filter="blur(3px)"
  document.getElementById("blur9").style.filter="blur(3px)"
  document.getElementById("blur10").style.filter="blur(3px)"
  document.getElementById("blur11").style.filter="blur(3px)"
}


export default AccountEdit
