import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  const [slidenumber, setSlidenumber] = useState(1)
  return (
    <div className={`component-container ${props.rootClassName} `}>
      {slidenumber === 1 && (
        <div className="component-slide1">
          <img
            alt={props.image_alt}
            src="https://images.pexels.com/photos/14730839/pexels-photo-14730839.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
            className="component-image"
          />
          <div
            onClick={() => setSlidenumber(3)}
            className="component-left-button"
          >
            <svg viewBox="0 0 1024 1024" className="component-icon">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlidenumber(2)}
            className="component-right-button"
          >
            <svg viewBox="0 0 1024 1024" className="component-icon02">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slidenumber === 2 && (
        <div className="component-slide2">
          <img
            alt={props.image_alt1}
            src="https://images.pexels.com/photos/10037973/pexels-photo-10037973.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
            className="component-image1"
          />
          <div
            onClick={() => setSlidenumber(1)}
            className="component-left-button1"
          >
            <svg viewBox="0 0 1024 1024" className="component-icon04">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlidenumber(3)}
            className="component-right-button1"
          >
            <svg viewBox="0 0 1024 1024" className="component-icon06">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slidenumber === 3 && (
        <div className="component-slide3">
          <img
            alt={props.image_alt11}
            src="https://images.pexels.com/photos/8734472/pexels-photo-8734472.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
            className="component-image2"
          />
          <div
            onClick={() => setSlidenumber(2)}
            className="component-left-button2"
          >
            <svg viewBox="0 0 1024 1024" className="component-icon08">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlidenumber(1)}
            className="component-right-button2"
          >
            <svg viewBox="0 0 1024 1024" className="component-icon10">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

AppComponent.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  image_alt1: 'image',
  image_alt11: 'image',
  rootClassName: '',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
