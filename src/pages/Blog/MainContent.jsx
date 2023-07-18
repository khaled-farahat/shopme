import React from "react";
import {
  BlogContent,
  BlogDate,
  BlogFigure,
  BlogTitle,
  InnerContent,
  InnerContentContainer,
  InnerFigure,
  MainContentContainer,
  StyledHr,
  StyledList,
  TagDiv,
  TagPara,
  TopTrends,
} from "./MainContent.styled";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const MainContent = ({ blog }) => {
  return (
    <MainContentContainer>
      <BlogTitle>{blog?.title}</BlogTitle>
      <BlogDate>
        by <span>{blog?.username}</span> - {blog?.date}
      </BlogDate>
      <BlogFigure>
        <img src={blog?.thumbnail} alt={blog?.title} />
      </BlogFigure>
      <InnerContentContainer>
        <BlogContent>{blog?.description}</BlogContent>
        <InnerFigure>
          <img src="/images/(12).jpg" alt={blog?.title} />
        </InnerFigure>
        <TopTrends>Top Trends</TopTrends>
        <InnerContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero.
        </InnerContent>
        <StyledList>
          <li>consectetur adipiscing elit. Aliquam placerat</li>
          <li>Lorem ipsum dolor sit amet consectetur</li>
          <li>sapien tortor faucibus augue</li>
          <li>
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          </li>
        </StyledList>
        <TagDiv>
          <div>
            <TagPara>
              Tags <StyledHr />
              <span>{blog?.categories.join(", ")}</span>
            </TagPara>
          </div>
          <div>
            <TagPara>
              share <StyledHr />
              <ul>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <Twitter />
                </li>
              </ul>
            </TagPara>
          </div>
        </TagDiv>
      </InnerContentContainer>
    </MainContentContainer>
  );
};

export default MainContent;
