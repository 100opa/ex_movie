import React from 'react'
import { Descriptions } from 'antd';

const MovieInfo = (props) => {
  const { movie } = props //객체의 축약표현으로 객체로 값을 받아와서 사용하기 편리하게함
  // console.log('movie >> ', movie)

  const items = [
    { key: '1', label: 'Title', children: `${movie.title}` },
    { key: '2', label: 'Release Date', children: `${movie.relaease_date}` },
    { key: '3', label: 'Revenue', children: `${movie.revenue}` },
    { key: '4', label: 'Runtime', children: `${movie.runtime}` },
    { key: '5', label: 'Vote Average', children: `${movie.vote_average}` },
    { key: '6', label: 'Vote Count', children: `${movie.vote_count}` },
    { key: '7', label: 'Status', children: `${movie.status}` },
    { key: '8', label: 'popularity', children: `${movie.popularity}` },
    { key: '9', label: 'Budget', children: `${movie.budget}` },
  ]

  return (
    <Descriptions title="User Info" bordered items={items} />
  )
}

export default MovieInfo