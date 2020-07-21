import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>
        <h1> this is the footer</h1>
      </footer>
    );
  }
}

export default Footer;

const footerStyle = {
  background: "#363328",
  color: "#fff",
  height: "100px",
};
