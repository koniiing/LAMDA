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
  margin: 600px 20px 20px 20px;
  text-align: right;
  width: auto;
`;

const FooterText = styled.p`
  font-family: "Konkhmer Sleokchher";
  font-weight: 400;
  font-size: 90px;
`;

const Copyright = styled.p`
  font-family: Pretendard;
  font-size: 18px;
  color: #888;
`;
