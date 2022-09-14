import styled from "styled-components";

export const ProfileFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #164463;
  padding: 30px;
  border-radius: 8px;
  color: white;
  input {
    margin: 20px auto;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: white;
  }
  input::placeholder {
    color: white;
    opacity: 0.7;
    font-size: 1rem;
  }
  button {
    border: none;
    font-weight: bold;
  }
`;
