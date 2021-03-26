import PropTypes from "prop-types";

function Movie({ id, year, title, summary, medium_cover_image, rating }) {
  return <h4>{title}</h4>;
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
