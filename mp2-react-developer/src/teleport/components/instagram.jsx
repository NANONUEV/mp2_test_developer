import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './instagram.css'

const Instagram = (props) => {
  return (
    <div className={`instagram-container ${props.rootClassName} `}>
      <Player
        src="https://assets9.lottiefiles.com/private_files/lf30_f5ytlpiy.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="instagram-lottie-node"
      ></Player>
    </div>
  )
}

Instagram.defaultProps = {
  rootClassName: '',
}

Instagram.propTypes = {
  rootClassName: PropTypes.string,
}

export default Instagram
