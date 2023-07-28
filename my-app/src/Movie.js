import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ id, coverImg}) {
  const moveTo = () => {
    window.location.href = `/movie/${id}`;
  };

  console.log(coverImg);

  return (
    <div class={style.movieBox}>
      <div class="movieList">
        <div class={style.movieImg}>
          <img src={coverImg} onClick={moveTo}/>
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
  rating: PropTypes.number.isRequired,
};

export default Movie;
