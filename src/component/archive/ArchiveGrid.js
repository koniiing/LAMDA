import React, { useState } from "react";
import styled from "styled-components";
import { ArchiveData } from "./ArchiveData";
function ArchiveGrid({ openModal }) {
  // src/data/imageData.js

  return (
    <PageWrapper>
      <ImageGrid>
        {ArchiveData.map((image, index) => (
          <ImageWrapper key={index} onClick={() => openModal(image)}>
            <Image src={image.src} alt={image.title} />
          </ImageWrapper>
        ))}
      </ImageGrid>
    </PageWrapper>
  );
}

export default ArchiveGrid;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  width: 100%;
  marign-bottom: 530px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 200px 150px; /* 사진 간 간격을 더 크게 설정 */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  width: 368px;
  height: 219px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.5);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
