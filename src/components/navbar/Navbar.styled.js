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
    // Center: styled.div`
    //     flex: 1;
    //     text-align: center;
    // `,
    Right: styled.div`
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
    Logo: styled.img`
    background-color: black;
        /* font-weight: bold; */
        /* ${mobile({ fontSize: "24px" })} */
    `,
    MenuItem: styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  `,
    Dropdown: styled.div`
        &:hover
        /* .dropdown-content {display: block;} */
        ${()=> Style.DropdownContainer}{
            display: block;
        }
    `,

    DropdownContainer: styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  `,

    DropdownContent: styled.div`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {background-color: #ddd;}
  `
};