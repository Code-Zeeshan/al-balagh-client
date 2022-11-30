import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { Style } from './Slider.styled';
import { sliderItems } from '../../services/data';
import { useNavigate, useLocation } from "react-router-dom";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const navigate = useNavigate();

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    const goToLogin = e => {
        e.preventDefault();
        navigate("/login");
    }
    return (
        <Style.Container>
            <Style.Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Style.Arrow>
            <Style.Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Style.Slide key={item.id} bg={item.bg}>
                        <Style.ImageContainer>
                            <Style.Image src={item.img} />
                        </Style.ImageContainer>
                        <Style.InfoContainer>
                            <Style.Title>{item.title}</Style.Title>
                            <Style.Desc>{item.desc}</Style.Desc>
                            <Style.Button onClick={goToLogin}>SHOW NOW</Style.Button>
                        </Style.InfoContainer>
                    </Style.Slide>
                ))}
            </Style.Wrapper>
            <Style.Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </Style.Arrow>
        </Style.Container >
    )
}

export default Slider