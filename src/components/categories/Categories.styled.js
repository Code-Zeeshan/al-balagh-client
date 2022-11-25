import styled from "styled-components";
import { mobile } from "../common/responsive.styled";

export const Style = {
    Container: styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        ${mobile({ padding: "0px", flexDirection: "column" })}
   `,
};
