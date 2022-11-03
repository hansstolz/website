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

function Layout() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <header>
        <NavbarContainer>
          <IMG onClick={onClick} src="/media/images/logo.png" />
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/dev">Softwareentwicklung</StyledLink>

          <StyledLink to="/consulting">Beratung</StyledLink>
          <StyledLink to="/contact">Kontakt</StyledLink>
        </NavbarContainer>
      </header>
      <div className="container">
        <Outlet />
      </div>

      <footer>
        <NavbarContainer>
          <StyledLink to="/privacy">Datenschutz</StyledLink>

          <StyledLink to="/imprint">Impressum</StyledLink>
        </NavbarContainer>
      </footer>
    </div>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 90px;

  font-family: PoppinsMedium;
  font-weight: medium;
  font-size: 14px;
  padding: 30px;
  align-items: center;
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
