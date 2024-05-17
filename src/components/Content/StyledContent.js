import styled from "styled-components";

export const StyledContentContainer = styled.div`
  display: "flex";
  width: 70%;
  height: 81vh;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 9vh;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 50px 4px;
  animation: slideIn 0.5s ease-in-out;
  @keyframes slideIn {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
