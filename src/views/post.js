import React, {useState} from 'react'

import { Helmet } from 'react-helmet'
import Menue from '../components/menue';
import Add from '../components/post-add'


import './post.css'

var tempVal = {};

const Post = (props) => {

  const [isShown, setIsShown] = useState(false)

  const [isnewAdd, setIsNewAdd] = useState(false)

  const [buttonPlace, setButtonPlace] = useState("the-button")
  const[isEdit, setIsEdit] = useState(false)

  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown(current => !current)
    setIsEdit(current => false)
  }

  const handleClick1 = () => {
    // 👇️ toggle shown state
    setIsNewAdd(current => true)
    setButtonPlace("the-button2")
    setIsShown(current => !current)
  }


  const handleClose = () => {
    setIsShown(current => false)
  }

    const handleClick2 = () => {
    // 👇️ toggle shown state
    setIsShown(current => !current)
    setIsEdit(current => true)
    }

  return (
    <div className="message-container">
      <Helmet>
        <title>Post - exported project</title>
        <meta property="og:title" content="Post - exported project" />
      </Helmet>
      <div className="post-post">
          <Menue rootClassName={"menue-home-page"}></Menue>
          <div className="home-back-ground" onClick={handleClose}>
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
            <span>Message</span>
          </span>
        </div>
        <div className="home-post">
          <div className="home-add1">
            <div className="home-rectangle141">
              <img onClick={handleClick2}
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
              <img onClick={handleClick2}
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
        {isnewAdd && <div className="home-post2">
          <div className="home-add11">
            <div className="home-rectangle143">
              <img onClick={handleClick2}
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
}
        {!isShown && <div className={buttonPlace} onClick={handleClick}>
        <img
              type="button"
              src="/playground_assets/rectangle35i139-pw0c-200h.png"
              className="button-post"
            />
            <span className='text-button'>Post</span>
        </div>}
        {isShown && <Add onClick={handleClose} postAdd={handleClick1} isEdit={isEdit} />}
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

export default Post
