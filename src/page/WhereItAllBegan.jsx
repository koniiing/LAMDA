import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../component/common/Footer2";
import ProcessCircle from "../component/common/ProcessCircle";
const images = [
  process.env.PUBLIC_URL + "/inspirations/image1.webp",
  process.env.PUBLIC_URL + "/inspirations/image2.png",
  process.env.PUBLIC_URL + "/inspirations/image3.png",
  process.env.PUBLIC_URL + "/inspirations/image4.png",
  process.env.PUBLIC_URL + "/inspirations/image5.jpg",
  process.env.PUBLIC_URL + "/inspirations/image6.jpg",
];
const WhereItAllBegan = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const stackedImages = [
    images[(currentImageIndex + 0) % images.length],
    images[(currentImageIndex + 1) % images.length],
    images[(currentImageIndex + 2) % images.length],
  ];

  return (
    <Container>
      <ProcessCircle />
      <Title>(Where It All Began)</Title>
      <ImageDummy onClick={handleNextImage}>
        {stackedImages.map((src, index) => (
          <StackedImage key={index} src={src} alt={`Stacked ${index + 1}`} />
        ))}
      </ImageDummy>
      <Footer />
    </Container>
  );
};

export default WhereItAllBegan;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 210px;
`;
const Title = styled.h1`
  font-size: 140px;
  margin-bottom: 100px;
  font-family: "Instrument Serif";
  color: white;
  text-shadow: -0.5px -0.5px 0 black, 0.5px -0.5px 0 black, -0.5px 0.5px 0 black,
    0.5px 0.5px 0 black;

  &:hover {
    color: black;
  }
`;

const ImageDummy = styled.div`
  width: 1124px;
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* 자식 요소 겹치기 위해 relative 설정 */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 150px;

  &:hover {
    transform: scale(1.05);
  }
`;

const StackedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  background-color: none;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:nth-child(1) {
    transform: rotate(-5deg) translateX(-15px) translateY(-10px);
    z-index: 1;
    opacity: 0.9;
  }
  &:nth-child(2) {
    transform: rotate(3deg) translateX(15px) translateY(10px);
    z-index: 2;
    opacity: 0.8;
  }
  &:nth-child(3) {
    transform: rotate(-2deg) translateX(-10px) translateY(20px);
    z-index: 3;
    opacity: 0.7;
  }
  &:last-child {
    z-index: 4;
    transform: none;
    opacity: 1;
  }
`;
