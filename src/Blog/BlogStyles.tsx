import styled from "styled-components";
import { Bold, H4, P } from "../Styles/TextStyles";

export const HeaderImg = styled.img`
  margin-left: -330px;
  margin-right: 0;
`;
export const Main = styled.div`
  margin-left: 255px;
  margin-right: 255px;
`;

export const DateStyle = styled(Bold)`
  color: red;
`;

export const TitleStyle = styled.div`
  font-family: PoppinsBold;
  font-weight: bold;
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const BlogText = styled(P)`
  font-size: 21px;
`;

export const UL = styled.ul`
  font-family: PoppinsRegular;
  font-weight: normal;

  font-size: 21px;
`;

type VSpacerProps = {
  height: string;
};
export const VSpacer = styled.div<VSpacerProps>`
  height: ${(props) => props.height};
`;
