import React from "react";
import ProcessCircle from "../component/common/ProcessCircle";
import Footer2 from "../component/common/Footer2";
import styled from "styled-components";
const Result = () => {
  const nickname = localStorage.getItem("nickname");
  console.log("Saved nickname:", nickname);

  return (
    <AppContainer>
      <ProcessCircle />
      <Title>nickname's Liking</Title>
      <h2>개인정보 처리방침</h2>
      <br />
      **1. 수집하는 개인정보** <br />
      저희 앱은 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수 있습니다.{" "}
      <br />
      - 필수 정보: 사용자 이름,이메일 주소 - 선택 정보: 프로필 사진, 사용자의 앱
      이용 기록 <br />
      **2. 개인정보 수집 및 이용 목적** <br />
      수집된 개인정보는 다음 목적을 위해 사용됩니다. <br />
      -서비스 제공 및 운영 - 고객 지원 및 문의 대응 - 서비스 개선을 위한 통계
      분석
      <br />
      **3. 개인정보 보유 및 이용 기간** 사용자의 개인정보는 회원 탈퇴 시 즉시
      파기됩니다. 단, 법령에 따라 보관이 필요한 경우 해당 법령에서 정한 기간
      동안 보관합니다.
      <br /> **4. 개인정보의 제3자 제공** 저희 앱은 원칙적으로 사용자의 동의
      없이 개인정보를 외부에 제공하지 않습니다. 다만, 법령에 따라 요구되는
      경우에 한해 제3자에게 제공될 수 있습니다.
      <br /> **5. 개인정보의 안전성 확보 조치** 사용자의 개인정보는 비밀번호를
      통해 보호되며, 불법 접근을 방지하기 위한 기술적 조치를 취하고 있습니다.{" "}
      <br />
      **6. 개인정보 처리방침의 변경** 개인정보 처리방침이 변경될 경우, 변경
      사항을 앱 내 공지사항을 통해 알립니다.
      <br /> **7. 개인정보 보호 담당자 연락처** <br />
      앱의 개인정보 보호와 관련된 문의는 아래 연락처로 연락해 주세요. <br />
      이름: 정고은 이메일:swanyjke@naver.com
      <Footer2 />
    </AppContainer>
  );
};

export default Result;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
  text-align: center;
  margin-top: 50px;
`;
const Title = styled.h1`
  font-size: 140px;
  margin-bottom: 67px;
  font-family: "Instrument Serif";
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  &:hover {
    color: black;
  }
`;
