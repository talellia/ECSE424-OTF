import React from 'react'

import { Helmet } from 'react-helmet'
import { useHistory } from "react-router-dom"


import './account1.css'

const Account1 = (props) => {

  const history = useHistory();
  const back = () => {
    history.push("/home");
  }

  return (
    <div className="account1-container">
      <Helmet>
        <title>Account1 - exported project</title>
        <meta property="og:title" content="Account1 - exported project" />
      </Helmet>
      <div className="account1-account">
        <div className="account1-back-ground">
          <img
            alt="IMAGE5403411I301"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/49fc7e92-070a-410b-af70-fae69e9bbe8c?org_if_sml=13606374"
            className="account1-i-m-a-g-e5403411"
          />
          <span className="account1-text">
            <span className="account1-text01">O</span>
            <span className="account1-text02">games</span>
            <span className="account1-text03">T</span>
            <span className="account1-text04">eam</span>
            <span className="account1-text05">F</span>
            <span className="account1-text06">inder</span>
          </span>
          <img
            alt="Rectangle13I301"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/36ef49ea-4b10-4eff-87a9-b365561f3af4?org_if_sml=18841"
            className="account1-rectangle13"
          />
            <img
              alt="VectorI301"
              src="/playground_assets/vectori301-8oil.svg"
              className="account1-vector"
            />
          <span className="account1-text07">URUP Account</span>
        </div>
        <img
          alt="Rectangle993013"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/cb7ad837-e657-4793-8890-9331b83f1812?org_if_sml=17105"
          className="account1-rectangle99"
        />
        <button className="account1-basic-outline-button" onClick={back}>
          <div className="account1-framebasic-outlinelarge-base">
            <div className="account1-content">
              <span className="account1-text08">Back</span>
              <div className="account1-iconlarge">
                <img
                  alt="IconI301"
                  src="/playground_assets/iconi301-8ebb.svg"
                  className="account1-icon"
                />
              </div>
            </div>
          </div>
        </button>
        <div className="account1-component18">
          <span className="G1"> Valorant </span>
          <span className="G2"> Overwatch </span>
          <a target="_blank" href="https://tracker.gg/valorant/profile/riot/Candrix%23552/overview" className="S1"> Silver Account </a>
          <a target="_blank" href="https://tracker.gg/overwatch-2" className="S2"> Immortal Account</a>
          <img
            alt="Rectangle1003013"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/ac15bd66-8547-451d-9aa6-f520e9c5f4a9?org_if_sml=13067"
            className="account1-rectangle100"
          />
          <div className="account1-container1"></div>
          <img
            alt="Rectangle1013013"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/c3aa2aad-d8c2-431b-ba24-d9d6616dc607?org_if_sml=1903"
            className="account1-rectangle101"
          />
          <img
            alt="Rectangle1053013"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/54eecf40-3fb7-4e3b-81df-71a30e056dc9?org_if_sml=1526"
            className="account1-rectangle105"
          />
          <img
            alt="Rectangle1073014"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/c9cea69d-807e-44a8-8f6b-3e407aaaa58a?org_if_sml=1526"
            className="account1-rectangle107"
          />
          <img
            alt="Line23013"
            src="/playground_assets/line23013-1it.svg"
            className="account1-line2"
          />
          <img
            alt="Line33013"
            src="/playground_assets/line33013-mjnc.svg"
            className="account1-line3"
          />
          <span className="account1-text09">
            <span>Games played</span>
          </span>
          <span className="account1-text11">
            <span>Stats</span>
          </span>
        </div>
        <img
          alt="Rectangle1083014"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0a6b4dfb-a4cf-4a6d-9c51-4a65d7931bd7?org_if_sml=110681"
          className="account1-rectangle108"
        />
        <img
          alt="IMAGE25selc9jemn411I139"
          src="/playground_assets/image25selc9jemn411i139-wpy-200h.png"
          className="account1-i-m-a-g-e25selc9jemn411"
        />
        <span className="account1-text13">URUR</span>
      </div>
    </div>
  )
}

export default Account1
