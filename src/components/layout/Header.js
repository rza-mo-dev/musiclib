import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";
// import styles from "../../layout.module.css";

export default function Header() {
  return (
    <Row style={rowStyle}>
      <header style={headerStyle}>
        <h1>This is Header</h1>
        <Col xs={12} sm={3} lg={3}>
          <Link style={linkStyle} to="/">
            Home
          </Link>{" "}
        </Col>
        <Col xs={12} sm={3} lg={3}>
          <Link style={linkStyle} to="/about">
            About
          </Link>{" "}
        </Col>
        <Col xs={12} sm={3} lg={3}>
          <Link style={linkStyle} to="/library">
            Library
          </Link>
        </Col>
      </header>
    </Row>
  );
}

const rowStyle = {
  marginLeft: "0px",
  width: "100%",
};

const headerStyle = {
  width: "100%",
  background: "#363328",
  color: "#fff",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
