import styled from "styled-components";

export const LoginForm = styled.form`
  width: 360px;
  height: 400px;
  margin: auto;

  background-color: #ffffffcc;
  border-radius: 10px;
  box-shadow: 0 0 20px #303030;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  h3 {
    font-size: 40px;

    font-family: "kanit", sans-serif;
    font-weight: 600;
    font-style: italic;

    margin: 0 0 20px;

    color: #ffee00;
    text-shadow: 0 0 3px #000;
  }

  label {
    width: 80%;
    font-family: "kanit", sans-serif;
    font-weight: 500;
    margin-bottom: 5px;
  }

  button {
    width: calc(80% + 10px);
    background-color: #79e079;

    color: #fff;
    font-family: "kanit", sans-serif;
    font-weight: 600;
    font-style: italic;
    font-size: 25px;
    padding: 3px 0;

    &:hover {
      filter: brightness(0.8);
    }
  }

  span {
    margin-top: 10px;
    font-size: 14px;

    a {
      font-weight: bold;
    }
  }
  .input-error {
    color: red;
    margin-left: 10px;
  }
`;

export const InputLoginForm = styled.input`
  width: 80%;
  height: 30px;

  margin: 0 0 20px;

  border-style: none;
  border-radius: 3px;

  padding-left: 10px;

  font-family: "kanit", sans-serif;
  font-weight: 400;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;
