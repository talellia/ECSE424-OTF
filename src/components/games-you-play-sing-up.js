import React from 'react'
import PropTypes from 'prop-types';

import './games-you-play-sing-up.css'
var countGame = 0;

const GamesYouPlaySingUp = (props) => {

  return (
    <div id="dropdown" className={`games-you-play-sing-up-container ${props.rootClassName}`}>
      
        <img
          alt="Rectangle127148"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/cf5b9a57-08ab-4640-9c3b-a7bf1b936b12?org_if_sml=1706"
          className="games-you-play-sing-up-rectangle12"
        />
      <div className="games-you-play-sing-up-gameuplay">
        <img
          alt="Rectangle147149"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/b42775ff-e49b-4066-abdd-67c593234a15?org_if_sml=1426"
          className="games-you-play-sing-up-rectangle14"
        />
        <img
          alt="Rectangle167149"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/50e28c0d-27e9-4c14-ae17-45ac41c1a4f7?org_if_sml=1426"
          className="games-you-play-sing-up-rectangle16"
        />
        <img
          alt="Rectangle177151"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/49bc2ddd-f58f-4667-93bc-70547b5e7abc?org_if_sml=1426"
          className="games-you-play-sing-up-rectangle17"
        />
        <img
          alt="Rectangle157149"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/0fac83f3-5e66-4fcb-9b88-a1c98a1bf7b1?org_if_sml=1422"
          className="games-you-play-sing-up-rectangle15"
        />
        <img
          alt="Rectangle187151"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/fad268f3-c9bb-4018-928c-a535a419fb80?org_if_sml=1422"
          className="games-you-play-sing-up-rectangle18"
        />
        <img
          alt="Rectangle197151"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/59f492b9-8f72-433e-94bf-26267e465a98?org_if_sml=1426"
          className="games-you-play-sing-up-rectangle19"
        />
        <img
          alt="Rectangle177151"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3970f017-b141-4456-afd4-fb36d956eb37/caf5b38f-742a-468c-a403-16b8fd62f2ed?org_if_sml=1706"
          className="games-you-play-sing-up-rectangle171"
        />
        <input id="1" type="checkbox" className="games-you-play-sing-up-checkboxset"/>
        <input id="2" type="checkbox" className="games-you-play-sing-up-checkboxset1"/>
        <input id="3" type="checkbox" className="games-you-play-sing-up-checkboxset3"/>
        <input id="4" type="checkbox" className="games-you-play-sing-up-checkboxset5"/>
        <input id="5" type="checkbox" className="games-you-play-sing-up-checkboxset6"/>
        <input id="6" type="checkbox" className="games-you-play-sing-up-checkboxset7"/>
        <input id="7" type="checkbox" className="games-you-play-sing-up-checkboxset8"/>
        <button className="games-you-play-sing-up-frameiconchevronbottom" onClick={hide}>
          <img
            alt="Vector7148"
            src="/playground_assets/vector7148-f1zl.svg"
            className="games-you-play-sing-up-vector"
          />
        </button>
        <span className="games-you-play-sing-up-text">
          <span>CSGO</span>
        </span>
        <span className="games-you-play-sing-up-text02">
          <span>Overwatch</span>
        </span>
        <span className="games-you-play-sing-up-text04">
          <span>Overwatch</span>
        </span>
        <span className="games-you-play-sing-up-text06">
          <span>Call Of Duty</span>
        </span>
        <span className="games-you-play-sing-up-text08">
          <span>League Of Legendes</span>
        </span>
        <span className="games-you-play-sing-up-text10">
          <span>Valorant</span>
        </span>
        <span className="games-you-play-sing-up-text12">
          <span>Fifa</span>
        </span>
      </div>
    </div>
  )
}

function hide(){
  document.getElementById("dropdown").style.visibility="hidden";
  count();
}
function count(){
  for (var i = 1; i <= 7;i++){
    if(document.getElementById(i.toString()).checked){
      countGame += 1;
    }
  }
}

GamesYouPlaySingUp.defaultProps = {
  rootClassName: '',
}

GamesYouPlaySingUp.propTypes = {
  rootClassName: PropTypes.string,
}

export default GamesYouPlaySingUp
