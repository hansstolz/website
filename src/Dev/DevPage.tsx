import React from "react";
import styled from "styled-components";
import { H4, H5, Main } from "../Styles/TextStyles";

type Props = {};

function DevPage({}: Props) {
  return (
    <>
      <Main>
        <div>
          <Content>
            <Left url="/media/images/react.png">
              <H4>Webentwicklung</H4>
              <H5>
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
              <H4>React Komponenten</H4>
              <H5>
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
          </Content>
          <Content>
            <Left url="g">
              <H4>Mobile Apps</H4>
              <H5>
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
              <H4>Flutter</H4>
              <H5>
                <ul>
                  <li>Cross-Plattform-Werkzeug von Google</li>
                  <li>Eintwicklung für iOS und Android</li>
                  <li> Dart 2.1</li>
                </ul>
              </H5>
              <H4>iOS</H4>
              <H5>
                <li>native Entwicklung in SwiftUI</li>
                <li> Swift 5.7</li>
              </H5>
              <H4>Android</H4>
              <H5>
                <li>native Entwicklung in Jetpack Compose</li>
                <li> Kotlin 1.7</li>
              </H5>
            </Right>
          </Content>
          <Content>
            <Left url="/media/images/portfolio.png">
              <H4>Portfolio</H4>
              <H5>
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
              <H4>Mobile Komponenten </H4>
              <H5>
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
          </Content>
          <Content>
            <Left url="/media/images/backend.png">
              <H4>Backend Systeme</H4>
              <H5>
                Bei der Entwicklung von Backend Systemen setzen wir überwiegend
                auf Amazon Web Services(AWS).
                <br />
                <br />
                AWS ist der führende internationale Anbieter im Cloud Computing
                Diensten.
                <br />
                <br />
                Unsere qualifizierten Mitarbeiter verfügen über das notwendige
                Wissen im Umgang mit den umfangreichen Diensten, die AWS
                anbietet.
              </H5>
            </Left>
            <Right url=""></Right>
          </Content>
        </div>
        <div>Left</div>
      </Main>
    </>
  );
}

export default DevPage;

const Content = styled.div`
  display: grid;
  column-gap: 120px;
  grid-template-columns: 520px 520px;
  margin-bottom: 120px;
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

const Row = styled.div``;
