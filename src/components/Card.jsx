import React from "react";
import Image from "./Image";

const Card = props => {
  const { data } = props;
  return (
    <div className="card mt-3 mb-3" >
      <Image imgUrl={data.image} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
      </div>
    </div>
  );
};

export default Card;
