import styled from "@emotion/styled";
import Picture from "../assets/Picture.svg";

const SignUp = () => {
  // 이미지 내부 가이드 텍스트 및 예시 더미 데이터
  const nickname = "mem쵸";
  const accountId = "@mem's mom";
  const ageGender = "18세 · 여성";
  const introduction = "최애의 아이 메무쵸 좋아합니다. 다른 장르 얘기하지 말아주세요";
  const tags = ["#최애의아이", "#메무쵸", "#루비", "#다이아"];

  return (
    <>
      <Body>
        {/* 좌측: 실시간 프로필 미리보기 영역 */}
        <Preview_Side>
          {/* 배너 등록 영역 */}
          <Banner_Upload>
            <Upload_Icon src={Picture} alt="사진 등록" />
            <Upload_Text>사진 등록</Upload_Text>
          </Banner_Upload>

          {/* 메인 프로필 카드 */}
          <Profile_Card>
            {/* 프로필 이미지 등록 영역 */}
            <Avatar_Upload>
              <img src={Picture} alt="프로필 등록" />
            </Avatar_Upload>

            {/* 유저 정보 출력 텍스트 영역 */}
            <User_Info_Box>
              <Name_Row>
                <User_Name>{nickname}</User_Name>
                <User_Meta>{ageGender}</User_Meta>
              </Name_Row>
              <User_Id>{accountId}</User_Id>
              <User_Intro>{introduction}</User_Intro>
              <Tag_Container>
                {tags.map((tag, idx) => (
                  <Tag_Item key={idx}>{tag}</Tag_Item>
                ))}
              </Tag_Container>
            </User_Info_Box>
          </Profile_Card>
        </Preview_Side>

        {/* 우측: 실제 입력 폼 영역 */}
        <Left_side>
          <Box>
            <Left_title>FanZ</Left_title>
            <Left_text>정보입력</Left_text>
            <Guide_text>왼쪽 프로필을 확인해 배너와 프로필 사진을 등록해주세요!</Guide_text>
          </Box>

            <Auth_button>회원가입 완료</Auth_button>
        </Left_side>
      </Body>
    </>
  );
};

// 기존 Body 레이아웃 유지하며 전체 채움
const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

/* ========================================================
   좌측 영역 스타일링 (이미지 가이드라인 완벽 일치)
   ======================================================== */
const Preview_Side = styled.div`
  width: 65%;
  height: 100%;
  background-color: #e5e5e5; /* 전체 뒷배경 회색 레이아웃 */
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Banner_Upload = styled.div`
  width: 100%;
  height: 40%; /* 전체 화면 위쪽 차지 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const Upload_Icon = styled.img`
  width: 64px;
  height: 64px;
  opacity: 0.4;
`;

const Upload_Text = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #7a7a7a;
`;

const Profile_Card = styled.div`
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 90%;
  height: 63%; /* 상단 배너와 자연스럽게 겹치는 화이트 보드 */
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
  padding: 0 45px;
  box-sizing: border-box;
`;

const Avatar_Upload = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #ffffff;
  position: absolute;
  top: -55px; /* 반쯤 걸치도록 음수 마진 사용 */
  left: 50px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 44px;
    height: 44px;
    opacity: 0.5;
  }
`;

const User_Info_Box = styled.div`
  margin-top: 75px; /* 아바타 공간만큼 띄우기 */
  display: flex;
  flex-direction: column;
`;

const Name_Row = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const User_Name = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #000000;
  margin: 0;
`;

const User_Meta = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #ff8080; /* 분홍빛 나이/성별 메타 정보 색상 */
`;

const User_Id = styled.span`
  font-size: 16px;
  color: #7a7a7a;
  margin-top: 2px;
  font-weight: 500;
`;

const User_Intro = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin: 20px 0 0 0;
  line-height: 1.4;
`;

const Tag_container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const Tag_Container = styled(Tag_container)``;

const Tag_Item = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #b84a5a; /* 이미지 내 자주색 해시태그 컬러 매칭 */
`;

/* ========================================================
   우측 입력 폼 영역 스타일링 (기존 코드 유지 및 싱크 최적화)
   ======================================================== */
const Left_side = styled.div`
  width: 35%;
  height: 100%;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  text-align: center;
`;

const Left_title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: #800000;
  margin: 0;
`;

const Left_text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  margin: 5px 0 0 0;
`;

const Guide_text = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  margin: 25px 0 0 0;
  line-height: 1.4;
`;


const Auth_button = styled.button`
  width: 100%;
  background-color: #a34e62;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #8c3f52;
  }
`;

export default SignUp;