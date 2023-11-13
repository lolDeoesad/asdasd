import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axiosInstance from './utils/axiosInstance';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import AccountList from './pages/AccountList';
import AccountOpen from './pages/AccountOpen';
import AccountSearch from './pages/AccountSearch';
import AccountTransfer from './pages/AccountTransfer';
import Approval from './pages/Approval';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Update from './pages/Update';
import MyPage from './pages/MyPage';
import CustomerService from './pages/CustomerService';
import Qna from './pages/Qna';
import About from './pages/About';
import Security from './pages/Security';
import Event from './pages/Event';
import ErrorPage from './pages/ErrorPage';
import Finance from './pages/Finance';
import Invalid from './pages/Invalid';
import Exchange from './pages/Exchange';
import FindIdPw from './pages/FindIdPw';
import Bill from './pages/Bill';
import PleaseWait from './pages/PleaseWait';
import PlaySudoku from './pages/PlaySudoku';
import UserUpdate from './pages/UserUpdate';

function App() {
  const [isAuth, setAuth] = useState(sessionStorage.getItem('jwt'));
  const [isUpdate, setUpdate] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username : ''
  });
  
  useEffect(() => {
    if(isAuth && !isUpdate) {
      axiosInstance.get('/user')
        .then(response => {setUserInfo(response.data); setUpdate(true);})
        .catch(error => setAuth(false));
    }
  }, [isAuth, isUpdate])
  
  return (
    <div className="App">
      
      <Header isAuth={isAuth} setAuth={setAuth} setUserInfo={setUserInfo}/>
      <div className='main d-flex flex-column justify-content-center align-items-center'>
        
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login setAuth={setAuth}/>}/>
          <Route path='/user/signup' element={<Signup/>}/>
          <Route path='/user/update' element={<UserUpdate userInfo={userInfo}/>}/>
          <Route path='/user/findIdPw' element={<FindIdPw/>}/>

          <Route path='/user/mypage' element={isAuth? <MyPage userInfo={userInfo}/> : <Invalid/>}/>
          <Route path='/user/approval' element={userInfo.role==="ADMIN" ? <Approval/> : <Invalid/>}/>
          <Route path='/account' element={isAuth? <AccountList userInfo={userInfo}/> : <Invalid/>}/>
          <Route path='/account/detail' element={isAuth? <AccountSearch/> : <Invalid/>}/>
          <Route path='/account/open' element={isAuth? <AccountOpen setUpdate={setUpdate}/> : <Invalid/>}/>
          <Route path='/transaction/:id' element={isAuth? <AccountTransfer userInfo={userInfo}/> : <Invalid/>}/>
          <Route path='/transaction' element={isAuth? <AccountList/> : <Invalid/>}/>

          <Route path='/qna' element={<Qna userInfo={userInfo}/>}/>
          <Route path='/exchange' element={<Exchange/>}/>
          <Route path='/finance' element={<Finance/>}/>
          <Route path='/bill' element={<Bill/>}/>
          <Route path='/customer' element={<CustomerService/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/security' element={<Security/>}/>
          <Route path='/event' element={<Event/>}/>
          <Route path='/sudoku' element={<PlaySudoku />}/>
          
          <Route path='/wait' element={<PleaseWait/>}/>
          <Route path='/invalid' element={<Invalid/>}/>
          <Route path='/error' element={<ErrorPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        

      </div>
        <Link to={'/user/signup'}>회원가입 </Link>
      <Link to={'/login'}>로그인 </Link>
      <Link to={'/user/update'}>정보수정 </Link>
      <Link to={'/user/mypage'}>마이페이지 </Link>
      <Link to={'/account'}>계좌 </Link>
      <Link to={'/customer'}>고객센터 </Link>
      <Link to={'/qna'}>자주묻는질문 </Link>
      <Link to={'/about'}>영업점 </Link>
      <Link to={'/secu'}>보안센터 </Link>
      <Link to={'/event'}>이벤트 </Link>
      <Link to={'/error'}>404페이지 </Link>
      <Link to={'/goods'}>금융상품 </Link>
      <Link to={'/bill'}>공과금 </Link>
      <Footer/>

    </div>
  );
}

export default App;