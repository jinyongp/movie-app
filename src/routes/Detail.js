import { Component } from "react";

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      const {
        year,
        title,
        summary,
        medium_cover_image,
        rating,
        genres,
      } = state;
      return (
        <div className="detail">
          <h1>{title}</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
