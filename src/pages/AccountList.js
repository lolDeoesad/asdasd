import { Container, Row } from "react-bootstrap";
import AccountListCard from "../components/AccountListCard";
import AccountOpenCard from "../components/AccountOpenCard";
import { useState } from "react";

function AccountList({userInfo, setUpdate, accountInfo, setAccountInfo}) {
  const accountList = userInfo.accountList;
  const [showOpenAccountOnly, setShowOpenAccountOnly] = useState(true);

  return (
    <div className="AccountList mainBorder p-5">
      <h2 className='my-2 fontColor1'>계좌목록</h2>
      <hr style={{width:'100%'}}/>
      <div className="text-start">
      <input id="showOpenAccountOnly" className="me-2" type="checkbox" onClick={()=>setShowOpenAccountOnly(!showOpenAccountOnly)} checked={!showOpenAccountOnly}/>
      <label for="showOpenAccountOnly">해지계좌 포함 조회</label>
      </div>
      <Container>
        <Row>
          <AccountOpenCard/>
          {
            accountList && 
            accountList.map((account, idx) => <AccountListCard account={account} setUpdate={setUpdate} accountInfo={accountInfo} setAccountInfo={setAccountInfo} showOpenAccountOnly={showOpenAccountOnly} key={account.id}/>)
          }
        </Row>
      </Container>
    </div>
  )
}
export default AccountList;