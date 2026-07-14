import { useState } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";

const GroupChatCreate = () => {
  const [selectedAge, setSelectedAge] = useState("10대");
  const [selectedGender, setSelectedGender] = useState("전체");

  const ageGroups = ["10대", "20대", "30대", "40대", "50대", "60대", "70대", "전체"];
  const genders = ["여성", "남성", "전체"];

  return (
    <>
      <Header currentPage="groupchat" />
      <Body>
        <Main_Container>
          <Page_Title>단체 채팅 방 생성하기</Page_Title>

          <Content_Row_Wrapper>
            
            {/* 좌측: 정보 입력 구역 */}
            <Left_Form_Section>
              
              {/* 정보 입력 카드 */}
              <Form_Card_Box>
                <Card_Title>정보 입력</Card_Title>
                
                <Input_Wrapper>
                  <Input_Label>채팅방 이름<span>*</span></Input_Label>
                  <Underline_Input placeholder="채팅방 이름을 입력해주세요!" />
                </Input_Wrapper>

                <Input_Wrapper>
                  <Input_Label>한 줄 소개<span>*</span></Input_Label>
                  <Underline_Input placeholder="채팅방 한 줄 소개를 입력해주세요!" />
                </Input_Wrapper>

                <Input_Wrapper>
                  <Input_Label>소갯말</Input_Label>
                  <TextArea_Box placeholder="채팅방 소갯말을 입력해주세요!" />
                </Input_Wrapper>

                <Input_Wrapper style={{ marginBottom: 0 }}>
                  <Input_Label>해시태그<span>*</span></Input_Label>
                  <Underline_Input placeholder="엔터를 눌러 해시태그 추가하기" />
                </Input_Wrapper>
              </Form_Card_Box>

              {/* 가입조건 카드 */}
              <Form_Card_Box>
                <Card_Title>가입조건</Card_Title>

                <Condition_Wrapper>
                  <Input_Label>연령<span>*</span></Input_Label>
                  <Badge_Group>
                    {ageGroups.map((age) => (
                      <Badge_Item 
                        key={age} 
                        isSelected={selectedAge === age}
                        onClick={() => setSelectedAge(age)}
                      >
                        {age}
                      </Badge_Item>
                    ))}
                  </Badge_Group>
                </Condition_Wrapper>

                <Condition_Wrapper>
                  <Input_Label>성별<span>*</span></Input_Label>
                  <Badge_Group>
                    {genders.map((gender) => (
                      <Badge_Item 
                        key={gender} 
                        isSelected={selectedGender === gender}
                        onClick={() => setSelectedGender(gender)}
                      >
                        {gender}
                      </Badge_Item>
                    ))}
                  </Badge_Group>
                </Condition_Wrapper>

                <Input_Wrapper style={{ marginBottom: 0 }}>
                  <Input_Label>추가 조건</Input_Label>
                  <Underline_Input placeholder="엔터를 눌러 가입조건 추가하기" />
                </Input_Wrapper>
              </Form_Card_Box>

            </Left_Form_Section>

            {/* 우측: 사진 등록 구역 */}
            <Right_Photo_Section>
              <Photo_Upload_Card>
                <Card_Title style={{ marginBottom: 4 }}>사진등록</Card_Title>
                <Photo_Sub_Text>단체방의 사진 등록하기</Photo_Sub_Text>
                
                <Upload_Click_Zone>
                  {/* 시안의 기본 이미지 플레이스홀더 아이콘 형상화 */}
                  <Image_Icon_Placeholder>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cccccc" strokeWidth="1.2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </Image_Icon_Placeholder>
                  <Upload_Label_Text>사진 등록</Upload_Label_Text>
                </Upload_Click_Zone>
              </Photo_Upload_Card>
            </Right_Photo_Section>

          </Content_Row_Wrapper>

          {/* 최하단 생성 버튼 */}
          <Submit_Btn_Container>
            <Create_Submit_Btn>생성</Create_Submit_Btn>
          </Submit_Btn_Container>

        </Main_Container>
      </Body>
    </>
  );
};

// ========================================================
// 스타일 정의 구역
// ========================================================

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 75px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const Main_Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const Page_Title = styled.h2`
  text-align: center;
  font-size: 26px;
  font-weight: 800;
  color: #000000;
  margin: 0 0 40px 0;
  letter-spacing: -0.5px;
`;

const Content_Row_Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Left_Form_Section = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const Form_Card_Box = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  border: 1px solid #f1f3f5;
`;

const Card_Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #222222;
  margin: 0 0 24px 0;
`;

const Input_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const Input_Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #333333;
  span {
    color: #ff4d4d;
    margin-left: 2px;
  }
`;

const Underline_Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1.5px solid #444444;
  padding: 8px 0px 8px 2px;
  font-size: 13px;
  outline: none;
  background: transparent;
  color: #222222;
  
  &::placeholder {
    color: #b3b3b3;
    font-size: 12px;
  }
`;

const TextArea_Box = styled.textarea`
  width: 100%;
  height: 180px;
  border: none;
  background-color: #f5f6f7;
  border-radius: 6px;
  padding: 14px;
  font-size: 13px;
  outline: none;
  resize: none;
  box-sizing: border-box;
  color: #222222;

  &::placeholder {
    color: #b3b3b3;
  }
`;

const Condition_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`;

const Badge_Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge_Item = styled.div`
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${(props) => (props.isSelected ? "#a34e62" : "#e1e4e6")};
  background-color: ${(props) => (props.isSelected ? "#a34e62" : "#ffffff")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#999999")};
  transition: all 0.15s ease;

  &:hover {
    border-color: #a34e62;
    color: ${(props) => (props.isSelected ? "#ffffff" : "#a34e62")};
  }
`;

const Right_Photo_Section = styled.div`
  flex: 0.9;
  width: 100%;
`;

const Photo_Upload_Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  border: 1px solid #f1f3f5;
  display: flex;
  flex-direction: column;
`;

const Photo_Sub_Text = styled.span`
  font-size: 11px;
  color: #999999;
  margin-bottom: 16px;
`;

const Upload_Click_Zone = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1; /* 정사각형 비율 유지 */
  background-color: #f5f6f7;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  border: 1px dashed #e1e4e6;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #ededf0;
  }
`;

const Image_Icon_Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Upload_Label_Text = styled.span`
  font-size: 14px;
  color: #a6a6a6;
  font-weight: 600;
`;

const Submit_Btn_Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
`;

const Create_Submit_Btn = styled.button`
  width: 100%;
  max-width: 320px;
  background-color: #a34e62;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(163, 78, 98, 0.15);
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #8c3f52;
  }
`;

export default GroupChatCreate;