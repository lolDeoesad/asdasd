import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../styles/AccountList.css';
import { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";

function AccountList() {
  // const [AccountList, setAccountList] = useState();
  const navigate = useNavigate();

  // useEffect(() => {
  //   axiosInstance.get('/account')
  //     .then(response => {
  //       console.log(response.data);
  //       setAccountList(response.data);
  //     }).catch(error => {
  //       console.log(error);
  //     })
  // }, [])

  return (
    <div className="account">
      <h1>계좌목록페이지</h1>
      {/* <table>
        <thead>
          <tr>
            <th>계좌번호</th>
            <th>회원번호</th>
            <th>잔액</th>
          </tr>
        </thead>
        <tbody>
          {
            AccountList.map((account, i) => {
              return (
                <tr key={i}>
                  <td>{account.id}</td>
                  <td>{account.balance}</td>
                  <td>{account.userid}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table> */}
      <Nav.Link onClick={() => {navigate('/search')}} style={{color: 'black'}}>단일계좌조회</Nav.Link>
      <Nav.Link onClick={() => {navigate('/open')}} style={{color: 'black'}}>계좌개설신청</Nav.Link>
    </div>
  )


}

export default AccountList;