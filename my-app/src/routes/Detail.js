import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../Movie";
import styles from "../Movie.module.css";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(false);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setData(json.data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {data === false ? (
        ""
      ) : (
        <h1 className={styles.movieTitle}>{data.movie.title}</h1>
      )}
      <img className={styles.coverimg} src={data?.movie?.medium_cover_image} />
      <div className={styles.box}>

      </div>
    </div>
  );
}

export default Detail;
