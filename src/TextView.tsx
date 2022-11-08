import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../src/Styles/colors.css";
import { Props } from "./Styles/TextStyles";

export const MobileController = () => {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return { toggle, onClickToggle };
};

function TextView(
  onClick: () => void,
  onClickToggle: () => void,
  toggle: boolean
) {
  return (
    <MobileContainer>
      <MobileImg onClick={onClick} src="/media/images/logo.png" />
      <MenuIcon onClick={onClickToggle} toggle={toggle}>
        <span></span>
      </MenuIcon>
      <MenuContainer onClick={onClickToggle} toggle={toggle}>
        <StyledLink to="/">Home</StyledLink>

        <StyledLink to="/dev">Softwareentwicklung</StyledLink>

        <StyledLink to="/consulting">Beratung</StyledLink>

        <StyledLink to="/contact">Kontakt</StyledLink>
        <StyledLink to="/privacy">Datenschutz</StyledLink>

        <StyledLink to="/imprint">Impressum</StyledLink>
      </MenuContainer>
    </MobileContainer>
  );
}

export default TextView;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 60px;
  widht: 100%;
`;

const StyledLink = styled(Link)`
  font-family: PoppinsMedium;
  font-weight: medium;
  font-size: 21px;
  line-height: 60px;
  color: black;
  text-decoration: none;

  &:link {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: red;
  }
  &:active {
    color: red;
  }
`;

const MenuIcon = styled.a<Props>`
  height: 32px;
  width: 43px;
  margin: 3%;
  position: absolute;
  top: 10px;
  right: 3%;
  vertical-align: middle;
  z-index: 20;
  cursor: pointer;

  span {
    display: ${(props) => (props.toggle ? "none" : "block")};
    background: var(--primary);
    width: 100%;
    height: 4px;
    margin-top: -2px;
    position: absolute;
    left: 0;
    top: 50%;
  }

  &:before,
  &:after {
    content: "";
    display: block;
    background: var(--primary);
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    transform-origin: center center;
    transform: rotate(0deg);
    transition: all 0.3s ease;
  }

  &:before {
    top: 2px;
    margin-top: -2px;
    transform: ${(props) => (props.toggle ? "rotate(-45deg)" : "rotate(0)")};
    top: ${(props) => (props.toggle ? "50%" : "0")};
  }

  &:after {
    bottom: 2px;
    margin-bottom: -2px;
    transform: ${(props) => (props.toggle ? "rotate(45deg)" : "rotate(0)")};
    bottom: ${(props) => (props.toggle ? "50%" : "0")};
  }
`;

const MenuContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  width: 100%;
  height: 400px;
  z-index: 10;
  position: absolute;
  top: 0px;
  left: 0;
  transform: ${(props) =>
    props.toggle ? "translateX(0)" : "translateX(-110%)"};
  transition: all 0.3s ease;
  padding-top: 100px;
  padding-left: 30px;
  box-shadow: 10px 10px 5px gray;
  opacity: 0.9;
`;

const MobileImg = styled.img`
  position: absolute;
  top: 8px;
  left: 16px;
`;
