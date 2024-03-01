import Main from './img/메인 이미지.png';
import React from "react";


function Frist() {
    return(
        <>
            <div>
                <img src={Main} alt='Main' className='Mainimg'/>
            </div>
            <div className='maintext'>
                <p className='IT'>IT의 미래를 여는 창의적 개발의 시작, 당신의 통찰력이 필요합니다.</p>
                <b className='Need'>Need Your <b className='insighttext'>Insight</b></b>
            </div>
        </>
    )
}

export default Frist;