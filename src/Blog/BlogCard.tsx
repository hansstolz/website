import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { P } from "../Styles/TextStyles";
import { BlogData } from "./BlogData";
import { DateStyle, TitleStyle } from "./BlogStyles";

export type CardProps = {
  data: BlogData;
};

function BlogCard(props: CardProps) {
  const { data } = props;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(data.url, { replace: true });
  };

  return (
    <Card onClick={onClick}>
      <img src={data.img} width={data.id === 0 ? "600px;" : "300px;"} />
      <DateStyle>{data.date}</DateStyle>
      <TitleStyle>{data.title}</TitleStyle>
      <P>{data.desc}</P>
    </Card>
  );
}

export default BlogCard;

const Card = styled.div`
  display: block;
  height: 600px;
  overflow: hidden;
`;
