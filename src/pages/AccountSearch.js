import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AccountSearch() {

  const navigate = useNavigate();

  return (
    <div className="search">
      <h3>계좌조회</h3>
    </div>
  )
}

export default AccountSearch;