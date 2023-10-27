import React from 'react'

const MainImage = (props) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
      <div style={{
        position: 'absolute',
        bottom: '25px',
        left: '25px',
        maxWidth: '500px',
        // backgroundColor: '#ff0',
        color: '#fff'
      }}>
        <h2>{props.title} </h2>
        <p>{props.overview} </p>
      </div>
    </div>
  )
}

export default MainImage
