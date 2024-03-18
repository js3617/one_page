import React, { useEffect, useRef } from 'react';
import './App.css';
import Frist from './frist';
// import Second from './second';
import Third from './third';
import Four from './four';
import Five from './five';
import Six from './six';
import Footer from './Footer';
import GNB from './GNB';
import { Routes, Route } from 'react-router-dom';
import Member from './Members';


function Slider() {
  // 변수 및 상태
  const slidesRef = useRef(null);
  let slides = [];
  let count = 0;
  let current = 0;
  let touchstart = 0;
  let animationState = false;

  // 페이지 초기화 및 이벤트 핸들러
  useEffect(() => {
    initializeSlider();
  }, []);

  const initializeSlider = () => {
    slides = Array.from(slidesRef.current?.children);
    count = slides?.length;

    if (slides && count) {
      slides.forEach((slide, index) => {
        slide.style.bottom = `-${index * 100}%`;
      });
    }
  };

  const gotoNum = (index) => {
    if (index !== current && !animationState) {
      animationState = true;
      setTimeout(() => (animationState = false), 500);
      current = index;
      slides.forEach((slide, i) => {
        slide.style.bottom = `${(current - i) * 100}%`;
        if (i === index) {
          slide.classList.add('visible');
          // visible 클래스가 추가될 때 애니메이션 트리거
          slide.querySelectorAll('#thirdlogo').forEach(element => {
            element.style.transform = 'scale(5)';
            element.style.opacity = '0';
          });
          slide.querySelectorAll('.intro').forEach(element => {
            element.style.transform = 'scale(3.5)';
            element.style.opacity = '1';
          });
          slide.querySelectorAll('.fo, .fi, .fc, .fp').forEach(element => {
            element.style.opacity = '1';
          });
          slide.querySelectorAll('.fc, .fp').forEach(element => {
            element.style.transform = 'translateZ(0)';
          });
        } else {
          slide.classList.remove('visible');
          // visible 클래스가 제거될 때 애니메이션 초기화
          slide.querySelectorAll('#thirdlogo').forEach(element => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
          });
          slide.querySelectorAll('.intro').forEach(element => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
          });
          slide.querySelectorAll('.fo, .fi, .fc, .fp').forEach(element => {
            element.style.opacity = '0';
          });
          slide.querySelectorAll('.fc, .fp').forEach(element => {
            element.style.transform = 'translate3d(0, 100%, 0)';
          });
        }
      });
    }
  };
  

  const gotoNext = () => (current < count - 1 ? gotoNum(current + 1) : false);
  const gotoPrev = () => (current > 0 ? gotoNum(current - 1) : false);

  const handleTouchStart = (e) => (touchstart = e.touches[0].screenY);
  const handleTouchEnd = (e) => {
    if (touchstart < e.changedTouches[0].screenY) {
      gotoPrev();
    } else {
      gotoNext();
    }
  };

  const handleMouseWheel = (e) => {
    if (e.deltaY < 0) {
      gotoPrev();
    } else {
      gotoNext();
    }
  };

  // 렌더링
  return (
    <div
      className="pages"
      ref={slidesRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onWheel={handleMouseWheel}
    >
      <div className="first page">
        <Frist />
      </div>
      <div className="second page">
        <Third />
      </div>
      <div className="third page">
        <Four />
      </div>
      <div className="four page">
        <Five />
      </div>
      <div className="five page">
        <Six />
      </div>
      <div className="six page">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <GNB />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/members" element={<Member />} />
      </Routes>
    </div>
  );
}

export default App;
