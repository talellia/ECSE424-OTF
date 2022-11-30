import React from 'react'
import PropTypes from 'prop-types';

import './addgame.css'

const Addgame = (props) => {
  return (
    <div id="addgame" className={`addgame-container ${props.rootClassName} `}>
      <div className="addgame-component20">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/922cfa68-43b7-42db-89fa-016a9f800f4f?org_if_sml=12399"
          alt="Rectangle1103512"
          className="addgame-rectangle110"
        />
        <span className="addgame-text">
          <span>Game</span>
        </span>
        <span className="addgame-text02">
          <span>Stats Link</span>
        </span>
        <button className="addgame-framemodernlarge-base" onClick={done}>
          <div className="addgame-content">
            <span className="addgame-text04">
              <span>Add +</span>
            </span>
          </div>
        </button>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/8c44f441-6720-4b10-8fb6-8b61ccee86cc?org_if_sml=1788"
          alt="Rectangle63512"
          className="addgame-rectangle6"
        />
        <input
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/e590d918-1197-4103-a285-1f4538cc1363?org_if_sml=1788"
          alt="Rectangle1113512"
          className="addgame-rectangle111"
        />
        <img
          src="/playground_assets/vector23512-b34b.svg"
          alt="Vector23512"
          className="addgame-vector2"
          onClick={showlist}
        />
      </div>
      <div id="gameslist" className="addgame-gameuplay">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/54dea78c-74ec-4a2e-8ba6-0365b5548513?org_if_sml=1572"
          alt="Rectangle123512"
          className="addgame-rectangle12"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/c651bef4-cd63-44b4-b326-4921cb2c226e?org_if_sml=1294"
          alt="Rectangle143512"
          className="addgame-rectangle14"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/e5362459-6ebe-43f1-a006-388804d6a484?org_if_sml=1299"
          alt="Rectangle163512"
          className="addgame-rectangle16"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/d97bfdee-52f0-4794-af1a-406fcadc73e8?org_if_sml=1299"
          alt="Rectangle173512"
          className="addgame-rectangle17"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/53b30bba-9748-4aed-b58e-889caf5fddd7?org_if_sml=1300"
          alt="Rectangle153512"
          className="addgame-rectangle15"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/20d36fd2-3bfc-436d-a159-843d731cd576?org_if_sml=1307"
          alt="Rectangle183512"
          className="addgame-rectangle18"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/bbbcfea0-9eaf-4c66-a399-ad4a7738dcfe?org_if_sml=1300"
          alt="Rectangle193512"
          className="addgame-rectangle19"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/1da8ad93-1d89-4dcd-bd0e-ab06a24bced8?org_if_sml=1582"
          alt="Rectangle173512"
          className="addgame-rectangle171"
        />
        <input type="checkbox" className="addgame-checkboxset"/>
        <input type="checkbox" className="addgame-checkboxset1"/>
        <input type="checkbox" className="addgame-checkboxset3"/>
        <input type="checkbox" className="addgame-checkboxset5"/>
        <input type="checkbox" className="addgame-checkboxset6"/>
        <input type="checkbox" className="addgame-checkboxset7"/>
        <input type="checkbox" className="addgame-checkboxset8"/>
        <span className="addgame-text06">
          <span>CSGO</span>
        </span>
        <span className="addgame-text08">
          <span>Overwatch</span>
        </span>
        <span className="addgame-text10">
          <span>Overwatch</span>
        </span>
        <span className="addgame-text12">
          <span>Call Of Duty</span>
        </span>
        <span className="addgame-text14">
          <span>League Of Legendes</span>
        </span>
        <span className="addgame-text16">
          <span>Valorant</span>
        </span>
        <span className="addgame-text18">
          <span>Fifa</span>
        </span>
        <div className="addgame-scrollbar-frame">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/7a0f5009-aba5-4fd1-980b-86de246b4905?org_if_sml=1184"
            alt="Scrollbar3512"
            className="addgame-scrollbar"
          />
        </div>
        <img
          onClick={hidelist}
          src="/playground_assets/vector33512-djha.svg"
          alt="Vector33512"
          className="addgame-vector3"
        />
      </div>
    </div>
  )
}
function showlist(){
    document.getElementById("gameslist").style.visibility="visible";
}
function hidelist(){
  document.getElementById("gameslist").style.visibility="hidden";

}


function done() {
  document.getElementById("addgame").style.visibility="hidden";
  document.getElementById("blur1").style.filter="blur(0px)"
  document.getElementById("blur2").style.filter="blur(0px)"
  document.getElementById("blur3").style.filter="blur(0px)"
  document.getElementById("blur4").style.filter="blur(0px)"
  document.getElementById("blur5").style.filter="blur(0px)"
  document.getElementById("blur6").style.filter="blur(0px)"
  document.getElementById("blur7").style.filter="blur(0px)"
  document.getElementById("blur8").style.filter="blur(0px)"
  document.getElementById("blur9").style.filter="blur(0px)"
  document.getElementById("blur10").style.filter="blur(0px)"
  document.getElementById("blur11").style.filter="blur(0px)"
  document.getElementById("g51").style.visibility="visible"
  document.getElementById("s51").style.visibility="visible"
}
Addgame.defaultProps = {
  rootClassName: '',
}

Addgame.propTypes = {
  rootClassName: PropTypes.string,
}


export default Addgame
