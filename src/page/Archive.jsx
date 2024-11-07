import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArchiveGrid from "../component/archive/ArchiveGrid";
import Footer2 from "../component/common/Footer2";
import Modal from "../component/archive/Modal";
function Archive() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <PageWrapper>
      <Title>(Liking Archive)</Title>
      <ArchiveGrid openModal={openModal} />
      {selectedImage && (
        <Modal image={selectedImage} closeModal={closeModal} />
      )}{" "}
      <Footer2 />
    </PageWrapper>
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
