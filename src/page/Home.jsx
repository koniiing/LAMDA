import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Menu from "../component/home/Menu";
import Description from "../component/home/Description";
import Footer from "../component/common/Footer";

function Home() {
  const navigate = useNavigate();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [titleSuffix, setTitleSuffix] = useState("!");
  const maxScroll = window.innerHeight;

  // Scroll event listener to update scrollHeight state and title suffix
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollHeight(currentScroll);

      // Change suffix to "!" when the text size is increasing
      if (currentScroll <= maxScroll) {
        setTitleSuffix("!");
      } else {
        // Change suffix to "?" when the text size is decreasing
        setTitleSuffix("?");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxScroll]);

  return (
    <HomeWrapper>
      <Menu />
      <TitleWrapper $process={scrollHeight}>
        <Title $process={scrollHeight}>LAMDA{titleSuffix}</Title>
      </TitleWrapper>
      <ContentWrapper>
        <Description />
        <Footer />
      </ContentWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 200vh; /* 페이지 높이를 충분히 크게 설정 */
  padding: 20px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  top: 20px;
  left: 20px;
  width: auto;
  transition: top 0.3s ease-in-out;
`;

const Title = styled.h1`
  letter-spacing: -8%;
  margin: 0;
  font-size: ${({ $process }) => {
    const maxScroll = window.innerHeight;
    if ($process <= maxScroll) {
      // 200px에서 350px까지 커지기
      return `calc(200px + (${($process / maxScroll) * 150}px))`;
    } else {
      // 350px에서 200px까지
      return `calc(350px - ((${($process - maxScroll) / maxScroll}) * 150px))`;
    }
  }};
  line-height: normal;
  text-transform: capitalize;
  font-family: serif;
  font-weight: 400;
  transition: font-size 0.2s cubic-bezier(0.25, 0.25, 0.75, 0.75);

  @media (max-width: 1024px) {
    font-size: ${({ $process }) => {
      const maxScroll = window.innerHeight;
      if ($process <= maxScroll) {
        return `calc(180px + (${($process / maxScroll) * 100}px))`;
      } else {
        return `calc(280px - ((($process - maxScroll) / maxScroll) * 100px))`;
      }
    }};
  }

  @media (max-width: 768px) {
    font-size: ${({ $process }) => {
      const maxScroll = window.innerHeight;
      if ($process <= maxScroll) {
        return `calc(150px + (${($process / maxScroll) * 80}px))`;
      } else {
        return `calc(230px - ((${($process - maxScroll) / maxScroll}) * 80px))`;
      }
    }};
  }

  @media (max-width: 480px) {
    font-size: ${({ $process }) => {
      const maxScroll = window.innerHeight;
      if ($process <= maxScroll) {
        return `calc(120px + (${($process / maxScroll) * 60}px))`;
      } else {
        return `calc(180px - ((${($process - maxScroll) / maxScroll}) * 60px))`;
      }
    }};
  }
`;

const ContentWrapper = styled.div`
  margin-top: calc(250px);
  width: 100%;
`;
