import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../Movie";

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
    {data === false ? "" : <h1 text-align: center>{data.movie.title}</h1>}
    </div>
  );
}

export default Detail;
