import React from 'react'

import { Helmet } from 'react-helmet'

import './message.css'

const Message = (props) => {
  return (
    <div className="message-container">
      <Helmet>
        <title>Message - exported project</title>
        <meta property="og:title" content="Message - exported project" />
      </Helmet>
    </div>
  )
}

export default Message
