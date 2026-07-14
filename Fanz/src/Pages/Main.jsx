import styled from "@emotion/styled";
import Header from "../components/Header";
import Arrow from "../assets/Arrow.svg";
import Star from "../assets/Star_pref.svg";
import Profile from "../assets/다운로드.jpeg";

const Main = () => {
  const name = "잠자는 이카리 신지";
  const num = 87;
  const a = ["#에반게리온", "#이카리신지", "#초호기"];
  const b = ["이카리신지맘스터치", "고죠사토루 피의연합", "최애의 아이가 최애"];

  return (
    <>
      <Header />
      <Body>
        <Find_Dmate_box>
          <Find_title>나에게 딱 맞는 덕질 메이트 찾기</Find_title>
          <Find_text>AI로 내게 딱! 맞는 덕질 메이트를 찾아보세요!</Find_text>
          <Find_box>
            <Find_img_box>
              <Find_img className="far-left"></Find_img>
              <Find_img className="prev"></Find_img>
              <Find_img className="active">
                <Img_title>에반게리온 좋아해요 :)</Img_title>
                <Img_arrow>
                  <img src={Arrow} alt="이전" />
                  <img src={Arrow} alt="다음" />
                </Img_arrow>
                <Img_text_box>
                  <Preference>
                    <img src={Star} /> {num} %
                  </Preference>
                  <Name_title>
                    <Name_info>{name}님</Name_info>18세-여성
                  </Name_title>
                  <Tag_box>
                    {a[0]} {a[1]} {a[2]}
                  </Tag_box>
                </Img_text_box>
                <Send_chat>
                  {name}님에게 <br />
                  채팅보내기
                </Send_chat>
              </Find_img>
              <Find_img className="next"></Find_img>
              <Find_img className="far-right"></Find_img>
            </Find_img_box>
            <Find_dot></Find_dot>
          </Find_box>
        </Find_Dmate_box>
        <Fame_chat_box>
          <Fame_title>이 달의 인기 채팅</Fame_title>
          <Fame_text>이번 달, 어떤 채팅이 가장 활발했을까요?</Fame_text>
          <Fame_box>
            <First_box>
              <Info_con>
                <Box_title>{b[0]}</Box_title>
                <Box_text>이카리 신지 맛있는거 많이먹어라</Box_text>
              </Info_con>
              <Info_box>
                <Info_title>가입자</Info_title>
                <Info_text>{num} 명</Info_text>
                <Info_title>이번 달 나눈 채팅</Info_title>
                <Info_text>{num} 개</Info_text>
                <Info_title>채팅 활성도</Info_title>
                <Info_text>{num} %</Info_text>
              </Info_box>
            </First_box>
            <Title_box>
              <Second_box>
                <Info_con>
                  <Box_title>{b[1]}</Box_title>
                  <Box_text>이카리 신지 맛있는거 많이먹어라</Box_text>
                </Info_con>
                <Info_box_2>
                  <Info_con>
                    <Info_title>가입자</Info_title>
                    <Info_text>{num} 명</Info_text>
                  </Info_con>
                  <Info_con>
                    <Info_title>이번 달 나눈 채팅</Info_title>
                    <Info_text>{num} 개</Info_text>
                  </Info_con>
                  <Info_con>
                    <Info_title>채팅 활성도</Info_title>
                    <Info_text>{num} %</Info_text>
                  </Info_con>
                </Info_box_2>
              </Second_box>
              <Third_box>
                <Info_con>
                  <Box_title>{b[2]}</Box_title>
                  <Box_text>이카리 신지 맛있는거 많이먹어라</Box_text>
                </Info_con>
                <Info_box_2>
                  <Info_con>
                    <Info_title>가입자</Info_title>
                    <Info_text>{num} 명</Info_text>
                  </Info_con>
                  <Info_con>
                    <Info_title>이번 달 나눈 채팅</Info_title>
                    <Info_text>{num} 개</Info_text>
                  </Info_con>
                  <Info_con>
                    <Info_title>채팅 활성도</Info_title>
                    <Info_text>{num} %</Info_text>
                  </Info_con>
                </Info_box_2>
              </Third_box>
            </Title_box>
          </Fame_box>
        </Fame_chat_box>
        <Know_box>
          <Know_title>팬즈(FanZ) 더 알아보기</Know_title>
          <Know_text>팬즈(FanZ) 내 다양한 기능 더 알아보세요</Know_text>
          <Banner></Banner>
        </Know_box>
      </Body>
    </>
  );
};

const Body = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px 115px 179px 115px;
  box-sizing: border-box;
  margin: 0;
  gap: 70px;
`;
const Find_Dmate_box = styled.div`
  height: 559px;
  display: flex;
  flex-direction: column;
`;
const Title_box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  & > div {
    flex: 1;
  }
`;
const Find_title = styled.h2`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;
const Find_text = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  color: #434343;
`;
const Find_box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Find_img_box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 500px; 
  overflow: hidden; 
`;

const Find_img = styled.div`
  width: 468px;
  height: 447px;
  background-image: url(${Profile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  padding: 30px 18px;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute; 
  transition:
    transform 0.4s ease,
    z-index 0.4s ease,
    filter 0.4s ease; 
  &.active {
    transform: scale(1) translateX(0);
    z-index: 5;
    filter: brightness(1);
  }
  &.prev {
    transform: scale(0.85) translateX(-280px);
    z-index: 3;
    filter: brightness(0.5);
  }
  &.next {
    transform: scale(0.85) translateX(280px);
    z-index: 3;
    filter: brightness(0.5);
  }
  &.far-left {
    transform: scale(0.7) translateX(-500px);
    z-index: 1;
    filter: brightness(0.3);
  }
  &.far-right {
    transform: scale(0.7) translateX(500px);
    z-index: 1;
    filter: brightness(0.3);
  }
`;
const Img_title = styled.h3`
  margin: 0;
  color: #f9f9f9;
  position: absolute;
  top: 30px;
`;
const Img_arrow = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img:nth-of-type(2) {
    transform: rotate(180deg);
  }
`;
const Img_text_box = styled.div`
  position: absolute;
  bottom: 0;
`;
const Preference = styled.div`
  color: #c8838d;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Name_title = styled.div`
  font-size: 12px;
  color: #7a7a7a;
`;
const Name_info = styled.span`
  font-size: 24px;
  color: #fff;
  font-weight: 700;
`;
const Tag_box = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  margin-bottom: 30px;
`;
const Send_chat = styled.button`
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  text-align: right;
  position: absolute;
  bottom: 30px;
  right: 0;
  margin-right: 18px;
`;
const Find_dot = styled.span``;
const Fame_chat_box = styled.div`
  width: 100%;
  height: 784px;
  gap: 30px;
`;
const Fame_title = styled.h2`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;
const Fame_text = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  color: #434343;
  margin-bottom: 30pxx;
`;
const Fame_box = styled.div`
  width: 100%;
  height: 692px;
  gap: 11px;
  display: flex;
  & > div {
    flex: 1;
  }
`;
const First_box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #000;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Box_title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  top: 32px;
  left: 28px;
  margin: 0px;
`;
const Box_text = styled.p`
  color: #fff;
  font-size: 25px;
  font-weight: 400;
  margin: 0px;
`;
const Info_box = styled.div`
  margin: 0;
  color: #fff;
`;
const Info_title = styled.h4`
  margin: 0;
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;
const Info_text = styled.p`
  margin: 0;
  color: #fff;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
`;
const Info_con = styled.div``;
const Second_box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Info_box_2 = styled.div`
  display: flex;
  margin: 0;
  gap: 23px;
`;
const Third_box = styled.div`
  box-sizing: border-box;
  position: relative;
  background: url(${Profile});
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  justify-content: space-between;
`;
const Know_box = styled.div``;
const Know_title = styled.h2``;
const Know_text = styled.p``;
const Banner = styled.div``;

export default Main;
