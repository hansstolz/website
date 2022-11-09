import React from "react";
import styled from "styled-components";
import { H3 } from "../Styles/TextStyles";
import BlogCard from "./BlogCard";
import { blogs } from "./BlogData";
import { Main } from "./BlogStyles";

function Blog() {
  return (
    <Main>
      <H3 toggle={true}>Artikel</H3>;
      <Grid>
        <Last>{BlogCard({ data: blogs[0] })}</Last>
        <Pre>{BlogCard({ data: blogs[1] })}</Pre>
        <Left>{BlogCard({ data: blogs[2] })}</Left>
      </Grid>
    </Main>
  );
}

export default Blog;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-areas:
    "last last pre"
    "left mid right";
`;

const Last = styled.div`
  grid-area: last;
`;

const Pre = styled.div`
  grid-area: pre;
`;

const Left = styled.div`
  grid-area: left;
`;

const Mid = styled.div`
  grid-area: mid;
`;

const Right = styled.div`
  grid-area: right;
`;
