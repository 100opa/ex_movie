import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../MainImage/MainImage';
import MovieInfo from './MovieInfo';
import { Row, Button } from 'antd';
import AntCard from '../commons/AntCard';

const Detail = () => {
  const { movieId } = useParams(); // 객체의 축약표현 {}
  const navigate = useNavigate();
  console.log(movieId)

  //// [state]
  const [Movie, setMovie] = useState({})
  const [Casts, setCasts] = useState([])
  const [ActorToggle, setActorToggle] = useState(false)

  useEffect(() => {
    //// [영화 정보]
    const endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`;
    // console.log(endpointInfo)

    //// [출연진] 영화에 출연한 배우들의 정보
    const endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`;
    // console.log('endpointCrew >> ', endpointCrew)

    fetch(endpointInfo)
      .then(response => response.json())
      .then(response => {
        // console.log(response)
        setMovie(response)
      })

    fetch(endpointCrew)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setCasts(response.cast)
      })

  }, [])

  //// 버튼
  function handleUseHistory() {
    navigate('/');
  }

  function toggleActorView() {
    setActorToggle(!ActorToggle);
  }

  return (
    <div>
      {/* Header */}
      <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
        title={Movie.title}
        overview={Movie.overview} />
      {/* Body */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button onClick={handleUseHistory}>영화 목록</Button>
      </div>
      <div style={{ width: '85%', margin: '20px auto' }}>
        {/* Movie Info */}
        <MovieInfo movie={Movie} />

        {/* Actors Grid */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Button onClick={toggleActorView}>배우 목록</Button>
        </div>

        {/* Movie Grid Card */}
        {ActorToggle &&
          <Row gutter={[10, 10]}>
            {Casts.map((cast, index) => {
              return (
                <React.Fragment key={index}>
                  {cast.profile_path &&
                    <AntCard
                      path={`${IMAGE_BASE_URL}w400${cast.profile_path}`}
                      castName={cast.name}
                    />}
                </React.Fragment>
              );
            })}
          </Row>}
      </div>
    </div>
  )
}

export default Detail