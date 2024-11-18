import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../component/common/Footer2";
import { motion } from "framer-motion";
import ProcessCircle from "../component/common/ProcessCircle";
const FindLiking = () => {
  const [keywords, setKeywords] = useState(["", "", "", "", ""]);
  const [name, setName] = useState("");

  const [images, setImages] = useState([]); // 여러 이미지를 저장
  const [savedName, setSavedName] = useState(""); // 저장된 닉네임

  const fetchImages = async () => {
    const fetchedImages = [];

    for (const keyword of keywords) {
      if (keyword.trim() === "") continue;

      try {
        const response = await fetch(
          "https://kr.pinterest.com/resource/NewsHubBadgeResource/get/?source_url=%2Fswanyjke%2Fmovie%2F&data=%7B%22options%22%3A%7B%7D%2C%22context%22%3A%7B%7D%7D&_=1731749789093",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer YOUR_ACCESS_TOKEN`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.data && data.data.length > 0) {
          fetchedImages.push(data.data[0].image_large_url);
        }
      } catch (error) {
        console.error(`Error fetching image for keyword: ${keyword}`, error);
      }
    }

    setImages(fetchedImages);
  };


  const handleKeywordChange = (index, value) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const handleSearch = () => {
    if (!name.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (!keywords.some((keyword) => keyword.trim())) {
      alert("최소 하나의 키워드를 입력해주세요.");
      return;
    }
    setSavedName(name); // 닉네임 저장
    localStorage.setItem("nickname", name); // 닉네임 로컬 스토리지에 저장
    fetchImages(); // 이미지 검색 실행
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <AppContainer>
        <ProcessCircle />
        <Title>(Find Your Liking)</Title>
        <Description>
          Write your <strong>liking keyword.</strong>
          <KorDescription>
            나의 취향을 나타내는 <strong>취향 키워드</strong>를 입력해주세요.
          </KorDescription>
          <SubDescription>
            사물, 장소, 분위기, 감정 등 내가 좋아하는 것.{" "}
            <strong>나를 나타낼 수 있는 것</strong>이라면 모두 좋아요.
          </SubDescription>
        </Description>
        <KeywordInputs>
          {keywords.map((keyword, index) => (
            <KeywordBox
              key={index}
              value={keyword}
              onChange={(e) => handleKeywordChange(index, e.target.value)}
              placeholder="키워드"
            />
          ))}
        </KeywordInputs>
        <NameInputSection>
          <NameLabel>
            Write your <strong>nick name.</strong>
            <br />
            <strong>닉네임</strong>을 작성해주세요.
          </NameLabel>
          <NameInputContainer>
            <NameInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="nickname"
            />
            <SubmitButton onClick={handleSearch}>→</SubmitButton>
          </NameInputContainer>
        </NameInputSection>
        {/* {imageUrl && <ImageResult src={imageUrl} alt="Search Result" />}{" "} */}
        <ImageGallery>
          {images.map((image, index) => (
            <ImageResult key={index} src={image} alt={`Result ${index + 1}`} />
          ))}
        </ImageGallery>
        <Footer />
      </AppContainer>
    </motion.div>
  );
};

export default FindLiking;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 33px;
  font-family: serif;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  &:hover {
    color: black;
  }
`;

const Description = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 78px;
  line-height: 40px;
  font-family: Pretendard;
`;

const KorDescription = styled.div`
  font-size: 15px;
  color: #333;
`;

const SubDescription = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;

const KeywordInputs = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`;

const KeywordBox = styled.input`
  width: 199px;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  font-size: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;

  &:focus {
    outline: none;
    border: 1px solid #333;
  }
`;

const NameInputSection = styled.div`
  font-family: Pretendard;
  margin-top: 40px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 110px;
`;

const NameLabel = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-right: 70px;
`;

const NameInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;
  border-radius: 8px;
  padding: 5px 10px;
`;

const NameInput = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  padding: 0 10px;
  font-size: 1rem;
  color: #333;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.3);
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 5px;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: black;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const ImageResult = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;
