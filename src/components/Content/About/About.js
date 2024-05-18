import React from "react";
import {
  StyledPageContainer,
  PageHeader,
  PageHeaderDivisionLine,
  PageContent,
  PageCard,
} from "./StyledAboutPage";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import ColorLensIcon from "@mui/icons-material/ColorLens";
const About = () => {
  const content = [
    {
      icon: (
        <WebhookOutlinedIcon sx={{ color: "blueviolet", fontSize: "3vh" }} />
      ),
      backgroundColor: "rgba(0,0,0,0.1)",
      heading: "Ui/Ux Design",
      content: `UX design centers on understanding user needs and structuring product experiences, while UI design focuses on crafting visually appealing and functional interfaces, collaborating to ensure seamless digital experiences, striving to create user-centric solutions that balance functionality and aesthetics.`,
    },
    {
      icon: <AirplayOutlinedIcon sx={{ color: "orange", fontSize: "3vh" }} />,
      backgroundColor: "rgba(0,0,0,0.1)",
      heading: "API Development",
      content: `API development involves designing and building application programming interfaces (APIS)
        that allow different software systems to communicate and interact with each other.
        It includes creating endpoints, defining data structures, and implementing functionality to enable seamless integration between systems.
        `,
    },
    {
      icon: <ColorLensIcon sx={{ color: "orangered", fontSize: "3vh" }} />,
      backgroundColor: "rgba(0,0,0,0.1)",
      heading: "Mandala Art",
      content: `Mandala art is a spiritual and ritualistic symbol in Hinduism and Buddhism, representing the universe, It features intricate geometric patterns arranged symmetrically around a central point. symbolizing unity and harmony, Creating mandalas is also a meditative practice believed to promote relaxation and mindfulness.`,
    },
    {
      icon: <SportsBasketballIcon sx={{ color: "purple", fontSize: "3vh" }} />,
      backgroundColor: "rgba(0,0,0,0.1)",
      heading: "BasketBall",
      content: `Basketball is a fast-paced team sport that involves shooting a ball through a hoop to score points.
        It requires agility, coordination, and teamwork to outmaneuver opponents and secure victories.
        Playing basketball is not only physically demanding but also mentally stimulating, making it an exciting and challenging sport.`,
    },
  ];
  return (
    <StyledPageContainer>
      <PageHeader>
        About<PageHeaderDivisionLine></PageHeaderDivisionLine>
      </PageHeader>
      <PageContent>
        As a full stack developer, I specialize in both frontend and backend
        development. I have expertise in React for building dynamic and
        responsive user interfaces, and Python for creating robust and scalable
        backend systems. With my skills in both technologies, I can develop
        end-to-end web applications that deliver seamless user experiences.
        Whether it's designing intuitive UI's or implementing complex business
        logic, I strive to create high-quality software solutions that meet the
        needs of clients and users.
      </PageContent>
      <PageContent>
        I have extensive experience in database management using SQL.
        Additionally, I am proficient in version control systems like Git, which
        enables efficient collaboration and code management. My passion lies in
        learning new technologies and staying up-to-date with industry trends. I
        believe in continuous improvement and actively enhance my skills through
        practice and experimentation. Collaborating with teams on challenging
        projects that push the boundaries of innovation brings me immense
        satisfaction.
      </PageContent>
      <div style={{ fontSize: "3vh", fontWeight: "bold" }}>What I Do!</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              flexBasis: "50%",
              boxSizing: "border-box",
              padding: "0.5rem",
            }}
          >
            <PageCard style={{ background: `${item.backgroundColor}` }}>
              <div style={{ marginLeft: "1vh", alignItems: "center" }}>
                <h3
                  style={{
                    display: "flex",
                    fontSize: "2vh",
                    textAlign: "justify",
                    alignitems: "flex-start",
                    gap: "1vh",
                  }}
                >
                  {item.heading}
                  <div>{item.icon}</div>
                </h3>
                <p
                  style={{
                    fontSize: "1.8vh",
                    textAlign: "justify",
                    alignItems: "flex-start",
                    marginRight: "3vh",
                  }}
                >
                  {item.content}
                </p>
              </div>
            </PageCard>
          </div>
        ))}
      </div>
    </StyledPageContainer>
  );
};

export default About;
