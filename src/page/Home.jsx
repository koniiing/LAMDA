import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lamda from "../assets/images/sphere.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useThrottleScroll from "../hooks/useThrottleScroll";

function Home() {
  const navigate = useNavigate();
  const scrollHeight = useThrottleScroll(30, 50, 400);

  return (
    <HomeWrapper>
      <MenuWrapper>
        <div
          onClick={() => {
            window.scrollTo({ top: 0 });
            navigate("/archive");
          }}
        >
          α Liking Archive
        </div>
        <div
          onClick={() => {
            window.scrollTo({ top: 0 });
            navigate("/findliking");
          }}
        >
          β Find Your Liking
        </div>
      </MenuWrapper>{" "}
      {/* <LamdaImage src={lamda} alt="LAMDA Logo" /> */}
      <TitleWrapper
        $process={scrollHeight > 400 ? 100 : (scrollHeight / 400) * 100}
      >
        <Title>LAMDA!</Title>
      </TitleWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  height: 100%;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  height: 20vh;
  position: absolute;
  top: calc(100vh - 10rem + 10rem * ${(props) => props?.$process} / 100);
  left: calc((100vw - 50rem) * ${(props) => props?.$process} / 80);
  scale: calc(2 + ${(props) => props.$process} * 4 / 100);
  -webkit-transition: all 0.1s cubic-bezier(0.25, 0.25, 0.75, 0.75);
  font-weight: ${(props) => (!props.$isBackGroundBlack ? "400" : "200")};
  font-family: "PP-Editorial";
`;

const Title = styled.h1`
  letter-spacing: -8%;
  margin: 0;
  leading-trim: both;
  text-edge: cap;
  font-size: 3.2rem;
  font-style: italic;
  line-height: normal;
  text-transform: capitalize;
`;

const LamdaImage = styled.img`
  position: absolute;
  top: 100%;
  left: 50%; /* Centers the image horizontally */
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 60%;
  height: auto;
`;
const MenuWrapper = styled.div`
  font-size: 50px;
  top: 200px;
  position: relative;
  left: 70px;
  width: auto;
  height: auto;
  color: #c3c3c3;
  font-family: serif;
`;
