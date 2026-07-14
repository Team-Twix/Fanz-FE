import styled from "@emotion/styled";
import Chat from "../assets/ci_chat.svg";
import D_mate from "../assets/Deok-mate.svg";
import Friends from "../assets/Friends.svg";

const Header = ({ currentPage = "" }) => {
  const name = "박서진유건우";

  return (
    <>
      <Body>
        FanZ
        <Box>
          <D_mate_box>
            <img src={D_mate} alt="" />
            <D_text isActive={currentPage === "mate"}>덕메 구인</D_text>
          </D_mate_box>

          <D_chat_box>
            <img src={D_mate} alt="" />
            <D_text isActive={currentPage === "groupChat"}>단체 채팅</D_text>
          </D_chat_box>

          <Chat_box>
            <img src={Chat} alt="" />
            <D_text isActive={currentPage === "chat"}>채팅</D_text>
          </Chat_box>

          <Friends_box>
            <img src={Friends} alt="" />
            <D_text isActive={currentPage === "friends"}>친구</D_text>
          </Friends_box>

          <NickName isActive={currentPage === "profile"}>{name} 님</NickName>
        </Box>
      </Body>
    </>
  );
};

const Body = styled.div`
  /* [핵심 수정] 배너 이미지 위에 겹치도록 절대 위치 설정 */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999; /* 무조건 최상단에 배치 */

  width: 100%;
  height: 75px;

  /* 배경을 더 투명하게 낮추고 블러 처리를 강하게 줘서 비치는 효과 극대화 */
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  padding: 26px 87px 13px 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  /* 흰 글씨나 밝은 배경에서도 잘 보이도록 기본 로고/텍스트 컬러 살짝 조정 */
  color: #ba4a5a;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Box = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const D_text = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  color: ${(props) => (props.isActive ? "#ba4a5a" : "#000000")};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition:
    color 0.2s ease,
    font-weight 0.2s ease;
`;

const D_mate_box = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  img {
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
  }
`;

const D_chat_box = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  img {
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
  }
`;

const Chat_box = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  img {
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
  }
`;

const Friends_box = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  img {
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
  }
`;

const NickName = styled.p`
  color: ${(props) => (props.isActive ? "#ba4a5a" : "#000000")};
  font-family: Preahvihear;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  margin-left: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export default Header;
