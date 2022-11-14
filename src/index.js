import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SignUp from './views/sign-up'
import Initial from './views/initial'
import Account from './views/account'
import AccountEdit from './views/account-edit'
import Message from './views/message'
import ContactUs1 from './views/contact-us1'
import Home from './views/home'
import LogIn from './views/log-in'
import ContactUs2 from './views/contact-us2'
import Post from './views/post'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={Initial} exact path="/" />
        <Route component={Account} exact path="/account" />
        <Route component={AccountEdit} exact path="/account-edit" />
        <Route component={Message} exact path="/message" />
        <Route component={ContactUs1} exact path="/contact-us1" />
        <Route component={Home} exact path="/home" />
        <Route component={LogIn} exact path="/log-in" />
        <Route component={ContactUs2} exact path="/contact-us2" />
        <Route component={Post} exact path="/post" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
