import styled from "styled-components";

export const Header = styled.section`
  background-color: #fff;
  width: 100%;
  height: 70px;

  background: rgb(210, 210, 210);
  background: linear-gradient(
    180deg,
    rgba(210, 210, 210, 1) 0%,
    rgba(255, 255, 255, 1) 38%,
    rgba(203, 203, 203, 1) 76%,
    rgba(235, 235, 235, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    max-width: 1200px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-family: "kanit", sans-serif;
      font-weight: 600;
      font-style: italic;
      color: #ffee00;
      text-shadow: 0 0 3px #000;
    }

    nav {
      width: 300px;

      display: flex;
      justify-content: space-between;

      a {
        font-family: "kanit", sans-serif;
        font-weight: 600;
        font-style: italic;
        font-size: 26px;
        color: #2974a7;
        text-shadow: 1px 1px 2px #000;

        &:hover {
          color: #d3c71e;
          text-shadow: 0 0 3px #000;
        }
      }
    }

    button {
      font-family: "kanit", sans-serif;
      font-weight: 600;
      font-style: italic;
      font-size: 24px;

      text-shadow: 0 0 2px #000;

      padding: 5px 10px;

      color: #fff;
      background-color: #ff3434;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
