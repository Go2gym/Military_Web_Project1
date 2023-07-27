import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, rating }) {
  const moveTo = () => {
    window.location.href = `/movie/${id}`;
  };

  return (
    <div>
      <div class="header">
        <div class="movieBoxes">
          <div class="movieImg">
            <div class="movieImgBox">
              <img src={coverImg} alt={title} onClick={moveTo} />
            </div>
          </div>
        </div>
      </div>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
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
