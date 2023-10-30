import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
function Login({setAuth}) {

  const [userInfo, setUserInfo] = useState({
    username : '',
    fname : '',
    password : '',
    idNo : '',
    email : '',
    phone : '',
    country : '',
    address : '',
    job : '',
    agree : ''
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name] : e.target.value
    })
  }

  return(
    <div className="Login">
      <p>여기에 로고 들어갈거임</p>
      <div  className="Login-container">
      
        <input type="text" name="username" placeholder="아이디" onChange={changeHandler}/>
        <br/>

        <input type="password" name="password" placeholder="비밀번호" onChange={changeHandler}/>
        <br/>
    <button onClick={() => {
      axiosInstance.post(`${process.env.REACT_APP_SERVER_URL}/user`, userInfo)
      .then(response => {
        alert(response.data);
        setAuth(true);
        navigate('/');
      }).catch(error => {
        console.log(error);
      })
    }}>로그인</button>
      </div>
    </div>

  );
}

export default Login;
