import styled from "@emotion/styled";
import Header from "../components/Header";
import Profile from "../assets/다운로드.jpeg"; 

const GroupChat = () => {
  const evaRooms = [
    { id: 1, title: "에반게리온 모임", tags: ["#에반게리온", "#이카리신지"], info: "20대 · 여성", count: 152 },
    { id: 2, title: "에반게리온 모임", tags: ["#에반게리온", "#이카리신지"], info: "20대 · 성별무관", count: 152 },
    { id: 3, title: "에반게리온 모임", tags: ["#에반게리온", "#이카리신지"], info: "20대 · 여성", count: 152 },
    { id: 4, title: "에반게리온 모임", tags: ["#에반게리온", "#이카리신지"], info: "20대 · 여성", count: 152 },
  ];

  const oshiRooms = [
    { id: 1, title: "mem무쵸", tags: ["#최애의아이", "#루비", "#다이아"], info: "20대 · 여성", count: 152 },
    { id: 2, title: "mem무쵸", tags: ["#최애의아이", "#루비", "#다이아"], info: "20대 · 여성", count: 152 },
    { id: 3, title: "mem무쵸", tags: ["#최애의아이", "#루비", "#다이아"], info: "20대 · 여성", count: 152 },
    { id: 4, title: "mem무쵸", tags: ["#최애의아이", "#루비", "#다이아"], info: "20대 · 여성", count: 152 },
  ];

  return (
    <>
      <Header currentPage="groupChat"/>
      <Body>
        {/* 상단 타이틀 섹션 */}
        <Title_Row>
          <Main_Title>단체 채팅 방 찾기</Main_Title>
          <Create_Room_Btn>단체 채팅방 생성하기</Create_Room_Btn>
        </Title_Row>

        {/* 세션 1: #에반게리온 */}
        <Section>
          <Section_Tag>#에반게리온</Section_Tag>
          <Card_Slider>
            {evaRooms.map((room) => (
              <Chat_Card key={room.id}>
                <Card_Img bg={Profile}>
                  <Card_Title>{room.title}</Card_Title>
                </Card_Img>
                <Card_Info_Box>
                  <Tag_Row>
                    {room.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                  </Tag_Row>
                  <Meta_Row>
                    <User_Meta>{room.info}</User_Meta>
                    <User_Count>👤 {room.count}명</User_Count>
                  </Meta_Row>
                </Card_Info_Box>
              </Chat_Card>
            ))}
          </Card_Slider>
        </Section>

        {/* 세션 2: #최애의아이 (첫 번째 라인) */}
        <Section>
          <Section_Tag>#최애의아이</Section_Tag>
          <Card_Slider>
            {oshiRooms.map((room) => (
              <Chat_Card key={room.id}>
                <Card_Img bg={Profile}>
                  <Card_Title>{room.title}</Card_Title>
                </Card_Img>
                <Card_Info_Box>
                  <Tag_Row>
                    {room.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                  </Tag_Row>
                  <Meta_Row>
                    <User_Meta>{room.info}</User_Meta>
                    <User_Count>👤 {room.count}명</User_Count>
                  </Meta_Row>
                </Card_Info_Box>
              </Chat_Card>
            ))}
          </Card_Slider>
        </Section>

        {/* 세션 3: #최애의아이 (두 번째 라인) */}
        <Section>
          <Section_Tag>#최애의아이</Section_Tag>
          <Card_Slider>
            {oshiRooms.map((room) => (
              <Chat_Card key={room.id}>
                <Card_Img bg={Profile}>
                  <Card_Title>{room.title}</Card_Title>
                </Card_Img>
                <Card_Info_Box>
                  <Tag_Row>
                    {room.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                  </Tag_Row>
                  <Meta_Row>
                    <User_Meta>{room.info}</User_Meta>
                    <User_Count>👤 {room.count}명</User_Count>
                  </Meta_Row>
                </Card_Info_Box>
              </Chat_Card>
            ))}
          </Card_Slider>
        </Section>
      </Body>
    </>
  );
};

// 스타일 설정 컴포넌트
const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 115px;
  box-sizing: border-box;
  background-color: #ffffff;
  gap: 45px;
`;

const Title_Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Main_Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #000000;
  margin: 0;
`;

const Create_Room_Btn = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: #ba4a5a; /* 이미지 내 우상단 붉은 텍스트 컬러 반영 */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const Section_Tag = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: #000000;
  margin: 0;
`;
const Card_Slider = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  overflow-x: auto; 
  white-space: nowrap;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 6px; 
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 10px;
  }
  
`;

const Chat_Card = styled.div`
  flex: 0 0 calc((100% - 60px) / 4); 
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
`;

const Card_Img = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 15px;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); 
    z-index: 1;
  }
`;

const Card_Title = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2; 
`;

const Card_Info_Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 4px;
  gap: 8px;
`;

const Tag_Row = styled.div`
  display: flex;
  gap: 6px;
  
  span {
    font-size: 12px;
    font-weight: 500;
    color: #7a7a7a;
  }
`;

const Meta_Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const User_Meta = styled.span`
  font-size: 12px;
  color: #999999;
  font-weight: 500;
`;

const User_Count = styled.span`
  font-size: 12px;
  color: #666666;
  font-weight: 600;
`;

export default GroupChat;