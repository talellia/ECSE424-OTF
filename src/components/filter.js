import PropTypes from 'prop-types';
import React from 'react';

import './filter.css';
var valLF = [];
var valPlayStyle = [];
var valorantRank = [];

const Filter = (props) => {
  const valLFId = ["filter-val-LF-Team", "filter-val-LF-Duo", "filter-val-LF-Boost", "filter-val-LF-Derak", "filter-val-LF-Rank", "filter-val-LF-Casual", "filter-val-LF-TryHard", "filter-val-LF-Social"];
  const valPlayStyleId = ["filter-val-PlayStyle-Duelist", "filter-val-PlayStyle-Sentinel", "filter-val-PlayStyle-Controler", "filter-val-PlayStyle-Initiater", "filter-val-PlayStyle-Agressive", "filter-val-PlayStyle-Passive", "filter-val-PlayStyle-Rat", "filter-val-PlayStyle-Sniper"];

  const handleClick = event => {
    selectValRank(event.currentTarget.id, event.currentTarget.stateclick);
    if (event.currentTarget.stateclick === 0 || event.currentTarget.stateclick === undefined) {
      valorantRank.push(event.currentTarget.value);
      event.currentTarget.stateclick = 1;
    } else {
      event.currentTarget.stateclick = 0;
      var index = valorantRank.findIndex(e => e === event.currentTarget.value);
      valorantRank.splice(index, 1)
    }
  };

  return (
    <div id="filter" className={`filter-container ${props.rootClassName} `}>
      <div className="filter-initial">
        <img
          alt="Rectangle461799"
          src="/playground_assets/rectangle461799-d9hh-200h.png"
          className="filter-rectangle46"
        />
        <img
          alt="Polygon11799"
          src="/playground_assets/polygon11799-u28p.svg"
          className="filter-polygon1"
        />
        <button onClick={openGameSelect}>
          <img
            alt="Rectangle471710"
            src="/playground_assets/rectangle471710-35oi.svg"
            className="filter-rectangle47"
          />
          <span className="filter-text">
            <span>Game</span>
          </span>
        </button>
      </div>
      <div id="filterGameChoise" className="filter-game-choise">
        <img
          alt="Rectangle531710"
          src="/playground_assets/rectangle531710-at7u-500h.png"
          className="filter-rectangle53"
        />
        <button id="gameTitle">
          <img
            alt="Rectangle541710"
            src="/playground_assets/rectangle541710-w23t-200h.png"
            className="filter-Gametile"
          />
          <span className="filter-game-title">
            <span><b>Game</b></span>
          </span>
        </button>
        <button id="gameValorant" onClick={openGameValorant}>
          <img
            alt="Rectangle551710"
            src="/playground_assets/rectangle551710-6rse.svg"
            className="filter-rectangle55"
          />
          <span className="filter-text02">
            <span>Valorant</span>
          </span>
        </button>
        <button id="gameCOD">
          <img
            alt="Rectangle561710"
            src="/playground_assets/rectangle561710-djmq.svg"
            className="filter-rectangle56"
          />
          <span className="filter-text12">
            <span>Call of Dudy</span>
          </span>
        </button>
        <button id="gameFifa">
          <img
            alt="Rectangle591711"
            src="/playground_assets/rectangle591711-w6f.svg"
            className="filter-rectangle59"
          />
          <span className="filter-text04">
            <span>Fifa</span>
          </span>
        </button>
        <button id="gameOw">
          <img
            alt="Rectangle581710"
            src="/playground_assets/rectangle581710-o2kj.svg"
            className="filter-rectangle58"
          />
          <span className="filter-text10">
            <span>Overwatch</span>
          </span>
        </button>
        <button id="gameCSGO">
          <img
            alt="Rectangle571710"
            src="/playground_assets/rectangle571710-ydtf.svg"
            className="filter-rectangle57"
          />
          <span className="filter-text08">
            <span>CSGO</span>
          </span>
        </button>
        <button id="gameLol">
          <img
            alt="Rectangle601711"
            src="/playground_assets/rectangle601711-psb9-200h.png"
            className="filter-rectangle60"
          />
          <span className="filter-text06">
            <span>League of Legends</span>
          </span>
        </button>
        <img
          alt="Polygon31711"
          src="/playground_assets/polygon31711-7pxw.svg"
          className="filter-polygon3"
        />
      </div>
      <div id="filterVal" className="filter-val">
        <img
          alt="Rectangle531712"
          src="/playground_assets/rectangle531712-ys46-900w.png"
          className="filter-rectangle531"
        />
        <img
          alt="Polygon21710"
          src="/playground_assets/polygon21710-vpr.svg"
          className="filter-polygon2"
        />
        <button id="filter-val-Rank-button" onClick={openValorantRank}>
          <img
            alt="Rectangle501711"
            src="/playground_assets/rectangle501711-0u4.svg"
            className="filter-rectangle50"
          />
          <span className="filter-text14">
            <span>Rank</span>
          </span>
        </button>
        <button id="filter-val-lf-button" onClick={event => { openValorantLF(); selectValLFvalues(valLFId); }}>
          <img
            alt="Rectangle511711"
            src="/playground_assets/rectangle511711-zpx.svg"
            className="filter-rectangle51"
          />
          <span className="filter-text16">
            <span>Looking for?</span>
          </span>
        </button>
        <button id="filter-val-playStyle-button" onClick={event => { openValorantPlayStyle(); selectValPlayStylevalues(valPlayStyleId); }}>
          <img
            alt="Rectangle521711"
            src="/playground_assets/rectangle521711-vfbq.svg"
            className="filter-rectangle52"
          />
          <span className="filter-text18">
            <span>Play Style</span>
          </span>
        </button>
        <img
          alt="Rectangle491710"
          src="/playground_assets/rectangle491710-262e.svg"
          className="filter-rectangle49"
        />
        <span className="filter-text20">
          <span><b>Valorant</b></span>
        </span>
        <button type="button" onClick={submitFilter} id="filter-Done" className="filter-framebasic-outlinemedium-base">
          <div className="filter-content">
            <span className="filter-text22">
              <span>Done</span>
            </span>
            <div className="filter-iconmedium">
              <img
                alt="IconI239"
                src="/playground_assets/iconi239-vv9j.svg"
                className="filter-icon"
              />
            </div>
          </div>
        </button>
      </div>
      <div id="filter-val-LF" className="filter-val-lookingfor">
        <img
          alt="Rectangle541712"
          src="/playground_assets/rectangle541712-qa3.svg"
          className="filter-rectangle541"
        />
        <img
          alt="Rectangle931712"
          src="/playground_assets/rectangle931712-8zf-900w.png"
          className="filter-rectangle93"
        />
        <input type="checkbox" value={"Team"}    id={valLFId[0]} className="filter-checkboxset" />
        <input type="checkbox" value={"Duo"}     id={valLFId[1]} className="filter-checkboxset01" />
        <input type="checkbox" value={"Boost"}   id={valLFId[2]} className="filter-checkboxset02" />
        <input type="checkbox" value={"Derank"}  id={valLFId[3]} className="filter-checkboxset03" />
        <input type="checkbox" value={"Rank"}    id={valLFId[4]} className="filter-checkboxset04" />
        <input type="checkbox" value={"Casual"}  id={valLFId[5]} className="filter-checkboxset05" />
        <input type="checkbox" value={"TryHard"} id={valLFId[6]} className="filter-checkboxset06" />
        <input type="checkbox" value={"Social"}  id={valLFId[7]} className="filter-checkboxset07" />
        <span className="filter-text24">
          <span>Team</span>
        </span>
        <span className="filter-text26">
          <span>Duo</span>
        </span>
        <span className="filter-text28">
          <span>Boost</span>
        </span>
        <span className="filter-text30">
          <span>Derank</span>
        </span>
        <span className="filter-text32">
          <span>
            Casual
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="filter-text34">
          <span>
            Try Hard
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="filter-text36">
          <span>
            Social
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="filter-text38">
          <span>
            {' '}
            Rank
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <div id="filter-val-Rank" className="filter-val-rank">
        <img
          alt="Rectangle942396"
          src="/playground_assets/rectangle942396-so6s.svg"
          className="filter-rectangle94"
        />
        <img
          alt="valorantranks11711"
          src="/playground_assets/valorantranks11711-f9me-900w.png"
          className="filter-valorantranks1"
        />
        <button
          onMouseDown={handleClick}
          stateclick={0}
          value={"radiant"}
          id="valorant-rank-radiant"
          alt="Rectangle681711"
          src="/playground_assets/rectangle681711-ds5f-200h.png"
          className="filter-rectangle68"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          id="valorant-rank-im2"
          value={"im2"}
          alt="Rectangle691711"
          src="/playground_assets/rectangle691711-0e6r-200h.png"
          className="filter-rectangle69"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"im1"}
          id="valorant-rank-im1"
          src="/playground_assets/rectangle701711-m93-200h.png"
          className="filter-rectangle70"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"im3"}
          id="valorant-rank-im3"
          alt="Rectangle711711"
          src="/playground_assets/rectangle711711-g8xc-200h.png"
          className="filter-rectangle71"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"asc3"}
          id="valorant-rank-asc3"
          alt="Rectangle721711"
          src="/playground_assets/rectangle721711-pb6d-200h.png"
          className="filter-rectangle72"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"asc2"}
          id="valorant-rank-asc2"
          alt="Rectangle731711"
          src="/playground_assets/rectangle731711-11q8-200h.png"
          className="filter-rectangle73"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"asc1"}
          id="valorant-rank-asc1"
          alt="Rectangle741711"
          src="/playground_assets/rectangle741711-vw4-200h.png"
          className="filter-rectangle74"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"d1"}
          id="valorant-rank-d1"
          alt="Rectangle751711"
          src="/playground_assets/rectangle751711-axn-200h.png"
          className="filter-rectangle75"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"d2"}
          id="valorant-rank-d2"
          alt="Rectangle761711"
          src="/playground_assets/rectangle761711-3wn-200h.png"
          className="filter-rectangle76"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"d3"}
          id="valorant-rank-d3"
          alt="Rectangle771711"
          src="/playground_assets/rectangle771711-8al-200h.png"
          className="filter-rectangle77"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"p3"}
          id="valorant-rank-p3"
          alt="Rectangle781711"
          src="/playground_assets/rectangle781711-1yr-200h.png"
          className="filter-rectangle78"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"p2"}
          id="valorant-rank-p2"
          alt="Rectangle791711"
          src="/playground_assets/rectangle791711-j9m-200h.png"
          className="filter-rectangle79"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"g2"}
          id="valorant-rank-g2"
          alt="Rectangle811711"
          src="/playground_assets/rectangle811711-btmf-200h.png"
          className="filter-rectangle81"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"g3"}
          id="valorant-rank-g3"
          alt="Rectangle821711"
          src="/playground_assets/rectangle821711-79y-200h.png"
          className="filter-rectangle82"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"s3"}
          id="valorant-rank-s3"
          alt="Rectangle841711"
          src="/playground_assets/rectangle841711-nsy-200h.png"
          className="filter-rectangle84"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"s2"}
          id="valorant-rank-s2"
          alt="Rectangle851711"
          src="/playground_assets/rectangle851711-qgqw-200h.png"
          className="filter-rectangle85"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"s1"}
          id="valorant-rank-s1"
          alt="Rectangle861711"
          src="/playground_assets/rectangle861711-ygqh-200h.png"
          className="filter-rectangle86"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"b1"}
          id="valorant-rank-b1"
          alt="Rectangle871711"
          src="/playground_assets/rectangle871711-lza9-200h.png"
          className="filter-rectangle87"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"b2"}
          id="valorant-rank-b2"
          alt="Rectangle881711"
          src="/playground_assets/rectangle881711-ektr-200h.png"
          className="filter-rectangle88"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"b3"}
          id="valorant-rank-b3"
          alt="Rectangle891711"
          src="/playground_assets/rectangle891711-u2k9-200h.png"
          className="filter-rectangle89"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"i1"}
          id="valorant-rank-i1"
          alt="Rectangle921711"
          src="/playground_assets/rectangle921711-ev9c-200h.png"
          className="filter-rectangle92"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"i2"}
          id="valorant-rank-i2"
          alt="Rectangle952396"
          src="/playground_assets/rectangle952396-qgqu-200h.png"
          className="filter-rectangle95"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"i3"}
          id="valorant-rank-i3"
          alt="Rectangle962396"
          src="/playground_assets/rectangle962396-0th-200h.png"
          className="filter-rectangle96"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"g1"}
          id="valorant-rank-g1"
          alt="Rectangle831711"
          src="/playground_assets/rectangle831711-44fa-200h.png"
          className="filter-rectangle83"
        />
        <button
          onMouseDown={handleClick}
          stateclick="0"
          value={"p1"}
          id="valorant-rank-p1"
          alt="Rectangle801711"
          src="/playground_assets/rectangle801711-8qt-200h.png"
          className="filter-rectangle80"
        />
      </div>
      <div id="filter-val-PlayStyle" className="filter-val-play-style">
        <img
          alt="Rectangle542394"
          src="/playground_assets/rectangle542394-3qj5.svg"
          className="filter-rectangle542"
        />
        <img
          alt="Rectangle932394"
          src="/playground_assets/rectangle932394-juc-900w.png"
          className="filter-rectangle931"
        />
        <input type="checkbox" value={"Duelist"}   id={valPlayStyleId[0]} className="filter-checkboxset08"/>
        <input type="checkbox" value={"Sentinel"}  id={valPlayStyleId[1]} className="filter-checkboxset10"/>
        <input type="checkbox" value={"Controler"} id={valPlayStyleId[2]} className="filter-checkboxset12"/>
        <input type="checkbox" value={"Initiator"} id={valPlayStyleId[3]} className="filter-checkboxset14"/>
        <input type="checkbox" value={"Agressive"} id={valPlayStyleId[4]} className="filter-checkboxset16"/>
        <input type="checkbox" value={"Passive"}   id={valPlayStyleId[5]} className="filter-checkboxset18"/>
        <input type="checkbox" value={"Rat"}       id={valPlayStyleId[6]} className="filter-checkboxset20"/>
        <input type="checkbox" value={"Sniper"}    id={valPlayStyleId[7]} className="filter-checkboxset22"/>
        <span className="filter-text40">
          <span>Duelist</span>
        </span>
        <span className="filter-text42">
          <span>Sentinel</span>
        </span>
        <span className="filter-text44">
          <span>Controler</span>
        </span>
        <span className="filter-text46">
          <span>Initiater</span>
        </span>
        <span className="filter-text48">
          <span>
            Passive
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="filter-text50">
          <span>Rat</span>
        </span>
        <span className="filter-text52">
          <span>
            Sniper
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="filter-text54">
          <span>Agressive</span>
        </span>
      </div>
    </div>
  )
}

function openGameSelect() {
  document.getElementById("filterGameChoise").style.visibility = "visible"
}
function openGameValorant() {
  document.getElementById("filterGameChoise").style.visibility = "hidden"
  document.getElementById("filterVal").style.visibility = "visible"
}
function openValorantRank() {
  if (document.getElementById("filter-val-Rank").style.visibility === "hidden" || document.getElementById("filter-val-Rank").style.visibility === "") {
    document.getElementById("filter-val-Rank").style.visibility = "visible";
  } else {
    document.getElementById("filter-val-Rank").style.visibility = "hidden";
  }
}
function selectValRank(id, stateclick) {
  if (stateclick === 1) {
    document.getElementById(id).style.backgroundColor = "";
  } else {
    document.getElementById(id).style.backgroundColor = "#d9d9d950";
  }
}
function openValorantLF() {
  if (document.getElementById("filter-val-LF").style.visibility === "hidden" || document.getElementById("filter-val-LF").style.visibility === "") {
    document.getElementById("filter-val-LF").style.visibility = "visible";
  } else {
    document.getElementById("filter-val-LF").style.visibility = "hidden";
  }
}
function selectValLFvalues(valLFId) {
  for (var i in valLFId) {
    if (document.getElementById(valLFId[i]).checked && !(valLF.includes(document.getElementById(valLFId[i]).value))) {
      valLF.push(document.getElementById(valLFId[i]).value);
    } else if (!(document.getElementById(valLFId[i]).checked) && valLF.includes(document.getElementById(valLFId[i]).value)) {
      var index = valLF.findIndex(e => e === document.getElementById(valLFId[i]).value);
      valLF.splice(index, 1)
    }
  }
}
function openValorantPlayStyle() {
  if (document.getElementById("filter-val-PlayStyle").style.visibility === "hidden" || document.getElementById("filter-val-PlayStyle").style.visibility === "") {
    document.getElementById("filter-val-PlayStyle").style.visibility = "visible";
  } else {
    document.getElementById("filter-val-PlayStyle").style.visibility = "hidden";
  }
}
function selectValPlayStylevalues(valPlayStyleId) {
  for (var i in valPlayStyleId) {
    if (document.getElementById(valPlayStyleId[i]).checked && !(valPlayStyle.includes(document.getElementById(valPlayStyleId[i]).value))) {
      valPlayStyle.push(document.getElementById(valPlayStyleId[i]).value);
    } else if (!(document.getElementById(valPlayStyleId[i]).checked) && valPlayStyle.includes(document.getElementById(valPlayStyleId[i]).value)) {
      var index = valPlayStyle.findIndex(e => e === document.getElementById(valPlayStyleId[i]).value);
      valPlayStyle.splice(index, 1)
    }
  }

}
function submitFilter(){
  document.getElementById("filter").style.visibility = "hidden";
  document.getElementById("filterGameChoise").style.visibility = "hidden";
  document.getElementById("filterVal").style.visibility = "hidden";
}

Filter.defaultProps = {
  rootClassName: '',
}

Filter.propTypes = {
  rootClassName: PropTypes.string,
}

export default Filter
export {valLF,valPlayStyle,valorantRank}