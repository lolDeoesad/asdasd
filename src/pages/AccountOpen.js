import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import '../styles/AccountOpen.css';
import Accordion from 'react-bootstrap/Accordion';
import axiosInstance from "../utils/axiosInstance";

function AccountOpen({setUpdate}) {

  const navigate = useNavigate();

  return (
    <div className="AccountOpen borderColor1 p-5"> {/*  */}
      <h2 className='my-2 fontColor1'>계좌개설</h2>
      <hr style={{width:'100%'}}/>
    <div className="open">
      <div className="main">
        <h3></h3>
        <div className="content">
          <div>
            <h5>어떤 용도로 통장을 사용하실 건가요?</h5>

              <div className="d-flex justify-content-center">              
                <Form.Select style={{width : '300px'}} placeholder="계좌사용용도">
                  <option>급여 및 아르바이트</option>
                  <option>생활비 관리</option>
                  <option>적금 자동이체</option>
                  <option>예금가입</option>
                  <option>대출신청</option>
                </Form.Select>
              </div>
          </div>
        </div>

        <div className="content">
          <h5>타인으로부터 통장대여 요청을 받은 사실이 있나요?</h5>
          <div className="radio">
            <label>
              <input 
                id="yes"
                value="yes"
                name="select"
                type="radio"
              />
              예
              &nbsp;
              &nbsp;
              &nbsp;
            </label>
            <label>
              <input
                id="no"
                value="no"
                name="select"
                type="radio"
              />
              아니요
            </label>
          </div>
        </div>

        <div className="content">
          <h5>타인으로부터 신용점수 상향, 대출 등의 목적으로 통장개설을 요청받은 사실이 있나요?</h5>
          <label>
            <input
              id="yes2"
              value="yes"
              name="select2"
              type="radio"
            />
            예
            &nbsp;
            &nbsp;
            &nbsp;
          </label>
          <label>
            <input
              id="no2"
              value="no"
              name="select2"
              type="radio"
            />
            아니요
          </label>
        </div>
        <div className="d-flex justify-content-center" style={{marginTop : "30px", marginBottom : "30px"}}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>통장 양도금지 확인</Accordion.Header>
            <Accordion.Body>
              통장/현금카드를 타인에게 양도하는 경우 손해배상 책임을 부담할 수 있고, <br />
              전자금융거래법에 의해 처벌 받을 수 있습니다. <br />
              또한 입출금이 자유로운 금융투자 상품 약관에 따라 계좌개설 등 금융거래가 제한 될 수 있습니다.
            </Accordion.Body>
          </Accordion.Item> 

          <Accordion.Item eventKey="1">
            <Accordion.Header>금융실명법 설명 확인</Accordion.Header>
            <Accordion.Body>
              금융실명거래 및 비밀보장에 관한 법률 제3조 3항에 따라 누구든지 <br />
              불법재산의 은닉, 자금세탁 행위, 공중협박 자금조달 행위 및 강제 집행의 면탈, 그 밖의 탈법행위를 목적으로 타인의 실명으로 금융거래를 <br />
              하여서는 아니 되며, 이를 위반 시 5년이하의 징역 또는 5천만원이하의 벌금에 처해질 수 있습니다.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>

        <label>
          <input
            id="check"
            value="check"
            name="check"
            type="radio"
          />
          위 안내에 대해 확인하고 이해합니다.
        </label> <br/> <br/>

        <div className="button">
          <Button variant="success" onClick={() => {
            if((document.querySelector('#no').checked === true) && (document.querySelector('#no2').checked === true)){
              axiosInstance.post('/account')
                .then(response => {
                  setUpdate(false);
                  navigate('/account');
                }).catch(error => alert(`에러가 발생했습니다.`))
            } else
              alert(`제출 실패하셨습니다.`);
          }}>제출</Button>
          <Button variant="success" onClick={() => {navigate('/account')}} style={{height : '40px'}}>취소</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AccountOpen;