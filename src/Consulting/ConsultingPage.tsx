import React from "react";
import styled from "styled-components";
import { H4, H5, IMG, Main } from "../Styles/TextStyles";

type Props = {};

function ConsultingPage({}: Props) {
  return (
    <Main>
      <Content>
        <Left url="media/images/idea.png">
          <H4>Idee oder Problem?</H4>
          <H5>
            Sie haben eine Idee oder ein Problem, das sie noch nicht genau
            benennen oder spezifizieren können.
            <br />
            <br />
            Um die Vorstellungen zu konkretisieren und das Kostenrisiko zu
            minimieren, ist es von Vorteil ein visuelles Konzept oder einen
            Prototypen zu erstellen.
            <br />
            <br />
            <H4>Digitalisierung</H4>
            <H5>
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
            <H5>Wir stehen Ihnen mit Rat und Tat zur Verfügung.</H5>
          </H5>
        </Left>
        <Right>
          <H4>Unsere Leistungen</H4>
          <H5>
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
      <div>
        <IMG src="media/images/left06.png" />
      </div>
    </Main>
  );
}

export default ConsultingPage;

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
  background-position: top;
  background-size: 50%;
`;

const Right = styled.div``;
