import styled from "styled-components";

export const Style = {
    Container: styled.div``,

    Title: styled.h1`
        margin: 20px;
    `,

    FilterContainer: styled.div`
        display: flex;
        justify-content: space-between;
    `,

    Filter: styled.div`
        margin: 20px;
    `,

    FilterText: styled.span`
        font-size: 20px;
        font-weight: 600;
        margin-right: 20px;
    `,

    Select: styled.select`
        padding: 10px;
        margin-right: 20px;
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
    `,
    Option: styled.option``,
};
