import axios from "axios";

import { useEffect, useState } from "react";

function Approval () {

  const [notUserInfo, setNotUserInfo] = useState([]); // 서버에서 받아온 notUser 정보들 담을 스테이트   왜 초기형태가 비어있지않고 배열로 만들었을까?
  const [checkValue, setCheckValue] = useState([]);  // 체크된 값들 담아줄 스테이트 

  useEffect(() => {    
    axios.get(`${process.env.REACT_APP_SERVER_URL}/approval`)
    .then(response => {
    setNotUserInfo(response.data);   
    console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  const handleAllCheck = (checked) => {
    if(checked) {
      const idArray = [];
      notUserInfo.forEach((el) => idArray.push(el));
      setCheckValue(idArray);
    }
    else {
      setCheckValue([]);
    }
  }

  const handleSingleCheck = (checked, info) => {    // 체크박스 단일선택 함수 
    if (checked) {
      setCheckValue(copy => [...copy, info]);
    } else {
      setCheckValue(checkValue.filter((el) => el !== info));
    }
  };
  console.log(notUserInfo);
  console.log(checkValue);
  return(
    <div>
      <h1>권한설정 페이지</h1>
      <div>전체선택 버튼
        <input type='checkbox' onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkValue.length === notUserInfo.length ? true : false} 
        />        
      </div>
       <br/>
      {
      notUserInfo && notUserInfo.map((info, i) => {
          return(
              <div key={i}> 
                <div>번호 {info.id}</div>
                아이디 : {" " + info.username}<input type="checkbox" value={info} onChange={(e) => {
                  handleSingleCheck(e.target.checked, info)
                }} checked={checkValue.includes(info) ? true : false} />
                <div>이름 :{" " + info.fname}</div>
                <div>주민번호 :{" " + info.idNo}</div>
                <div>휴대폰번호 :{" " + info.phone}</div>
                <div>국적 :{" " + info.country}</div>
                <div>자택주소 :{" " + info.address}</div>
                <div>상세주소 :{" " + info.addressDetail}</div>
                <div>직장명 :{" " + info.jobname}</div>
                <div>부서명 :{" " + info.teamname}</div>
                <div>직장주소 :{" " + info.jobAddress}</div>
                <div>상세주소 :{" " + info.jobAddressDetail}</div>
                <div>직장연락처 :{" " + info.jobPhone}</div>
                <br/>
              </div>

          );
        })
      }
      <button onClick={() => {
        if(checkValue.length === 0){
          alert('회원을 한명도 선택하지 않았습니다');
        } else{
          axios.post(`${process.env.REACT_APP_SERVER_URL}/approval`,checkValue)
          .then(response => {
            console.log(response.data);
          }).catch(error => {
            console.log(error);
          })
        }
      }}>권한변경</button>
    </div>
  )
};

export default Approval;