import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import BannerImg from "../assets/다운로드.jpeg"; 
import Half_Star from "../assets/ExStar.svg";
import Full_Star from "../assets/FullStar.svg";
import P_plane from "../assets/Pplane.svg";
import Fire from "../assets/Fire.svg"

/* ========================================================
   1. [채팅창 내부] 상대방 메시지용 호버 아바타 컴포넌트
   ======================================================== */
const ChatMessageAvatar = ({ name, isBottom }) => {
  const [isRatingMode, setIsRatingMode] = useState(false);
  const [ratingScore, setRatingScore] = useState(0);

  return (
    <Avatar_Hover_Container>
      <Other_Avatar src={BannerImg} alt={name} />
      
      <Profile_Preview_Card isBottom={isBottom}>
        <Preview_Content isBottom={isBottom}>
          <User_Profile_Row>
            <User_Left_Group>
              <Mini_Avatar src={BannerImg} alt="" />
              <User_Names>
                <Nickname>{name}</Nickname>
                <User_Id>@mem's mom</User_Id>
              </User_Names>
            </User_Left_Group>
            <Follow_Btn>팔로우</Follow_Btn>
          </User_Profile_Row>

          {!isRatingMode ? (
            <>
              <Intro_Text>
                최애의 아이 메무쵸 좋아합니다. 다른 장르 얘기하지 말아주세요 💀
              </Intro_Text>
              <Follow_Count_Row>
                <span>팔로워 <strong className="count">152</strong></span>
                <span>팔로잉 <strong className="count">152</strong></span>
              </Follow_Count_Row>
              <Rating_Toggle_Btn onClick={(e) => { e.stopPropagation(); setIsRatingMode(true); }}>
                <img src={Fire} alt="" />
                <span>별점 남기기</span>
              </Rating_Toggle_Btn>
            </>
          ) : (
            <>
              <Rating_Center_Zone>
                <Rating_Guide_Text>{name}님과의 대화는 어떠셨나요?</Rating_Guide_Text>
                <Star_Container>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star_Icon_Btn key={num} onClick={() => setRatingScore(num)}>
                      <img src={num <= ratingScore ? Full_Star : Half_Star} alt="" />
                    </Star_Icon_Btn>
                  ))}
                </Star_Container>
              </Rating_Center_Zone>
              <Rating_Submit_Outlined_Btn onClick={(e) => { e.stopPropagation(); setIsRatingMode(false); }}>
                <img src={P_plane} alt="" />
                <span>별점 남기기</span>
              </Rating_Submit_Outlined_Btn>
            </>
          )}
          <Out_btn>
            추방하기
          </Out_btn>
        </Preview_Content>
      </Profile_Preview_Card>
    </Avatar_Hover_Container>
  );
};

/* ========================================================
   2. [우측 참여자 리스트 전용] 요청사항 반영: 아래로 카드처럼 펼쳐지는 컴포넌트
   ======================================================== */
const SidebarMemberItem = ({ name }) => {
  const [isRatingMode, setIsRatingMode] = useState(false);
  const [ratingScore, setRatingScore] = useState(0);

  return (
    <Sidebar_Accordion_Container>
      {/* 기본 항상 노출되는 유저 한 줄 */}
      <Member_Row_Item className="member-trigger">
        <Sidebar_Member_Avatar src={BannerImg} alt={name} />
        <Member_Name_Text>{name}</Member_Name_Text>
      </Member_Row_Item>

      {/* [핵심 변경] 호버 시 팝업이 아니라 아래 공간을 밀어내며 자연스럽게 서랍처럼 열리는 카드 정보창 */}
      <Sidebar_Inflow_Card className="member-card">
        <Sidebar_Card_Inner>
          
          <Sidebar_User_Meta_Row>
            <User_Left_Group>
              <Sidebar_Inner_Avatar src={BannerImg} alt="" />
              <User_Names>
                <Sidebar_Inner_Nickname>{name}</Sidebar_Inner_Nickname>
                <Sidebar_Inner_Id>@mem's mom</Sidebar_Inner_Id>
              </User_Names>
            </User_Left_Group>
            <Follow_Btn>팔로우</Follow_Btn>
          </Sidebar_User_Meta_Row>

          {!isRatingMode ? (
            <>
              <Intro_Text>
                최애의 아이 메무쵸 좋아합니다. 다른 장르 얘기하지 말아주세요 💀
              </Intro_Text>
              <Follow_Count_Row>
                <span>팔로워 <strong className="count">152</strong></span>
                <span>팔로잉 <strong className="count">152</strong></span>
              </Follow_Count_Row>
              <Rating_Toggle_Btn onClick={(e) => { e.stopPropagation(); setIsRatingMode(true); }}>
                <img src={Fire} alt="" />
                <span>별점 남기기</span>
              </Rating_Toggle_Btn>
            </>
          ) : (
            <>
              <Rating_Center_Zone>
                <Star_Container>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star_Icon_Btn key={num} onClick={() => setRatingScore(num)}>
                      <img src={num <= ratingScore ? Full_Star : Half_Star} alt="" />
                    </Star_Icon_Btn>
                  ))}
                </Star_Container>
              </Rating_Center_Zone>
              <Rating_Submit_Outlined_Btn onClick={(e) => { e.stopPropagation(); setIsRatingMode(false); }}>
                <img src={P_plane} alt="" />
                <span>별점 남기기</span>
              </Rating_Submit_Outlined_Btn>
            </>
          )}
          <Out_btn>
            추방하기
          </Out_btn>

        </Sidebar_Card_Inner>
      </Sidebar_Inflow_Card>
    </Sidebar_Accordion_Container>
  );
};

/* ========================================================
   3. 메인 단체 채팅방 화면
   ======================================================== */
const GroupChat = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "other", name: "엘리", text: "엘리베이터가 멈추면 괜히 숨이 막힐 때 있지. 게다가 혼자였다면... 그 순간, 너 정말 많이 놀랐겠다." },
    { id: 2, sender: "other", name: "엘리", text: "아아아아아아아" },
    { id: 3, sender: "other", name: "엘리", text: "아아아" },
    { id: 4, sender: "me", name: "나", text: "엘리베이터가 멈추면 괜히 숨이 막힐 때 있지. 게다가 혼자였다면... 그 순간, 너 정말 많이 놀랐겠다." },
    { id: 5, sender: "me", name: "나", text: "아아아아아아아" },
    { id: 6, sender: "date-line", text: "6월 18일" },
    { id: 7, sender: "me", name: "나", text: "엘리베이터가 멈추면 괜히 숨이 막힐 때 있지. 게다가 혼자였다면... 그 순간, 너 정말 많이 놀랐겠다." },
    { id: 8, sender: "me", name: "나", text: "아아아아아아아" },
    { id: 9, sender: "other", name: "엘리", text: "엘리베이터가 멈추면 괜히 숨이 막힐 때 있지. 게다가 혼자였다면... 그 순간, 너 정말 많이 놀랐겠다." },
    { id: 10, sender: "other", name: "엘리", text: "아아아아아아아" },
    { id: 11, sender: "other", name: "엘리", text: "아아아" },
  ]);

  const chatRooms = [
    { id: 1, title: "mem's moms", desc: "메무쵸 맘들의 모임" },
    { id: 2, title: "mem's moms", desc: "메무쵸 맘들의 모임" },
    { id: 3, title: "mem's moms", desc: "@mem's mom" },
    { id: 4, title: "mem's moms", desc: "메무쵸 맘들의 모임" },
    { id: 5, title: "mem's moms", desc: "메무쵸 맘들의 모임" },
  ];

  const sidebarMembers = [
    { id: 1, name: "메무쵸 맘" },
    { id: 2, name: "메무쵸 맘" },
    { id: 3, name: "메무쵸 맘" },
    { id: 4, name: "메무쵸 맘" },
    { id: 5, name: "메무쵸 맘" },
    { id: 6, name: "메무쵸 맘" },
  ];

  const chatScrollRef = useRef(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setMessages([...messages, { id: Date.now(), sender: "me", name: "나", text: inputText }]);
      setInputText("");
    }
  };

  return (
    <>
      <Header currentPage="chat" />
      <Body>
        <Main_Layout_Wrapper>
          
          {/* [좌측] 채팅 목록 */}
          <Sidebar_Area>
            {chatRooms.map((room, idx) => (
              <Sidebar_Item key={room.id} isActive={idx === 2}>
                <Room_Avatar src={BannerImg} alt="" />
                <Room_Info_Text>
                  <Room_Title>{room.title}</Room_Title>
                  <Room_Desc>{room.desc}</Room_Desc>
                </Room_Info_Text>
              </Sidebar_Item>
            ))}
          </Sidebar_Area>

          {/* [중앙] 대화 구역 */}
          <Chat_Content_Area>
            <Message_Scroll_Container ref={chatScrollRef}>
              {messages.map((msg, index) => {
                if (msg.sender === "date-line") return <Date_Separator key={msg.id}>{msg.text}</Date_Separator>;
                if (msg.sender === "me") return <My_Msg_Row key={msg.id}><My_Bubble>{msg.text}</My_Bubble></My_Msg_Row>;

                const isBottomMessage = index >= messages.length - 3;
                return (
                  <Other_Msg_Row key={msg.id}>
                    <ChatMessageAvatar name={msg.name} isBottom={isBottomMessage} />
                    <Other_Msg_Body>
                      <Other_Name>{msg.name}</Other_Name>
                      <Other_Bubble>{msg.text}</Other_Bubble>
                    </Other_Msg_Body>
                  </Other_Msg_Row>
                );
              })}
            </Message_Scroll_Container>

            <Input_Bar_Wrapper>
              <Message_Input
                placeholder="메시지 입력 ..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleSendMessage}
              />
              <Icon_Action_Group>
                <IconButton>📎</IconButton>
                <IconButton>🖼️</IconButton>
              </Icon_Action_Group>
            </Input_Bar_Wrapper>
          </Chat_Content_Area>

          {/* [우측] 아래로 펼쳐지는 아코디언형 참여자 리스트 */}
          <Right_Member_Sidebar>
            <Member_Count_Header>
              <Users_Icon>👥</Users_Icon>
              <Count_Num>82</Count_Num>
            </Member_Count_Header>
            
            <Member_List_Wrapper>
              {sidebarMembers.map((member) => (
                <SidebarMemberItem key={member.id} name={member.name} />
              ))}
            </Member_List_Wrapper>
          </Right_Member_Sidebar>

        </Main_Layout_Wrapper>
      </Body>
    </>
  );
};

// ========================================================
// 스타일 정의 구역
// ========================================================

const Body = styled.div` width: 100%; height: 100vh; box-sizing: border-box; padding-top: 75px; overflow: hidden; `;
const Main_Layout_Wrapper = styled.div` display: flex; width: 100%; height: calc(100vh - 75px); `;
const Sidebar_Area = styled.div` width: 320px; height: 100%; background-color: #f7f9fa; border-right: 1px solid #eef1f2; display: flex; flex-direction: column; overflow-y: auto; `;
const Sidebar_Item = styled.div` display: flex; align-items: center; padding: 16px 20px; gap: 14px; cursor: pointer; border-bottom: 1px solid #eef1f2; background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")}; `;
const Room_Avatar = styled.img` width: 50px; height: 50px; border-radius: 12px; object-fit: cover; `;
const Room_Info_Text = styled.div` display: flex; flex-direction: column; gap: 4px; `;
const Room_Title = styled.span` font-size: 16px; font-weight: 700; `;
const Room_Desc = styled.span` font-size: 13px; color: #888888; `;
const Chat_Content_Area = styled.div` flex: 1; height: 100%; display: flex; flex-direction: column; background-color: #ffffff; `;
const Message_Scroll_Container = styled.div` flex: 1; padding: 30px 40px; overflow-y: auto; display: flex; flex-direction: column; gap: 15px; background-color: #f4f6f8; `;

/* 우측 사이드바 컨테이너 구조 */
const Right_Member_Sidebar = styled.div` width: 290px; height: 100%; background-color: #ffffff; border-left: 1px solid #eef1f2; display: flex; flex-direction: column; `;
const Member_Count_Header = styled.div` display: flex; align-items: center; gap: 6px; padding: 14px 20px; border-bottom: 1px solid #eef1f2; background-color: #ffffff; `;
const Users_Icon = styled.span` font-size: 16px; color: #777777; `;
const Count_Num = styled.span` font-size: 14px; font-weight: 700; color: #666666; `;
const Member_List_Wrapper = styled.div` flex: 1; display: flex; flex-direction: column; overflow-y: auto; `;

/* ========================================================
   [요청 집중 수정 수치] 아코디언식 카드 펼침 CSS 메커니즘
   ======================================================== */
const Sidebar_Accordion_Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #f1f3f5;
  background-color: #ffffff;

  /* 핵심동작: 호버 시 내부 .member-card 영역이 확장되며 등장 */
  &:hover {
    .member-trigger {
      background-color: #f8f9fa;
    }
    .member-card {
      grid-template-rows: 1fr; /* 높이가 컨텐츠 크기만큼 부드럽게 늘어남 */
      opacity: 1;
    }
  }
`;

const Member_Row_Item = styled.div` 
  display: flex; 
  align-items: center; 
  width: 100%; 
  padding: 12px 20px; 
  gap: 12px; 
  box-sizing: border-box; 
  transition: background-color 0.2s ease;
`;

const Sidebar_Member_Avatar = styled.img` width: 36px; height: 36px; border-radius: 50%; object-fit: cover; `;
const Member_Name_Text = styled.span` font-size: 14px; font-weight: 600; color: #333333; `;

/* absolute를 전면 파괴하고 grid-rows 애니메이션으로 부드럽게 열리게 만듦 */
const Sidebar_Inflow_Card = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.25s ease, opacity 0.2s ease;
  overflow: hidden;
  background-color: #fafbfc;
`;

const Sidebar_Card_Inner = styled.div`
  min-height: 0;
  padding: 0 20px 20px 20px; /* 자연스럽게 여백 처리 */
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Sidebar_User_Meta_Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Sidebar_Inner_Avatar = styled.img` width: 38px; height: 38px; border-radius: 10px; object-fit: cover; `;
const Sidebar_Inner_Nickname = styled.strong` font-size: 14px; color: #111111; font-weight: 700; `;
const Sidebar_Inner_Id = styled.span` font-size: 11px; color: #999999; `;

/* ========================================================
   공용 레이아웃 에셋 스타일 피스들
   ======================================================== */
const Avatar_Hover_Container = styled.div` position: relative; display: inline-block; &:hover > div { display: flex; opacity: 1; visibility: visible; } `;
const Profile_Preview_Card = styled.div` position: absolute; left: 42px; z-index: 999; width: 340px; background-color: #ffffff; border-radius: 24px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12); border: 1px solid #eef0f2; display: none; opacity: 0; visibility: hidden; ${(props) => props.isBottom ? `bottom: -10px;` : `top: -10px;`} `;
const Preview_Content = styled.div` padding: 22px; display: flex; width: 100%; box-sizing: border-box; flex-direction: ${(props) => (props.isBottom ? "column-reverse" : "column")}; gap: 16px; `;
const User_Profile_Row = styled.div` display: flex; justify-content: space-between; align-items: center; `;
const User_Left_Group = styled.div` display: flex; align-items: center; gap: 10px; `;
const Mini_Avatar = styled.img` width: 44px; height: 44px; border-radius: 12px; object-fit: cover; `;
const User_Names = styled.div` display: flex; flex-direction: column; `;
const Nickname = styled.strong` font-size: 16px; color: #111111; `;
const User_Id = styled.span` font-size: 13px; color: #999999; `;

const Intro_Text = styled.p` font-size: 13px; color: #444444; line-height: 1.45; margin: 0; `;
const Follow_Count_Row = styled.div` display: flex; gap: 12px; font-size: 12px; color: #777777; .count { font-weight: 700; color: #ba4a5a; margin-left: 2px; } `;
const Rating_Center_Zone = styled.div` display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 5px 0; `;
const Rating_Guide_Text = styled.span` font-size: 14px; font-weight: 600; color: #444444; `;
const Star_Container = styled.div` display: flex; gap: 6px; `;
const Star_Icon_Btn = styled.button` background: none; border: none; cursor: pointer; padding: 0; img { width: 24px; height: 24px; } `;

const Follow_Btn = styled.button` background-color: #ba4a5a; color: #ffffff; border: none; border-radius: 12px; padding: 6px 12px; font-size: 11px; font-weight: 700; cursor: pointer; `;
const Rating_Toggle_Btn = styled.button` display: flex; justify-content: center; align-items: center; width: 100%; background-color: #ba4a5a; border: none; border-radius: 20px; padding: 10px 0; gap: 12px; cursor: pointer; span { color: #ffffff; font-size: 13px; font-weight: 700; } `;
const Rating_Submit_Outlined_Btn = styled.button` width: 100%; background-color: #ffffff; border: 1.5px solid #ba4a5a; border-radius: 20px; padding: 8px 0; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 6px; img { width: 16px; height: 16px; } span { color: #ba4a5a; font-size: 13px; font-weight: 700; } &:hover { background-color: #fff8f8; } `;

const Other_Msg_Row = styled.div` display: flex; align-items: flex-start; gap: 12px; max-width: 65%; `;
const Other_Avatar = styled.img` width: 40px; height: 40px; border-radius: 10px; object-fit: cover; cursor: pointer; `;
const Other_Msg_Body = styled.div` display: flex; flex-direction: column; gap: 5px; `;
const Other_Name = styled.span` font-size: 14px; font-weight: 700; color: #222222; `;
const Other_Bubble = styled.div` background-color: #e5e8eb; color: #111111; font-size: 14px; padding: 12px 16px; border-radius: 0 16px 16px 16px; `;
const My_Msg_Row = styled.div` display: flex; justify-content: flex-end; align-self: flex-end; max-width: 65%; `;
const My_Bubble = styled.div` background-color: #b05663; color: #ffffff; font-size: 14px; padding: 12px 16px; border-radius: 16px 0 16px 16px; `;
const Date_Separator = styled.div` align-self: center; font-size: 13px; color: #888888; margin: 20px 0; background: rgba(0, 0, 0, 0.03); padding: 4px 14px; border-radius: 20px; `;

const Input_Bar_Wrapper = styled.div` padding: 20px 40px; background-color: #f4f6f8; display: flex; position: relative; align-items: center; `;
const Message_Input = styled.input` width: 100%; height: 50px; background-color: #ffffff; border: 1px solid #e1e4e6; border-radius: 12px; padding: 0 90px 0 20px; font-size: 14px; outline: none; `;
const Icon_Action_Group = styled.div` position: absolute; right: 55px; display: flex; gap: 10px; `;
const IconButton = styled.button` background: none; border: none; font-size: 20px; cursor: pointer; opacity: 0.6; `;
const Out_btn = styled.button` border: none; background: none; font-size: 12px; font-weight: 400; color: #f54b31; margin: 0;`

export default GroupChat;