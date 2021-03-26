import PropTypes from "prop-types";

function Movie({ year, title, summary, medium_cover_image, rating }) {
  return (
    <div className="movie">
      <img src={medium_cover_image} alt={title} className="movie__poster" />
      <div className="movie__info">
        <h3 className="movie__title">{title}</h3>
        <h4 className="movie__rating">{rating}</h4>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
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
};

export default Movie;
