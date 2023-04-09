import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MP2</title>
        <meta property="og:title" content="MP2" />
      </Helmet>
      <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
    </div>
  )
}

export default Home
