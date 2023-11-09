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
    // axiosInstance.get('/account')
    // // axios.get(`${process.env.REACT_APP_SERVER_URL}/account`)
    //   .then(response => {
    //     console.log(response.data);
    //     setAccountList(response.data);
    //   }).catch(error => {
    //     console.log(error);
    //   })

      axiosInstance.get('/userInfo')
        .then(response => {
          console.log(response.data.accountList);
          setAccountList(response.data.accountList);
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
            AccountList && AccountList.map((accountList, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Nav.Link onClick={() => {navigate(`/transfer/${accountList.id}`)}}>
                      {accountList.id}
                    </Nav.Link>
                  </td>
                  <td>{accountList.userid}</td>
                  <td>{accountList.balance}</td>
                  <td><Button variant="success" className="close" onClick={() => {
                    if(window.confirm("정말로 해지하시겠습니까?")) {
                      if(accountList.balance === 0) {
                        axiosInstance.delete('/account', {params : {'id':accountList.id}})
                          .then(response => { 
                            alert(response.data);
                            window.location.replace("/account");
                          }).catch(error => {
                            console.log(error);
                          })
                      } else {
                        alert('잔액이 남아있어 해지를 할 수 없습니다.');
                      }
                    } else {
                      alert("해지를 취소하셨습니다.");
                    }
                  }}>계좌해지</Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table> <br/>
      <Button variant="success" onClick={() => {navigate('/open')}}>계좌개설신청</Button>
    </div>
  )


}

export default AccountList;