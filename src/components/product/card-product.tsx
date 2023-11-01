
import React from "react";
import { Title } from "../styles/title";

interface IProps {
  name: string | null
}



const CardProduct = (props: IProps) => {
  return (<Title>12345 {props.name}</Title>);
};

CardProduct.propTypes = {
  name: ""
}

export default CardProduct;
