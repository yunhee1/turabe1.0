import React from 'react'
import {Link} from 'react-router-dom';
import thumbGuitar from '../../images/thumb_guitar.png'
import guitar from '../../images/guitar.png'
import guitar2 from '../../images/guitar2.png'

function DetailPage() {
  let category="라이프스타일";
  let learn="악기"
  let classtype="튜레이브오리지널";
  let classTitle = "취미로 시작하는 어쿠스틱 기타 연주"
  let classDetail = "지루한 일상도, 늘 보던 사물들도, 여행지에서의 풍경도 그림을 그리게 되면 특별하게 보이죠."
  
  return (
    <div>
      <div className="class-img-wrapper">
        <img src={thumbGuitar} alt="thumbnail" />
      </div>

  <div>
  <p>{category} | {learn} | {classtype}</p>
  <h1>{classTitle}</h1>
  <p>{classDetail}</p>

  <img src={guitar} alt='클래스이미지' />
  <p>{classDetail}</p>

  <h2>제목입니다.</h2>
  <h3>부제목입니다.</h3>
  
  <img src={guitar2} alt='클래스이미지' />
  <p>{classDetail}</p>

  <h3>부제목입니다.</h3>
  
  <img src={guitar2} alt='클래스이미지' />
  <p>{classDetail}</p>


</div>
    </div>
  )


}

export default DetailPage
