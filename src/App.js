import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      
      {/* <Header /> */}
      
      <Routes>
        <Route path='/' element={<div>인덱스</div>}/>
        {/* 페이지 추가 영역 */}
        <Route path='/signup' element={<Signup/>} />
        {/* 페이지 추가 영역 */}
        <Route path='*' element={<div>인덱스</div>}/>
      </Routes>
      
      {/* <Footer /> */}
    
    </div>
  );
}

export default App;
