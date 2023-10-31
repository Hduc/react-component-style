
import React from "react";
interface IProps {
  name: string 
}

const CardProduct = (props: IProps) => {
  return (<span className="text-3xl font-bold underline">ádasdsas {props.name}</span>);
};

CardProduct.propTypes ={
  name:""
}

export default CardProduct;
