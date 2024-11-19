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
              <>
                <TextCard key={index}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p> <HorizontalLine />
                </TextCard>{" "}
              </>
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
  width: 1807px;
  max-height: 800px;
  display: flex;
  border: 0.5px solid #000000;
  position: relative;
  font-family: Pretendard;
  font-weight: 300;
`;

const ModalImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 28.8px 28.8px 49.5px 28.8px;
`;

const ModalImage = styled.img`
  width: 1124px;
  height: 670px;
`;

const ImageLabel = styled.div`
  position: absolute;
  bottom: 49.93px;
  left: 27px;
  width: 230px;
  height: 62.07px;
  background-color: rgba(255, 255, 255);
  padding: 10px 43px;
  border-radius: 39px;
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 25px;
  color: #484848;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const VerticalLine = styled.div`
  width: 0.5px;
  height: auto;
  background-color: black;
`;

const ModalTextWrapper = styled.div`
  width: 100%;
  max-width: 583px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin: 0;
`;

const TextCard = styled.div`
  background-color: none;
  h3 {
    font-family: Pretendard;
    font-size: 20px;
    margin: 50px;
    color: #484848;
    font-weight: 600;
  }

  p {
    font-family: Pretendard;
    font-size: 20px;
    color: #555;
    margin-left: 50px;
    margin-bottom: 50px;
    font-weight: 300;
  }
`;

const HorizontalLine = styled.div`
  width: 563px;
  height: 0.5px;
  background-color: black;
`;
