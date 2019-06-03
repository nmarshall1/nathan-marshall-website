import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout
          style={{
            background:
              // "url(https://img.wallpapersafari.com/desktop/1920/1080/80/70/xMKnv5.jpg) center / cover"
              "url(https://img.wallpapersafari.com/desktop/1920/1080/80/70/xMKnv5.jpg)"
          }}
        >
          <Header
            className="header-color"
            transparent
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Nathan Marshall
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/experience">Experience</Link>
              <Link to="/education">Education</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
