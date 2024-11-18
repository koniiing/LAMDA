import React from "react";
import styled from "styled-components";
import Footer2 from "../component/common/Footer2";
import { motion } from "framer-motion";
import ProcessCircle from "../component/common/ProcessCircle";
import contentImg from "../assets/images/howworks.svg";
const HowWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <PageWrapper>
        {" "}
        <ProcessCircle />
        <Title>(How LAMDA! Works)</Title>
        <Content>
          <img src={contentImg} />
        </Content>
      </PageWrapper>
    </motion.div>
  );
};

export default HowWorks;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Content = styled.div`
  margin: 0px;
`;
