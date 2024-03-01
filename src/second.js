import React from "react";
// import map from './img/deumap.png';
import deu from './img/deu.png';

function Second() {
    return(
        <>
        {/* <div>
            <img src={map} alt='map' className='map'/>
        </div> */}
        <div className='deupmap'>
            <img src={deu} alt='deu' className='deu' />
            <p className='gather'>동의대학교를 중심으로 모인</p>
        </div>
        </>
    )
}

export default Second;
