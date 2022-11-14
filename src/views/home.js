import React from 'react'

import { Helmet } from 'react-helmet';
import Menue from '../components/menue';
import Filter from '../components/filter';
import {valLF,valPlayStyle,valorantRank} from '../components/filter';


import './home.css'

var tempVal = {};

const Home = (props) => {

  return (
    <div className="home-container">
      <Helmet>
        <title>Home</title>
        <meta property="og:title" content="Home - exported project" />
      </Helmet>

      <div className="home-home">
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
            <span>Home</span>
          </span>
        </div>
        <button className="home-filter-button">
          <div className="home-frameiconoptions">
            <img
              alt="VectorI111"
              src="/playground_assets/vectori111-jh9e.svg"
              className="home-vector1"
            />
          </div>
        </button>
        <div className="home-search-bar">
          <input
            type = "test"
            alt="Rectangle14I111"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/fafce5a4-d289-43df-b28c-c6630e1f3935?org_if_sml=11024"
            className="home-rectangle14"
          />
          <div className="home-frameiconsearch">
            <img
              alt="VectorI111"
              src="/playground_assets/vectori111-b1wh.svg"
              className="home-vector2"
            />
            <img
              alt="VectorI111"
              src="/playground_assets/vectori111-cs2a.svg"
              className="home-vector3"
            />
          </div>
        </div>
        <button type="button" id="clearFilter" onMouseDown={click} onMouseUp={click2} onClick={clearFilter} className="home-framemodernmedium-base">
          <div className="home-content">
            <span id="clearfilter"className="home-text09">
              <span>Clear</span>
            </span>
            <div className="home-iconmedium">
              <img
                alt="IconI113"
                src="/playground_assets/iconi113-m7mc.svg"
                className="home-icon"
              />
            </div>
          </div>
        </button>
        <button onClick={openfilter} className="home-filter-button1">
          <div className="home-framemodernlarge-base">
            <div className="home-content1">
              <span className="home-text11"></span>
            </div>
          </div>
          <div className="home-frameiconoptions1">
            <img
              alt="VectorI213"
              src="/playground_assets/vectori213-4tfg.svg"
              className="home-vector4"
            />
          </div>
        </button>
        <Filter rootClassName="Filter"></Filter>
        <div className="home-post">
          <div className="home-add1">
            <div className="home-rectangle141">
              <img
                alt="Rectangle14I213"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/a3b8061e-fe71-498a-841f-53ffa398115a?org_if_sml=11012"
                className="home-rectangle142"
              />
            </div>
            <span className="home-text12">
              <span>
                LF1! Need a duelist in immortal rank to join our 4 stack.
              </span>
            </span>
            <img
              alt="ScreenShot20221011at3471I213"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/8c08c30a-1258-43e1-8397-a1c9435ebf64?org_if_sml=128940"
              className="home-screen-shot20221011at3471"
            />
          </div>
          <span className="home-text14">
            <span>Date</span>
          </span>
        </div>
        <div className="home-post1">
          <div className="home-add11">
            <div className="home-rectangle143">
              <img
                alt="Rectangle14I214"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/263d3d04-065b-41fe-a56f-2a119ddf24bb?org_if_sml=11012"
                className="home-rectangle144"
              />
            </div>
            <span className="home-text16">
              <span>
                LF1! Need a duelist in immortal rank to join our 4 stack.
              </span>
            </span>
            <img
              alt="ScreenShot20221011at3471I214"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/db21899e-db97-49c0-9596-a4c8d9f2e221?org_if_sml=128940"
              className="home-screen-shot20221011at34711"
            />
          </div>
          <span className="home-text18">
            <span>Date</span>
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

function openfilter(){
  if( document.getElementById("filter").style.visibility === "visible"){
    document.getElementById("filter").style.visibility = "hidden";
    document.getElementById("filterGameChoise").style.visibility = "hidden";
    document.getElementById("filterVal").style.visibility = "hidden";
    document.getElementById("filter-val-Rank").style.visibility = "hidden";
    document.getElementById("filter-val-LF").style.visibility = "hidden";
    document.getElementById("filter-val-PlayStyle").style.visibility = "hidden";
  }else{  
    document.getElementById("filter").style.visibility = "visible";

    //TODO: fix valorantRank;
    
    for(var i in tempVal["valorantRank"]){
      if (!(valorantRank.includes(tempVal["valorantRank"][i]))){
        var id = "valorant-rank-"+ tempVal["valorantRank"][i];
        document.getElementById(id).style.backgroundColor = "";
        document.getElementById(id).stateclick = 0;
      }
    }
    for(var i in tempVal["valLF"]){
      if (!(valLF.includes(tempVal["valLF"][i]))){
        var id = "filter-val-LF-"+ tempVal["valLF"][i];
        document.getElementById(id).checked = false;
      }
    }
    for(var i in tempVal["valPlayStyle"]){
      if (!(valorantRank.includes(tempVal["valPlayStyle"][i]))){
        var id = "filter-val-PlayStyle-"+ tempVal["valPlayStyle"][i];
        document.getElementById(id).checked = false;
      }
    }
  }
}
function clearFilter(){
  tempVal["valLF"] = valLF.slice();
  tempVal["valPlayStyle"] = valPlayStyle.slice();
  tempVal["valorantRank"] = valorantRank.slice();
  valLF.splice(0,valLF.length)
  valPlayStyle.splice(0,valPlayStyle.length)
  valorantRank.splice(0,valorantRank.length)
}
function click(){
  document.getElementById("clearFilter").style.backgroundColor = "rgba(217, 217, 217, 1)";
  document.getElementById("clearfilter").style.color = "rgba(45, 34, 121, 1)";

}
function click2(){
  document.getElementById("clearFilter").style.backgroundColor = "rgba(45, 34, 121, 1)";
  document.getElementById("clearfilter").style.color = "rgba(217, 217, 217, 1)";

}

export default Home
