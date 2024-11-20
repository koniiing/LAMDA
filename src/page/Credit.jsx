import React from "react";
import styled, { keyframes } from "styled-components";
import obj from "../assets/images/lamda2.gif";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Credit = () => {
  const navigate = useNavigate();

  const text = ".irudagirooW .gnoeJ nueoK Dabin Ryu. Wooseok Shin ";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Title
          onClick={() => {
            window.scrollTo({ top: 0 });
            navigate("/");
          }}
        >
          2024 ATC
        </Title>
        <Ellipse>
          {text.split("").map((char, index) => (
            <TextChar
              key={index}
              index={index}
              total={text.length}
              rx={400}
              ry={500}
            >
              {char}
            </TextChar>
          ))}
          <Face src={obj} alt="face" />
        </Ellipse>{" "}
        <Title
          onClick={() => {
            window.scrollTo({ top: 0 });
            navigate("/");
          }}
        >
          LAMDA!
        </Title>
      </Container>
    </motion.div>
  );
};

export default Credit;

const moveAlongPath = (index, total, rx, ry) => keyframes`
  0% {
    transform: translate(
      ${Math.cos((index / total) * 2 * Math.PI) * rx}px, 
      ${Math.sin((index / total) * 2 * Math.PI) * ry}px
    );
  }
  100% {
    transform: translate(
      ${Math.cos(((index + total - 1) / total) * 2 * Math.PI) * rx}px, 
      ${Math.sin(((index + total - 1) / total) * 2 * Math.PI) * ry}px
    );
  }
`;

// 컨테이너
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  flex-direction: column;
`;
const Title = styled.h1`
  transition: color 0.3s;

  cursor: pointer;
  font-size: 140px;
  font-family: "Instrument Serif";
  color: white;
  text-shadow: -0.5px -0.5px 0 #484848, 0.5px -0.5px 0 #484848,
    -0.5px 0.5px 0 #484848, 0.5px 0.5px 0 #484848;
  &:hover {
    color: black;
  }
`;

// 타원형 경로
const Ellipse = styled.div`
  position: relative;
  width: 600px; /* 타원의 가로 크기 */
  height: 300px; /* 타원의 세로 크기 */
`;

// 개별 문자 배치
const TextChar = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  font-size: 25px;
  font-family: Pretendard;
  font-weight: 300;
  color: #475b3a;

  /* 긴 루프 애니메이션 적용 */
  animation: ${({ index, total, rx, ry }) =>
      moveAlongPath(index, total, rx, ry)}
    10s linear infinite;
`;

// 중앙 이미지
const Face = styled.img`
  position: absolute;
  width: 150px; /* 이미지 크기 */
  height: 150px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
