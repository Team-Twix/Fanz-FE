import styled from "@emotion/styled";
import { keyframes } from "@emotion/react"; // 애니메이션 구현을 위해 추가
import BG1 from "../assets/BG-1.svg";
import BG2 from "../assets/BG-2.svg";
import BG3 from "../assets/BG-3.svg";

const SignUp = () => {
  return (
    <>
      <Body>
        {/* 왼쪽 움직이는 배경 섹션 */}
        <BG_Wrapper>
          <BG_1></BG_1>
          <BG_2></BG_2>
          <BG_3></BG_3>
          {/* 글씨를 감싸며, 배경을 0.5 불투명도로 덮는 레이어 */}
          <Front_ground>
            <Text_Box>
              나에게 <br />
              딱맞는 <br />
              덕질메이트
            </Text_Box>
          </Front_ground>
        </BG_Wrapper>

        {/* 오른쪽 회원가입 폼 섹션 */}
        <Left_side>
          <Box>
            <Left_title>FanZ</Left_title>
            <Left_text>회원가입</Left_text>
          </Box>
          <Input_box>
            <In_box>
              <Id>
                아이디<span>*</span>
              </Id>
              <Id_box>
                <Id_input placeholder="아이디를 입력해주세요" />
                <Same_btn>중복확인</Same_btn>
              </Id_box>
            </In_box>
            <In_box>
              <Pw>
                비밀번호<span>*</span>
              </Pw>
              <Id_input type="password" placeholder="비밀번호를 입력해주세요" />
            </In_box>
            <In_box>
              <Pw>
                비밀번호 확인<span>*</span>
              </Pw>
              <Id_input type="password" placeholder="비밀번호를 한 번 더 입력해주세요" />
            </In_box>
            <Auth_button>다음으로</Auth_button>
          </Input_box>
        </Left_side>
      </Body>
    </>
  );
};

// 무한 루프 배경 롤링 애니메이션 정의
const rollUp = keyframes`
  0% { background-position-y: 0; }
  100% { background-position-y: -1000px; } /* 이미지 높이에 맞게 자연스럽게 반복 */
`;

const rollDown = keyframes`
  0% { background-position-y: 0; }
  100% { background-position-y: 1000px; }
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

// 3개의 이미지가 나란히 정렬되도록 flex 분할 적용
const BG_Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 100%;
  display: flex; /* 이미지 3장을 가로로 나란히 배치 */
  overflow: hidden;
`;

const BG_1 = styled.div`
  flex: 1;
  height: 100%;
  background: url(${BG1}) repeat-y center/cover;
  animation: ${rollUp} 25s linear infinite; /* 위로 회전 */
`;

const BG_2 = styled.div`
  flex: 1;
  height: 100%;
  background: url(${BG2}) repeat-y center/cover;
  animation: ${rollDown} 25s linear infinite; /* 아래로 회전 */
`;

const BG_3 = styled.div`
  flex: 1;
  height: 100%;
  background: url(${BG3}) repeat-y center/cover;
  animation: ${rollUp} 25s linear infinite; /* 위로 회전 */
`;

// 배경 전체를 덮는 투명도 0.5의 어두운 오버레이 레이어
const Front_ground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 뒤가 비치도록 opacity 0.5 적용 */
  z-index: 4;
  display: flex;
  align-items: flex-end; /* 텍스트 하단 배치 */
  padding: 0 0 15% 50px;
  box-sizing: border-box;
`;

const Text_Box = styled.div`
  color: #ffffff;
  font-size: 75px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -1px;
`;

// 우측 입력 폼 섹션
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

const Input_box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  gap: 24px;
`;

const In_box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Id = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #333333;
  span {
    color: #ff4d4d;
    margin-left: 2px;
  }
`;

const Id_box = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  position: relative;
`;

const Id_input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1.5px solid #333333;
  padding: 8px 0px 8px 2px;
  font-size: 14px;
  outline: none;
  background: transparent;
  
  &::placeholder {
    color: #b3b3b3;
    font-size: 13px;
  }
`;

const Same_btn = styled.button`
  position: absolute;
  right: 0;
  bottom: 8px;
  background-color: #a34e62;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 10px;
  cursor: pointer;
`;

const Pw = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #333333;
  span {
    color: #ff4d4d;
    margin-left: 2px;
  }
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