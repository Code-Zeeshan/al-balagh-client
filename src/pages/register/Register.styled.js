import styled from "styled-components";

export const Style = {
    Container: styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto:compress&cs:tinysrgb&dpr:2&h:650&w:940")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`,

    Wrapper: styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`,

    Title: styled.h1`
    font-size: 24px;
    font-weight: 300;
`,

    Form: styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`,

    Input: styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border: 0.1px solid black;
`,

    Agreement: styled.span`
    font-size: 12px;
    margin: 20px 0px;
`,

    Button: styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
`,
    Error: styled.small`
        height: 0;
        color: red;
        align-self: center;
    `
}