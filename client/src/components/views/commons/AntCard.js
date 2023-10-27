import React from 'react'
import { Col, Card } from 'antd';
const { Meta } = Card;

const AntCard = (props) => {
  if (props.landingPage) {
    //// [LandingPage] 처리
    return (
      <Col xs={12} md={6} lg={4}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <Card
              hoverable
              cover={<img
                style={{ width: '100%' }}
                src={props.path}
                alt={props.title}
              />}
            >
              <Meta title={props.title} />
            </Card>
          </a>
        </div>
      </Col>
    )
  } else {
    //// [Detail] 처리
    return (
      <Col xs={12} md={6} lg={4}>
        <div>
          <Card
            hoverable
            cover={<img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.castName}
            />}
          >
            <Meta title={props.castName} />
          </Card>
        </div>
      </Col>
    )
  }
}

export default AntCard
