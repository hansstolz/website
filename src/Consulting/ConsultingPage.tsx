import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { H4, H5, IMG, Main, Props } from "../Styles/TextStyles";

function ConsultingPage() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });
  return (
    <Main toggle={isDesktop}>
      <Content toggle={isDesktop}>
        <Left url="media/images/idea.png">
          <H4 toggle={isDesktop}>Idee oder Problem?</H4>
          <H5 toggle={isDesktop}>
            Sie haben eine Idee oder ein Problem, das sie noch nicht genau
            benennen oder spezifizieren können.
            <br />
            <br />
            Um die Vorstellungen zu konkretisieren und das Kostenrisiko zu
            minimieren, ist es von Vorteil ein visuelles Konzept oder einen
            Prototypen zu erstellen.
            <br />
            <br />
            <H4 toggle={isDesktop}>Digitalisierung</H4>
            <H5 toggle={isDesktop}>
              Wer sich heute am Markt behaupten möchte. Zukunftsfähig bleiben.
              Flexibel auf Veränderungen reagieren. <br />
              Der kommt an der Digitalisierung von Produkten und
              Geschäftsmodellen nicht vorbei. <br />
              <br />
              Mithilfe von Cloud Computing können Unternehmen flexibel
              reagieren, agiler handeln und einen besseren Kundenservice sowie
              neue Dienstleistungen und Services anbieten.
              <br />
              <br />
            </H5>
            <H5 toggle={isDesktop}>
              Wir stehen Ihnen mit Rat und Tat zur Verfügung.
            </H5>
          </H5>
        </Left>
        <Right>
          <H4 toggle={isDesktop}>Unsere Leistungen</H4>
          <H5 toggle={isDesktop}>
            <ul>
              <li>Analyse von Prozessen</li>
              <li>Scribbles</li>
              <li>Erstellen eines schriftlichen Konzeptes</li>
              <li>Architektur und Infrastruktur</li>
              <li>Präsentationen</li>
              <li>Prototyp</li>
              <li>Wie und wo lassen sich Kosten sparen?</li>
              <li>Wie können Sie mit der Cloud erfolgreicher werden?</li>
              <li>Wie finden Sie den richtigen Cloud Anbieter?</li>
              <li>
                Welche Risiken gibt es und wie lassen sich diese minimieren?
              </li>
            </ul>
          </H5>
        </Right>
      </Content>
      <div>{isDesktop && <IMG src="media/images/left06.png" />}</div>
    </Main>
  );
}

export default ConsultingPage;

const Content = styled.div<Props>`
  display: grid;
  column-gap: 120px;
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
  background-position: top;
  background-size: 50%;
`;

const Right = styled.div``;
