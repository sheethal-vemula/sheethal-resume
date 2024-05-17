import React from "react";
import { useState } from "react";
import {
  StyledPageContainer,
  PageHeader,
  PageHeaderDivisionLine,
  PageCard,
} from "../About/StyledAboutPage";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import {
  StyledProjectContainer,
  StyledProjectInformation,
} from "./StyledvorkPage";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
const Works = () => {
  const [indexData, setIndexData] = useState([]);
  const projectData = [
    {
      projectName:
        "Automatic SQL Query formation from natural language statement using NLP",
      timeLine: "May 2022 - July 2022",
      projectDetails: `This project focuses on developing a system that can automatically generate SQL queries from natural language statements using NLP techniques. The goal is to simplify the process of querying databases by allowing users to express their queries in plain English or any other natural language. The system utilizes NLP algorithms to parse and understand the meaning of the input statement.
        It then translates the statement into a structured SQL query that can be executed on a database. This eliminates the need for users to have prior knowledge of SQL syntax and query construction.
        The project involves various components such as text preprocessing, part-of-speech tagging, named entity recognition, and semantic analysis. These techniques are used to extract relevant information from the input statement and map it to the corresponding database schema. By automating the query formation process, this project aims to improve the accessibility and usability of databases for non-technical users. It reduces the learning curve associated with SQL and empowers users to retrieve information from databases using natural language.
        The system can be further enhanced by incorporating machine learning algorithms to improve the accuracy and efficiency of query generation. It can also be extended to support different database management systems and query languages. 
        Overall, this project combines the fields of NLP and database management to create a powerful tool for simplifying the querying process and making databases more user-friendly.`,
    },
    {
      projectName:
        "Multimodal Efficient Human Emotion Recognition and Performance Evaluation using Machine Learning",
      timeLine: "Nov 2022 - Jan 2023",
      projectDetails: `This project aims to develop a system that can efficiently recognize human emotions using multimodal data sources such as facial expressions, speech, and text.
        The system leverages machine learning algorithms to analyze and interpret the emotional states of individuals based on these data inputs.
        By combining information from multiple modalities, the system can achieve higher accuracy and robustness in emotion recognition compared to unimodal approaches.
        The project involves several key components, including data collection, feature extraction, and model training. Data is collected from various sensors and devices to capture facial expressions, speech patterns, and text.
        Feature extraction techniques are then applied to extract relevant information from the data, such as facial landmarks, voice pitch.
        These features are used as input to machine learning models, such as deep neural networks, support vector machines, and decision trees, to predict the emotional state of the individual.
        The system also includes a performance evaluation module that assesses the accuracy and efficiency of the emotion recognition process. This module analyzes the model's performance on a test dataset and provides insights into its strengths and weaknesses.
        By evaluating the system's performance, developers can identify areas for improvement and optimize the model for real-world applications.
        Overall, this project aims to advance the field of human emotion recognition by integrating multimodal data sources and machine learning techniques. The system has the potential to be applied in I various domains, such as healthcare, education, and entertainment, to enhance human-computen interaction and user experience.`,
    },
    {
      projectName:
        "AGRIQ - A Bilingual AI - Powered Agriculture Query Resolution System",
      timeLine: "Mar 2023 - May 2023",
      projectDetails: `AGRIQ is an AI-powered agriculture query resolution system that aims to provide farmers with timely and accurate information to address their agricultural queries.
        The system leverages natural language processing (NLP) and machine learning algorithms to understand and respond to queries in multiple languages.
        The project involves several key components, including data collection, preprocessing, and model training. Data is manually created by our team by reaching out to farmers at different locations and collecting their experiences.
        The system preprocesses the data to extract relevant information and create a structured database that can be queried by users. NLP algorithms are used to analyze and interpret the meaning of user queries, enabling the system to generate accurate responses.
        AGRIQ supports queries in multiple languages, allowing farmers from diverse linguistic backgrounds to access information in their native language. The system can provide
        recommendations on crop cultivation, pest control, soil management, and other agricultural practices based on the user's query.
        By integrating AI technologies, AGRIQ aims to improve the efficiency and effectiveness of agricultural query resolution. The system can help farmers make informed decisions, optimize crop yields, and enhance agricultural productivity.
        AGRIQ can be further enhanced by incorporating additional features, such as image recognition and voice input, to provide a more interactive and user-friendly experience.
        The system has the potential to revolutionize the way farmers access information and receive support for their agricultural needs. overall, AGRIQ represents a significant advancement in the field of AI-powered
        the system offer esouponense so on on a men tinens qua, ana mirague sualia agriculture practices.`,
    },
    {
      projectName:
        "ITAP Case Study CMDB VendorNext - Vendor Management Process Improvement",
      timeLine: "July 2023 - Aug 2023",
      projectDetails:
        "Developed a POC to streamline Vendor Relationship Management at Invesco by creating VendorNext, a one stop shop solution that can work with ProcessUnity and ServiceNow and uses AI to extract important metrics from contracts. Worked as Frontend Developer using React as Tech Stack",
    },
    {
      projectName: "ITAP Rotation 1 - Stable Value ! Fixed Income Team",
      timeLine: "Sep 2023 - Dec 2024",
      projectDetails:
        "At Stable Value, I've found myself in a well-organized team that fosters continuous learning and exploration. Despite being new to React (UI) Development, I took the initiative to immerse myself in projects, learning React in parallel. This hands-on approach allowed me to seamlessly integrate into ongoing applications, taking on tasks such as building various UI screens, managing deployments to Bitbucket, and adhering to coding standards.",
    },
    {
      projectName: "ITAP Rotation 2 - CMDB Infra Run and Stability",
      timeLine: "Jan 2024 - March 2024",
      projectDetails: `I worked on docker files and pipelines. After proper understanding of them,I worked on API
        Development using Fast API. I have implemented advanced concepts such as caching, scheduling, and threading to enhance data performance and access management. In addition to backend development, I also made notable contributions to frontend initiatives.
        I took charge of developing intuitive Un screens, employing innovative techniques such as styled components to create visually stunning interfaces with seamless animations. One of my key achievements was leading a full-stack application for UI Screen in Stabtlity Next Portal, where I did the development process from conception to deployment, showcasing Dashboard for CuB Neh pontan, a dedacated deme o expend menting so de date from diverse
        sources, including Service Now, Inframi, and Snowflake databases by implementing CRUD operations which deepened my understanding of data management practices.`,
    },
    {
      projectName: "ITAP Rotation 3 - Investment Services - Investment Tech",
      timeLine: "April 2024 - June 2024",
      projectDetails: `During my tenure with the Investment Services Team, I excelled as a Frontend Developer
        utilizing React and a Backend Developer specializing in Python. I led the integration of AGGrid to 
        introduce Excel-like functionalities, enhancing data manipulation capabilities, while also architecting robust backend solutions, 
        including RESTful APIs, to facilitate seamless communication between systems. Through collaborative efforts and an agile approach, I delivered user-centric solutions within stringent timelines`,
    },
  ];
  const secondaryEndeavours = [
    "Participated in Invesco Hackathon 2023 and won 2nd prize for solving the problem statement given by the business team.",
    "Participated in github copilot Hackathon 2023 and won 1st prize for developing efficient Machine Learning solution.",
    "Part of Core Committee for Invesco iTAP Hack2Hire Hackathon",
    "Part of Engagement Team for Invesco Tech Expo (HYD)",
  ];
  return (
    <StyledPageContainer>
      <PageHeader>
        Works<PageHeaderDivisionLine></PageHeaderDivisionLine>
      </PageHeader>
      <label
        style={{
          fontSize: "2.5vh",
          fontweight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "1vh",
        }}
      >
        <WorkspacesOutlinedIcon sx={{ fontSize: "2.5vh", color: "purple" }} />
        Projects
      </label>
      {projectData.map((project, index) => (
        <StyledProjectContainer
          onClick={() => {
            if (indexData.some((data) => data.index === index)) {
              setIndexData((prevData) =>
                prevData.map((data) => {
                  if (data.index === index) {
                    return { ...data, arrowClicked: !data.arrowClicked };
                  }
                  return data;
                })
              );
            } else {
              setIndexData((prevata) => [
                ...prevData,
                { index, arrowclicked: true },
              ]);
            }
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifycontent: "space-between",
              alignitems: "center",
            }}
          >
            {project.projectName}
            <ExpandCircleDownOutlinedIcon />
          </div>
          <div style={{ fontWeight: "normal", fontSize: "1.8vh" }}>
            {project.timeLine}
          </div>
          <StyledProjectInformation>
            {indexData.map((date) => {
              if ((date, index === index && data.arrowclicked)) {
                return <div>{project.projectDetails}</div>;
              }
            })}
          </StyledProjectInformation>
        </StyledProjectContainer>
      ))}
      <label
        style={{
          fontSize: "2.5vh",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "1vh",
        }}
      >
        <EmojiEventsOutlinedIcon sx={{ fontSize: "2.5vh", color: "purple" }} />
        Secondary Endeavours
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          textAlign: "start",
          gap: "1vh",
        }}
      >
        {secondaryEndeavours.map((endeavour, index) => {
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: "1vh",
              fontSize: "1.8vh",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "4vh",
                height: "4vh",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0,0,0,0.1)",
                borderRadius: "50%",
                fontWeight: "bold",
              }}
            >
              {index}
            </div>
            {endeavour}
          </div>;
        })}
      </div>
    </StyledPageContainer>
  );
};
export default Works;
