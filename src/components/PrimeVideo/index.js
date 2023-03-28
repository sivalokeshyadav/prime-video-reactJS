// Write your code here

import MovieSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <>
      <div className="prime-video-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-img"
          />
        </div>
        <div className="carousels-container">
          <div className="action-container">
            <h1 className="heading">Action Movies</h1>

            <MovieSlider movieDetails={actionMovies} />
          </div>
          <div className="comedy-container">
            <h1 className="heading">Comedy Movies</h1>

            <MovieSlider movieDetails={comedyMovies} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
