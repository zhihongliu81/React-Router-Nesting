import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  let { movieId } = useParams();
  movieId = Number(movieId);
  const movieChoice = movies.find((item) => item.id === movieId);
  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
