import React, { Component } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    articles: [],
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery />
        <Button onClick={this.fetchArticles} />
      </>
    );
  }
}
export default App;
