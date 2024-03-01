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

function Four() {
  return (
    <>
      <div className="lifour">
        <div className='word'>
          <b className='meain'>Insight</b>
          <hr className="line" />
          <ul className="dot">
            <li>문제나 상황을 이해하고 <b>본질</b>이나 <b>원리</b>를 파악하여</li>
          </ul>
        </div>
        <div className='word'>
          <b className='meain'>Creative</b>
          <hr className="line" />
          <ul className="dot">
            <li>아이디어와 문제 해결 방식을 <b>창의적으로 탐구</b>하는</li>
          </ul>
        </div>
        <div className='word'>
          <b className='meain'>Perseverance</b>
          <hr className="line" />
          <ul className="dot">
            <li><b>열정</b>과 <b>끈기</b>로 모인 동아리 입니다</li>
          </ul>
        </div>
        </div>
    </>
  );
}

export default Four;
