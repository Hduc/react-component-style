import { styled } from "styled-components";
import { SlideshowProps } from "./Slideshow.types";

export const StyledSlideshow = styled.div<SlideshowProps>`
        box-sizing: border-box;
        & .hidden {
            display: none;
        }
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