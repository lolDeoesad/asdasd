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
  
  return <button type="button" onClick={handleClick}>우편번호, 주소 찾기</button>
 }

export default DaumMap;