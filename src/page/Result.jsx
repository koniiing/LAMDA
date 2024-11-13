import React from "react";
import ProcessCircle from "../component/common/ProcessCircle";
import Footer2 from "../component/common/Footer2";
import styled from "styled-components";
const Result = () => {
  return (
    <AppContainer>
      <ProcessCircle />
      <Title>nickname's Liking</Title>
      <Footer2 />
    </AppContainer>
  );
};

export default Result;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
  text-align: center;
  margin-top: 50px;
`;
const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 33px;
  font-family: serif;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  &:hover {
    color: black;
  }
`;
