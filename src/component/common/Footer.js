import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>@lamda!</FooterText>
      <Copyright>© 2024 LAMDA! All rights reserved.</Copyright>
    </FooterWrapper>
  );
}

export default Footer;
const FooterWrapper = styled.footer`
  margin-top: auto;
  text-align: right;
  width: auto;
`;

const FooterText = styled.p`
  font-family: "Konkhmer Sleokchher";
  font-weight: 400;
  font-size: 1.5rem;
`;

const Copyright = styled.p`
  font-family: Pretendard;
  font-size: 0.9rem;
  color: #888;
`;
