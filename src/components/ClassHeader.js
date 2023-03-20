import React , {useState} from 'react'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import DetailPage from '../pages/DetailPage/DetailPage';
import CurriculumPage from '../pages/DetailPage/CurriculumPage';


function ClassHeader() {
    let [tab, settab] = useState(0)
  return (
    <div className='tabMenu'>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={3}>
          <ListGroup className='list'>
            <ListGroup.Item action href="#link1">
              클래스 소개
            </ListGroup.Item>

            <ListGroup.Item action href="#link2">
              커리큘럼
            </ListGroup.Item>
            
          </ListGroup>
        </Col>

        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <DetailPage />
            </Tab.Pane>

             <Tab.Pane eventKey="#link2">
              <CurriculumPage />
            </Tab.Pane>

  
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}


export default ClassHeader;
