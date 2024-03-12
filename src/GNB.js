import { NavLink, Routes } from 'react-router-dom';
import logo from './img/insight로고.png';

function GNB() {
    const activeStyle = {
      color: 'purple',
    };
    
    return(
      <div className='gnb'>
          <a href='/' className='home'>
            <div className='logo-container'>
              <img src={logo} alt="logo"/>
              <p className='gnblogo'>Insight</p>
            </div>
          </a>
          <ul className="gnball">
            <li className="gnb-item">
              <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/'>
                Home
              </NavLink>
            </li>
            <li className="gnb-item">
                <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/Members'>
                    Members
                </NavLink>
            </li>
            <li className="gnb-item">
                <a href='https://forms.gle/BZDLTmMvgiozoQ2Y7'><button className='joinbtn'>Join Us</button></a>
            </li>
          </ul>
          <Routes>
            {/* <Route path='/AboutMain' element={<AboutMain />}></Route>
            <Route path='/Activity' element={<AboutMain />}></Route> */}
          </Routes>
      </div>
    )
}

export default GNB;
