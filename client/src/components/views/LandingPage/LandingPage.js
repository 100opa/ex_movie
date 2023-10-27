import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config'
import MainImage from '../MainImage/MainImage';
import { Row, Button } from 'antd';
import GridCard from '../commons/GridCard';
import AntCard from '../commons/AntCard';

function LandingPage() {

  //// [state]
  const [Movies, setMovies] = useState([]);
  console.log('Movies >>', Movies);
  const [CurrentPage, setCurrentPage] = useState(1);

  // 페이지의 첫 번째 영화 정보 저장
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const page = 1;
    fetchMovies(page);
  }, []);

  // [button]
  const loadMoreItems = () => {
    fetchMovies(CurrentPage + 1);
  };

  function fetchMovies(page) {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovies([...Movies, ...response.results]);
        setMainMovieImage(response.results[0]);
        setCurrentPage(response.page); //처음에 여기다 넣을생각을 못함 여기다넣으니까 1씩 늦어지는 현상이 수정됨 렌더링 시간차이 문제 자연스럽게 수정됨
      });
  }

  return (
    <>
      <div style={{ width: '100%' }}>
        {/* Main Image */}
        {MainMovieImage &&
          <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
            title={MainMovieImage.title}
            overview={MainMovieImage.overview} />
        }
        <div style={{ width: '85%', margin: '1rem auto' }}>
          <h2>인기 영화</h2>
          <hr />

          {/* Movie Grid Card */}
          <Row gutter={[10, 10]}>
            {Movies.map((movie, index) => {
              return (
                <React.Fragment key={index}>
                  <AntCard
                    landingPage
                    path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
                    title={movie.title}
                    movieId={movie.id}
                  />
                </React.Fragment>
              );
            })}
          </Row>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={loadMoreItems}> 더보기 </Button>
        </div>
      </div>
    </>
  )
}

export default LandingPage
