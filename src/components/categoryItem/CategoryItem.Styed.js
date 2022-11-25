import styled from "styled-components";
import { mobile } from "../common/responsive.styled";

export const Style = {
    Container: styled.div`
        flex: 1;
        margin: 3px;
        height: 70vh;
        position: relative;
    `,

    Image: styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
      ${mobile({ height: "20vh" })}
    `,

    Info: styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,

    Title: styled.h1`
        color:white;
        margin-bottom: 20px;
    `,

    Button: styled.button`
        border:none;
        padding: 10px;
        background-color: white;
        color:gray;
        cursor: pointer;
        font-weight: 600;
    `,

};
