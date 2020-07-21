import React, { Component } from "react";
import Music from "./Music";

class Library extends Component {
  state = {
    archive: [
      {
        id: 1,
        artist: "BMTH",
        album: "Sempiternal",
        genre: "Post Hardcore",
      },
      {
        id: 2,
        artist: "Haken",
        album: "Virus",
        genre: "Progressive metal",
      },
      {
        id: 3,
        artist: "Lamb of god",
        album: "Sacrament",
        genre: "Thrash metal",
      },
      {
        id: 4,
        artist: "Tool",
        album: "Fear Innoculum",
        genre: "Progressive psychodelic rock",
      },
      {
        id: 5,
        artist: "Tame Impala",
        album: "The Slow Rush",
        genre: "Psychedelic rock",
      },
      {
        id: 6,
        artist: "Gorillaz",
        album: "The Now Now",
        genre: "Experimental rock",
      },
    ],
  };
  render() {
    return this.state.archive.map((music) => (
      <Music
        key={music.id}
        artist={music.artist}
        album={music.album}
        genre={music.genre}
      />
    ));
  }
}

export default Library;
