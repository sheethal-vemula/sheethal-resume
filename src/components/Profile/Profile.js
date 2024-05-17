import React from "react";
import image from "/. /images/profile-image.avif";
import {
  StyledProfileContainer,
  StyledProfileBody,
  StyledBodyDivisionLine,
  StyledDownloadButton,
  StyledProfileImage,
  StyledBodyIndividualDiv,
  StyledBodyMain,
} from " ./StyledProfile";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../../assets/resume.pdf";
function Profile() {
  const onDownloadClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download - "SheethalResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <StyledProfileContainer>
      <StyledProfileImage>
        <img src={image} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gep: "1vh",
          }}
        >
          <label style={{ fontSize: "3.2vh", fontWeight: "bold" }}>
            Sheethal Vemula
          </label>
          <label
            style={{ fontSize: "2.5vh", padding: "1vh", borderRadius: "1.5vh" }}
          >
            Full Stack Developer
          </label>
        </div>
      </StyledProfileImage>
      <StyledProfileBody>
        <StyledBodyMain>
          <StyledBodyIndividualDiv>
            <div className="styledBodyIndividualIcon">
              <StayPrimaryPortraitIcon
                sx={{ fontsize: "3vh", color: "orange" }}
              />
            </div>
            <div className="styledBodyIndividualContent">
              <label className="styledLabelHeader">Phone</label>
              <label className="styledLabelContent">7286888828</label>
            </div>
          </StyledBodyIndividualDiv>
          <StyledBodyDivisionLine />
          <StyledBodyIndividualDiv>
            <div className="styledBodyIndividualIcon">
              <EmailOutlinedIcon sx={{ fontsize: "3vh", color: "green" }} />
            </div>
            <div className="styledBodyIndividualContent">
              <label className="styledLabelHeader">Email</label>
              <label className="styledLabelContent">
                sheethalreddyv@gmail.com
              </label>
            </div>
          </StyledBodyIndividualDiv>
          <StyledBodyDivisionLine />
          <StyledBodyIndividualDiv>
            <div className="styledBodyIndividualIcon">
              <LocationOnIcon sx={{ fontsize: "3vh", color: "blue" }} />
            </div>
            <div className="styledBodyIndividualContent">
              <label className="styledLabelHeader">Location</label>
              <label className="styledLabelContent">Hyderabad, India</label>
            </div>
          </StyledBodyIndividualDiv>
          <StyledBodyDivisionLine />
          <StyledBodyIndividualDiv>
            <div className="styledBodyIndividualIcon">
              <CalendarMonthIcon sx={{ fontsize: "3vh", color: "purple" }} />
            </div>
            <div className="styledBodyIndividualContent">
              <label className="styledLabelHeader">Date of Birth</label>
              <label className="styledLabelContent">May 22, 2002</label>
            </div>
          </StyledBodyIndividualDiv>
        </StyledBodyMain>
        <StyledDownloadButton onclick={() => onDownloadClick()}>
          <DownloadIcon />
          Download CV
        </StyledDownloadButton>
      </StyledProfileBody>
    </StyledProfileContainer>
  );
}
export default Profile;
