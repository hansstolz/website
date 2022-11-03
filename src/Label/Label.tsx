import React, { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  size: "small" | "medium" | "large" | "checkbox";
  color?: string;
  width?: string;
}

export default function Label(props: LabelProps) {
  const { children, color, size, width } = props;

  return (
    <StyledLabel width={width} size={size} color={color}>
      {children}
    </StyledLabel>
  );
}

type LabelStyleProps = {
  size?: string;
  width?: string;
};
const StyledLabel = styled.div<LabelStyleProps>`
  color: ${(props) => (props.color ? props.color : "black")};
  font-family: PoppinsRegular;
  margin-top: 0;
  margin-bottom: 0;
  width: ${(props) => (props.width ? props.width : "auto")};

  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          font-weight: 400;
          font-size: 9px;
          letter-spacing: 1px;
        `;
      case "medium":
        return css`
          font-weight: 500;
          font-size: 14px;
          margin-bottom: 4px;
        `;
      case "large":
        return css`
          font-weight: 500;
          font-size: 16px;
          margin-bottom: 6px;
        `;
      case "checkbox":
        return css`
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
        `;
      default:
        return css`
          font-weight: 500;
          font-size: 12px;
        `;
    }
  }}
`;
