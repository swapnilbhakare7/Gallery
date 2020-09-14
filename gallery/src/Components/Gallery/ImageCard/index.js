import React from "react";
import "./style.css";

const ImageCard = (props) => {
  return <img className="image-card" src={props.url} />;
};

export default ImageCard;
