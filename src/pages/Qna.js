import '../styles/Qna.css';
import React from 'react';
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';
import Customersub from '../components/Customersub';

const Qna = () => {
  return (
    <div className='Qna-container'>
      <div className='Qna-leftbox'>
        <Customersub />
      </div>
      <div className='Qna-rightbox' >
        <h2><strong>자주 묻는 질문 (FAQ)</strong></h2><br/>
        {/* <hr style={{ width: "900px" }} /> */}
        <div className='Qna-writer'>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }} className='accobody'>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [로그인] 이용자 비밀번호 오류 입력 횟수가 초과했습니다.</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 인터넷뱅킹 이용 시 이용자 비밀번호를 5회 이상 틀리시는 경우 더 이상 인터넷뱅킹 로그인이 불가능합니다.
                <br />
                <br />
                (예를 들어) 어제까지 이용자 비밀번호 4회 오류가 있었고 오늘 정확한 이용자 비밀번호를 입력하면 오류횟수가 다시 초기화 되며 <br />
                계속 이용하실 수 있습니다. 하지만 어제 3번 오류가 있었고 오늘 2번 잘못된 비밀번호를 입력하시면 비밀번호 오류입력 횟수가 5회로<br />
                누적되며 더 이상 이용이 안됩니다.
                <br />
                <br />
                1. 이런 경우 이용자 비밀번호 오입력 횟수를 해제하고 새 비밀번호를 등록하시면 다시 이용이 가능합니다.
                <br />
                이때 이젠은행 출금 계좌번호와 계좌 비밀번호 + 보안매체 (조회회원생략) + 본인인증이 필요합니다.
                <br />
                ※ 본인인증방법: ① 공동인증서(구.공인인증서), ② ARS 인증, ③ 해외 체류자 인증<br />
                · 스마트폰뱅킹: ID/PW 로그인 페이지 → [비밀번호 재등록] → 새 이용자 비밀번호 등록<br />
                · 인터넷뱅킹: 로그인 페이지 → [비밀번호 등록/변경/오류해제] → [기존가입고객] → 새 이용자 비밀번호 변경<br />

                2. 인터넷뱅킹 회원 중 보안매체(자물쇠카드, 안전카드, OTP) 미소지 손님은 스마트폰뱅킹 비로그인 상태에서 모바일 OTP를 발급
                <br />받으신 후 비밀번호 재등록을 할 수 있습니다.<br />
                ※ 모바일 OTP 발급 메뉴..<br />
                · 스마트폰뱅킹 : 보안센터  모바일 → OTP 관리 → 모바일 OTP 발급/재발급<br /><br />

                3. 본인인증이 어렵거나 모바일 OTP 발급을 원치않는 손님은 영업점을 방문하시어 비밀번호 오입력 횟수를 해제하고 새 비밀번호를 <br />
                등록하셔야 합니다.<br />
                ※ 영업점 방문 시 지참할 본인확인서류: ① 신분증, ② 출금통장, ③ 통장도장(서명 시 생략)<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <hr style={{ width: "900px" }}/> */}
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [로그인] 로그인 비밀번호를 입력하고 나면 하얀 화면이 뜨거나 오류가 발생하면서 화면이 멈추는 현상이 생깁니다.</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 구글플레이 앱 설치가 정상적으로 이루어지지 않은 경우 발생되는 오류입니다.<br />
                계속적으로 동일한 현상이 나타나는 경우 아래와 같이 조치하신 후 다시 확인해 주세요.<br />
                <br />   
                ① 설정 - 애플리케이션 - Google Play 스토어 - 저장공간 - 데이터 삭제<br />
                ② 메모리정리 (단말기설정 - 디바이스관리 - 최적화)<br />
                ③ OS버전이 Android 7.0 이상 → OS보안업데이트, chrome브라우저 최신버전으로 설치<br />
                OS버전이 Android 7.0 미만 → OS보안업데이트, 'Android 시스템 webview' 앱 최신버전으로 업데이트<br />
                ④ 이젠원큐 앱 재설치 후 재부팅<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [비대면][신분증확인] 비대면 실명 인증할 때 신분증 인식이 안됩니다.</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 비대면 실명인증 시 신분증 인식이 안된다면 검은(혹은 어두운) 바탕 위에 신분증을 올려놓고 손으로 살짝 가려서 빛의 반사를 <br />
                 최소화해 주시면 인식이 더 원활해집니다.<br /><br />

                신분증이 오래되었거나 훼손되어 인식이 잘 안될 때는 신분증 정보를 직접 수정 입력하실 수 있으며, 입력이 잘못된 경우 신분증<br />
                 진위 확인 과정에서 신청이 거절될 수 있으니 입력된 내용을 정확히 확인하시기 바랍니다.<br /><br />

                신분증 촬영은 웹과 앱에서 모두 가능하지만 앱을 설치하시면 더 원활히 이용할 수 있습니다.<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [로그인] 아이디 변경이 가능한가요?</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A.
                아이디를 변경하는 방법은 두가지가 있습니다.<br /><br />

                ① 다른 아이디로 변경하는 방법<br />
                영업점에서만 가능합니다. 본인확인서류(신분증, 통장, 통장도장)를 지참하시고 가까운 영업점을 방문해 주세요.<br /><br />

                ② 기존 인터넷뱅킹 해지 후 재가입하는 방법<br />
                인터넷뱅킹, 스마트폰뱅킹을 통해 인터넷뱅킹 가입 해지 후 비대면 전자금융 회원 가입을 진행합니다.<br />
                이때 다른 아이디로 가입을 하셔야 하며 신분증(주민등록증, 운전면허증) 인증과 본인추가인증(계좌인증/가상계좌입금/영상통화)이 필요합니다.<br /><br />

                ※ 서비스 해지<br />
                · 스마트폰뱅킹: My 이젠 → 개인정보관리 → 서비스 해지<br />
                · 인터넷뱅킹: 전체메뉴 → My 이젠 → 뱅킹관리 → 인터넷뱅킹 해지<br /><br />

                ※ 재가입<br />
                · 스마트폰뱅킹: 전체메뉴 → 금융상품몰 → 비대면 계좌개설<br />
                · 인터넷뱅킹: 전체메뉴 → 비대면 계좌개설 → 신청하기<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [로그인] 이용자 비밀번호를 잊어버렸어요.</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 이용자 비밀번호 재등록을 통해 새 이용자 비밀번호를 등록할 수 있습니다.<br />
                이 때 이젠은행 계좌번호와 계좌 비밀번호 + 보안매체(조회회원생략) + 본인인증이 필요합니다.<br /><br />

                ※ 본인인증방법: ① 공동인증서(구.공인인증서), ② ARS 인증, ③ 해외 체류자 인증<br />
                · 스마트폰뱅킹: ID/PW 로그인 페이지 → [비밀번호 재등록] 버튼 클릭 → 새 이용자 비밀번호 등록<br />
                · 인터넷뱅킹: ID/PW 로그인 페이지 → [비밀번호 등록/변경/오류해제] 버튼 클릭 → 기존 가입고객 선택 → 새 이용자 비밀번호 변경<br /><br />

                인터넷뱅킹 회원 중 보안매체(자물쇠카드, 안전카드, OTP)를 미소지 손님은 스마트폰뱅킹 비로그인 상태에서 모바일 OTP를<br />
                 발급 받으신 후 새 비밀번호를 등록할 수 있습니다.<br />
                ※ 스마트폰뱅킹(이젠원큐 앱) 모바일 OTP 발급 방법<br />
                · 스마트폰뱅킹: 전체메뉴 → 보안센터 → 모바일 OTP 발급/재발급<br />
                · 신분증(주민등록증, 운전면허증) 인증 + 본인추가인증(계좌인증/가상계좌입금/영상통화)이 필요합니다.<br /><br />

                본인인증이 어렵거나 모바일 OTP 발급을 원하지 않는 손님께서는 본인확인서류를 지참하고 영업점을 방문하여 처리하셔야 합니다.<br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [로그인] 이용자 ID(아이디)를 잊어버렸어요. 어떻게 찾나요?</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 이용자 ID는 인터넷뱅킹 또는 스마트폰뱅킹에서 직접 찾아볼 수 있습니다.<br />

                이젠은행 인터넷뱅킹에 접속하여 왼쪽 상단 로그인을 클릭하시어 화면이 바뀌면 ID/PW 입력칸 하단의 ID 찾기 클릭 후 계좌번호,<br />
                 계좌비밀번호, 생년월일을 입력하신 뒤 본인인증 후 인터넷뱅킹 아이디를 확인할 수 있습니다.<br />
                ※ 본인인증 방법 ① 공동인증서(구.공인인증서), ② 휴대폰 본인인증하기(본인명의 휴대폰만 가능함), ③ 해외 출국한 경우 <br />
                개인정보가 정확하지 않으면 아이디 조회를 할 수 없으며 아이디는 전체가 조회되지 않고 일부만 조회가 됩니다.<br /><br />

                · 인터넷뱅킹 : ID/PW 로그인 페이지 → [ID 찾기] 버튼 클릭<br />
                · 스마트폰뱅킹 : ID/PW 로그인 페이지 → [아이디찾기] 버튼 클릭<br />
                스마트폰뱅킹에서 다른 로그인 방식이 설정된 경우 로그인 방식을 아이디 방식으로 변경하여 접속합니다.<br /><br />

                또한, 가까운 영업점으로 본인확인서류를 지참 후 방문하셔도 확인이 가능합니다.<br />
                ※ 영업점 방문 시 지참할 본인확인서류 (개인): ① 신분증, ② 출금통장, ③ 통장도장(서명 시 생략)<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [로그인] 이용자 비밀번호를 변경하는 방법은 무엇인가요?</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 기존 이용자 비밀번호를 알고 있는 경우에 아래와 같은 방법으로 비밀번호 변경이 가능합니다.<br />
                인터넷뱅킹 로그인 후 이용자 비밀번호를 변경할 수 있습니다.<br /><br />

                · 인터넷뱅킹: 전체메뉴 → My 이젠 → 뱅킹관리 → 비밀번호등록/변경<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [로그인] 전자금융 이용자 비밀번호를 등록하려고 합니다.</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 전자금융 신규 시 이용자 비밀번호 사후등록을 신청하신 고객은 인터넷뱅킹과 스마트폰뱅킹을 통해 전자금융 이용자 비밀번호<br />
                 사후등록이 가능합니다. 이 때 본인 휴대폰, 하나은행 출금계좌번호, 계좌비밀번호가 필요합니다.<br />
                기존 이용자 비밀번호를 변경/재등록할 경우 비밀번호 변경 또는 비밀번호 재등록 메뉴를 이용해 주세요.<br /><br />

                · 스마트폰뱅킹: My 이젠 → 개인정보관리 → 전자금융비밀번호사후등록<br />
                · 인터넷뱅킹: ID/PW 로그인 페이지 → [비밀번호 등록/변경/오류해제] 버튼 클릭 → 신규가입고객 → 전자금융 이용자 비밀번호 등록 선택<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [간편로그인] 간편인증이 무엇이고 어떻게 이용하나요?</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 간편인증은 숫자 6자리 간편번호를 등록하여 '이젠원큐' 앱 로그인을 간편하게 할 수 있는 간편 로그인 방식을 말합니다.<br /><br />

                - 간편번호를 등록하기 위해서는 보안매체(자물쇠카드 또는 OTP)와 공동인증서(구.공인인증서)가 필요합니다.<br />
                - 최종 등록한 스마트폰 1대에서만 이용할 수 있으며, 휴대폰 기기 분실, 앱 재설치 시, 연속 5회 간편비밀번호 입력 오류 시<br />
                 간편번호서비스 재등록이 필요합니다.<br /><br />

                ※ 이용가능 OS: Android OS 6.0 이상, IOS 9.0 이상<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }}>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Q. [간편로그인] 지문인증이 무엇이고 어떻게 이용하나요?</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                A. 지문인증은 손님께서 사용하시는 스마트폰에 등록된 지문을 통해<br />
                '이젠원큐' 앱 로그인을 간편하게 할 수 있는 간편 로그인 방식을 말합니다.<br /><br />

                - 지문인증서비스를 이용하기 위해서는 지문 등록과 지문인식기능을 탑재한 스마트폰에서만 이용할 수 있습니다.<br />
                - 지문인증을 등록하기 위해서는 스마트폰에 미리 지문이 등록되어 있어야 합니다.<br />
                - 최종으로 등록한 스마트폰 1대에서만 서비스를 이용할 수 있습니다.<br />
                - 휴대폰 기기 분실, 앱 재설치 시, 연속으로 5회 지문 인증 실패 시 지문을 재등록해야 합니다.<br />
                - 지문인증 등록 후 지문정보가 추가, 삭제 등 변경되면 지문 인증을 재등록하셔야 합니다.<br /><br />

                ※ 이용가능 OS: Android OS 6.0 이상, IOS 9.0 이상<br />
                ※ 대상단말기: 지문등록 및 인식기능이 탑재된 스마트폰 단말기<br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

    </div>
  )
}

export default Qna;