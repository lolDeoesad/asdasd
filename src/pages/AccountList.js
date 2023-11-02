import { Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../styles/AccountList.css';
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import axios from "axios";

function AccountList() {
  // const {id} = useParams();
  const [AccountList, setAccountList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get('/account')
    // axios.get(`${process.env.REACT_APP_SERVER_URL}/account`)
      .then(response => {
        console.log(response.data);
        setAccountList(response.data);
      }).catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="account">
      <h3>계좌목록</h3>
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
                    <Nav.Link onClick={() => {navigate('/search')}}>
                      {account.id}
                    </Nav.Link>
                  </td>
                  <td>{account.userid}</td>
                  <td>{account.balance}</td>
                  <Button className="close" onClick={() => {
                    if(account.balance === 0) {
                      axiosInstance.delete('/account', {params : {'id':account.id}})
                        .then(response => { 
                          alert(response.data);
                          navigate('/account');
                        }).catch(error => {
                          console.log(error);
                        })
                    } else {
                      alert('잔액이 남아있어 해지를 할 수 없습니다.');
                    }
                  
                  }} style={{background : '#137d34'}}>계좌해지</Button>
                </tr>
              )
            })
          }
        </tbody>
      </table> <br/>
      <Button onClick={() => {navigate('/open')}} style={{background : '#137d34'}}>계좌개설신청</Button>
    </div>
  )


}

export default AccountList;