import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
  color: ${(props) => (props.primary ? "#1b116e" : "#ffffff")};
  background-color: ${(props) => (props.primary ? "#6bedb5" : "#1b116e")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#55bd90" : "#6bedb5")};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
    props.size === "small"
      ? "5px 23px 6px"
      : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    // <StyledButton
    //   type="button"
    //   onClick={onClick}
    //   primary={primary}
    //   disabled={disabled}
    //   size={size}
    //   {...props}>
    //   {text}
    // </StyledButton>
    <div className="container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-3xl font-bold mb-4">Special Offer!</div>
      <div className="text-lg mb-4">Get <span className="text-yellow-400 font-bold">25% OFF</span> your next purchase!</div>
      <div className="text-base mb-4">Use coupon code:</div>
      <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
        <span className="text-2xl font-semibold">TAILOFFER25</span>
        <button className="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Copy</button>
      </div>
      <div className="text-sm mt-4">
        <p>Valid until <span className="font-semibold">December 31, 2023</span></p>
        <p>Terms and conditions apply.</p>
      </div>
    </div>
  );
};

export default Button;
