import styled from "styled-components";

export const Style = {
    Container: styled.div``,

    Wrapper: styled.div`
    display: flex;
    padding: 50px;
`,

    ImgContainer: styled.div`
    flex: 1;
`,

    Image: styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`,

    InfoContainer: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
`,

    Title: styled.h1`
    /* font-weight: 200; */
`,

    Desc: styled.p`
    margin: 20px 0px;
`,

    Price: styled.span`
    /* font-weight: 100; */
    font-size: 20px;
`,

    FilterContainer: styled.div`
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`,

    Filter: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,

    FilterTitle: styled.span`
    font-size: 20px;
    font-weight: 200;
`,

    FilterColor: styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`,

    FilterSize: styled.select`
    margin-left: 10px;
    padding: 5px;
`,

    FilterSizeOption: styled.option``,

    AddContainer: styled.div`
    width: 100%;
    display: flex;
    height: 18%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`,

    AmountContainer: styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    font-weight: 700;
`,

    Amount: styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`,

    Button: styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
      background-color: #f8f4f4;
    }
`,
    Icon: styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
}
