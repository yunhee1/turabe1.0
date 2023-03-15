import React from 'react'
import {Link} from 'react-router-dom';
import thumbGuitar from '../../images/thumb_guitar.png'

function DevelopPage() {
  let name="튜레이브";
  let date="2022.03.02";
  let classTitle="하루 10분 취미로 시작하는 어쿠스틱 기타";
  let classExp="20가지 실습 연주곡을 통해 배우는 통기타 클래스"
  let hashtag="#악기"

  return (
    <div>
  <div>
  <Link to="/detail"> <img src={thumbGuitar} alt="thumbnail" /> </Link>
  <p>{name} | {date}</p>
  <h1>{classTitle}</h1>
  <h2>{classExp}</h2>
  <p>{hashtag}</p>
</div>
    </div>
  )


}

export default DevelopPage