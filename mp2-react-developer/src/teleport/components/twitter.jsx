import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './twitter.css'

const Twitter = (props) => {
  return (
    <div className={`twitter-container ${props.rootClassName} `}>
      <Player
        src="https://assets2.lottiefiles.com/private_files/lf30_up3nxxtl.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="twitter-lottie-node"
      ></Player>
    </div>
  )
}

Twitter.defaultProps = {
  rootClassName: '',
}

Twitter.propTypes = {
  rootClassName: PropTypes.string,
}

export default Twitter
