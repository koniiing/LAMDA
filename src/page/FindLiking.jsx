import React, { useState } from "react";
import styled from "styled-components";

const FindLiking = () => {
  const [keywords, setKeywords] = useState(["", "", "", "", ""]);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async (keyword) => {
    const accessToken =
      "Ypina_AMAVZ7YWABONGAYAGAAB2DEHHOM7NEQBQBIQCQB5RR3BPYW7QK4IP3I5JFA264IWOK4RZRS7OWNUSTPPUEJIOEY643IK7EIA"; // 유효한 Pinterest Access Token으로 변경하세요
    try {
      const response = await fetch(
        `https://api.pinterest.com/v5/search/pins?query=${encodeURIComponent(
          keyword
        )}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setImageUrl(data.items[0].media.images.original.url);
      } else {
        alert("이미지를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      alert("이미지를 불러오는 중 오류가 발생했습니다.");
    }
  };

  const handleKeywordChange = (index, value) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const handleSearch = () => {
    const keyword = keywords.find((k) => k);
    if (keyword) {
      fetchImage(keyword);
    } else {
      alert("키워드를 입력해주세요.");
    }
  };

  return (
    <AppContainer>
      <Title>(Find Your Liking)</Title>
      <Description>
        Write your <strong>liking keyword.</strong>
        <br />
        취향 키워드를 적성해주세요.
        <br />
        내가 좋아하는 것, 나의 취향을 입력해주세요.
        <br />
        사진, 장소, 음식, 감정 등 나를 나타낼 수 있는 것이라면 모든 환영해요.
      </Description>
      <KeywordInputs>
        {keywords.map((keyword, index) => (
          <KeywordBox
            key={index}
            value={keyword}
            onChange={(e) => handleKeywordChange(index, e.target.value)}
            placeholder=""
            width={`${100 + index * 20}px`}
            radius={`${10 + index * 10}px`}
          />
        ))}
      </KeywordInputs>
      <NameLabel>
        Write your name.
        <br />
        이름을 작성해주세요.
      </NameLabel>
      <NameInputContainer>
        <NameInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        />
        <SubmitButton onClick={handleSearch}>→</SubmitButton>
      </NameInputContainer>
      {imageUrl && <ImageResult src={imageUrl} alt="Search Result" />}
    </AppContainer>
  );
};

export default FindLiking;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 10px;
  font-family: serif;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  &:hover {
    color: black;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

const KeywordInputs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const KeywordBox = styled.input`
  width: ${(props) => props.width || "100px"};
  height: 40px;
  border: 1px solid #333;
  border-radius: ${(props) => props.radius || "10px"};
  padding: 5px;
`;

const NameLabel = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
`;

const NameInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NameInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 5px;
`;

const SubmitButton = styled.button`
  font-size: 1.5em;
  background: none;
  border: none;
  cursor: pointer;
`;

const ImageResult = styled.img`
  margin-top: 20px;
  max-width: 300px;
  border-radius: 10px;
`;
