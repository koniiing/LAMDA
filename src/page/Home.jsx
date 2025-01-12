import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Menu from "../component/home/Menu";
import Description from "../component/home/Description";
import Footer from "../component/common/Footer";
import { motion } from "framer-motion";
import lamdaGif from "../assets/images/lamda2.gif";
function Home() {
  const navigate = useNavigate();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [titleSuffix, setTitleSuffix] = useState("!");
  const [isAnimated, setIsAnimated] = useState(true);
  const maxScroll = window.innerHeight;
  const fadeStart = maxScroll;
  const fadeEnd = maxScroll * 2;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollHeight(currentScroll);

      if (currentScroll <= maxScroll) {
        setTitleSuffix("!");
      } else {
        setTitleSuffix("?");
      }

      if (currentScroll >= fadeEnd) {
        setIsAnimated(false);
      } else {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll, fadeEnd]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <HomeWrapper>
        <Menu />
        <Object>
          {" "}
          <img src={lamdaGif} />
        </Object>
        <TitleWrapper isAnimated={isAnimated}>
          <Title
            $process={scrollHeight}
            isAnimated={isAnimated}
            opacity={
              scrollHeight > fadeStart
                ? 1 -
                  Math.min(
                    (scrollHeight - fadeStart) / (fadeEnd - fadeStart),
                    1
                  )
                : 1
            } // Fade starts after maxScroll
          >
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
  background-image: url(${process.env.PUBLIC_URL}/homeBackground.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  scroll-behavior: smooth;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Object = styled.div`
  width: 1157px;
  height: auto;
  position: absolute;
  top: 188px;
  right: 24px;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: ${({ isAnimated }) => (isAnimated ? "fixed" : "absolute")};
  top: 20px;
  left: 102px;
  width: auto;
  margin-bottom: 20px;
  height: ${({ $scrollHeight, maxScroll }) => {
    const maxHeight = 200;
    return `${Math.min(($scrollHeight / maxScroll) * maxHeight, maxHeight)}px`;
  }};
`;

const Title = styled.h1`
  letter-spacing: -10px;
  margin: 0;
  font-size: ${({ $process, isAnimated }) => {
    const maxScroll = window.innerHeight;
    if (isAnimated && $process <= maxScroll) {
      return `calc(370px + (${($process / maxScroll) * 200}px))`;
    } else {
      return `calc(240px - (${($process / maxScroll) * 20}px))`;
    }
  }};
  transition: opacity 1s cubic-bezier(0.25, 0.5, 0.75, 0.25),
    font-size 0.5s cubic-bezier(0.25, 0.5, 0.75, 0.25);
  opacity: ${({ opacity }) => opacity * 10};
  line-height: normal;
  text-transform: capitalize;
  font-family: "Instrument Serif";
`;

const ContentWrapper = styled.div`
  width: 100%;
`;
