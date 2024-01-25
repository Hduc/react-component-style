import React, { FC, Fragment, useEffect } from "react";
import { ImageObj, SlideshowProps } from "./Slideshow.types";
import { StyledSlideshow } from "./Slideshow.style";

let slideIndex = 0
let timeout:number;
const Slideshow = (props: SlideshowProps) => {

    useEffect(() => {
        currentSlide(slideIndex = (props.active || 1))

        clearTimeout(timeout)
        if (props.automatic && props.automatic > 0)
            carousel()

    }, [props.automatic])

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
        props.onChange && props.onChange(slideIndex)
    }

    const carousel = () => {

        plusSlides(1)
        timeout = setTimeout(carousel, props.automatic);
    }

    return (
        <StyledSlideshow>
            {props.data && props.data.map((img: ImageObj, index: number) => (
                <div className="mySlides">
                    <div className="numbertext">{`${index}/${props?.data?.length}`}</div>
                    <img src={img.url} style={{ width: '100%' }} />
                </div>
            ))}
            <a className={`prev ${props.showAction === true ? '' : 'hidden'}`} onClick={() => plusSlides(-1)}>❮</a>
            <a className={`next ${props.showAction === true ? '' : 'hidden'}`} onClick={() => plusSlides(1)}>❯</a>
            <div className="caption-container hidden">
                <p id="caption"></p>
            </div>
            <div className={`row ${props.showThumb === true ? '' : 'hidden'}`}>
                {props.data && props.data.map((img: ImageObj, index: number) => (
                    <div className="column">
                        <img className="demo cursor" src={img.url} style={{ width: '100%' }} onClick={() => currentSlide(index + 1)} alt={img.name} />
                    </div>
                ))}
            </div>
        </StyledSlideshow>
    );
};

export default Slideshow;
