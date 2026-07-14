import { Route, Routes } from 'react-router-dom'
import Main from './Pages/Main'
import SignUp from './Pages/Signup'
import SignUp2 from './Pages/Signup2'
import SignUp3 from './Pages/Signup3'
import GroupChat_list from './Pages/Groupchat_list'
import GroupChatDetail from './Pages/Groupchat_Detail'
import MyProfileDetail from './Pages/Mypage_profile'
import ChatRoom from './Pages/Chatting'
import GroupChat from './Pages/Groupchat'
import FollowList from './Pages/Follow_list'
import Login from './Pages/Login'
import GroupChatCreate from './Pages/Groupchat_Create'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signup/step2' element={<SignUp2 />} />
      <Route path='/signup/step3' element={<SignUp3 />} />
      <Route path='/main' element={<Main />} />
      <Route path='/profile' element={<MyProfileDetail />} />
      <Route path='/profile/follow' element={<FollowList />} />
      <Route path='/chat/group/list' element={<GroupChat_list />} />
      <Route path='/chat/group/detail' element={<GroupChatDetail />} />
      <Route path='/chat/group' element={<GroupChat />} />
      <Route path='/chat/room' element={<ChatRoom />} />
      <Route path='/chat/group/create' element={<GroupChatCreate/>}/>
    </Routes>
  )
}

export default App