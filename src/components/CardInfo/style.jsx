import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #164463;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  color: white;
  display: flex;
  height: 300px;
  .key-section,
  .value-section {
    flex-direction: column;
  }
  .key-section p {
    font-weight: bold;
  }
`;
