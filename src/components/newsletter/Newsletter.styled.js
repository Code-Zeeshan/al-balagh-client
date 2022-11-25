import styled from "styled-components";
import { mobile } from "../common/responsive.styled";

export const Style = {
    Container: styled.div`
        height: 60vh;
        background-color: #fcf5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `,
    Title: styled.h1`
        font-size: 70px;
        margin-bottom: 20px;
    `,

    Desc: styled.div`
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 20px;
        ${mobile({ textAlign: "center" })}
    `,

    InputContainer: styled.div`
        width: 50%;
        height: 40px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        border: 1px solid lightgray;
      ${mobile({ width: "80%" })}

    `,

    Input: styled.input`
        border: none;
        flex: 8;
        padding-left: 20px;
    `,

    Button: styled.button`
        flex: 1;
        border: none;
        background-color: teal;
        color: white;
    `,
};