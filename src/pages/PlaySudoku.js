import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PROBLEM_SETS } from '../constants/problemSet';
import { useState } from 'react';
import '../styles/PlaySudoku.css'
const PlaySudoku = () => {
  const IMG_PATH = 'https://20230601sy.github.io/0810/src/assets/';
  const [currentStage, setCurrentStage] = useState(PROBLEM_SETS.Expert01);
  // const [currentStage, setCurrentStage] = useState(PROBLEM_SETS.Test01);
  const [status, setStatus] = useState(false);

  const Box = props => {
    setStatus(calcStatus() ? (isFinished() ? "You Win!" : "") : "You Wrong!");

    return(
      <>
        { props.data.map(item => (
          <table>
            { [[1, 2, 3], [4, 5, 6], [7, 8, 9]].map(rowArr => (
              <tr>
                { rowArr.map(nCol => (
                  <td style={{border:'1px solid'}} className='p-1'> 
                    {
                      item[`block${nCol}`]?.length 
                      ? <Box data={item[`block${nCol}`]}/>
                      : <div data-block1={item.block} data-block2={`block${nCol}`} style={{width:'12px', height:'18px'}} className='m-auto' onClick={blockHandler}>
                          {item[`block${nCol}`] ? item[`block${nCol}`] : ""}
                        </div> 
                    } 
                  </td>
                ))}
              </tr>
            ))}
          </table>
        ))}
      </>
    );
  }

  const blockHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    if(! currentStage[0][e.target.dataset.block1][0][e.target.dataset.block2]) {
      currentStage[0][e.target.dataset.block1][0][e.target.dataset.block2] = Number(prompt('값을 입력하세요.'));
      console.log(currentStage[0][e.target.dataset.block1][0][e.target.dataset.block2]);
      setCurrentStage([...currentStage]);
    }
  }
  
  const isFinished = () => {
    for(let i=1; i<=9; i++)
    for(let j=1; j<=9; j++)
      if(!currentStage[0][`block${i}`][0][`block${j}`])
        return false;
    return true;
  }

  const calcStatus = () => {
    for(let i=1; i<=9; i++) {
      const bNums = new Set();
      let cnt = 0;
      for(let j=1; j<=9; j++) {
        if(currentStage[0][`block${i}`][0][`block${j}`] != 0) {
          cnt++;
          bNums.add(currentStage[0][`block${i}`][0][`block${j}`]);
        }
        else {

          console.log(i, j, currentStage[0][`block${i}`][0][`block${j}`]);
        }
      }
      if(bNums.size != cnt)
        return false;
    }
    const rPtn = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const cPtn = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
    return checkLines(rPtn) && checkLines(cPtn);
  }

  const checkLines = (ptn) => {
    for(let i=0; i<3; i++) {
      for(let j=0; j<3; j++) {
        const nums = new Set();
        let cnt = 0;
        for(let b1=0; b1<3; b1++) {
          for(let b2=0; b2<3; b2++) {
            if(currentStage[0][`block${ptn[i][b1]}`][0][`block${ptn[j][b2]}`] != 0) {
              cnt++;
              nums.add(currentStage[0][`block${ptn[i][b1]}`][0][`block${ptn[j][b2]}`]);
            }
          }
        }
        if(nums.size != cnt)
          return false;
      }
    }
    return true;
  }
  return(
    <div className="PlaySudoku">
      <Container className='mt-0'>
        <Row>
          <Col>
            <div className='mb-5' style={{height:'150px', width:"1000px", overflow:'hidden'}}>
              <img src={`${IMG_PATH}thumbnail_sdk.png`} alt="" style={{width:"100%"}}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className='d-flex justify-content-center'>
            <Box data={currentStage}/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      {
        status
        ? <div class="alert alert-success mt-3 fontColor1" style={{height:'50px', lineHeight:'50px'}} role="alert">{ status }</div>
        : <div style={{height:'50px'}}></div>
      }
    </div>
  );
}

export default PlaySudoku;