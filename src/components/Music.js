import React, { Component } from "react";

class Music extends Component {
  render() {
    const { artist, album, genre } = this.props;
    return (
      <div>
        <h1>Artist: {artist}</h1>
        <h2>Album: {album}</h2>
        <h3>Genre: {genre}</h3>
      </div>
    );
  }
}

export default Music;
