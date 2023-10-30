import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../styles/AccountList.css';
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

function AccountList() {
  const {id} = useParams();
  const [AccountList, setAccountList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get('/account')
      .then(response => {
        console.log(response.data);
        setAccountList(response.data);
      }).catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="account">
      <h1>계좌목록페이지</h1>
      <table>
        <thead>
          <tr>
            <th>계좌번호</th>
            <th>회원번호</th>
            <th>잔액</th>
          </tr>
        </thead>
        <tbody>
          {
           AccountList && AccountList.map((account, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Link to={'/search'}>
                      {account.id}
                    </Link>
                  </td>
                  <td>{account.balance}</td>
                  <td>{account.userid}</td>
                  {/* <Button onClick={() => {
                    axiosInstance.delete('/account', {params : {'id':account.id}})
                    .then(response => { 
                      alert(response.data);
                      navigate('/account');
                    }).catch(error => {
                      console.log(error);
                    })
                  }}>계좌해지</Button> */}
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <Button onClick={() => {navigate('/open')}}>계좌개설신청</Button>
    </div>
  )


}

export default AccountList;