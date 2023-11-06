import '../styles/About.css';
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Customersub from '../components/Customersub';
import { Link } from 'react-router-dom';
const { kakao } = window;
const LATITUDE = 37.5412952;
const LONGITUDE = 126.8381811;
// const POSITION_ID = 1576534967;
const POSITION_URL = 'https://map.kakao.com/link/to/1576534967';

const About = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('kakao-map'); // 지도를 표시할 div 
    const mapOption = {
      center: new kakao.maps.LatLng(LATITUDE, LONGITUDE), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다 
    const markerPosition = new kakao.maps.LatLng(LATITUDE, LONGITUDE);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    const iwContent = `<div style="padding:10px; margin-left: calc(75px - 64.17px / 2);">
                        <a href=${POSITION_URL} target="_blank">길찾기</a>
                      </div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    const iwPosition = new kakao.maps.LatLng(LATITUDE, LONGITUDE); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent
    });

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, [])
  return (

    <div className='map-container'>
      <div className='map-leftbox'>
        <Customersub />
      </div>
      <div className='map-rightbox'>
        <div id='kakao-map' style={{ width: '500px', height: '700px' }} />
        <ul>
          {/* {
            [1, 2, 3].map(i => {return (
              <li>{i}</li>
            );})
          } */}
          예시코드
          <li>
            <Link to></Link>
          </li>
          

        </ul>
      </div>
    </div>
    // <Container className='About my-2'>
    // </Container>
  );
}

export default About;