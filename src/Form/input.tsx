import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, { css } from "styled-components";

export type InputType = "text" | "email" | "password" | "checkbox";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  kind: "small" | "medium" | "large";
  width?: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      width,
      type = "text",
      kind = "medium",
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <StyledInput
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        kind={kind}
        width={width}
        {...props}
      />
    );
  }
);

export default Input;

type InputStyleProps = {
  type?: string;
  kind?: string;
  width?: string;
};

const StyledInput = styled.input<InputStyleProps>`
  border: 1px solid black;
  color: black;
  border-radius: 6px;
  padding: 4px 8px 4px 8px;
  font-family: PoppinsRegular;
  width: ${(props) => props.width || "100%"};
  box-sizing: border-box;
  margin-bottom: 16px;

  ${(props) => {
    switch (props.kind) {
      case "small":
        return css`
          border-radius: 4px;
          font-weight: 400;
          font-size: 9px;
          line-height: 12px;
        `;
      case "medium":
        return css`
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
        `;
      case "large":
        return css`
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        `;
      default:
        return css`
          font-weight: 500;
          font-size: 12px;
        `;
    }
  }}

  &:focus {
    outline: none !important;
    border-color: red;
    border-width: 2px;
  }
`;
