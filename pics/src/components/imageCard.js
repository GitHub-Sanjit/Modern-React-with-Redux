import React from "react";

class imageCard extends React.Component {
  render(props) {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img src={urls.regular} alt={description}></img>
      </div>
    );
  }
}

export default imageCard;
