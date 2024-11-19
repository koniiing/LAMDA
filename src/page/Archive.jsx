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
  background-color: #f9f9f9;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: serif;
`;

const Title = styled.h1`
  font-size: 140px;
  margin-top: 210px;
  margin-bottom: 256px;
  font-family: "Instrument Serif";
  color: white;
  text-shadow: -0.5px -0.5px 0 black, 0.5px -0.5px 0 black, -0.5px 0.5px 0 black,
    0.5px 0.5px 0 black;

  &:hover {
    color: black;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
      1px 1px 0 white;
  }
`;
