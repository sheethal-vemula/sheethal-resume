import React from "react";
import Profile from "./Profile/Profile";
import Content from "./Content/Content";
import Slider from "./Slider/Slider";
import { StyledHomePage, StyledHomeContainer } from "./style";

const HomePage = () => {
  return (
    <StyledHomePage>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <StyledHomeContainer>
        <Profile />
        <Content />
        <Slider />
      </StyledHomeContainer>
    </StyledHomePage>
  );
};

export default HomePage;
