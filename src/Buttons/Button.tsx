import React, { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { AXButtonState, AXButtonType, SizeType } from "../Types/BaseTypes";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  state?: AXButtonState;
  type: AXButtonType;
  disabled?: boolean;
  size?: SizeType;

  children: ReactNode;
  width?: string;
  primary?: string;
  secondary?: string;
  hoverText?: string;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  size = "medium",
  state = "primary",
  type = "button",
  disabled = false,
  children,
  onClick,
  width,
  primary = "var(--primary)",
  secondary = "var(--secondary)",
  hoverText,
}: ButtonProps) => {
  return (
    <ToolTip>
      <StyledButton
        disabled={disabled}
        width={width}
        onClick={onClick}
        type={type}
        state={state}
        size={size}
        primary={primary}
        secondary={secondary}
      >
        {children}
        {hoverText && <Tooltiptext>{hoverText}</Tooltiptext>}
      </StyledButton>
    </ToolTip>
  );
};

type ButtonStyleProps = {
  size?: string;
  state?: string;
  width?: string;
  primary: string;
  secondary: string;
  disabled: boolean;
};

const StyledButton = styled.button<ButtonStyleProps>`
  /* Adapt the colors based on primary prop */
  font-family: "PoppinsRegular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  width: ${(props) => (props.width ? props.width : "auto")};
  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          font-weight: 400;
          font-size: 10px;
          padding: 8px 12px;
          border-radius: 6px;
        `;
      default:
        return css`
          font-weight: 400;
          font-size: 14px;
          padding: 9px 14px 10px 14px;
          border-radius: 9px;
        `;
      case "large":
        return css`
          font-weight: 500;
          font-size: 21px;
          padding: 12px 18px;
          border-radius: 12px;
        `;
      case "xlarge":
        return css`
          font-weight: 500;
          font-size: 24px;
          padding: 12px 18px;
          border-radius: 12px;
        `;
    }
  }}
  ${(props) => {
    switch (props.state) {
      case "secondary":
        return css<ButtonStyleProps>`
          background: ${(props) =>
            props.disabled ? "var(--disabled)" : props.secondary};
          color: ${(props) =>
            props.disabled ? "var(--text3)" : "var(--text2)"};
          &:hover,
          &active {
            box-shadow: ${(props) =>
              props.disabled ? "" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
          }
          &:active {
            color: var(--highlight);
            transform: ${(props) =>
              props.disabled ? "translate(0)" : "translate(2)"};
          }
        `;
      case "primary":
        return css<ButtonStyleProps>`
          background: ${(props) =>
            props.disabled ? "var(--disabled)" : props.primary};
          color: ${(props) =>
            props.disabled ? "var(--text3)" : "var(--text)"};
          &:hover,
          &:active {
            box-shadow: ${(props) =>
              props.disabled ? "" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
          }
          &:active {
            color: var(--highlight2);
            transform: ${(props) =>
              props.disabled ? "translate(0)" : "translate(2)"};
          }
        `;
      case "flat":
        return css<ButtonStyleProps>`
          background: transparent;
          color: ${(props) =>
            props.disabled ? "var(--text3)" : "var(--primary)"};
          };
          padding: 2px 4px;
          &:hover, &:active {
            color: ${(props) =>
              props.disabled ? "var(--text3)" : "var(--highlight)"};
          };
            transform: ${(props) =>
              props.disabled ? "scale(1)" : "scale(1.1)"};
          };
          }
          &:active {
            transform: scale(1);
          }
        `;
      default:
        return css`
          background: var(--primary);
          color: var(--text);
        `;
    }
  }}
`;

const Tooltiptext = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;
  font-family: Roboto;
  font-size: 12px;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 10;
`;

const ToolTip = styled.span`
  position: relative;
  display: inline-block;
  white-space: nowrap;
  &:hover ${Tooltiptext} {
    visibility: visible;
  }
`;

export default Button;
