import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import BannerImg from "../assets/다운로드.jpeg";
import Fire from "../assets/Fire.svg"
import Half_Star from "../assets/ExStar.svg";
import Full_Star from "../assets/FullStar.svg";
import P_plane from "../assets/Pplane.svg";

const OtherMessageItem = ({ msg, isBottom }) => {
  const [isRatingMode, setIsRatingMode] = useState(false);
  const [ratingScore, setRatingScore] = useState(0);

  const handleToggleRatingMode = (e) => {
    e.stopPropagation(); 
    setIsRatingMode(!isRatingMode);
  };

  const handleSelectStar = (score) => {
    setRatingScore(score);
  };

  return (
    <Other_Msg_Row>
      <Avatar_Hover_Container>
        <Other_Avatar src={BannerImg} alt="상대 프로필" />
        
        <Profile_Preview_Card isBottom={isBottom}>
          <Preview_Content isBottom={isBottom}>
            
            {/* 유저 정보 */}
            <User_Profile_Row>
              <User_Left_Group>
                <Mini_Avatar src={BannerImg} alt="" />
                <User_Names>
                  <Nickname>{msg.name}</Nickname>
                  <User_Id>@mem's mom</User_Id>
                </User_Names>
              </User_Left_Group>
              <Follow_Btn>팔로우</Follow_Btn>
            </User_Profile_Row>

            {/* 조건부 컨텐츠 영역 */}
            {!isRatingMode ? (
              <>
                <Intro_Text>
                  최애의 아이 메무쵸 좋아합니다. 다른 장르 얘기하지 말아주세요 💀
                </Intro_Text>
                <Follow_Count_Row>
                  <span>팔로워 <strong className="count">152</strong></span>
                  <span>팔로잉 <strong className="count">152</strong></span>
                </Follow_Count_Row>
                
                {/* 기본 상태 버튼: 채워진 자주색 */}
                <Rating_Toggle_Btn onClick={handleToggleRatingMode}>
                    <img src={Fire} alt="" />
                  <span>별점 남기기</span>
                </Rating_Toggle_Btn>
              </>
            ) : (
              <>
                <Rating_Center_Zone>
                  <Rating_Guide_Text>{msg.name}님과의 대화는 어떠셨나요?</Rating_Guide_Text>
                  <Star_Container>
                    {[1, 2, 3, 4, 5].map((starNum) => (
                      <Star_Icon_Btn 
                        key={starNum} 
                        onClick={() => handleSelectStar(starNum)}
                      >
                        <img 
                          src={starNum <= ratingScore ? Full_Star : Half_Star} 
                          alt={`${starNum}점`} 
                        />
                      </Star_Icon_Btn>
                    ))}
                  </Star_Container>
                </Rating_Center_Zone>

                {/* [핵심 수정] 별점 모드 버튼: 흰색 배경 + 자주색 테두리 + 종이비행기 */}
                <Rating_Submit_Outlined_Btn onClick={handleToggleRatingMode}>
                  <img src={P_plane} alt="" />
                  <span>별점 남기기</span>
                </Rating_Submit_Outlined_Btn>
              </>
            )}

          </Preview_Content>
        </Profile_Preview_Card>
      </Avatar_Hover_Container>

      <Other_Msg_Body>
        <Other_Name>{msg.name}</Other_Name>
        <Other_Bubble>{msg.text}</Other_Bubble>
      </Other_Msg_Body>
    </Other_Msg_Row>
  );
};

/* ========================================================
   메인 채팅방 컴포넌트
   ======================================================== */
const ChatRoom = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "other", name: "엘리", text: "엘리베이터가 멈추면 괜히 숨이 막힐 때 있지. 게다가 혼자였다면... 그 순간, 너 정말 많이 놀랐겠다." },
    { id: 2, sender: "other", name: "엘리", text: "아아아아아아아" },
    { id: 3, sender: "other", name: "엘리", text: "아아아" },
    { id: 4, sender: "me", name: "나", text: "엘리베이터가 멈추면 괜히 숨이 막힐 때 있지. 게다가 혼자였다면..." },
    { id: 5, sender: "me", name: "나", text: "아아아아아아아" },
    { id: 6, sender: "date-line", text: "6월 18일" },
    { id: 9, sender: "other", name: "엘리", text: "너 정말 많이 놀랐겠다." },
    { id: 10, sender: "other", name: "엘리", text: "아아아아아아아" },
    { id: 11, sender: "other", name: "엘리", text: "아아아" },
  ]);

  const chatRooms = [
    { id: 1, title: "mem's moms", desc: "메무쵸 맘들의 모임" },
    { id: 3, title: "mem's moms", desc: "@mem's mom" },
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
          <Sidebar_Area>
            {chatRooms.map((room, idx) => (
              <Sidebar_Item key={room.id} isActive={idx === 1}>
                <Room_Avatar src={BannerImg} />
                <Room_Info_Text>
                  <Room_Title>{room.title}</Room_Title>
                  <Room_Desc>{room.desc}</Room_Desc>
                </Room_Info_Text>
              </Sidebar_Item>
            ))}
          </Sidebar_Area>

          <Chat_Content_Area>
            <Message_Scroll_Container ref={chatScrollRef}>
              {messages.map((msg, index) => {
                if (msg.sender === "date-line") return <Date_Separator key={msg.id}>{msg.text}</Date_Separator>;
                if (msg.sender === "me") return <My_Msg_Row key={msg.id}><My_Bubble>{msg.text}</My_Bubble></My_Msg_Row>;
                
                const isBottomMessage = index >= messages.length - 3;
                return <OtherMessageItem key={msg.id} msg={msg} isBottom={isBottomMessage} />;
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
        </Main_Layout_Wrapper>
      </Body>
    </>
  );
};
// 스타일드 컴포넌트 영역
const Body = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 75px;
  overflow: hidden;
`;

const Main_Layout_Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 75px);
`;

const Sidebar_Area = styled.div`
  width: 320px;
  height: 100%;
  background-color: #f7f9fa;
  border-right: 1px solid #eef1f2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Sidebar_Item = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 14px;
  cursor: pointer;
  border-bottom: 1px solid #eef1f2;
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
`;

const Room_Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  object-fit: cover;
`;

const Room_Info_Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Room_Title = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Room_Desc = styled.span`
  font-size: 13px;
  color: #888888;
`;

const Chat_Content_Area = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const Message_Scroll_Container = styled.div`
  flex: 1;
  padding: 30px 40px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f4f6f8;
`;

const Avatar_Hover_Container = styled.div`
  position: relative;
  display: inline-block;
  
  /* 마우스가 아바타 혹은 그 옆에 나타난 팝업 카드 내에 머물러 있을 때 상태를 유지 */
  &:hover > div {
    display: flex;
    opacity: 1;
    visibility: visible;
  }
`;

const Profile_Preview_Card = styled.div`
  position: absolute;
  /* 아바타 오른쪽 끝에서 살짝 겹치거나 딱 붙도록 처리하여 
    마우스가 이동할 때 빈 틈새로 인해 마우스 리브(Leave)가 발생하는 것을 완벽히 방지합니다.
  */
  left: 42px; 
  z-index: 999;
  width: 340px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid #eef0f2;
  display: none;
  opacity: 0;
  visibility: hidden;
  
  ${(props) =>
    props.isBottom
      ? `bottom: -10px; top: auto;`
      : `top: -10px; bottom: auto;`}
`;

const Preview_Content = styled.div`
  padding: 22px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: ${(props) => (props.isBottom ? "column-reverse" : "column")};
  gap: 16px;
`;

const User_Profile_Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const User_Left_Group = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Mini_Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  object-fit: cover;
`;

const User_Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Nickname = styled.strong`
  font-size: 16px;
  font-weight: 700;
  color: #111111;
`;

const User_Id = styled.span`
  font-size: 13px;
  color: #999999;
`;

const Follow_Btn = styled.button`
  background-color: #ba4a5a;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

const Intro_Text = styled.p`
  font-size: 14px;
  color: #222222;
  line-height: 1.45;
  margin: 0;
`;

const Follow_Count_Row = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #777777;
  .count {
    font-weight: 700;
    color: #ba4a5a;
    margin-left: 2px;
  }
`;

const Rating_Center_Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 5px 0;
`;

const Rating_Guide_Text = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #444444;
`;

const Star_Container = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
`;

const Star_Icon_Btn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  
  img {
    width: 28px;
    height: 28px;
  }
`;



const Rating_Toggle_Btn = styled.button`
  width: 100%;
  background-color: #ba4a5a;
  border: none;
  border-radius: 16px;
  padding: 12px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  span {
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
  }
`;

const Rating_Submit_Outlined_Btn = styled.button`
  width: 100%;
  background-color: #ffffff; 
  border: 1.5px solid #ba4a5a; 
  border-radius: 25px; 
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; 

  img {
    width: 20px; 
    height: 20px;
  }

  span {
    color: #ba4a5a; 
    font-size: 16px;
    font-weight: 700;
  }

  &:hover {
    background-color: #fff8f8;
  }
`;



const Other_Msg_Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  max-width: 65%;
  align-self: flex-start;
`;

const Other_Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`;

const Other_Msg_Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Other_Name = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #222222;
`;

const Other_Bubble = styled.div`
  background-color: #e5e8eb;
  color: #111111;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 0 16px 16px 16px;
`;

const My_Msg_Row = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 65%;
  align-self: flex-end;
`;

const My_Bubble = styled.div`
  background-color: #b05663;
  color: #ffffff;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 16px 0 16px 16px;
`;

const Date_Separator = styled.div`
  align-self: center;
  font-size: 13px;
  color: #888888;
  margin: 20px 0;
  background: rgba(0, 0, 0, 0.03);
  padding: 4px 14px;
  border-radius: 20px;
`;

const Input_Bar_Wrapper = styled.div`
  padding: 20px 40px;
  background-color: #f4f6f8;
  display: flex;
  position: relative;
  align-items: center;
`;

const Message_Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #e1e4e6;
  border-radius: 12px;
  padding: 0 90px 0 20px;
  font-size: 14px;
  outline: none;
`;

const Icon_Action_Group = styled.div`
  position: absolute;
  right: 55px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.6;
`;

export default ChatRoom;