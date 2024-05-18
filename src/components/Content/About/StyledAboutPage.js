import styled from "styled-components";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin-top: 8vh;
  margin-left: 3vh;
  margin-bottom: 3vh;
  padding-right: 3vh;
  overflow-y: auto;
  align-items: flex-start;
  gap: 3vh;
  &::-webkit-scrollbar {
    width: 0.6vh;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 0.5vh;
  }
  animation: fadeIn 1s ease forwards;
  @keyframes fadeIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 5vh;
  font-weight: bold;
  color: black;
  margin: 0;
  align-items: center;
  gap: 3vh;
`;
export const PageHeaderDivisionLine = styled.div`
  display: flex;
  width: 30%;
  height: 0.3vh;
  margin-top: 1vh;
  background: orangered;
  position: relative;
  align-self: center;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 1.8vh;
  color: black;
  align-items: flex-start;
  text-align: justify;
`;
export const PageCard = styled.div`
  width: 90%;
  border-radius: 1vh;
  padding: 1.5vh;
  height: 24vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) Opx 4px 6px -2px;
`;
