import React from 'react'
import { Style } from "./Newsletter.styled";
import { Send } from "@material-ui/icons";

function Newsletter() {
    return (
        <Style.Container>
            <Style.Title>Newsletter</Style.Title>
            <Style.Desc>Get timely updates from your favorite products.</Style.Desc>
            <Style.InputContainer>
                <Style.Input placeholder="Your email" />
                <Style.Button>
                    <Send/>
                </Style.Button>
            </Style.InputContainer>
        </Style.Container>
    )
}

export default Newsletter