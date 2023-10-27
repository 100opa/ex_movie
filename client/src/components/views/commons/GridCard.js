import React from 'react'
import { Col } from 'antd';

const GridCard = (props) => {

  if (props.landingPage) {
    //// [LandingPage] 처리
    return (
      <Col xs={12} md={6} lg={4}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.title}
            />
          </a>
        </div>
      </Col>
    )
  } else {
    //// [Detail] 처리
    return (
      <Col xs={12} md={6} lg={4}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.castName}
            />
          </a>
        </div>
      </Col>
    )
  }
}
/* 
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
*/
export default GridCard
