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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
`;

const FooterText = styled.p`
  margin: 0px 0px 14px 0px;
  font-family: "Konkhmer Sleokchher";
  font-weight: 400;
  font-size: 65px;
  color: white;
  text-shadow: -0.5px -0.5px 0 #484848, 0.5px -0.5px 0 #484848,
    -0.5px 0.5px 0 #484848, 0.5px 0.5px 0 #484848;

  letter-spacing: -7.2px;
`;

const Copyright = styled.p`
  font-family: Pretendard;
  font-size: 13px;
  color: #484848;
`;
