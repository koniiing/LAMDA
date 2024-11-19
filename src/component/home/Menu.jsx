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
  font-size: 70px;
  top: 950px;
  position: relative;
  left: 70px;
  width: auto;
  height: auto;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  font-family: "Konkhmer Sleokchher";

  color: white;
  text-shadow: -0.5px -0.5px 0 #484848, 0.5px -0.5px 0 #484848,
    -0.5px 0.5px 0 #484848, 0.5px 0.5px 0 #484848;

  cursor: pointer;
  transition: color 0.3s;
  width: 600px;

  &:hover {
    color: #484848;
  }
  display: flex;
  aligtn-items: center;
  gap: 20px;
`;
