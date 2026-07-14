import { useState } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";

const FollowList = () => {
  const [activeTab, setActiveTab] = useState("follower");

  // 1. 팔로워 샘플 데이터 (팔로워 탭 클릭 시 노출)
  const followerData = [
    { id: 1, name: "팔로워유저 1", tag: "@FOLLOWER_01", hashtags: ["#최애의아이", "#메무쵸"], followers: "120", followings: "340" },
    { id: 2, name: "팔로워유저 2", tag: "@FOLLOWER_02", hashtags: ["#루비", "#다이아"], followers: "450", followings: "12" },
    { id: 3, name: "팔로워유저 3", tag: "@FOLLOWER_03", hashtags: ["#메무쵸", "#다이아"], followers: "88", followings: "999" },
    { id: 4, name: "팔로워유저 4", tag: "@FOLLOWER_04", hashtags: ["#최애의아이"], followers: "210", followings: "150" },
  ];

  // 2. 팔로잉 샘플 데이터 (팔로잉 탭 클릭 시 노출)
  const followingData = [
    { id: 1, name: "유저이름", tag: "@USER000", hashtags: ["#최애의아이", "#메무쵸", "#루비", "#다이아"], followers: "999", followings: "999" },
    { id: 2, name: "유저이름", tag: "@USER000", hashtags: ["#최애의아이", "#메무쵸", "#루비", "#다이아"], followers: "999", followings: "999" },
    { id: 3, name: "유저이름", tag: "@USER000", hashtags: ["#최애의아이", "#메무쵸", "#루비", "#다이아"], followers: "999", followings: "999" },
    { id: 4, name: "유저이름", tag: "@USER000", hashtags: ["#최애의아이", "#메무쵸", "#루비", "#다이아"], followers: "999", followings: "999" },
    { id: 5, name: "유저이름", tag: "@USER000", hashtags: ["#최애의아이", "#메무쵸", "#루비", "#다이아"], followers: "999", followings: "999" },
    { id: 6, name: "유저이름", tag: "@USER000", hashtags: ["#최애의아이", "#메무쵸", "#루비", "#다이아"], followers: "999", followings: "999" },
  ];

  // 현재 활성화된 탭에 맞춰 화면에 뿌려줄 리스트 데이터 선별
  const currentList = activeTab === "follower" ? followerData : followingData;

  return (
    <>
      <Header currentPage="profile" />
      <Body>
        <Main_Container>
          
          {/* 상단 타이틀 영역 */}
          <Title_Header_Row>
            <Back_Arrow_Btn onClick={() => window.history.back()}>
              &lt;
            </Back_Arrow_Btn>
            <Header_Title_Text>
              {activeTab === "follower" ? "mem쵸의 팔로워 목록" : "mem쵸의 팔로잉 목록"}
            </Header_Title_Text>
          </Title_Header_Row>

          {/* 팔로워 / 팔로잉 탭 네비게이션 */}
          <Tab_Navigation_Bar>
            <Tab_Item_Btn 
              isActive={activeTab === "follower"} 
              onClick={() => setActiveTab("follower")}
            >
              팔로워
            </Tab_Item_Btn>
            <Tab_Item_Btn 
              isActive={activeTab === "following"} 
              onClick={() => setActiveTab("following")}
            >
              팔로잉
            </Tab_Item_Btn>
          </Tab_Navigation_Bar>

          {/* 선택된 탭에 따른 리스트 뷰 동적 출력 구역 */}
          <List_Scroll_View>
            {currentList.map((user) => (
              <User_List_Card key={user.id}>
                
                {/* 좌측 프로필 메타 그룹 */}
                <User_Profile_Meta>
                  <Gray_Circle_Avatar />
                  <User_Info_Block>
                    <User_Name_Row>
                      <User_Real_Name>{user.name}</User_Real_Name>
                      <User_Tag_Id>{user.tag}</User_Tag_Id>
                    </User_Name_Row>
                    
                    {/* 해시태그 목록 */}
                    <HashTags_Container>
                      {user.hashtags.map((hash, idx) => (
                        <HashTag_Badge key={idx}>{hash}</HashTag_Badge>
                      ))}
                    </HashTags_Container>
                  </User_Info_Block>
                </User_Profile_Meta>

                {/* 우측 팔로우 카운트 스펙 */}
                <Right_Follow_Stats>
                  팔로워 {user.followers} &nbsp; 팔로잉 {user.followings}
                </Right_Follow_Stats>

              </User_List_Card>
            ))}
          </List_Scroll_View>

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
  height: 100vh;
  box-sizing: border-box;
  padding-top: 75px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Main_Container = styled.div`
  width: 100%;
  max-width: 650px;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  padding: 40px 20px 0 20px;
  box-sizing: border-box;
`;

const Title_Header_Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 35px;
`;

const Back_Arrow_Btn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  font-weight: 400;
  color: #000000;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header_Title_Text = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #111111;
  margin: 0;
  letter-spacing: -0.5px;
`;

const Tab_Navigation_Bar = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1.5px solid #e1e4e6;
  margin-bottom: 10px;
`;

const Tab_Item_Btn = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s ease;
  
  /* activeTab 유무에 따라 글자 및 하단 보더 색상 매칭 */
  color: ${(props) => (props.isActive ? "#a34e62" : "#b3b3b3")};
  border-bottom: 2.5px solid ${(props) => (props.isActive ? "#a34e62" : "transparent")};
  margin-bottom: -1.5px;

  &:hover {
    color: #a34e62;
  }
`;

const List_Scroll_View = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb { background-color: #e1e4e6; border-radius: 4px; }
`;

const User_List_Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #f1f3f5;
`;

const User_Profile_Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Gray_Circle_Avatar = styled.div`
  width: 64px;
  height: 64px;
  background-color: #b3b3b3;
  border-radius: 50%;
  flex-shrink: 0;
`;

const User_Info_Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const User_Name_Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const User_Real_Name = styled.strong`
  font-size: 16px;
  font-weight: 700;
  color: #222222;
`;

const User_Tag_Id = styled.span`
  font-size: 12px;
  color: #999999;
  font-weight: 500;
`;

const HashTags_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const HashTag_Badge = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #a34e62;
`;

const Right_Follow_Stats = styled.div`
  font-size: 12px;
  color: #a6a6a6;
  font-weight: 500;
  white-space: nowrap;
`;

export default FollowList;