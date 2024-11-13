import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Circle = styled.div`
  width: ${(props) => (props.isActive ? "20px" : "10px")};
  height: ${(props) => (props.isActive ? "20px" : "10px")};
  border-radius: 50%;
  border: 1px solid black; /* Add black border */
  background-color: ${(props) => (props.isActive ? "black" : "white")};
  transition: width 0.3s, height 0.3s;
`;

const ProcessCircle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active index based on the current path
  const getActiveIndex = () => {
    switch (location.pathname) {
      case "/howworks":
        return 0;
      case "/archive":
        return 1;
      case "/findliking":
        return 2;
      case "/result":
        return 3;
      default:
        return 0;
    }
  };

  const activeIndex = getActiveIndex();

  const handleNavigation = (index) => {
    switch (index) {
      case 0:
        navigate("/howworks");
        break;
      case 1:
        navigate("/archive");
        break;
      case 2:
        navigate("/findliking");
        break;
      case 3:
        navigate("/result");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <MenuContainer>
      {[0, 1, 2, 3, 4].map((index) => (
        <Circle
          key={index}
          isActive={index === activeIndex}
          onClick={() => handleNavigation(index)}
        />
      ))}
    </MenuContainer>
  );
};

export default ProcessCircle;
