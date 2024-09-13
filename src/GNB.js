import { NavLink } from 'react-router-dom';
import logo from './img/insight로고.png';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

function GNB() {
  const [showGNB, setShowGNB] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setShowGNB(false); // 스크롤을 내릴 때 GNB 숨김
    } else {
      setShowGNB(true); // 스크롤을 올릴 때 GNB 표시
    }
    lastScrollY.current = window.scrollY; // 현재 스크롤 위치 저장
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 빈 배열로 설정하여 처음에만 이벤트 리스너 추가

  const activeStyle = {
    color: '#7F2BE2',
  };

  return (
    <StyledGNB show={showGNB}>
      <div className='gnb'>
        <a href='/' className='home'>
          <div className='logo-container'>
            <img src={logo} alt="logo" />
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
            <a href='https://forms.gle/uViXK1omcxEKu7JVA'><button className='joinbtn'>Join Us</button></a>
          </li>
        </ul>
      </div>
    </StyledGNB>
  );
}

export default GNB;

const StyledGNB = styled.div`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 99999;
  background-color: #000;
  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;
