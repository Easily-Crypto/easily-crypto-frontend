import styled from "styled-components";

export const CryptoCardDiv = styled.div`
  width: 200px;
  height: 150px;

  margin: 3px 0;

  border-radius: 10px;

  background-color: #e0e0e0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:hover {
    filter: brightness(1.1);
  }

  .infoSec {
    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
      font-family: "kanit", sans-serif;
      font-weight: 600;
      font-style: italic;

      h3 {
        font-size: 16px;
        color: #ffee00;
        text-shadow: 0 0 3px #000;
      }

      span {
        font-size: 26px;
        color: #b11e1e;
      }
    }
  }

  .priceSec {
    display: flex;
    justify-content: space-around;

    font-family: "kanit", sans-serif;
    font-weight: 500;
  }

  .buySection {
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-family: "kanit", sans-serif;
    font-weight: 500;

    input {
      width: 40px;
    }

    button {
      padding: 2px 5px;
      color: #fff;
      text-shadow: 0 0 3px #000;
      background-color: #60db60;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
