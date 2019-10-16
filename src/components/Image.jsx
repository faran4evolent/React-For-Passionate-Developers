import React from "react";

const Image = (props) => {
  return (
    <img
      className="card-img-top"
      style={{height: '400px'}}
      src={props.imgUrl}
      alt="Card"
    />
  );
};

export default Image;
