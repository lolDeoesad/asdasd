import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyPage from '../pages/MyPage';

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // style={{ maxWidth: "80%"}}
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        이번달 결제 합산 금액
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>총 3,103,000원</h4>
        <p>
          이미 납부하신 경우에는 추가 이체가 발생하지 않도록 주의바랍니다.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>닫기</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default MyModal;