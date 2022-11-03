import styled from "styled-components";

export const IMG = styled.img`
  margin-top: -140px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
`;

const BaseText = styled.div`
  font-family: PoppinsMedium;
  font-style: normal;
  color: ${(props) => (props.color ? props.color : "black")};
  margin-top: 0;
  margin-bottom: 0;
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

export const H5 = styled.h5`
  font-family: PoppinsRegular;
  font-weight: normal;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const H4 = styled.h4`
  font-family: PoppinsBold;
  font-weight: bold;
  font-size: 24px;
  margin-top: 48px;
  margin-bottom: 12px;
`;

export const H1 = styled.h1`
  font-family: NeoGothisDB;
  font-weight: bols;
  font-size: 96px;
  margin-top: 60px;
  margin-bottom: 60px;
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
