import React from "react";
import styled from "styled-components";
import { Bold, IMG, Main, P } from "../Styles/TextStyles";

type Props = {};

function Imprint({}: Props) {
  return (
    <Main>
      <div>
        <div>
          <P>
            <Bold>artexxis GmbH + Co. KG</Bold>
            <br />
            Vertretungsberechtige Geschäftsführer:
            <br />
            <br />
            Peter Brand
            <br />
            Hans Stolz
            <br />
            <br />
            Hessenstrasse 111
            <br />
            97078 W&uuml;rzburg
            <br />
            <br />
            USt.-NR gem. § 27a UStG:: DE 294619126
            <br />
            <br />
            Registergericht: Würzburg
            <br />
            HRA-Nummer: 7213
            <br />
            <br />
            Inhaltlich Verantwortlicher: Peter Brand, Anschrift s.o.
            <br />
            <br />
            Kontakt: info@artexxis.com
            <br />
            <br />
            <br />
            <Content>
              <Left>
                <Bold>Haftung für Inhalte</Bold>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
                <br />
                <br />
                <Bold>Haftung für Links</Bold>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
                <br />
                <br />
              </Left>
              <Right>
                <Bold>Urheberrecht</Bold>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
                <br />
                <br />
                <Bold>Verwendung der erfassten Informationen:</Bold>
                Neben den oben erläuterten Verwendungszwecken werden die von
                Ihnen bereitgestellten Informationen gemäß den geltenden
                Google-Datenschutzbestimmungen genutzt. Google veröffentlicht
                möglicherweise zusammengefasste Statistiken über die
                +1-Aktivitäten der Nutzer bzw. gibt diese an Nutzer und Partner
                weiter, wie etwa Publisher, Inserenten oder verbundene Websites.
                <br />
                <br />
                Quellenangaben: Disclaimer: eRecht24
              </Right>
            </Content>
          </P>
        </div>

        <ul></ul>
      </div>
      <IMG src="media/images/left01.png" />
    </Main>
  );
}

export default Imprint;

const Content = styled.div`
  display: grid;
  column-gap: 120px;
  grid-template-columns: 500px 500px;
`;

const Left = styled.div``;

const Right = styled.div``;
