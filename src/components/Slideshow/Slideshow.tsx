import React, { FC, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { ImageObj, SlideshowProps } from "./Slideshow.types";

const StyledSlideshow = styled.div<SlideshowProps>`
        box-sizing: border-box;
        & img {
        	vertical-align: middle;
        }
        & .container {
        	position: relative;
        }
        & .mySlides {
        	display: none;
        }
        & .cursor {
        	cursor: pointer;
        }
        & .prev {
        	cursor: pointer;
        	position: absolute;
        	top: 40%;
        	width: auto;
        	padding: 16px;
        	margin-top: -50px;
        	color: white;
        	font-weight: bold;
        	font-size: 20px;
        	border-radius: 0 3px 3px 0;
        	user-select: none;
        	-webkit-user-select: none;
        	&:hover {
        		background-color: rgba(0, 0, 0, 0.8);
        	}
        }
        & .next {
        	cursor: pointer;
        	position: absolute;
        	top: 40%;
        	width: auto;
        	padding: 16px;
        	margin-top: -50px;
        	color: white;
        	font-weight: bold;
        	font-size: 20px;
        	border-radius: 0 3px 3px 0;
        	user-select: none;
        	-webkit-user-select: none;
        	right: 0;
        	border-radius: 3px 0 0 3px;
        	&:hover {
        		background-color: rgba(0, 0, 0, 0.8);
        	}
        }
        & .numbertext {
        	color: #f2f2f2;
        	font-size: 12px;
        	padding: 8px 12px;
        	position: absolute;
        	top: 0;
        }
        & .caption-container {
        	text-align: center;
        	background-color: #222;
        	padding: 2px 16px;
        	color: white;
        }
        & .row {
        	&:after {
        		content: "";
        		display: table;
        		clear: both;
        	}
        }
        & .column {
        	float: left;
        	width: 16.66%;
        }
        & .demo {
        	opacity: 0.6;
        	&:hover {
        		opacity: 1;
        	}
        }
        & .active {
        	opacity: 1;
        }
`;

let slideIndex = 0
const Slideshow: FC<SlideshowProps> = ({
    id,
    active,
    data,
    ...props
}) => {
    useEffect(()=>{
        currentSlide(slideIndex = (active || 1))
    })
    const plusSlides = (n: number) => {
        showSlides(slideIndex += n)
    }
    const currentSlide = (n: number) => {
        showSlides(slideIndex = n);
    }
    const showSlides = (n: number) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            //@ts-ignore
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        //@ts-ignore
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        //@ts-ignore
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    return (
        <Fragment>
            <StyledSlideshow>
                {data && data.map((img: ImageObj, index: number) => (
                    <div className="mySlides">
                        <div className="numbertext">{`${index}/${data.length}`}</div>
                        <img src={img.url} style={{ width: '100%' }} />
                    </div>
                ))}
                <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                <a className="next" onClick={() => plusSlides(1)}>❯</a>

                <div className="caption-container">
                    <p id="caption"></p>
                </div>

                <div className="row">
                    {data && data.map((img: ImageObj, index: number) => (
                        <div className="column">
                            <img className="demo cursor" src={img.url} style={{ width: '100%' }} onClick={() => currentSlide(index+1)} alt={img.name} />
                        </div>
                    ))}
                </div>
            </StyledSlideshow>
        </Fragment>
    );
};

export default Slideshow;
