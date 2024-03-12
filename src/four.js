// import React from "react";

// function Four() {
//   return (
//     <>
//       <div className="lifour">
//         <div className='word'>
//           <b className='meain'>Insight</b>
//           <hr className="line" />
//           <ul>
//             <li>문제나 상황을 이해하고 <b>본질</b>이나 <b>원리</b>를 파악하여</li>
//           </ul>
//           <b className='meain'>Creative</b>
//           <hr className="line" />
//           <ul>
//             <li>아이디어와 문제 해결 방식을 <b>창의적으로 탐구</b>하는</li>
//           </ul>
//           <b className='meain'>Perseverance</b>
//           <hr className="line" />
//           <ul>
//             <li><b>열정</b>과 <b>끈기</b>로 모인 동아리 입니다</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Four;
import React from "react";
import './App.css';

function Four() {
  return (
    <>
      <div className="four">
        <p className="title">창의적 개발의 시작을 위해 우리는</p>
        <div className="fi">
          <p className="meain">Insight</p>
          <p className="fw">문제나 상황을 이해하고 <b>본질</b>이나 <b>원리를 파악</b>하여</p>
        </div>
        <div className="fc">
          <p className="meain">Creative</p>
          <p className="fw">아이디어와 문제 해결 방식을 <b>창의적으로 탐구</b>하는</p>
        </div>
        <div className="fp">
          <p className="meain">Perseverance</p>
          <p className="fw"><b>열정</b>과 <b>끈기</b>로 모인 동아리입니다.</p>
        </div>
      </div>
    </>
  );
}

export default Four;
