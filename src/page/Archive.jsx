import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArchiveGrid from "../component/archive/ArchiveGrid";
import Footer2 from "../component/common/Footer2";
import Modal from "../component/archive/Modal";
import { motion } from "framer-motion";
import ProcessCircle from "../component/common/ProcessCircle";
function Archive() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <PageWrapper>
        <ProcessCircle />
        <Title>(Liking Archive)</Title>
        <Description>
          취향에 대한 다양한 답변과 AI가 생성한 이미지를 확인해 보세요.
        </Description>
        <ArchiveGrid openModal={openModal} />
        {selectedImage && (
          <Modal image={selectedImage} closeModal={closeModal} />
        )}{" "}
        <Footer2 />
      </PageWrapper>
    </motion.div>
  );
}

export default Archive;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.div`
  font-size: 30px;
  color: #484848;
  font-family: Pretendard;
  margin-bottom: 226px;
`;

const Title = styled.h1`
  transition: color 0.3s;

  font-size: 140px;
  margin-top: 210px;
  margin-bottom: 50px;
  font-family: "Instrument Serif";
  color: white;
  text-shadow: -0.5px -0.5px 0 #484848, 0.5px -0.5px 0 #484848,
    -0.5px 0.5px 0 #484848, 0.5px 0.5px 0 #484848;

  &:hover {
    color: #484848;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
      1px 1px 0 white;
  }
`;
