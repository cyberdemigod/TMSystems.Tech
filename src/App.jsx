/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Thabo Makhele",
  title: "Web Designer & Content Creator",
  email: "ask@thabomakhele.co.za",
  gitHub: "cyberdemigod",
  instagram: "t_makhele",
  linkedIn: "Thabo Makhele",
  medium: "",
  twitter: "t_makhele",
  youTube: "Thabo Makhele",
};

const primaryColor = "#2D2F31";
const secondaryColor = "#FCBA3B";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
