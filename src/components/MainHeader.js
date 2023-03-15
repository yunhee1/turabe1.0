import React from 'react'
import {Link} from 'react-router-dom';

function MainHeader() {
  return (
    <div>
      <Link to="/">튜레이브</Link>
      <ul>
        <li> <Link to="/">인기 카테고리</Link></li>
        <li> <Link to="/">개발</Link></li>
        <li> <Link to="/">라이프스타일</Link></li>
        <li> <Link to="/">크리에이티브</Link></li>
        <li> <Link to="/">재테크</Link></li>
      </ul>
     </div>
  )
}

export default MainHeader