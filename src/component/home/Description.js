import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <PageWrapper>
      <ContentSection>
        <Paragraph>
          <strong>Liking</strong> can explain who I am,
          <br />
          reveal what kind of person someone else is, <br />
          narrow the psychological distance between us.
        </Paragraph>
        <Paragraph>
          Liking is what we're all about. <br />
          All your preferences and <br />
          More of what you love revealed in one place. <br />
          Discover new joys and surprises, <br />
          Amazing experiences with <strong>LAMDA!</strong>
        </Paragraph>
        <KoreanText>
          취향은 나를 설명해주기도, 타인이 어떤 사람인지 알게 해주기도, <br />
          타인과 나 사이의 심리적 거리를 좁혀주기도 한다. <br />
          취향을 알수록 나를 알 수 있다. 취향은 그 자체로 나를 소개하는 하나의
          지표가 된다. <br />
          취향은 나의 <strong>선호</strong>와 <strong>애정</strong>하는 것들이
          한 곳에 드러나는 집합체이다. <br />
          <br />
          누군가에게 말하기 부끄러울 정도로 별 거 아니고 사소한 것 또한 취향이고
          나임을. <br />
          <br />
          <strong>LAMDA!</strong>는 이 시간 모두에게 <strong>나 다운 것</strong>
          <br />
          나의 취향에 대해 생각할 수 있는 시간을 제공하고자 한다.
        </KoreanText>
      </ContentSection>
    </PageWrapper>
  );
};

export default Description;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  background-color: #f9f9f9;
  height: auto;
  font-family: Pretendard;
  margin-top: 200vh;
`;

const ContentSection = styled.div`
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const KoreanText = styled.p`
  text-align: right;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-top: 30px;
  white-space: pre-line;
`;
