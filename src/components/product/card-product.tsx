
import React from "react";
import styled from 'styled-components'

interface IProps {
  name: string
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const CardProduct = (props: IProps) => {
  return (<Title>12345 {props.name}</Title>);
};

CardProduct.propTypes = {
  name: ""
}

export default CardProduct;
