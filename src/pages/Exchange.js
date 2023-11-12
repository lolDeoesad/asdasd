import { useEffect, useState } from "react";
import axios from "axios";
import { Badge, Form } from "react-bootstrap";
import PleaseWait from "./PleaseWait";

const Exchange = () => {
  const currencyList = ['USD', 'EUR', 'JPY', 'CNH'];
  const nameList = ['미국 달러 USD', '유럽연합 유로 EUR', '일본 엔 JPY (100엔)', '중국 위안 CNY'];
  const unitList = ['＄', '€', '￥', '￥'];
  const valueList = [1, 1, 100, 1];

  const [exchange, setExchange] = useState([]);
  const [set, isSet] = useState(false);

  const [idx, setIdx] = useState(0);
  const [cost, setCost] = useState();
  const [krw, setKrw] = useState();

  useEffect(() => {
    if(!set) {
      let queryString = currencyList.join('&codes=FRX.KRW');
      axios.get(`https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRW${queryString}`)
        .then(response => {
          setExchange(response.data);
          isSet(true);
        })
        .catch(error => isSet(false));
    }
  }, [set])

  if(!set) {
    return (
      <PleaseWait/>
    );
  }

  return(
    <div className='Exchange'>
      <h2 className="fontColor1 mb-5">환전고시 환율</h2>

      <p className="text-start">환율계산기 <span style={{fontSize: "0.75rem", color:"gray"}}>(매매기준율 기준)</span></p>
      <div className="mb-5 d-flex">
        <Form.Select aria-label="Default select example" 
          style={{width:'100px', height:'58px'}} className="me-4"
          onChange={e => {
            console.log(e);
            setIdx(e.target.value);
            setCost('');
            setKrw('');
        }}>
          { nameList.map((name, i) => <option key={i} value={i} id={`option${i}`}>{name.slice(0,2)}</option>) }
        </Form.Select>
        <div className='form-floating'>
          <input type='text' className='form-control' id='floatCost' value={cost} placeholder='name@example.com'
            onChange={e => {
              let _cost = Number(e.target.value.replaceAll(',', ''));
              let _krw = _cost * exchange[idx]["basePrice"]/valueList[idx];
              if(isNaN(_cost)){
                setCost('');
                setKrw('');
              }
              else {
                setCost(_cost.toLocaleString('ko-KR'));
                setKrw(_krw.toLocaleString('ko-KR'));
              }}}/>
          <label htmlFor='floatingCost'>{nameList[idx]}</label>
          <h5><Badge pill className="position-absolute" bg='success' style={{bottom:'25%', right:'4%'}}>{unitList[idx]}</Badge></h5>
        </div>
        <div className='form-floating mx-2' style={{width:'60px', fontSize:'20px'}}>
          <input type='text' className='form-control' id='floatArrow' value='⇔' disabled style={{background:'white', border:'none', padding:0}} placeholder='name@example.com'/>
          <label htmlFor='floatingArrow'> </label>
        </div>
        
        <div className='form-floating'>
          <input type='text' className='form-control' id='floatingKrw' value={krw} placeholder='name@example.com'
            onChange={(e) => {
              let _krw = Number(e.target.value.replaceAll(',', ''));
              let _cost = _krw / exchange[idx]["basePrice"]/valueList[idx];
              if(isNaN(_krw)){
                setCost('');
                setKrw('');
              }
              else {
                setCost(_cost.toLocaleString('ko-KR'));
                setKrw(_krw.toLocaleString('ko-KR'));
              }}}/>
          <label htmlFor='floatingKrw'>대한민국 원 KRW</label>
          <h5><Badge pill className="position-absolute" bg='success' style={{bottom:'25%', right:'4%'}}>￦</Badge></h5>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th rowSpan='2'>통화명</th>
            <th rowSpan='2'>매매기준율</th>
            <th colSpan={"2"}>현찰</th>
            <th colSpan={"2"}>송금</th> 
            <th rowSpan='2'>미화환산율</th>
          </tr>
          <tr>
            <th>사실 때</th>
            <th>파실 때</th>
            <th>보내실 때</th>
            <th>받으실 때</th>
          </tr>
        </thead>
        {
          nameList.map((name, i) => {
            return (
              <tr key={i}>
                <td className="text-start">{name}</td>
                <td className="text-end">{exchange[i]["basePrice"].toFixed(2)}</td>
                <td className="text-end">{exchange[i]["cashBuyingPrice"].toFixed(2)}</td>
                <td className="text-end">{exchange[i]["cashSellingPrice"].toFixed(2)}</td>
                <td className="text-end">{exchange[i]["ttBuyingPrice"].toFixed(2)}</td>
                <td className="text-end">{exchange[i]["ttSellingPrice"].toFixed(2)}</td>
                <td className="text-end">{exchange[i]["usDollarRate"].toFixed(3)}</td>
              </tr>
            );
          })
        }
      </table>
    </div>
  )
}

export default Exchange;