import React from "react";
import {
  StyledPageContainer,
  PageHeader,
  PageHeaderDivisionLine,
  PageCard,
} from "../About/StyledAboutPage";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ProgressBar from "./ProgressBar";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Resume = () => {
  const content = [
    {
      icon: <SchoolOutlinedIcon sx={{ color: "purple" }} />,
      heading: "Education",
      cards: [
        {
          backgroundColor: "rgba(0,0,0,0.1)",
          subheading: "2019-2023",
          content: "Information Technology - GRIET, Hyderabad",
        },
        {
          backgroundColor: "rgba(0,0,0,0.1)",
          subheading: "2017-2019",
          content: "Intermediate - Narayana Junior College, Hyderabad",
        },
        {
          backgroundColor: "rgba(0,0,0,0.1)",
          subheading: "2017",
          content: "SSC - R.B.V.R.R High School, Nizamabad",
        },
      ],
    },
    {
      icon: <BusinessCenterOutlinedIcon sx={{ color: "purple" }} />,
      heading: "Experience",
      cards: [
        {
          backgroundColor: "rgba(0,0,0,0.1)",
          subheading: "Rotation-3",
          content: "API Developer - Investment Services (Invest-Tech)",
        },
        {
          backgroundColor: "rgba(0,0,0,0.1)",
          subheading: "Rotation-2",
          content: "Full Stack Developer - CMDB (Infra-Run Stability)",
        },
        {
          backgroundColor: "rgba(0,0,0,0.1)",
          subheading: "Rotation-1",
          content: "Full Stack Developer - Stable Value (Fixed Income)",
        },
      ],
    },
  ];
  const skills = [
    {
      skill: "React",
      confidence: "90",
      color: "#f56642",
    },
    {
      skill: "CSS",
      confidence: "85",
      color: "#d035de",
    },
    {
      skill: "Python",
      confidence: "80",
      color: "#5bab22",
    },
    {
      skill: "Machine Learning",
      confidence: "70",
      color: "#20d4c8",
    },
    {
      skill: "Docker",
      confidence: "40",
      color: "#ab2244",
    },
    {
      skill: "AWS",
      confidence: "20",
      color: "#DF8100",
    },
  ];
  return (
    <StyledPageContainer>
      <PageHeader>
        Resume<PageHeaderDivisionLine></PageHeaderDivisionLine>
      </PageHeader>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              gap: "2vh",
            }}
          >
            <h2
              style={{
                display: "flex",
                fontSize: "2.5vh",
                textAlign: "justify",
                alignItems: "center",
                gap: "1vh",
              }}
            >
              <div style={{ fontSize: "2.5vh" }}>{item.icon}</div>
              {item.heading}
            </h2>
            {item.cards.map((card, cardIndex) => (
              <PageCard
                key={cardIndex}
                style={{
                  backgroundColor: card.backgroundColor,
                  marginRight: "10vh",
                  height: "fit-content",
                }}
              >
                <h3
                  style={{
                    display: "flex",
                    fontSize: "2vh",
                    textAlign: "justify",
                    alignItems: "flex-start",
                  }}
                >
                  {card.subheading}
                </h3>
                <p
                  style={{
                    fontSize: "1.8vh",
                    textAlign: "justify",
                    alignItems: "flex-start",
                    marginRight: "3vh",
                  }}
                >
                  {card.content}
                </p>
              </PageCard>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "flex-start",
          }}
        >
          <label
            style={{
              fontSize: "2.5vh",
              fontWeight: "bold",
              marginBottom: "2vh",
            }}
          >
            Technical Skills (Confidence)
          </label>
          {skills.map((skill, index) => (
            <>
              <div
                key={index}
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  fontSize: "1.8vh",
                }}
              >
                <label>{skill.skill}</label>
                <label>{skill.confidence}%</label>
              </div>
              <ProgressBar bgColor={skill.color} progress={skill.confidence} />
            </>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            justifyContent: "start",
            gap: "1vh",
          }}
        >
          <label
            style={{
              fontSize: "2.5vh",
              fontWeight: "bold",
              marginBottom: "2vh",
            }}
          >
            Full Stack Developer
          </label>
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={3}
            styles={buildStyles({
              pathColor: "orangered",
              textColor: "orangered",
              textSize: "1vh",
            })}
          />
        </div>
      </div>
    </StyledPageContainer>
  );
};

export default Resume;
