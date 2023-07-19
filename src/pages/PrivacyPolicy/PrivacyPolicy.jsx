import React from "react";
import {
  PrivacyPolicySection,
  PrivacyPolicyTitle,
  StyledDescription,
  StyledUl,
  SubHeader,
} from "./PrivacyPolicy.styled";

const PrivacyPolicyPage = () => {
  return (
    <PrivacyPolicySection>
      <PrivacyPolicyTitle>Privacy Policy</PrivacyPolicyTitle>
      <StyledDescription>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.
      </StyledDescription>
      <SubHeader>Security</SubHeader>
      <StyledDescription>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque.
      </StyledDescription>
      <SubHeader>Cookies</SubHeader>
      <StyledUl>
        <li>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin.
        </li>
        <li>
          Nam fringilla molestie velit, eget pellentesque risus scelerisque a
        </li>
      </StyledUl>
    </PrivacyPolicySection>
  );
};

export default PrivacyPolicyPage;
