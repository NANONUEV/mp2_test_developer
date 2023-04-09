import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './google.css'

const Google = (props) => {
  return (
    <div className={`google-container ${props.rootClassName} `}>
      <Player
        src="https://assets9.lottiefiles.com/private_files/lf30_29gwi53x.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="google-lottie-node"
      ></Player>
    </div>
  )
}

Google.defaultProps = {
  rootClassName: '',
}

Google.propTypes = {
  rootClassName: PropTypes.string,
}

export default Google
