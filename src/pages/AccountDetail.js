import { Link } from "react-router-dom";

const AccountDetail = ({accountInfo}) => {
  const transactionList = accountInfo.transactionList;
  console.log(transactionList);
  const getFormatDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.time.getFullYear()}-${date.time.getMonth()+1}-${date.time.getDate()}`;
  }

  if (!transactionList) {
    return (
      <div className="AccountDetail mainBorder p-5">
        <h2 className='my-2 fontColor1'>계좌내역</h2>
        <hr style={{width:'100%'}}/>
        <h5 className='m-5'>표시할 내역이 없습니다.</h5>
        <Link className='m-5 text-nowrap btn btn-success header-Btn' to="/account">목록 돌아가기</Link>
      </div>
    );
  }
  let total = 0;
  return(
    <div className="AccountDetail mainBorder p-5">
      <h2 className='my-2 fontColor1'>계좌내역</h2>
      <hr style={{width:'100%'}}/>
      <table>
        <thead>
          <tr>
            <th>거래시각</th>
            <th>찾으신 금액</th>
            <th>맡기신 금액</th>
            <th>잔액</th>
            <th>취급점</th>
          </tr>
        </thead>
        {
          transactionList.map((transaction, i) => {
            total = total - transaction.money;
            return (
              <tr key={i}>
                <td className="text-start">{transaction.time}</td>
                <td className="text-end">{transaction.money > 0 ? transaction.money.toLocaleString('ko-KR')+'원' : ''}</td>
                <td className="text-end">{transaction.money > 0 ? '' : (-transaction.money).toLocaleString('ko-KR')+'원'}</td>
                <td className="text-end">{total.toLocaleString('ko-KR')+'원'}</td>
                <td className="text-end">{transaction.memo}</td>
              </tr>
            );
          })
        }
      </table>
    </div>
  )
}

export default AccountDetail;