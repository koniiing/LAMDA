import React, { useState } from "react";
import styled from "styled-components";
function ArchiveGrid({ openModal }) {
  // src/data/imageData.js

  const imageData = [
    {
      src: process.env.PUBLIC_URL + "/archiveImg/arvchiveimg1.jpg",
      title: "강아지 1",
      username: "유저닉네임1",
      QnA: [
        {
          question: "어떤 날씨에 어떤 음식을 먹는 것을 좋아하나요?",
          answer: "맑은 날에 바베큐를 좋아합니다.",
        },
        {
          question: "나의 애완동물을 소개해주세요.",
          answer: "강아지를 키우고 있으며, 매우 활발합니다.",
        },
        {
          question: "내가 좋아하는 것, 남들이 잘 모르는 것?",
          answer: "캠핑과 하이킹을 즐깁니다.",
        },
        {
          question: "좋아하는 물건이 있나요?",
          answer: "애완동물 장난감을 모으는 걸 좋아해요.",
        },
      ],
    },
    {
      src: process.env.PUBLIC_URL + "/archiveImg/arvchiveimg1.jpg",
      title: "고양이 1",
      username: "유저닉네임2",
      QnA: [
        {
          question: "어떤 날씨에 어떤 음식을 먹는 것을 좋아하나요?",
          answer: "비 오는 날 따뜻한 스프를 좋아해요.",
        },
        {
          question: "어떤 날씨에 어떤 음식을 먹는 것을 좋아하나요?",
          answer: "비 오는 날 따뜻한 스프를 좋아해요.",
        },
        {
          question: "어떤 날씨에 어떤 음식을 먹는 것을 좋아하나요?",
          answer: "비 오는 날 따뜻한 스프를 좋아해요.",
        },
        {
          question: "어떤 날씨에 어떤 음식을 먹는 것을 좋아하나요?",
          answer: "비 오는 날 따뜻한 스프를 좋아해요.",
        },
        {
          question: "어떤 날씨에 어떤 음식을 먹는 것을 좋아하나요?",
          answer: "비 오는 날 따뜻한 스프를 좋아해요.",
        },
        {
          question: "어떤 날씨에 어떤 음식을 먹는 것을 좋아하나요?",
          answer: "비 오는 날 따뜻한 스프를 좋아해요.",
        },
        {
          question: "나의 애완동물을 소개해주세요.",
          answer: "조용한 성격의 고양이를 키우고 있어요.",
        },
        {
          question: "내가 좋아하는 것, 남들이 잘 모르는 것?",
          answer: "서적 수집이 취미입니다.",
        },
        {
          question: "좋아하는 물건이 있나요?",
          answer: "오래된 서적을 보물처럼 아끼고 있어요.",
        },
      ],
    },
    {
      src: process.env.PUBLIC_URL + "/archiveImg/2.png",
      title: "토끼 1",
      username: "유저닉네임3",
      QnA: [
        {
          question: "어떤 날씨에 어떤 음식을 먹는 것을 좋아하나요?",
          answer: "화창한 날 신선한 채소를 먹는 걸 좋아해요.",
        },
        {
          question: "나의 애완동물을 소개해주세요.",
          answer: "작고 귀여운 토끼와 함께 생활해요.",
        },
        {
          question: "내가 좋아하는 것, 남들이 잘 모르는 것?",
          answer: "요리 연구를 좋아해요.",
        },
        {
          question: "좋아하는 물건이 있나요?",
          answer: "손수 만든 도자기를 애용해요.",
        },
      ],
    },
    // ... 추가 데이터
  ];

  return (
    <PageWrapper>
      <ImageGrid>
        {imageData.map((image, index) => (
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
