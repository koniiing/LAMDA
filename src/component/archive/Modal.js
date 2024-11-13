import React from "react";
import styled from "styled-components";

const Modal = ({ image, closeModal }) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalImageWrapper>
          <ModalImage src={image.src} alt={image.title} />
          <ImageLabel>{image.username || "유저닉네임"}의 취향</ImageLabel>
        </ModalImageWrapper>
        <VerticalLine />
        <ModalTextWrapper>
          {image.QnA && image.QnA.length > 0 ? (
            image.QnA.map((item, index) => (
              <TextCard key={index}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
                <HorizontalLine />
              </TextCard>
            ))
          ) : (
            <p>추가 설명을 여기에 넣을 수 있습니다.</p>
          )}
        </ModalTextWrapper>
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
  max-width: 1150px;
  max-height: 484.64px;
  display: flex;
  border: 0.5px solid #000000;
  position: relative;
`;

const ModalImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 28.8px 28.8px 49.5px 28.8px;
`;

const ModalImage = styled.img`
  width: 680px;
  height: 406px;
`;

const ImageLabel = styled.div`
  position: absolute;
  bottom: 26.56px;
  left: 14.97px;

  background-color: rgba(255, 255, 255);
  padding: 12px 10px;
  border-radius: 20px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 300;
  color: #000;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;
  text-align: center;
`;

const VerticalLine = styled.div`
  width: 0.5px;
  height: auto;
  background-color: black;
`;

const ModalTextWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const TextCard = styled.div`
  background-color: none;
  padding: 15px 0;
  h3 {
    font-family: Pretendard;
    font-size: 15px;
    margin-left: 28.78px;
    color: #333;
  }

  p {
    font-family: Pretendard;
    font-size: 15px;
    color: #555;
    margin-left: 28.78px;
  }
`;

const HorizontalLine = styled.div`
  width: 390px;
  height: 0.5px;
  background-color: black;
  margin-top: 28.78px;
`;
