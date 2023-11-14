
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

function DaumMap({setAddress}) {

  const open = useDaumPostcodePopup(postcodeScriptUrl);


  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '')
        extraAddress += data.bname;
      if (data.buildingName !== '')
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(`(${data.zonecode}) ${fullAddress}`);
  }
  const handleClick = () => {
     open({onComplete: handleComplete});
  }
  
  return <button type="button" className="btn btn-success" style={{width:'120px', height:'58px', marginRight:'10px'}} onClick={handleClick}>우편 번호<br/> 주소 찾기</button>
 }

export default DaumMap;