import styled from "@emotion/styled";
import Header from "../components/Header"; // 이전 턴에서 수정한 Header 컴포넌트 경로
import BannerImg from "../assets/다운로드.jpeg"; // 최애의 아이 메무쵸 배너 이미지 에셋
import EvangelionCard from "../assets/다운로드.jpeg"; // 에반게리온 모임 카드 이미지 에셋

const MyProfileDetail = ({ isOwnProfile = false }) => {
  const user = {
    nickname: "mem쵸",
    ageGender: "18세 · 여성",
    userId: "@mem's mom",
    intro: "최애의 아이 메무쵸 좋아합니다. 다른 장르 얘기하지 말아주세요",
    tags: ["#최애의아이", "#메무쵸", "#루비", "#다이아"],
    followers: 152,
    following: 152,
    temperature: 9, 
  };

  // 더미 데이터 배열 (참여중인 단체 채팅 리스트)
  const participatingChats = Array(6).fill({
    title: "에반게리온 모임",
    tags: ["#에반게리온", "#이카리신지"],
    meta: "20대 · 여성",
    count: 152,
  });

  return (
    <>
      <Header currentPage="groupChat" />
      <Body>
        {/* 상단 큰 배경 배너 */}
        <Top_Banner bg={BannerImg} />

        {/* 하단 메인 프로필 및 컨텐츠 보드 */}
        <Profile_Container>
          
          {/* 절대 위치로 배너 경계선에 걸치는 둥근 원형 프로필 이미지 */}
          <Avatar_Wrapper />

          {/* 프로필 내부 상단 정보 영역 */}
          <Profile_Header_Row>
            <User_Main_Info>
              <Nickname_Line>
                <Nickname>{user.nickname}</Nickname>
                <Age_Gender>{user.ageGender}</Age_Gender>
              </Nickname_Line>
              
              <User_Id>{user.userId}</User_Id>

              <Follow_Status_Line>
                <span>팔로워 <strong className="num">{user.followers}</strong></span>
                <span>팔로잉 <strong className="num">{user.following}</strong></span>
              </Follow_Status_Line>
            </User_Main_Info>

            {/* 우측 상단 매너 온도 및 액션 영역 */}
            <Right_Action_Area>
              {/* 케이스 1: 내가 볼 때만 노출되는 수정하기 링크 */}
              {isOwnProfile && <Edit_Link href="#edit">수정하기</Edit_Link>}

              <Temperature_Box>
                <Temp_Label>{user.nickname} 님의 온도</Temp_Label>
                <Temp_Display>
                  <Temp_Number>{user.temperature}°</Temp_Number>
                  <Smile_Icon>😀</Smile_Icon>
                </Temp_Display>
              </Temperature_Box>
            </Right_Action_Area>
          </Profile_Header_Row>

          {/* 프로필 내부 중단 소개글 및 태그 영역 */}
          <Profile_Intro_Row>
            <Intro_Text>{user.intro}</Intro_Text>
            <Tag_Box>
              {user.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </Tag_Box>

            {/* 케이스 2: 다른 사람이 볼 때만 노출되는 팔로우 버튼 */}
            {!isOwnProfile && <Follow_Btn>팔로우</Follow_Btn>}
          </Profile_Intro_Row>

          {/* 프로필 내부 하단 참여중인 단체 채팅 리스트 킷 */}
          <Chat_Section>
            <Section_Title>참여중인 단체 채팅</Section_Title>
            
            <Chat_Grid_Layout>
              {participatingChats.map((chat, index) => (
                <Chat_Card key={index}>
                  <Card_Image bg={EvangelionCard}>
                    <Card_Overlay_Title>{chat.title}</Card_Overlay_Title>
                  </Card_Image>
                  
                  <Card_Bottom_Data>
                    <Card_Tags>
                      {chat.tags.map((t, i) => (
                        <span key={i}>{t}</span>
                      ))}
                    </Card_Tags>
                    
                    <Card_Meta_Row>
                      <Card_Meta_Text>{chat.meta}</Card_Meta_Text>
                      <Card_Count_Box>
                        <User_Icon /> {chat.count}명
                      </Card_Count_Box>
                    </Card_Meta_Row>
                  </Card_Bottom_Data>
                </Chat_Card>
              ))}
            </Chat_Grid_Layout>
          </Chat_Section>

        </Profile_Container>
      </Body>
    </>
  );
};

// 메인 스타일드 컴포넌트 구조 정의
const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f7f9fa; /* 미세한 연회색 바탕으로 메인 백그라운드 분리 */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Top_Banner = styled.div`
  width: 100%;
  height: 380px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center 20%;
  background-size: cover;
  position: relative;
`;

/* ========================================================
   중앙 정렬 메인 흰색 프로필 보드 박스 레이아웃
   ======================================================== */
const Profile_Container = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 30px; /* 스크린샷 특유의 부드럽고 둥근 모서리 반경 */
  padding: 50px 45px 60px 45px;
  box-sizing: border-box;
  position: relative;
  top: -60px; /* 배너 하단 레이어 위로 걸쳐 올라오게 유도 */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
`;

// 배너와 보드 경계면에 걸쳐 배치되는 프로필 사진 공간
const Avatar_Wrapper = styled.div`
  position: absolute;
  top: -70px;
  left: 45px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #d9d9d9; /* 사진 등록 기본 회색 바탕 배경 */
  border: 5px solid #ffffff; /* 흰색 두꺼운 테두리선 효과 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  /* 중앙 정렬용 내부 더미 이미지 아이콘 처리 가상요소 */
  &::before {
    content: "📷"; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    opacity: 0.3;
  }
`;

/* ========================================================
   상단 기본 신상 정보 줄 스타일
   ======================================================== */
const Profile_Header_Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const User_Main_Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname_Line = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const Nickname = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: #000000;
  margin: 0;
`;

const Age_Gender = styled.span`
  font-size: 11px;
  color: #ba4a5a; /* 연자주색 강조 성별/나이 정보 */
  font-weight: 600;
`;

const User_Id = styled.span`
  font-size: 14px;
  color: #777777;
  margin-top: 2px;
  margin-bottom: 12px;
`;

const Follow_Status_Line = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #555555;

  .num {
    font-weight: 700;
    color: #ba4a5a;
    margin-left: 2px;
  }
`;

/* ========================================================
   우측 상단 매너 온도 박스 및 수정 링크 구역
   ======================================================== */
const Right_Action_Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

const Edit_Link = styled.a`
  font-size: 12px;
  color: #ba4a5a;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Temperature_Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Temp_Label = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 4px;
`;

const Temp_Display = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Temp_Number = styled.span`
  font-size: 28px;
  font-weight: 800;
  color: #000000;
  line-height: 1;
`;

const Smile_Icon = styled.span`
  font-size: 32px;
`;

/* ========================================================
   중단 소개글 및 팔로우 버튼 제어 구역
   ======================================================== */
const Profile_Intro_Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 35px;
  margin-bottom: 35px;
`;

const Intro_Text = styled.p`
  font-size: 14px;
  color: #111111;
  line-height: 1.5;
  margin: 0 0 12px 0;
  word-break: keep-all;
`;

const Tag_Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;

  span {
    font-size: 12px;
    font-weight: 600;
    color: #ba4a5a; /* 이미지 내부 시그니처 붉은 태그 색상 */
  }
`;

const Follow_Btn = styled.button`
  width: 80px;
  background-color: #ba4a5a;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 6px 0;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start; /* 왼쪽 정렬 안착 */
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

/* ========================================================
   하단 참여중인 단체 채팅 뷰 그리드 스펙
   ======================================================== */
const Chat_Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section_Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #ba4a5a;
  margin: 0 0 20px 0;
`;

const Chat_Grid_Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 그리드 레이아웃 반영 */
  gap: 20px;
  width: 100%;
`;

const Chat_Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
`;

const Card_Image = styled.div`
  width: 100%;
  height: 140px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25); /* 텍스트 식별 레이어 */
  }
`;

const Card_Overlay_Title = styled.h4`
  position: absolute;
  top: 15px;
  left: 18px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  z-index: 2;
`;

const Card_Bottom_Data = styled.div`
  padding: 15px 18px;
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
`;

const Card_Tags = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 15px;

  span {
    font-size: 11px;
    color: #555555;
    font-weight: 500;
  }
`;

const Card_Meta_Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Card_Meta_Text = styled.span`
  font-size: 11px;
  color: #999999;
`;

const Card_Count_Box = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #777777;
`;

// 가상 유저 아이콘 메타데이터
const User_Icon = styled.span`
  &::before {
    content: "👤";
    font-size: 11px;
  }
`;

export default MyProfileDetail;