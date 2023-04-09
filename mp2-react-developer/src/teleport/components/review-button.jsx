import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './review-button.css'

const ReviewButton = (props) => {
  return (
    <div className={`review-button-container ${props.rootClassName} `}>
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_EU5QSFMWQ7.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="review-button-lottie-node"
      ></Player>
    </div>
  )
}

ReviewButton.defaultProps = {
  rootClassName: '',
}

ReviewButton.propTypes = {
  rootClassName: PropTypes.string,
}

export default ReviewButton
