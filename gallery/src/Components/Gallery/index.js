import React from "react";
import ImageCard from "./ImageCard/index.js";
import "./style.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      images: [],
    };
  }

  // executed when something changes in imput filed
  onTextChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  // executed when user tried to add an image to gallery
  onImageAdd = () => {
    //first coping the old data
    const newImages = [...this.state.images];
    // secound pusing the new data in array
    newImages.push(this.state.inputValue);
    // third updating the view
    this.setState({
      images: newImages,
    });
    // fourth clearing the input
    this.clearInput();
  };
  // used to cler the input field
  clearInput = () => {
    this.setState({
      inputValue: "",
    });
  };

  render = () => {
    return (
      <div className="root-container">
        {/* add image url input box and button */}
        <h1 className="title"> ----- Image Gallery ----- </h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter image Url"
            onChange={this.onTextChange}
            value={this.state.inputValue}
          />
          <button onClick={this.onImageAdd}>Add</button>
        </div>
        {/*Images list box container */}
        <div className="list-box">
          {this.state.images.map((imageUrl) => {
            return <ImageCard key={imageUrl} url={imageUrl} />;
          })}
        </div>
      </div>
    );
  };
}

export default Gallery;
