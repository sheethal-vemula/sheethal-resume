import React from "react";
import { useState } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import {
  StyledSliderContainer,
  StyledSliderIcons,
  StyledSliderBox,
} from "./StyledSlider";
import sliderStore from "../../stores/slider-store";

function Slider() {
  const { selectedTab, setSelectedTab } = sliderStore();
  const [activeTab, setActiveTab] = useState(selectedTab);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setActiveTab(tabName);
  };

  return (
    <StyledSliderContainer>
      <StyledSliderBox
        isSelected={activeTab === "About"}
        onClick={() => handleTabClick("About")}
      >
        <StyledSliderIcons>
          <PermIdentityOutlinedIcon
            sx={{
              fontsize: "2.7vh",
              color: `${activeTab === "About" ? "black" : "orange"}`,
            }}
          />
          <label>About</label>
        </StyledSliderIcons>
      </StyledSliderBox>
      <StyledSliderBox
        isSelected={activeTab === "Resume"}
        onClick={() => handleTabClick("Resume")}
      >
        <StyledSliderIcons>
          <DescriptionOutlinedIcon
            sx={{
              fontsize: "2.7vh",
              color: `${activeTab === "Resume" ? "black" : "green"}`,
            }}
          />
          <label>Resume</label>
        </StyledSliderIcons>
      </StyledSliderBox>
      <StyledSliderBox
        isSelected={activeTab === "Works"}
        onClick={() => handleTabClick("Works")}
      >
        <StyledSliderIcons>
          <BusinessCenterOutlinedIcon
            sx={{
              fontsize: "2.7vh",
              color: `${activeTab === "Works" ? "black" : "blue"}`,
            }}
          />
          <label>Works</label>
        </StyledSliderIcons>
      </StyledSliderBox>
    </StyledSliderContainer>
  );
}

export default Slider;
