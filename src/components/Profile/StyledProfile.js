import styled from "styled-components";
export const StyledProfileContainer = styled.div`
  display: flex;
  width: 22%;
  height: 90vh;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  animation: slideIn 0.8s ease-in-out;
  @keyframes slideIn {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

export const StyledProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 28%;
  gap: 4vh;
  position: relative;
  align-items: center;
  border-radius: 10px;
  z-index: 1;
  margin-top: -30%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const StyledProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 20px 4px;
`;
export const StyledBodyMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  margin-top: 18vh;
  background: rgba(0, 0, 0, 0.15);
  gap: 1vh;
  padding: 2vh;
  border-radius: 1vh;
`;
export const StyledBodyIndividualDiv = styled.div`
  display: flex;
  padding: 1vh;
  gap: 2vh;
  align-items: center;
  .styledBodyIndividualIcon {
    display: flex;
    align-items: center;
    padding: 1vh;
    height: 3vh;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 1vh;
  }
  .styledBodyIndividualContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .styledLabelHeader {
    font-size: 1.5vh;
  }
  .styledLabelContent {
    font-size: 1.7vh;
    font-weight: bold;
  }
`;

export const StyledBodyDivisionLine = styled.div`
  width: 100%;
  background: black;
  height: 0.1vh;
`;
export const StyledDownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1vh;
  padding: 0.8vh;
  margin: 2vh;
  border-radius: 1vh;
  background: transparent;
  font-size: 1.5vh;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
  }
`;
