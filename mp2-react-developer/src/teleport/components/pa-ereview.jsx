import React from 'react'

import './pa-ereview.css'

const PAGEreview = (props) => {
  return (
    <div className="pa-ereview-container">
      <div className="pa-ereview-gallery-card">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="pa-ereview-image"
        />
        <div className="pa-ereview-container1">
          <h1 className="pa-ereview-text">Project Title</h1>
          <span className="pa-ereview-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
        </div>
      </div>
    </div>
  )
}

export default PAGEreview
