import styled from "styled-components";
export const StyledProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 2vh;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1h;
  font-weight: bold;
  text-align: start;
  font-size: 1.9vh;
  gap: 0.5vh;
  box-shadow: rgba(0, 0, 0, 0.1) Opx 10px 15px -3px,
    rgba(0, 0, 0, 0.05) Opx 4px Opx -2px;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledProjectInformation = styled.div`
  display: flex;
  text-align: justify;
  font-weight: normal;
  font-size: 1.8vh;
`;
