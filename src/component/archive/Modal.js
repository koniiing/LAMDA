import React from "react";
import styled from "styled-components";

const Modal = ({ image, closeModal }) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalImageWrapper>
          <ModalImage src={image.src} alt={image.title} />
          <ImageLabel>{image.username || "유저닉네임"}</ImageLabel>
        </ModalImageWrapper>
        <ModalTextWrapper>
          {image.QnA && image.QnA.length > 0 ? (
            image.QnA.map((item, index) => (
              <TextCard key={index}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </TextCard>
            ))
          ) : (
            <p>추가 설명을 여기에 넣을 수 있습니다.</p>
          )}
        </ModalTextWrapper>
        <CloseButton onClick={closeModal}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 1151.16px;
  max-width: 495;
  display: flex;
  padding: 20px;
  border: 0.5px solid #000000;
  position: relative;
`;

const ModalImageWrapper = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ImageLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 5px;
  font-family: Pretendard;

  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
`;

const ModalTextWrapper = styled.div`
  width: 50%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  h2 {
    font-family: Pretendard;

    font-size: 1.5rem;
    margin-bottom: 10px;
    font-family: "PP-Editorial", serif;
    color: #333;
  }
`;

const TextCard = styled.div`
  background-color: #ffffff;
  padding: 15px;

  h3 {
    font-family: Pretendard;

    font-size: 1rem;
    margin: 0 0 5px;
    color: #333;
  }

  p {
    font-family: Pretendard;
    font-size: 0.875rem;
    color: #555;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #333;
`;
