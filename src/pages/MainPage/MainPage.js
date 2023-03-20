import React from 'react'
import {Link} from 'react-router-dom';
import thumbGuitar from '../../images/thumb_guitar.png'
import fire from "../../images/fire.png"

function MainPage() {
  let name="튜레이브";
  let date="2022.03.02";
  let classTitle="하루 10분 취미로 시작하는 어쿠스틱 기타";
  let classExp="20가지 실습 연주곡을 통해 배우는 통기타 클래스"
  let hashtag="#악기"

  // 썸네일 이미지 
  const thumbimgStyle={
    width:'300px',
    height:'180px',
    borderRadius: '20px'
  }

  //클래스별 이름 스타일
  const nameStyle={
    marginLeft:'5px',
    marginRight:'5px',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#6F6F6F'
  }

  const uploaderStyle={
    marginLeft:'5px',
    marginRight:'5px',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#6F6F6F'

  }

  const titleStyle={
    paddingLeft:'5px',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    color: '#000000'
  }

  const expStyle={
    marginTop:'0px',
    marginLeft:'5px',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#000000'
  }

  const hashtagStyle={
    marginLeft:'5px',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    color: '#B30D21'
  }

//왼족 내브바와 동일한 타이틀
  const menutitleStyle={
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '30px',
    color: '#7a7a7a'
  }

  //글자 앞에 들어가는 아이콘
  const iconStyle={
    width:'25px',
    height:'25px'
};
  
var titles = ['인기클래스', '웹개발','python','디지털 드로잉', '스타트업', '마케팅'];

  return (
    <div style={{backgroundColor:'white'}}>
      <h1 style={menutitleStyle}><img src={fire} alt = '' style={iconStyle} ></img>인기클래스</h1>
    <div className="container">
  <div className="row row-cols-3">

    <div className="col">  

  <Link to="/detail"> <img src={thumbGuitar} alt="thumbnail" style={thumbimgStyle}/> </Link>
  <p className="uploader" style={uploaderStyle}>{name} | {date}</p>
  <h1 style={titleStyle}>{classTitle}</h1>
  <h2 style={expStyle}>{classExp}</h2>
  <p style={hashtagStyle}>{hashtag}</p>
</div>

    <div class="col">   
  <Link to="/detail"> <img src={thumbGuitar} alt="thumbnail" style={thumbimgStyle} /> </Link>
  <p style={uploaderStyle}>{name} | {date}</p>
  <h1 style={titleStyle}>{classTitle}</h1>
  <h2 style={expStyle}>{classExp}</h2>
  <p style={hashtagStyle}>{hashtag}</p>
</div>
    <div class="col">

  <Link to="/detail"> <img src={thumbGuitar} alt="thumbnail" style={thumbimgStyle}/> </Link>
  <p style={uploaderStyle}>{name} | {date}</p>
  <h1 style={titleStyle}>{classTitle}</h1>
  <h2 style={expStyle}>{classExp}</h2>
  <p style={hashtagStyle}>{hashtag}</p>
</div>

    <div class="col">

  <Link to="/detail"> <img src={thumbGuitar} alt="thumbnail" style={thumbimgStyle}/> </Link>
  <p style={uploaderStyle}>{name} | {date}</p>
  <h1 style={titleStyle}>{classTitle}</h1>
  <h2 style={expStyle}>{classExp}</h2>
  <p style={hashtagStyle}>{hashtag}</p>
</div>
<div class="col">

<Link to="/detail"> <img src={thumbGuitar} alt="thumbnail" style={thumbimgStyle} /> </Link>
<p style={uploaderStyle}>{name} | {date}</p>
<h1 style={titleStyle}>{classTitle}</h1>
<h2 style={expStyle}>{classExp}</h2>
<p style={hashtagStyle}>{hashtag}</p>
</div>

<div class="col">

<Link to="/detail"> <img src={thumbGuitar} alt="thumbnail" style={thumbimgStyle}/> </Link>
<p style={uploaderStyle}>{name} | {date}</p>
<h1 style={titleStyle}>{classTitle}</h1>
<h2 style={expStyle}>{classExp}</h2>
<p style={hashtagStyle}>{hashtag}</p>
</div>

  </div>
</div>
</div>

  )


}

export default MainPage