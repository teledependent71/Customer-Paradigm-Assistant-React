import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Paradigm Assistant</title>
        <meta property="og:title" content="Customer Paradigm Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
