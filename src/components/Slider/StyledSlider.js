import styled from "styled-components";
export const StyledSliderContainer = styled.div`
  display: flex;
  width: 4%;
  height: 25vh;
  position: relative;
  padding: 1vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 63vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  animation: slideRight 1s ease-in-out;
  @keyframes slideRight {
    0% {
      transform: translateX(200%);
    }
    100% {
      transform: translate(0);
    }
  }
`;
export const StyledSliderBox = styled.div`
  border-radius: 10px;
  background: ${({ isSelected }) =>
    isSelected ? "linear-gradient(blue,red)" : "white"};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  :hover {
    background-color: ${({ isSelected }) => (isSelected ? "" : "")};
    cursor: pointer;
  }
`;
export const StyledSliderIcons = styled.button`
  display: flex;
  flex-direction: column;
  width: 7vh;
  height: 6vh;
  font-size: 1.4vh;
  background: rgba(255, 255, 255, 0.6);
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1vh;
  gap: 0.3vh;
  border: none;
`;
