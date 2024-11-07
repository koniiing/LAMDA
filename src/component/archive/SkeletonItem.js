import React from "react";
import styled, { keyframes } from "styled-components";

// Define a shimmer animation for the skeleton
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

// Skeleton box with shimmer animation
const SkeletonBox = styled.div`
  width: 100%;
  height: 100px; /* Adjust as needed */
  border-radius: 8px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

function SkeletonItem() {
  return <SkeletonBox />;
}

export default SkeletonItem;
