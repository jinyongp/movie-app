import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, medium_cover_image, rating, genres }) {
  return (
    <div className="movie">
      <img src={medium_cover_image} alt={title} className="movie__poster" />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">({year})</h5>
        <h4 className="movie__rating">{rating}</h4>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">
          {summary.length > 180 ? summary.slice(0, 180) + "..." : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
