import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AccountSearch() {

  const navigate = useNavigate();

  return (
    <div className="search">
      <h1>계좌조회</h1>
    </div>
  )
}

export default AccountSearch;