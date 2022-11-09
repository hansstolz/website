import styled from "styled-components";

export type Props = {
  toggle?: boolean;
};

export const IMG = styled.img`
  margin-top: -140px;
`;

export const Main = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) => (props.toggle ? "1fr 300px;" : "1fr")};
`;

export const LI = styled.li`
  font-family: PoppinsMedium;
  font-weight: medium;
  font-size: 14px;
`;

export const P = styled.p`
  font-family: PoppinsRegular;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const Bold = styled.p`
  font-family: PoppinsBold;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0px;
`;

export const H5 = styled.h5<Props>`
  font-family: PoppinsRegular;
  font-weight: normal;
  font-size: ${(props) => (props.toggle ? "24px;" : "16px;")};
  margin-top: 0;
  margin-bottom: 0;
`;

export const H3 = styled.h4<Props>`
  font-family: PoppinsBold;
  font-weight: bold;
  font-size: ${(props) => (props.toggle ? "36px;" : "20px;")};
  margin-top: 48px;
  margin-bottom: 12px;
`;

export const H4 = styled.h4<Props>`
  font-family: PoppinsBold;
  font-weight: bold;
  font-size: ${(props) => (props.toggle ? "24px;" : "16px;")};
  margin-top: 48px;
  margin-bottom: 12px;
`;

export const H1 = styled.h1<Props>`
  font-family: NeoGothisDB;
  font-weight: bols;
  font-size: ${(props) => (props.toggle ? "96px;" : "32px;")};
  margin-top: 60px;
  margin-bottom: 60px;
  padding-left: ${(props) => (props.toggle ? "0" : "8px;")};
`;

export const Label = styled.label`
  font-family: PoppinsRegular;
  font-weight: normal;
  font-size: 16px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const INPUT = styled.input`
  font-family: PoppinsRegular;
  font-weight: normal;
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
`;
