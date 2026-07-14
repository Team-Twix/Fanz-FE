import { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import BG1 from "../assets/BG-1.svg";
import BG2 from "../assets/BG-2.svg";
import BG3 from "../assets/BG-3.svg";

const SignUp = () => {
  // 연령대 선택 상태 관리 (기본값: '10대')
  const [selectedAge, setSelectedAge] = useState("10대");

  const ageGroups = ["10대", "20대", "30대", "40대", "50대", "60대", "70대", "전체"];

  return (
    <>
      <Body>
        <BG_Wrapper>
          <BG_1></BG_1>
          <BG_2></BG_2>
          <BG_3></BG_3>
          <Front_ground>
            <Text_Box>
              어디에서 <br />
              <span>팬즈</span>에서
            </Text_Box>
          </Front_ground>
        </BG_Wrapper>
        <Left_side>
          <Box>
            <Left_title>FanZ</Left_title>
            <Left_text>회원가입</Left_text>
          </Box>
          <Input_box>
            <In_box>
              <Id>
                별명<span>*</span>
              </Id>
              <Id_input placeholder="별명을 입력해주세요" />
            </In_box>
            <In_box>
              <Pw>
                한줄소개<span>*</span>
              </Pw>
              <Id_input placeholder="한줄소개를 입력해주세요" />
            </In_box>
            <In_box>
              <Pw>
                관심분야<span>*</span>
              </Pw>
              <Id_input placeholder="엔터를 눌러 해시태그 추가하기" />
            </In_box>

            {/* [신규 추가] 연령대 레이아웃 구역 */}
            <In_box>
              <Age_Label>
                연령<span>*</span>
              </Age_Label>
              <Age_Chips_Wrapper>
                {ageGroups.map((age) => (
                  <Age_Chip
                    key={age}
                    type="button"
                    isActive={selectedAge === age}
                    onClick={() => setSelectedAge(age)}
                  >
                    {age}
                  </Age_Chip>
                ))}
              </Age_Chips_Wrapper>
            </In_box>

            <Auth_button>다음으로</Auth_button>
          </Input_box>
        </Left_side>
      </Body>
    </>
  );
};

const rollUp = keyframes`
  0% { background-position-y: 0; }
  100% { background-position-y: -1000px; } 
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

const BG_Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const BG_1 = styled.div`
  flex: 1;
  height: 100%;
  background: url(${BG1}) repeat-y center/cover;
  animation: ${rollUp} 25s linear infinite;
`;

const BG_2 = styled.div`
  flex: 1;
  height: 100%;
  background: url(${BG2}) repeat-y center/cover;
  animation: ${rollDown} 25s linear infinite;
`;

const BG_3 = styled.div`
  flex: 1;
  height: 100%;
  background: url(${BG3}) repeat-y center/cover;
  animation: ${rollUp} 25s linear infinite;
`;

const Front_ground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  display: flex;
  align-items: flex-end;
  padding: 0 0 15% 50px;
  box-sizing: border-box;
`;

const Text_Box = styled.div`
  color: #ffffff;
  font-size: 75px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -1px;
  span {
    color: #ffe8ea;
  }
`;

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

const Pw = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #333333;
  span {
    color: #ff4d4d;
    margin-left: 2px;
  }
`;

/* ========================================================
   [신규 추가 스타일] 연령 항목 라벨 및 칩 그룹 컴포넌트 
   ======================================================== */
const Age_Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #333333;
  span {
    color: #ff4d4d;
    margin-left: 2px;
  }
`;

const Age_Chips_Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
  margin-top: 2px;
`;

const Age_Chip = styled.button`
  background: ${(props) => (props.isActive ? "#a34e62" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#b3b3b3")};
  border: 1px solid ${(props) => (props.isActive ? "#a34e62" : "#d9d9d9")};
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #a34e62;
    color: ${(props) => (props.isActive ? "#ffffff" : "#a34e62")};
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