import styled from "styled-components";
import { mobile } from "../common/responsive.styled";

export const Style = {
    Container: styled.div`
        display: flex;
      ${mobile({ flexDirection: "column" })}
    `,

    Left: styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px;
    `,

    Logo: styled.h1``,

    Desc: styled.p`
        margin: 20px 0px;
    `,

    SocialContainer: styled.div`
        display: flex;
    `,

    SocialIcon: styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        background-color: #${(props) => props.color};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    `,

    Center: styled.div`
    flex: 1;
        padding: 20px;
        ${mobile({ flexDirection: "column" })}
    `,

    Title: styled.h3`
        margin-bottom: 30px;
    `,

    List: styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    `,

    ListItem: styled.li`
        width: 50 %;
        margin-bottom: 10px;
    `,

    Right: styled.div`
        flex: 1;
        padding: 20px;
        ${mobile({ flexDirection: "column" })}
    `,

    ContactItem: styled.div`
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    `,

    Payment: styled.img`
    width: 50%;
    `
};