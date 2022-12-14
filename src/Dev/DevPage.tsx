import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { H4, H5, IMG, Main, Props } from "../Styles/TextStyles";
import "../../src/Styles/colors.css";

function DevPage() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <>
      <Main toggle={isDesktop}>
        <div>
          <Content toggle={isDesktop}>
            <Left url="/media/images/react.png">
              <H4 toggle={isDesktop} id="web">
                Webentwicklung
              </H4>
              <H5 toggle={isDesktop}>
                Bei der Entwicklung der Frontends von Webanwendungen setzen wir
                überwiegend auf React. <br />
                <br />
                Unser Portfolio umfasst eine umfangreiche Anzahl von
                Komponenten, die auf React basieren. <br />
                <br />
                Die Komponenten sind beliebig für Ihre Bedürfnisse anpassbar.
                <br />
                <br /> Die Kommunikation der Kompontenten erfolgt über eine
                REST-API mit dem Backend.
              </H5>
            </Left>
            <Right url="">
              <H4 toggle={isDesktop}>React Komponenten</H4>
              <H5 toggle={isDesktop}>
                <ul>
                  <li>Benutzerverwaltung und Anmeldung</li>
                  <li>Stammdatenverwaltung</li>
                  <li>Bildverwaltung</li>
                  <li>Kundenkommunikation</li>
                  <li>Volltextsuche</li>
                  <li>Dialoge</li>
                  <li>Formulare</li>
                  <li>Datenvalidierung</li>
                  <li>PDFs erzeugen</li>
                  <li>Statistik</li>
                  <li>Push-Nachrichten</li>
                  <li>und weitere ...</li>
                </ul>
              </H5>
            </Right>
            {!isDesktop && (
              <div className="astrodivider">
                <div className="astrodividermask"></div>
                <span>
                  <i>&#10038;</i>
                </span>
              </div>
            )}
          </Content>
          <Content toggle={isDesktop}>
            <Left url="">
              <H4 toggle={isDesktop} id="mobile">
                Mobile Apps
              </H4>
              <H5 toggle={isDesktop}>
                Bei der Entwicklung von mobilen Anwendungen unterstützen wir
                sowohl iOS als auch Android. <br />
                <br />
                Abhängig von der Komplexität der mobilen Anwendung kommt
                entweder das Cross-Plattform-Werkzeug Flutter zum Einsatz oder
                es werden native Anwendungen erstellt, die optimal an iOS und
                Android angepasst sind. <br />
                <br />
                Wir verbinden die Apps mit den notwendingen Cloud-Diensten oder
                entwicklen die Cloud-Dienste entsprechend ihrer Anforderungen.
              </H5>
            </Left>
            <Right url="/media/images/mobile.png">
              <H4 toggle={isDesktop}>iOS</H4>
              <H5 toggle={isDesktop}>
                <ul>
                  <li>native Entwicklung in SwiftUI</li>
                  <li> Swift 5.7</li>
                </ul>
              </H5>
              <H4 toggle={isDesktop}>Android</H4>
              <H5 toggle={isDesktop}>
                <ul>
                  <li>native Entwicklung in Jetpack Compose</li>
                  <li> Kotlin 1.7</li>
                </ul>
              </H5>
              <H4 toggle={isDesktop}>Flutter</H4>
              <H5 toggle={isDesktop}>
                <ul>
                  <li>Cross-Plattform-Werkzeug von Google</li>
                  <li>Eintwicklung für iOS und Android</li>
                  <li> Dart 2.1</li>
                </ul>
              </H5>
            </Right>
            {!isDesktop && (
              <div className="astrodivider">
                <div className="astrodividermask"></div>
                <span>
                  <i>&#10038;</i>
                </span>
              </div>
            )}
          </Content>
          <Content toggle={isDesktop}>
            <Left url="/media/images/portfolio.png">
              <H4 toggle={isDesktop}>Portfolio</H4>
              <H5 toggle={isDesktop}>
                Um das Rad nicht jedes mal neu zu erfinden, haben wir modulare
                und leicht anpassbare Komponenten entwickelt.
                <br /> <br />
                Unser Portfolio umfasst eine umfangreiche Anzahl von
                Komponenten, die in den Apps eingesetzt werden können.
                <br />
                <br /> Die Komponenten sind beliebig für Ihre Bedürfnisse
                anpassbar.
              </H5>
            </Left>
            <Right url="">
              <H4 toggle={isDesktop}>Mobile Komponenten </H4>
              <H5 toggle={isDesktop}>
                <ul>
                  <li>Benutzerverwaltung und Anmeldung</li>
                  <li>Lokale Datenbank</li> <li>Bildverwaltung</li>
                  <li>Kundenkommunikation</li>
                  <li>PDFs erzeugen</li>
                  <li>Statistik</li>
                  <li>Social Media Funktionen</li>
                  <li>Animation</li>
                </ul>
              </H5>
            </Right>
            {!isDesktop && (
              <div className="astrodivider">
                <div className="astrodividermask"></div>
                <span>
                  <i>&#10038;</i>
                </span>
              </div>
            )}
          </Content>
          <Content toggle={isDesktop}>
            <Left url="">
              <H4 toggle={isDesktop} id="backend">
                Backend Systeme
              </H4>
              <H5 toggle={isDesktop}>
                Bei der Entwicklung von Backend Systemen setzen wir überwiegend
                auf Amazon Web Services(AWS).
                <br />
                <br />
                AWS ist der führende internationale Anbieter im Cloud Computing
                Diensten.
                <br />
                <br /> AWS bietet eine Vielzahl von Diensten an, die alle
                Bereiche des Cloud Computing abdecken.
                <br />
                <br />
                Unsere qualifizierten Mitarbeiter verfügen über das notwendige
                Wissen im Umgang mit den umfangreichen Diensten, die AWS
                anbietet.
              </H5>
            </Left>
            <Right url="/media/images/backend.png">
              <H4 toggle={isDesktop}>Amazon Web Services (Auswahl)</H4>
              <H5 toggle={isDesktop}>
                <ul>
                  <li>Serververwaltung(EC2, Lightsail)</li>
                  <li>Datenspeicher für Server (EBS)</li>
                  <li>Datenbanken (MySQL, Postgres, Aurora, DynamoDB)</li>
                  <li>Speicher für Objekte (S3)</li>
                  <li>Archivierung (Glacier)</li>
                  <li>Benutzerverwaltung (Cognito)</li>
                  <li>Domainverwaltung (Route53)</li>
                  <li>Programmierung (Lambda Funktionen)</li>
                  <li>Pushnachrichten (SNS)</li>
                  <li>E-Mail-Service (SES)</li>
                  <li>und vieles mehr</li>
                </ul>
              </H5>
            </Right>
          </Content>
        </div>
        {isDesktop && <IMG src="/media/images/left07.png" />}
      </Main>
    </>
  );
}

export default DevPage;

const Content = styled.div<Props>`
  display: grid;
  column-gap: ${(props) => (props.toggle ? "120px" : "0px;")};
  row-gap: ${(props) => (props.toggle ? "60px" : "10px;")};
  grid-template-columns: ${(props) => (props.toggle ? "520px 520px;" : "1fr;")};
  margin-bottom: ${(props) => (props.toggle ? "120px" : "30px;")};
  padding: ${(props) => (props.toggle ? "0" : "16px;")};
`;

type ImageProps = {
  url: string;
};

const Left = styled.div<ImageProps>`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
`;

const Right = styled.div<ImageProps>`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
`;
