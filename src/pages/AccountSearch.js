import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AccountSearch() {

  const navigate = useNavigate();

  return (
    <div className="search">
      <h1>계좌조회</h1>

      <Button onClick={() => {navigate('/account')}}>계좌해지</Button>
    </div>
  )
}

export default AccountSearch;