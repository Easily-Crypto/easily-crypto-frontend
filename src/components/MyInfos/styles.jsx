import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 80vh;
  margin-top: 30px;
  border-radius: 10px;
  h2 {
    font-size: 42px;
    text-shadow: 1px 1px 4px black;
    margin-bottom: 80px;
  }
  section {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  nav p {
    color: #164463;
    font-weight: bold;
    cursor: pointer;
  }
  nav p:hover {
    text-shadow: 1px 1px 4px black;
  }
`;
