import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Menu from "../component/home/Menu";
import Description from "../component/home/Description";
import Footer from "../component/common/Footer";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [titleSuffix, setTitleSuffix] = useState("!");
  const [isAnimated, setIsAnimated] = useState(true);
  const maxScroll = window.innerHeight;
  const animationThreshold = maxScroll * 2; // Set the threshold to window height

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollHeight(currentScroll);

      if (currentScroll <= maxScroll) {
        setTitleSuffix("!");
      } else {
        setTitleSuffix("?");
      }

      if (currentScroll >= animationThreshold) {
        setIsAnimated(false); // Disable animation after threshold
      } else {
        setIsAnimated(true); // Enable animation within threshold
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll, animationThreshold]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <HomeWrapper>
        <Menu />
        <TitleWrapper isAnimated={isAnimated}>
          <Title $process={scrollHeight} isAnimated={isAnimated}>
            LAMDA{titleSuffix}
          </Title>
        </TitleWrapper>
        <ContentWrapper>
          <Description />
          <Footer />
        </ContentWrapper>
      </HomeWrapper>
    </motion.div>
  );
}

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 200vh;
  padding: 20px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-start;
  position: ${({ isAnimated }) => (isAnimated ? "fixed" : "relative")};
  top: ${({ isAnimated }) => (isAnimated ? "20px" : "auto")};
  left: 20px;
  width: auto;
  transition: top 0.3s ease-in-out;
  height: ${({ $scrollHeight, maxScroll }) => {
    const maxHeight = 200;
    return `${Math.min(($scrollHeight / maxScroll) * maxHeight, maxHeight)}px`;
  }};
`;

const Title = styled.h1`
  letter-spacing: -8%;
  margin: 0;
  font-size: ${({ $process, isAnimated }) => {
    const maxScroll = window.innerHeight;
    if (isAnimated && $process <= maxScroll) {
      return `calc(200px + (${($process / maxScroll) * 150}px))`;
    } else {
      return "200px"; // Fixed size after animation threshold
    }
  }};
  line-height: normal;
  text-transform: capitalize;
  font-family: serif;
  font-weight: 400;
  transition: font-size 0.2s cubic-bezier(0.25, 0.25, 0.75, 0.75);

  @media (max-width: 1024px) {
    font-size: ${({ $process, isAnimated }) => {
      const maxScroll = window.innerHeight;
      if (isAnimated && $process <= maxScroll) {
        return `calc(180px + (${($process / maxScroll) * 100}px))`;
      } else {
        return "180px";
      }
    }};
  }

  @media (max-width: 768px) {
    font-size: ${({ $process, isAnimated }) => {
      const maxScroll = window.innerHeight;
      if (isAnimated && $process <= maxScroll) {
        return `calc(150px + (${($process / maxScroll) * 80}px))`;
      } else {
        return "150px";
      }
    }};
  }

  @media (max-width: 480px) {
    font-size: ${({ $process, isAnimated }) => {
      const maxScroll = window.innerHeight;
      if (isAnimated && $process <= maxScroll) {
        return `calc(120px + (${($process / maxScroll) * 60}px))`;
      } else {
        return "120px";
      }
    }};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
`;
