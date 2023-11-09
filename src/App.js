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
import Main from './pages/Main';
import CustomerService from './pages/CustomerService';
import Qna from './pages/Qna';
import About from './pages/About';
import Secu from './pages/Secu';
import Event from './pages/Event';
import AccountTransfer from './pages/AccountTransfer';

function App() {
  const [isAuth, setAuth] = useState(sessionStorage.getItem('jwt'));
  const [userInfo, setUserInfo] = useState({
    username : ''
  });
  
  useEffect(()=>{
    // setIsLoading(false);
    if(isAuth) {
      axiosInstance.get('/userInfo')
      // axios.get(`${process.env.REACT_APP_SERVER_URL}/userInfo`)
                  .then(response => {setUserInfo(response.data);})
                  .catch(error => console.log(error));
      // console.log(userInfo);
      // console.log(userInfo.username);
    }
  }, [isAuth]) 

  return (
    <div className="App">
      
      <Header isAuth={isAuth} setAuth={setAuth} userInfo={userInfo} setUserInfo={setUserInfo}/>
      {/* {
        isAuth && <h1>{userInfo.username}님 환영합니다.</h1>
      } */}
      {/* <Link to={'/agree'}>회원가입 </Link> */}

      <Routes>
        <Route path='/main' element={<Main />} />
        {/* 페이지 추가 영역 */}
        <Route path='/login' element={<Login isAuth={isAuth} setAuth={setAuth} userInfo={userInfo} setUserInfo={setUserInfo}/>} />
        <Route path='/account' element={<AccountList />}/>
        <Route path='/search' element={<AccountSearch />}/>
        <Route path='/open' element={<AccountOpen />}/>
        <Route path='/customer' element={<CustomerService />}/>
        {/* <Route path='/agree' element={<SignupAgree/>} /> */}
        <Route path='/signup' element={<Signup/>} />
        <Route path='/update' element={<Update userInfo={userInfo} />} />
        <Route path='/mypage' element={<MyPage userInfo={userInfo}/>} />
        <Route path='/qna' element={<Qna userInfo={userInfo}/>} />
        <Route path='/about' element={<About userInfo={userInfo} />} />
        <Route path='/secu' element={<Secu userInfo={userInfo} />} />
        <Route path='/event' element={<Event userInfo={userInfo} />} />
        <Route path='/transfer/:id' element={<AccountTransfer userInfo={userInfo} />} />
        {/* <Route path='/about/:id' element={<About Latitude = {}, Longitude = {}/>} /> */}

        <Route path='*' element={<Main />} />
      </Routes>
      <Link to={'/signup'}>회원가입 </Link>
      <Link to={'/login'}>로그인 </Link>
      <Link to={'/update'}>정보수정 </Link>
      <Link to={'/mypage'}>마이페이지 </Link>
      <Link to={'/account'}>계좌 </Link>
      <Link to={'/customer'}>고객센터 </Link>
      <Link to={'/qna'}>자주묻는질문 </Link>
      <Link to={'/about'}>영업점 </Link>
      <Link to={'/secu'}>보안센터 </Link>
      <Link to={'/event'}>이벤트 </Link>

      <Footer />

    </div>
  );
}

export default App;
