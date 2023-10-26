import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UpdatePage from './pages/UpdatePage';
import MyPage from './pages/MyPage';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">

      {/* <Header /> */}
          <Link to={'/signup'}>회원가입 </Link>
          <Link to={'/login'}>로그인 </Link>
          <Link to={'/update'}>정보수정 </Link>
          <Link to={'/mypage'}>마이페이지 </Link>
      <Routes>
        <Route path='/' element={<div>인덱스</div>} />
        {/* 페이지 추가 영역 */}
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/update' element={<UpdatePage />} />
        <Route path='/mypage' element={<MyPage />} />
          




        <Route path='*' element={<div>인덱스</div>} />
      </Routes>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
