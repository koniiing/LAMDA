import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Footer from "../component/common/Footer2";
import ProcessCircle from "../component/common/ProcessCircle";
const images = [
  process.env.PUBLIC_URL + "/inspirations/1.png",
  process.env.PUBLIC_URL + "/inspirations/2.png",
  process.env.PUBLIC_URL + "/inspirations/3.png",
  process.env.PUBLIC_URL + "/inspirations/4.png",
  process.env.PUBLIC_URL + "/inspirations/5.jpg",
  process.env.PUBLIC_URL + "/inspirations/6.jpg",
  process.env.PUBLIC_URL + "/inspirations/7.jpg",
  process.env.PUBLIC_URL + "/inspirations/8.jpg",
  process.env.PUBLIC_URL + "/inspirations/9.jpg",
  process.env.PUBLIC_URL + "/inspirations/10.jpg",
  process.env.PUBLIC_URL + "/inspirations/11.jpg",
  process.env.PUBLIC_URL + "/inspirations/12.jpg",
  process.env.PUBLIC_URL + "/inspirations/13.jpg",
  process.env.PUBLIC_URL + "/inspirations/14.jpg",
  process.env.PUBLIC_URL + "/inspirations/15.jpg",
];
const WhereItAllBegan = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const stackedImages = [
    images[(currentImageIndex + 1) % images.length],
    images[(currentImageIndex + 2) % images.length],
    images[(currentImageIndex + 3) % images.length],
    images[(currentImageIndex + 4) % images.length],
    images[(currentImageIndex + 5) % images.length],
    images[(currentImageIndex + 6) % images.length],
    images[(currentImageIndex + 7) % images.length],
    images[(currentImageIndex + 8) % images.length],
    images[(currentImageIndex + 9) % images.length],
    images[(currentImageIndex + 10) % images.length],
    images[(currentImageIndex + 11) % images.length],
    images[(currentImageIndex + 12) % images.length],
    images[(currentImageIndex + 13) % images.length],
    images[(currentImageIndex + 14) % images.length],
    images[(currentImageIndex + 15) % images.length],
    //    images[(currentImageIndex + 16) % images.length],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
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
  transition: color 0.3s;

  font-size: 140px;
  margin-bottom: 100px;
  font-family: "Instrument Serif";
  color: white;
  text-shadow: -0.5px -0.5px 0 #484848, 0.5px -0.5px 0 #484848,
    -0.5px 0.5px 0 #484848, 0.5px 0.5px 0 #484848;

  &:hover {
    color: #484848;
  }
`;

const ImageDummy = styled.div`
  width: 1124px;
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:nth-child(1) {
    transform: rotate(-5deg) translateX(-15px) translateY(-10px);
    z-index: 1;
    opacity: 1;
  }
  &:nth-child(2) {
    transform: rotate(3deg) translateX(15px) translateY(10px);
    z-index: 2;
    opacity: 1;
  }
  &:nth-child(3) {
    transform: rotate(-2deg) translateX(-10px) translateY(20px);
    z-index: 3;
    opacity: 1;
  }
  &:last-child {
    z-index: 4;
    transform: rotate(1.5deg) translateX(-5px) translateY(5px);
    opacity: 1;
  }
`;
