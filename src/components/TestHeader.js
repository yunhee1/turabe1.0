import React , {useState} from 'react';
import {Nav} from 'react-bootstrap';

import MainPage from '../pages/MainPage/MainPage';
import DevelopPage from '../pages/MainPage/DevelopPage';
import LifestylePage from '../pages/MainPage/LifestylePage';
import SelfdevelopPage from '../pages/MainPage/SelfdevelopPage';
import InvestPage from '../pages/MainPage/InvestPage';
import CreativePage from '../pages/MainPage/CreativePage';
import fire from "../images/fire.png";
import computer from '../images/computer.png';
import lifestyle from '../images/lifestyle.png';
import creative from '../images/creative.png';
import pencil from '../images/pencil.png';
import money from '../images/money.png';


function TestHeader() {
    const buttonStyle={
        width : '250px',
        backgroundColor : '#242424',
    }
    const iconStyle={
        width:'25px',
        height:'25px'
    };

    let [tab, settab] = useState(0);

  return (
    <div>
    <Nav className= "nav flex-column" variant="tabs" defaultActiveKey="link0">
    <Nav.Item style={buttonStyle}>
      <Nav.Link onClick={() => settab(0) } eventKey="link0">
        <img src={fire} alt = '' style={iconStyle} ></img>인기 카테고리
        </Nav.Link>
    </Nav.Item>

    <Nav.Item style={buttonStyle}>
      <Nav.Link onClick={() => settab(1) } eventKey="link1">
      <img src={computer} alt = '' style={iconStyle} ></img>개발
        </Nav.Link>
    </Nav.Item>
    
    <Nav.Item style={buttonStyle}>
      <Nav.Link onClick={() => settab(2) } eventKey="link2">
      <img src={lifestyle} alt = '' style={iconStyle} ></img>라이프스타일
        </Nav.Link>
    </Nav.Item>
    
    <Nav.Item style={buttonStyle}>
      <Nav.Link onClick={() => settab(3) } eventKey="link3">
      <img src={creative} alt = '' style={iconStyle} ></img>크리에이티브
        </Nav.Link>
    </Nav.Item>

    <Nav.Item style={buttonStyle}>
        <Nav.Link onClick={() => settab(4) } eventKey="link4">
        <img src={pencil} alt = '' style={iconStyle} ></img>자기계발
        </Nav.Link>
    </Nav.Item>

    <Nav.Item style={buttonStyle}>

        <Nav.Link onClick={() => settab(5) } eventKey="link5">
        <img src={money} alt = '' style={iconStyle} ></img>재테크
        </Nav.Link>
    </Nav.Item>
  </Nav>



  <TabContent tab={tab}/>
  </div>
   )
}

export default TestHeader;


function TabContent({ tab}) { 
    if(tab === 0){ 
    return <div>
        <MainPage />
    </div>
  }
  if(tab === 1){ 
    return <div><DevelopPage/></div>
  }
  if(tab === 2){ 
    return <div><LifestylePage/></div>
  }
  if(tab === 3){
    return <div><CreativePage/></div>
  }
  if(tab === 4){
    return <div><SelfdevelopPage/></div>
  }
  if(tab === 5){
    return <div><InvestPage/></div>
  }

  }