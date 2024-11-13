import React from "react";
import styled from "styled-components";

function Footer2() {
  return (
    <FooterWrapper>
      <FooterText>@lamda!</FooterText>
      <Copyright>© 2024 LAMDA! All rights reserved.</Copyright>
    </FooterWrapper>
  );
}

export default Footer2;
const FooterWrapper = styled.div`
  padding: 10px 0;
  text-align: center;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0px;
  font-family: coolvetica;
  font-weight: 400;
  font-size: 3.5rem;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
`;

const Copyright = styled.p`
  font-family: Pretendard;
  font-size: 0.9rem;
  color: #888;
`;
