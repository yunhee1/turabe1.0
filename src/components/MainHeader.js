import React from 'react'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import MainPage from '../pages/MainPage/MainPage';
import DevelopPage from '../pages/MainPage/DevelopPage';
import LifestylePage from '../pages/MainPage/LifestylePage';
import SelfdevelopPage from '../pages/MainPage/SelfdevelopPage';
import InvestPage from '../pages/MainPage/InvestPage';
import CreativePage from '../pages/MainPage/CreativePage';

function MainHeader() {

  return (
    <div className='tabMenu'>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup className='list'>
            <ListGroup.Item action href="#link1">
              인기 카테고리
            </ListGroup.Item>

            <ListGroup.Item action href="#link2">
              개발
            </ListGroup.Item>
            
            <ListGroup.Item action href="#link3">
              
            </ListGroup.Item>

            <ListGroup.Item action href="#link4">
              크리에이티브
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              자기계발
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              재테크
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <MainPage />
            </Tab.Pane>

             <Tab.Pane eventKey="#link2">
              <DevelopPage />
            </Tab.Pane>

   {/*     <Tab.Pane eventKey="#link3">
              <LifestylePage />
            </Tab.Pane>

 <Tab.Pane eventKey="#link1">
              <CreativePage />
            </Tab.Pane>

            <Tab.Pane eventKey="#link1">
              <SelfdevelopPage />
            </Tab.Pane>

            <Tab.Pane eventKey="#link2">
              <InvestPage />
            </Tab.Pane>  */}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}

export default MainHeader;
