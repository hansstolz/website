import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { H1, H4, H5, IMG, Main, Props } from "../Styles/TextStyles";

export default function HomePage() {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const clickBackend = (hash: String) => {
    navigate(`/dev/#${hash}`, { replace: true });
  };

  return (
    <Main toggle={isDesktop}>
      <Content>
        <H1 toggle={isDesktop}>
          Lösungen durch
          <br />
          innovative Ideen
        </H1>
        <TextContainer toggle={isDesktop}>
          <H5 toggle={isDesktop}>
            Unsere langjährige Erfahrung in der Softwareentwicklung liefert
            Ihnen maßgeschneiderte Lösungen.
            <br />
            Vom Produktdesign bis zur laufenden Softwarebereitstellung.
          </H5>
          <H4 toggle={isDesktop}>
            FULL-STACK-ENTWICKLUNG
            <br />
            VON A BIS Z
          </H4>
          <H5 toggle={isDesktop}>
            Unsere Kompetenz umfasst Bereiche wie Frontend, mobile Apps,
            Backends sowie Expertise in Cloud-nativer App-Entwicklung, Data
            Engineering und künstlicher Intelligenz.
            <br />
            Wir bieten unseren Kunden den kompletten Entwicklungszyklus von A
            bis Z.
          </H5>
          <Headline>
            <H4 toggle={isDesktop}>ENTWICKLUNG MOBILER APPS</H4>
            <Circle
              onClick={() => {
                clickBackend("mobile");
              }}
            >
              &gt;
            </Circle>
          </Headline>
          <H5 toggle={isDesktop}>
            Mit den von uns entwickelten nativen und plattformübergreifenden
            mobilen Apps stellen wir Unternehmen effektive Werkzeuge zur
            Verfügung, um ihre Kunden überall erreichen zu können. Unser Angebot
            umfasst das vollständige Life-Cycle-Management für iOS- und
            Android-basierte Anwendungen angefangen beim Prototyping bis hin zum
            Deployment und Testing.
          </H5>
          <Headline>
            <H4 toggle={isDesktop}>ENTWICKLUNG VON WEBANWENDUNGEN</H4>
            <Circle
              onClick={() => {
                clickBackend("web");
              }}
            >
              &gt;
            </Circle>
          </Headline>
          <H5 toggle={isDesktop}>
            Wir erstellen leicht zugängliche, responsive und sichere
            Webanwendungen mit skalierbaren Features. Die Softwareentwickler
            kennen sich mit Backend-Sprachen (Swift, Vapor und Typescript),
            Frontend-Sprachen (Typescript, CSS und HTML) sowie
            Datenbank-Managementsystemen (MySQL, Postgres usw.) bestens aus.
          </H5>
          <Headline>
            <H4 toggle={isDesktop}>ENTWICKLUNG VON BACKENDS</H4>
            <Circle
              onClick={() => {
                clickBackend("backend");
              }}
            >
              &gt;
            </Circle>
          </Headline>
          <H5 toggle={isDesktop}>
            Das Herzstück einer mobilen Anwendung oder Website ist das Backend.
            <br />
            Wir entwickeln das Backend ausschließlich auf Unix-Plattformen mit
            NodeJS, Swift Vapor oder serverless mit AWS Lambdas. Außerdem nutzen
            wir die umfangreichen technischen Dienste von Amazon Web
            Services(AWS).
          </H5>
        </TextContainer>
        <TextContainer>
          <br />
          <br />
          <br />
          <br />
          <b>Wir verzichten komplett auf Cookies.</b>
        </TextContainer>
      </Content>
      {isDesktop && <IMG src="media/images/left01.png" />}
    </Main>
  );
}

const Content = styled.div`
  //width: 1000px;
  padding: 0;
`;
const TextContainer = styled.div<Props>`
  max-width: ${(props) => (props.toggle ? "900px;" : "320px;")};
  min-width: 300px;
`;

const Circle = styled.div`
  margin-top: 32px;
  font-family: PoppinsRegular;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  font-size: 30px;
  color: #fff;
  text-align: center;
  background: #000;
  &:hover {
    background: red;
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  align-items: center;
`;
