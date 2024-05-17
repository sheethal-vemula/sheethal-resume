import React from "react";
import { StyledContentContainer } from "./StyledContent";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Works from "./Works/Works";
import sliderStore from "../../stores/slider-store";
function Content() {
  const { selectedTab } = sliderStore();
  return (
    <StyledContentContainer>
      {selectedTab === "About" && <About />}
      {selectedTab === "Resume" && <Resume />}
      {selectedTab === "Works" && <Works />}
    </StyledContentContainer>
  );
}
export default Content;
