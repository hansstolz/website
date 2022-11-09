import React, { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { H3, H4, P } from "../Styles/TextStyles";
import { BlogData, BlogItem, blogs, emptyBlog } from "./BlogData";
import {
  BlogText,
  DateStyle,
  HeaderImg,
  Main,
  TitleStyle,
  UL,
  VSpacer,
} from "./BlogStyles";

const getContentFragment = (index: number, data: BlogItem) => {
  switch (data.style) {
    case "p":
      const items = data.content.split("\n");
      return (
        <BlogText key={index}>
          {items.map((item, index) => (
            <div key={index}>
              {item} <br />
            </div>
          ))}
        </BlogText>
      );
    case "h4":
      return <H3 key={index}>{data.content}</H3>;
    case "ul":
      return (
        <>
          <UL key={index}>
            {data.items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </UL>
        </>
      );

    default:
      return <div>Fehler</div>;
  }
};

function BlogDetail() {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState<BlogData>(emptyBlog);

  useEffect(() => {
    setBlogData(blogs[Number(blogId)]);
  }, []);

  return (
    <Main>
      <DateStyle>{blogData.date}</DateStyle>
      <TitleStyle>{blogData.title}</TitleStyle>
      <BlogText>{blogData.desc}</BlogText>
      <VSpacer height={"60px"} />
      <HeaderImg src={blogData.img} width="1440px" />
      <VSpacer height={"60px"} />
      <BlogText>
        AWS Lambda ist ein Serverless-, ereignisgesteuerter Computing-Service,
        mit dem Sie Code für praktisch jede Art von Anwendung oder
        Backend-Service ausführen können, ohne Server bereitzustellen oder zu
        verwalten. Sie können Lambda in über 200 AWS-Services und
        Software-as-a-Service (SaaS)-Anwendungen auslösen und Sie zahlen nur für
        das, was Sie nutzen.
        <br />
        <br />
        Lambdas lassen sich mit den gängigsten Programmiersprachen wie zum
        Beispiel Python, JavaScript, Java. Rust und so weiter erstellen. Seit
        einiger Zeit (Mai 2020) wird auch Swift unterstützt.
        <br />
        <br />
        In dem Beispiel Lambda wird der Amazon SES Dienst zum Versenden von
        E-Mails aufgerufen. Das Lambda kann sofortige, auslöserbasierte
        Benachrichtigungen an Kunden, z. B. Kaufbestätigungen oder
        Kennwortrücksetzungen versenden. Wenn Sie Amazon SES aus einer in Amazon
        EC2 oder über AWS Lambda bereitgestellten Anwendung aufrufen, können Sie
        monatlich bis zu 62 000 E-Mail-Nachrichten gebührenfrei versenden.
        Dieses kostenlose Nutzungskontingent läuft nicht ab.
        <br />
        <br />
      </BlogText>
      {blogData.contents.map((item, index) => getContentFragment(index, item))}
    </Main>
  );
}

export default BlogDetail;
