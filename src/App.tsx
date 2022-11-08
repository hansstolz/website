import "./App.css";

import HomePage from "./Homepage/HomePage";
import DevPage from "./Dev/DevPage";
import { Route, Routes, Link, Outlet, useNavigate } from "react-router-dom";
import ConsultingPage from "./Consulting/ConsultingPage";
import styled from "styled-components";
import ContactPage from "./Contact/ContactPage";
import Privacy from "./Privacy/Privacy";
import Imprint from "./Imprint/Imprint";
import ScrollToTop from "./Util/ScrollToTop";
import { useMediaQuery } from "react-responsive";

import TextView, { MobileController } from "./TextView";
import { Props } from "./Styles/TextStyles";

//

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dev" element={<DevPage />} />
          <Route path="consulting" element={<ConsultingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="imprint" element={<Imprint />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const DesktopView = (onClick: () => void) => {
  return (
    <NavbarContainer>
      <IMG onClick={onClick} src="/media/images/logo.png" />
      <StyledLink to="/">Home</StyledLink>

      <StyledLink to="/dev">Softwareentwicklung</StyledLink>

      <StyledLink to="/consulting">Beratung</StyledLink>
      <StyledLink to="/contact">Kontakt</StyledLink>
    </NavbarContainer>
  );
};

function Layout() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/", { replace: true });
  };

  const { onClickToggle, toggle } = MobileController();

  return (
    <MainContainer toggle={isDesktop}>
      <div>
        {isDesktop
          ? DesktopView(onClick)
          : TextView(onClick, onClickToggle, toggle)}
      </div>
      <div>
        <Outlet />
      </div>

      <footer>
        <NavbarContainer>
          <StyledLink to="/privacy">Datenschutz</StyledLink>

          <StyledLink to="/imprint">Impressum</StyledLink>
        </NavbarContainer>
      </footer>
    </MainContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 90px;
  justify-content: flex-start;
  font-family: PoppinsMedium;
  font-weight: medium;
  font-size: 14px;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const IMG = styled.img`
  margin-right: 90px;
`;

const StyledLink = styled(Link)`
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

const MainContainer = styled.div<Props>`
  margin-left: ${(props) => (props.toggle ? "60px;" : "16px;")};
  max-width: ${(props) => (props.toggle ? "1440px;" : "100%;")};
`;

/*
width: 300px;
  min-height: 100vh;
  text-align: center;
  padding-top: 112px;
  background: #245f92;
  z-index: 10;
  position: relative;
  top: 0;
  left: 0;

  ${(props) => {
    if (props.toggle) {
      return `
      transform: translateX(0);
      transition: all 0.4s ease-in-out;
      `;
    } else {
      return `
      transform: translateX(-100%);
      transition: all 0.4s ease-in-out;

      `;
    }
  }}


  {isDesktop
          ? DesktopView(onClick)
          : TextView(onClick, onClickToggle, toggle)}


  */
