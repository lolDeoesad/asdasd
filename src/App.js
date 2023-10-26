import './App.css';
import { Route, Routes } from 'react-router-dom';
import AccountList from './pages/AccountList';
import AccountSearch from './pages/AccountSearch';
import AccountOpen from './pages/AccountOpen';

function App() {
  return (
    <div className="App">
      
      {/* <Header /> */}
      <a href='/account'>계좌</a>
      <Routes>
        <Route path='/' element={<div>인덱스</div>}/>
        {/* 페이지 추가 영역 */}
        <Route path='/account' element={<AccountList />}/>
        <Route path='/search' element={<AccountSearch />}/>
        <Route path='/open' element={<AccountOpen />}/>
        {/* 페이지 추가 영역 */}
        <Route path='*' element={<div>인덱스</div>}/>
      </Routes>

      {/* <Footer /> */}
    
    </div>
  );
}

export default App;
