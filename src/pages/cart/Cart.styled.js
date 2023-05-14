import styled from "styled-components"
import { mobile } from "../../components/common/responsive.styled";

export const Style = {
    Container: styled.div`
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        `,

    Wrapper: styled.div`
        background-color: black;    
        padding: 15px;
    `,

    Title: styled.h1`
    font-weight: 300;
    text-align: center;
    `,

    Top: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    /* ${mobile({flex: "1"})} */
    `,

    TopButton: styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
            props.type === "filled" ? "black" : "white"
        };
    color: ${(props) => props.type === "filled" && "white"};
    `,

    TopTexts: styled.div`
    `,
    TopText: styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    `,

    Bottom: styled.div`
    display: flex;
    justify-content: space-between;
    `,

    Info: styled.div`
    flex: 3;
    `,

    Product: styled.div`
    display: flex;
    justify-content: space - between;
    `,

    ProductDetail: styled.div`
    flex: 2;
    display: flex;
    `,

    Image: styled.img`
    width: 200px;
    `,

    Details: styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `,

    ProductName: styled.span``,

    ProductId: styled.span``,

    ProductColor: styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    `,

    ProductSize: styled.span``,

    PriceDetail: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `,

    ProductAmountContainer: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    `,

    ProductAmount: styled.div`
    font-size: 24px;
    margin: 5px;
    `,

    ProductPrice: styled.div`
    font-size: 30px;
    font-weight: 200;
    `,

    Hr: styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    `,

    Summary: styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    `,

    SummaryTitle: styled.h1`
    font-weight: 200;
    `,

    SummaryItem: styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
    `,

    SummaryItemText: styled.span``,

    SummaryItemPrice: styled.span``,

    Button: styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    `,
}

