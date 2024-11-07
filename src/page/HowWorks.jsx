import React from "react";
import styled from "styled-components";
import Footer2 from "../component/common/Footer2";
const HowWorks = () => {
  return (
    <PageWrapper>
      {" "}
      <Title>(How LAMDA! Works)</Title>
      <Footer2 />
    </PageWrapper>
  );
};

export default HowWorks;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 10px;
  font-family: serif;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  &:hover {
    color: black;
  }
`;
