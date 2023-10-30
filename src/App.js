import './App.css';
import { Route, Routes } from 'react-router-dom';
import AccountList from './pages/AccountList';
import AccountSearch from './pages/AccountSearch';
import AccountOpen from './pages/AccountOpen';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import axiosInstance from './utils/axiosInstance';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username : ''
  });
  
  useEffect(()=>{
    // setIsLoading(false);
    if(isAuth) {
      axiosInstance.get('/userInfo')
                  .then(response => {console.log(response.data);})
                  .catch(error => console.log(error));
      // console.log(userInfo);
      // console.log(userInfo.username);
    }
  }, [isAuth])

  return (
    <div className="App">
      {
        isAuth && <h1>{userInfo.username}님 환영합니다.</h1>
      }
      {/* <Header /> */}
      <a href='/account'>계좌</a>
      <Routes>
        <Route path='/' element={<div>인덱스</div>}/>
        {/* 페이지 추가 영역 */}
        <Route path='/login' element={<Login setAuth={setAuth}/>} />
        <Route path='/account' element={<AccountList />}/>
        <Route path='/search' element={<AccountSearch />}/>
        <Route path='/open' element={<AccountOpen />}/>
        <Route path='/signup' element={<Signup/>} />
        {/* 페이지 추가 영역 */}
        <Route path='*' element={<div>인덱스</div>}/>
      </Routes>

      {/* <Footer /> */}
    
    </div>
  );
}

export default App;
