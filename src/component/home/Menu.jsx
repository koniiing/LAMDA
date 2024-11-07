import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ellipse from "../../assets/images/Ellipse 89.svg";
const Menu = () => {
  const navigate = useNavigate();

  return (
    <MenuWrapper>
      <MenuItem
        onClick={() => {
          window.scrollTo({ top: 0 });
          navigate("/howworks");
        }}
      >
        <img src={ellipse} />
        How works
      </MenuItem>
      <MenuItem
        onClick={() => {
          window.scrollTo({ top: 0 });
          navigate("/archive");
        }}
      >
        <img src={ellipse} />
        Liking Archive
      </MenuItem>
      <MenuItem
        onClick={() => {
          window.scrollTo({ top: 0 });
          navigate("/findliking");
        }}
      >
        {" "}
        <img src={ellipse} />
        Find ( &nbsp;&nbsp;&nbsp;) Liking
      </MenuItem>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  font-size: 50px;
  top: 230px;
  position: relative;
  left: 70px;
  width: auto;
  height: auto;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  font-family: coolvetica;

  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  cursor: pointer;
  transition: color 0.3s;
  width: 500px;

  &:hover {
    color: black;
  }
  display: flex;
  aligtn-items: center;
  gap: 20px;
`;
