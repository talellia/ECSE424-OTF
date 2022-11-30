import React, {useState} from 'react'

import './post-add.css'

const PostAdd = ({onClick, postAdd, isEdit, props}) => {

  const[title, setTitle] = useState(props.title)


  return (
    <div className="post-add-container">
      <div className="post-add-component16">
        <div className="post-add-rectangle15">
          <img
            alt="Rectangle14I231"
            src="/playground_assets/rectangle14i231-aijf-700h.png"
            className="post-add-rectangle14"
          />
        </div>
        <img
          alt="ScreenShot20221011at34722310"
          src="/playground_assets/screenshot20221011at34722310-lwk-200h.png"
          className="post-add-screen-shot20221011at3472"
        />
        <div className="post-add-add-profile">
          <img
            alt="Rectangle16I231"
            src="/playground_assets/rectangle16i231-1ej-200h.png"
            className="post-add-rectangle16"
          />
          <span className="post-add-text">
            <span>
              <span>NAME</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img
            alt="IMAGE25selc9jemn411I231"
            src="/playground_assets/image25selc9jemn411i231-wzye-200h.png"
            className="post-add-i-m-a-g-e25selc9jemn411"
          />
        </div>
        <div className="post-add-description">
          <input
            alt="Rectangle25I231"
            src="/playground_assets/rectangle25i231-l37d-600w.png"
            className="post-add-rectangle25"
          />
          <span className="post-add-text05">
            <span>Description:</span>
          </span>
          <span className="post-add-text07">
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="post-add-description1">
          <input
            alt="Rectangle25I231"
            src="/playground_assets/rectangle25i231-nhcec-200h.png"
            className="post-add-rectangle251"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="post-add-text09">
            <span>
              Title:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="post-add-frame-t-a-g-box">
          <input
            alt="Rectangle26I231"
            src="/playground_assets/rectangle26i231-hcfc-200h.png"
            className="post-add-rectangle26"
          />
          <span className="post-add-text11">
            <span>TAG:</span>
          </span>
        </div>
        {!isEdit &&<button className="post-add-framebasic-outlinemedium-base" onClick={postAdd}>
          <div className="post-add-content">
            <span className="post-add-text13">
              <span>Post</span>
            </span>
            <div className="post-add-iconmedium">
              <img
                alt="IconI231"
                src="/playground_assets/iconi231-ro7d.svg"
                className="post-add-icon"
              />
            </div>
          </div>
        </button>
}
        {isEdit && <button className="post-add-framebasic-outlinemedium-base" onClick={onClick}>
          <div className="post-add-content">
            <span className="post-add-text13">
              <span>Edit</span>
            </span>
            <div className="post-add-iconmedium">
              <img
                alt="IconI231"
                src="/playground_assets/iconi231-ro7d.svg"
                className="post-add-icon"
              />
            </div>
          </div>
        </button>
}
        <button className="post-add-basic-outline-button" onClick={onClick}>
          <div className="post-add-framebasic-outlinemedium-base1">
            <div className="post-add-content1">
              <span className="post-add-text15">
                <span>Back</span>
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default PostAdd
