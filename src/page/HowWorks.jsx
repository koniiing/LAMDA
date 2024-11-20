import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProcessCircle from "../component/common/ProcessCircle";
import contentImg from "../assets/images/howwork.svg";
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
  padding: 0;
`;

const Title = styled.h1`
  transition: color 0.3s;

  font-size: 140px;
  margin: 210px 0px;
  font-family: "Instrument Serif";
  color: white;
  text-shadow: -0.5px -0.5px 0 #484848, 0.5px -0.5px 0 #484848,
    -0.5px 0.5px 0 #484848, 0.5px 0.5px 0 #484848;

  &:hover {
    color: #484848;
  }
`;
const Content = styled.div`
  margin: 0px;
  width: 2560px;
`;
