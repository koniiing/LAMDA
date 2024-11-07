import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import blobImage from "../../assets/images/sphere.png";
// Define the animation for rotating the "blob"
const rotate = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

// Container for the loading screen
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: serif;
  text-align: center;
`;

// 3D Blob styling
const Blob = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${blobImage});
  background-size: cover;
  animation: ${rotate} 3s linear infinite;
  transform-style: preserve-3d;
  opacity: 50%;
`;

const LoadingText = styled.p`
  margin-top: 130px;
  font-size: 90px;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Dots = styled.span`
  display: inline-block;
  width: 2rem;
  text-align: left;
`;

function LoadingScreen() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Animation to add dots periodically
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500); // Adjust the interval for dot appearance speed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <LoadingContainer>
      <Blob />
      <LoadingText>
        Finding Your Liking <Dots>{dots}</Dots>
      </LoadingText>
    </LoadingContainer>
  );
}

export default LoadingScreen;
