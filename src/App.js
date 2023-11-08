import './App.css';
import AccountList from './pages/AccountList';
import AccountSearch from './pages/AccountSearch';
import AccountOpen from './pages/AccountOpen';
import Signup from './pages/Signup';
import { useEffect, useState } from 'react';
import axiosInstance from './utils/axiosInstance';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Update from './pages/Update';
import MyPage from './pages/MyPage';
import Header from './components/Header';
// import JoinAgree from './pages/JoinAgree';
import Footer from './components/Footer';
import axios from 'axios';
import Approval from './pages/Approval';
import Qna from './pages/Qna';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username : ''
  });
  
  useEffect(()=>{
    // setIsLoading(false);
    if(isAuth) {
      axiosInstance.get('/userInfo')
      .then(response => {setUserInfo(response.data);})
                  .catch(error => console.log(error));
      // console.log(userInfo);
      // console.log(userInfo.username);
    }
  }, [isAuth])
  
  return (
    <div className="App">
      {/* {
        isAuth && <h1>{userInfo.username}님 환영합니다.</h1>
      } */}
      <Header />
      {
        isAuth && <h1>{userInfo.username}님 환영합니다.</h1>
      }
      {/* <Link to={'/agree'}>회원가입 </Link> */}
      <Link to={'/signup'}>회원가입 </Link>
      <Link to={'/login'}>로그인 </Link>
      <Link to={'/update'}>정보수정 </Link>
      <Link to={'/mypage'}>마이페이지 </Link>
      <Link to={'/account'}>계좌 </Link>
      <Link to={'/approval'}>권한수정 </Link>

      <Routes>
        <Route path='/' element={<div>인덱스</div>} />
        {/* 페이지 추가 영역 */}
        <Route path='/login' element={<Login isAuth={isAuth} setAuth={setAuth} userInfo={userInfo} setUserInfo={setUserInfo}/>} />
        <Route path='/account' element={<AccountList />}/>
        <Route path='/search' element={<AccountSearch />}/>
        <Route path='/open' element={<AccountOpen />}/>
        {/* <Route path='/agree' element={<SignupAgree/>} /> */}
        <Route path='/qna' element={<Qna/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/update' element={<Update />} />
        <Route path='/mypage' element={<MyPage />} />
        
        <Route path='/approval' element={userInfo.role=="ADMIN" ? <Approval/> : <div>인덱스</div>} />
        <Route path='*' element={<div>인덱스</div>} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
