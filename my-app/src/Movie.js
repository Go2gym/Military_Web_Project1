import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, rating }) {
  const moveTo = () => {
    window.location.href = `/movie/${id}`;
  };
  console.log(coverImg);

  return (
    <div class={style.movieBox}>
      <div class="movieList">
        <div class={style.movieImg}>
          {coverImg == undefined ? <div id='dummyImg'></div> : <img src={coverImg} />}
          <div class="movieImgBox"></div>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  CoverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  symmary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
