// Write your code here

import ReactPlayer from 'react-player'

import PopUp from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {moviesList} = props
  const {thumbnailUrl, videoUrl} = moviesList

  return (
    <div className="list-item-container">
      <PopUp
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="thumbnail-img"
      >
        {close => (
          <>
            <div className="popup-container">
              <button
                className="popup-btn"
                type="button"
                data-testId="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} />
              </button>
              <div className="movie-item-container">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </PopUp>
    </div>
  )
}
export default MovieItem
