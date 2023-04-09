import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './faceboook.css'

const Faceboook = (props) => {
  return (
    <div className={`faceboook-container ${props.rootClassName} `}>
      <Player
        src="https://assets5.lottiefiles.com/private_files/lf30_pb3we3yk.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="faceboook-lottie-node"
      ></Player>
    </div>
  )
}

Faceboook.defaultProps = {
  rootClassName: '',
}

Faceboook.propTypes = {
  rootClassName: PropTypes.string,
}

export default Faceboook
