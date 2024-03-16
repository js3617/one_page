import { NavLink } from 'react-router-dom'; // Routes와 Route로 변경
import logo from './img/insight로고.png';

function GNB() {
    const activeStyle = {
      color: '#7F2BE2',
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
      </div>
    )
}

export default GNB;
