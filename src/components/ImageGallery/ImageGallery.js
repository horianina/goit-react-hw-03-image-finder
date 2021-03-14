import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryContainer } from "./ImageGalleryStyled";

class ImageGallery extends Component {
  render() {
    return (
      <>
        <ImageGalleryContainer>
          <ul className="ImageGallery">
            <ImageGalleryItem />
          </ul>
        </ImageGalleryContainer>
      </>
    );
  }
}
export default ImageGallery;
