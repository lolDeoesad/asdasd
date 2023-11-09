import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import '../styles/AccountTransfer.css';
import { useParams } from "react-router-dom";

function AccountTransfer() {
  const {id} = useParams();
  const [AccountTransfer, setAccountTransfer] = useState();

  useEffect(() => {
    axiosInstance.get(`/account/${id}`)
    .then(response => {
      console.log(response.data.transactionList);
      setAccountTransfer(response.data.transactionList);
    }).catch(error => {
      console.log(error);
    })
  },[])


  return (
    <div className="transfer">
      <h3>계좌조회</h3>
      <table>
        <thead>
          <tr>
            <th>거래번호</th>
            <th>거래종류</th>
            <th>금액</th>
            <th>거래시각</th>
          </tr>
        </thead>
        <tbody>
          {
            AccountTransfer && AccountTransfer.map((transactionList, i) => {
              return (
                <tr key={i}>
                  <td>{transactionList.id}</td>
                  <td>{transactionList.type}</td>
                  <td>{transactionList.money}</td>
                  <td>{transactionList.time}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AccountTransfer;