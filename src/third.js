import insight from './img/logo.png';
import React from "react";
import logo from "./img/insight로고.png"


function Third() {
    return(
        <div className='third'>
            <div>
                <img src={logo} alt='Main' className='Mainimg' id='thirdlogo'/>
            </div>
            <div className='intro'>
                <p className='fo'>IT창업동아리</p>
                <img src={insight} alt='insight' className='insight' />
                <p className='fo'>를 소개합니다</p>
            </div>
        </div> 
    )
}

export default Third;