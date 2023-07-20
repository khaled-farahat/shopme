import React from "react";
import {
  AboutFigure,
  AboutHeader,
  AboutList,
  AboutParagraph,
  AboutSection,
  AboutTitle,
  WhoWeAre,
} from "./About.styled";

const AboutPage = () => {
  return (
    <AboutSection>
      <AboutTitle>About</AboutTitle>
      <WhoWeAre>Who we are and why we do what we do!</WhoWeAre>
      <AboutParagraph>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis
      </AboutParagraph>
      <AboutHeader>Top trends</AboutHeader>
      <AboutFigure>
        <img src="/images/(12).jpg" alt="trend" />
      </AboutFigure>
      <AboutParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </AboutParagraph>
      <AboutList>
        <li>consectetur adipiscing elit. Aliquam placerat</li>
        <li>Lorem ipsum dolor sit amet consectetur</li>
      </AboutList>
      <AboutHeader>Produced with care</AboutHeader>
      <AboutFigure>
        <img src="/images/(1).jpg" alt="trend" />
      </AboutFigure>
      <AboutParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendu.
      </AboutParagraph>
    </AboutSection>
  );
};

export default AboutPage;
