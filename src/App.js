import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      {/* <Header /> */}
      
      <Routes>
        <Route path='/' element={<div>인덱스</div>}/>
        {/* 페이지 추가 영역 */}


        {/* 페이지 추가 영역 */}
        <Route path='*' element={<div>인덱스</div>}/>
      </Routes>
      
      {/* <Footer /> */}
    
    </div>
  );
}

export default App;
