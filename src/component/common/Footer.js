import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <FooterText
        onClick={() => {
          window.scrollTo({ top: 0 });
          navigate("/credit");
        }}
      >
        @lamda!
      </FooterText>
      <Copyright>© 2024 LAMDA! All rights reserved.</Copyright>
    </FooterWrapper>
  );
}

export default Footer;
const FooterWrapper = styled.footer`
  margin: 600px 382px 120px 20px;
  text-align: right;
  width: auto;
`;

const FooterText = styled.p`
  cursor: pointer;
  font-family: "Konkhmer Sleokchher";
  font-weight: 400;
  font-size: 90px;
  letter-spacing: -7.2px;
  color: #484848;
  margin-bottom: 10px;
`;

const Copyright = styled.p`
  font-family: Pretendard;
  font-size: 18px;
  color: #484848;
`;
