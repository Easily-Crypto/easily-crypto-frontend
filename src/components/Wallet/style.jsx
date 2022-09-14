import styled from "styled-components";

export const WalletContainer = styled.main`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 80vh;
    overflow-y: auto;
    padding: 10px;
    width: 90%;
    margin-top: 50px;

    background: rgba(240, 248, 255, 0.14);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.8px);
    -webkit-backdrop-filter: blur(6.8px);
    border: 1px solid rgba(240, 248, 255, 0.3);

    ::-webkit-scrollbar {
        width: 7px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }

    li {
        list-style: none;
        width: 80%;
        border-radius: 5px;
        padding: 10px;
        color: #111;
        background-color: #f0f8ff;
        box-shadow: 0 0 1em #353538;
        margin: 10px;

        cursor: pointer;
    }
    li:hover {
        opacity: .9;
    }

    span {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 8px;
    }

    div {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    h1 {
        color: #555;
    }

`

