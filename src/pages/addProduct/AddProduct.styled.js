import styled from "styled-components";

export const Style = {
    Container: styled.div`
    width: 100vw;
    height: 100vh;
    /* background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto:compress&cs:tinysrgb&dpr:2&h:650&w:940")
      center; */
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`,

    Wrapper: styled.div`
    width: 25%;
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
`,

    Input: styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    border: 0.1px solid black;
`,

    Button: styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`,

    Link: styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`,
    Error: styled.small`
        /* height: 0; */
        color: red;
        /* align-self: center; */
    `
}