import '../styles/About.css';
import { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Customersub from '../components/Customersub';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MapList } from '../constants/MapList';
const { kakao } = window;
// const LATITUDE = 37.5412952;
// const LONGITUDE = 126.8381811;
// const POSITION_URL = 'https://map.kakao.com/link/to/26717800'

const About = () => {
  const [id, setId] = useState(0);
  useEffect(() => {
    const LATITUDE = MapList[id].latitude;
    const LONGITUDE = MapList[id].longitude;
    const POSITION_ID = MapList[id].position;
    const POSITION_URL = 'https://map.kakao.com/link/to/' + POSITION_ID;

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

    const iwContent = `<div style="padding:10px; font-size: 15px; color: #137d34; text-decoration: none;">
                        <a href=${POSITION_URL} target="_blank">&nbsp;&nbsp;이젠은행&nbsp;${MapList[id].name}</a>
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
  }, [id])

  return (

    <div className='map-container'>
      <div className='map-leftbox'>
        <Customersub />
      </div>
      <div className='map-rightbox'>
        
          <div className='map-btn' >
            <ul>
              {MapList && MapList.map(data => {
                return (
                  <Link key={data.id} onClick={() => setId(data.id)} style={{textDecoration: "none", color: "#137d34"}}>
                    {data.name}<hr className='map-line'/>
                  </Link>
                );
              })
              }
              {/* {
            [1, 2, 3].map(data => {return (
              <li>{data.name}</li>
            );})
          } */}
            </ul>

          </div>
        
        <div id='mapbox'></div>
        <div id='kakao-map' style={{ width: '900px', height: '700px' }} />
      </div>
    </div>
    // <Container className='About my-2'>
    // </Container>
  );
}

export default About;