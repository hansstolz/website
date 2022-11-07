import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { H1, H4, H5, IMG, Main } from "../Styles/TextStyles";

export default function HomePage() {
  const navigate = useNavigate();

  const clickBackend = (hash: String) => {
    navigate(`/dev/#${hash}`, { replace: true });
  };

  return (
    <div>
      <Main>
        <Content>
          <H1>
            Lösungen durch
            <br />
            innovative Ideen
          </H1>
          <TextContainer>
            <H5>
              Unsere langjährige Erfahrung in der Softwareentwicklung liefert
              Ihnen maßgeschneiderte Lösungen.
              <br />
              Vom Produktdesign bis zur laufenden Softwarebereitstellung.
            </H5>
            <H4>FULL-STACK-ENTWICKLUNG VON A BIS Z</H4>
            <H5>
              Unsere Kompetenz umfasst Bereiche wie Frontend, mobile Apps,
              Backends sowie Expertise in Cloud-nativer App-Entwicklung, Data
              Engineering und künstlicher Intelligenz.
              <br />
              Wir bieten unseren Kunden den kompletten Entwicklungszyklus von A
              bis Z.
            </H5>
            <Headline>
              <H4>ENTWICKLUNG MOBILER APPS</H4>
              <Circle
                onClick={() => {
                  clickBackend("mobile");
                }}
              >
                &gt;
              </Circle>
            </Headline>
            <H5>
              Mit den von uns entwickelten nativen und plattformübergreifenden
              mobilen Apps stellen wir Unternehmen effektive Werkzeuge zur
              Verfügung, um ihre Kunden überall erreichen zu können. Unser
              Angebot umfasst das vollständige Life-Cycle-Management für iOS-
              und Android-basierte Anwendungen angefangen beim Prototyping bis
              hin zum Deployment und Testing.
            </H5>
            <Headline>
              <H4>ENTWICKLUNG VON WEBANWENDUNGEN</H4>
              <Circle
                onClick={() => {
                  clickBackend("web");
                }}
              >
                &gt;
              </Circle>
            </Headline>
            <H5>
              Wir erstellen leicht zugängliche, responsive und sichere
              Webanwendungen mit skalierbaren Features. Die Softwareentwickler
              kennen sich mit Backend-Sprachen (Swift, Vapor und Typescript),
              Frontend-Sprachen (Typescript, CSS und HTML) sowie
              Datenbank-Managementsystemen (MySQL, Postgres usw.) bestens aus.
            </H5>
            <Headline>
              <H4>ENTWICKLUNG VON BACKENDS</H4>
              <Circle
                onClick={() => {
                  clickBackend("backend");
                }}
              >
                &gt;
              </Circle>
            </Headline>
            <H5>
              Das Herzstück einer mobilen Anwendung oder Website ist das
              Backend.
              <br />
              Wir entwickeln das Backend ausschließlich auf Unix-Plattformen mit
              NodeJS, Swift Vapor oder serverless mit AWS Lambdas. Außerdem
              nutzen wir die umfangreichen technischen Dienste von Amazon Web
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

        <IMG src="media/images/left01.png" />
      </Main>
    </div>
  );
}

const Content = styled.div`
  width: 1100px;
`;
const TextContainer = styled.div`
  max-width: 900px;
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

/*
<H5>
            Unser Prinzip ist es, den Kunden zuzuhören und sie zu verstehen
            <br />
            Bei der Lösung der Probleme arbeiten wir mit den Kunden eng zusammen
            <br />
            und unterstützen unsere Kunden in jeder Phase der Implementierung.
            <br />
            <br />
            Wir stehen unseren Kunden stets zur Verfügung.
          </H5>
          */
