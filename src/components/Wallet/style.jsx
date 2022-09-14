import styled from "styled-components";

export const WalletContainer = styled.main`
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
    width: 90%;
    margin-top: 50px;

    background: rgba(240, 248, 255, 0.14);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.8px);
    -webkit-backdrop-filter: blur(6.8px);
    border: 1px solid rgba(240, 248, 255, 0.3);

    li {
        list-style: none;
        width: 80%;
        border-radius: 5px;
        padding: 10px;
        color: #111;
        background-color: #f0f8ff;
        box-shadow: 0 0 1em #353538;

        cursor: pointer;
    }

    li:hover {
        opacity: .8;
    }

    span {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

`

