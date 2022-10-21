import React from "react";
import styled from "styled-components";
import HeaderLogout from "../HeaderLogout";

export default function TimeLineExample() {
    return (
        <>
            <HeaderLogout />

            <Butaum data-back="oi" data-front="tchau">
                
            </Butaum>
        </>
    )
};

const Butaum = styled.div`
    margin: 0 auto;
    margin-top: 200px;

    opacity: 1;
	outline: 0;
	color: #fff;
	line-height: 40px;
	position: relative;
	text-align: center;
	letter-spacing: 1px;
	display: inline-block;
	text-decoration: none;
	font-family: 'Open Sans';
	text-transform: uppercase;
	
	&:hover{
		
		&:after{
			opacity: 1;
			transform: translateY(0) rotateX(0);
		}
		
		&:before{
			opacity: 0;
			transform: translateY(50%) rotateX(90deg);
		}
	}
	
	&:after{
		top: 0;
		left: 0;
		opacity: 0;
		width: 100%;
		color: #323237;
		display: block;
		transition: 0.5s;
		position: absolute;
		background: #adadaf;
		content: attr(data-back);
		transform: translateY(-50%) rotateX(90deg);
	}
	
	&:before{
		top: 0;
		left: 0;
		opacity: 1;
		color: #adadaf;
		display: block;
		padding: 0 30px;
		line-height: 40px;
		transition: 0.5s;
		position: relative;
		background: #323237;
		content: attr(data-front);
		transform: translateY(0) rotateX(0);
	}
`;