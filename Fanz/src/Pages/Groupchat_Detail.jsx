import styled from "@emotion/styled";
import Header from "../components/Header";
import BannerImg from "../assets/다운로드.jpeg"; // 기존 메무쵸 배너 에셋 유지

const GroupChatDetail = () => {
  const roomName = "mem쵸";
  const currentCount = 152;
  
  const rules = [
    "욕설, 비방, 분쟁 유발 및 과도한 친목은 자제해 주세요.",
    "스포일러는 반드시 배려하여 대화해 주세요.",
    "불법 자료 공유, 광고, 홍보, 도배 행위는 금지됩니다.",
    "모든 참여자는 서로를 존중하는 매너 있는 대화를 부탁드립니다."
  ];

  const conditions = [
    "여성",
    "20대 이상",
    "메무쵸를 사랑하시는 분"
  ];

  return (
    <>
      <Header currentPage="groupChat"/>
      <Body>
        {/* 상단 배너 */}
        <Top_Banner bg={BannerImg} />

        {/* [수정] 아래 모든 요소들이 이 하나의 통합 박스(파란 테두리) 안에 존재함 */}
        <Total_Unified_Box>
          
          {/* 왼쪽: 설명 및 규칙 영역 */}
          <Left_Info_Area>
            <Title_Row>
              <Room_Title>{roomName}</Room_Title>
              <Participant_Count>현재 참여인원 {currentCount}명</Participant_Count>
            </Title_Row>

            <Intro_Text>
              ✨ <strong>최애의 아이 메무쵸 오픈채팅방</strong> ✨ <br />
              메무쵸를 좋아하는 팬이라면 누구나 환영합니다! 💛 <br />
              이곳은 『최애의 아이』의 매력적인 캐릭터 메무쵸를 함께 이야기하고, 다양한 정보를 공유하며 즐겁게 소통하는 팬들의 공간입니다. <br />
              애니메이션, 만화, 굿즈, 일러스트, 팬아트, 명장면, 명대사, 최신 소식 등 메무쵸와 관련된 이야기라면 무엇이든 자유롭게 나눌 수 있습니다. 처음 『최애의 아이』를 접한 분부터 오래된 팬까지 모두 편하게 참여하실 수 있으며, 서로를 존중하는 따뜻한 분위기를 지향합니다.
            </Intro_Text>

            <Rules_Box>
              <Rules_Title>📌 방 규칙</Rules_Title>
              <Rules_List>
                {rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </Rules_List>
            </Rules_Box>

            <Outro_Text>
              메무쵸의 귀여움과 매력, 성장 이야기, 다양한 팬 콘텐츠를 함께 즐기며 좋은 추억을 만들어 가요! 메무쵸를 사랑하는 모든 분들의 많은 참여를 기다립니다. 함께 즐겁고 편안한 팬 커뮤니티를 만들어 봅시다! ✨
            </Outro_Text>
          </Left_Info_Area>

          {/* 오른쪽: 가입 조건 및 가입하기 버튼 */}
          <Right_Join_Area>
            <Condition_Title>가입조건</Condition_Title>
            <Condition_List>
              {conditions.map((cond, idx) => (
                <li key={idx}>{cond}</li>
              ))}
            </Condition_List>
            <Join_Btn>채팅방 가입하기</Join_Btn>
          </Right_Join_Area>

        </Total_Unified_Box>
      </Body>
    </>
  );
};

// 스타일 컴포넌트
const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top_Banner = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center 20%;
  background-size: cover;
`;

const Total_Unified_Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 40px;
  gap: 40px;
  box-sizing: border-box;
  position: relative;
  top: -40px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

// 하나의 박스 안에서 왼쪽을 채우는 상세 소개 공간
const Left_Info_Area = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title_Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
  margin-bottom: 25px;
`;

const Room_Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #000000;
  margin: 0;
`;

const Participant_Count = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #b84a5a;
`;

const Intro_Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #111111;
  margin: 0 0 25px 0;
  word-break: keep-all;
`;

const Rules_Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Rules_Title = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #111111;
  margin: 0 0 10px 0;
`;

const Rules_List = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    font-size: 14px;
    color: #333333;
    line-height: 1.5;
  }
`;

const Outro_Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #111111;
  margin: 0;
  word-break: keep-all;
`;

// 하나의 박스 안에서 오른쪽을 차지하는 연회색 가입 조건 서브 카드 박스
const Right_Join_Area = styled.div`
  width: 280px;
  height: fit-content;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Condition_Title = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: #ba4a5a;
  margin: 0 0 14px 0;
`;

const Condition_List = styled.ul`
  margin: 0 0 30px 0;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 13px;
    font-weight: 500;
    color: #444444;
    list-style-type: disc;
  }
`;

const Join_Btn = styled.button`
  width: 100%;
  background-color: #f1e4e6;
  color: #ba4a5a;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e5d3d6;
  }
`;

export default GroupChatDetail;