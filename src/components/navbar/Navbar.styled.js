import styled from "styled-components/macro";
import { mobile } from "../common/responsive.styled";

export const Style = {
    Container: styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
    `,
    Wrapper: styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${mobile({ padding: "10px 0px" })}
    `,
    Left: styled.div`
        flex: 1;
        display: flex;
        align-items: center;
    `,
    Center: styled.div`
        flex: 1;
        text-align: center;
    `,
    Right: styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${mobile({ flex: 2, justifyContent: "center" })}
    `,
    Language: styled.span`
        font-size: 14;
        cursor: pointer;
        ${mobile({ display: "none" })}
    `,
    SearchContainer: styled.div`
        border: 1px solid lightgray;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
    `,
    Input: styled.input`
        border: none;
      ${mobile({ width: "50px" })}
    `,
    Logo: styled.h1`
        font-weight: bold;
        ${mobile({ fontSize: "24px" })}
    `,
    MenuItem: styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  `,
};