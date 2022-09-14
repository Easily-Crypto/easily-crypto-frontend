import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  max-width: 450px;
  height: 130px;
  margin-top: 15px;
  border-radius: 5px;
  border: 2px solid #f3f3f3;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  :hover {
    transition: 1s;
    -webkit-box-shadow: 0px 3px 10px 6px rgba(138, 138, 138, 0.56);
    box-shadow: 0px 9px 19px 6px rgba(138, 138, 138, 0.56);
  }

  div {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  p {
    color: #000000;
    font-size: 14px;
    font-weight: 500;;
  }

  h2 {
    color: #000000;
    font-size: 16px;
    font-weight: 900;
    padding-bottom: 8px;
  }

  img {
    width: 70px;
    height: 70px;
  }
`;
