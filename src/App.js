import React, { useEffect, useRef } from 'react';
import './App.css';
import Frist from './frist';
import Third from './third';
import Four from './four';
import Five from './five';
import Six from './six';
import Footer from './Footer';
import GNB from './GNB';
import { Routes, Route } from 'react-router-dom';
import Member from './Members';

function Slider() {
  const slidesRef = useRef(null);
  let slides = [];
  let count = 0;
  let current = 0;
  let touchstart = 0;
  let animationState = false;

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
      setTimeout(() => (animationState = false), 1000);  // 페이지 전환 딜레이 추가
      current = index;
      slides.forEach((slide, i) => {
        slide.style.bottom = `${(current - i) * 100}%`;
        if (i === index) {
          slide.classList.add('visible');
          triggerAnimation(slide, true);
        } else {
          slide.classList.remove('visible');
          triggerAnimation(slide, false);
        }
      });
    }
  };

  const triggerAnimation = (slide, isVisible) => {
    const scale = isVisible ? 'scale(5)' : 'scale(1)';
    const opacity = isVisible ? '0' : '1';
    const transform = isVisible ? 'scale(3.5)' : 'scale(1)';
    const elementsToUpdate = [
      { selector: '#thirdlogo', style: { transform: scale, opacity } },
      { selector: '.intro', style: { transform, opacity: '1' } },
      { selector: '.fo, .fi, .fc, .fp', style: { opacity: isVisible ? '1' : '0' } },
      { selector: '.fc, .fp', style: { transform: isVisible ? 'translateZ(0)' : 'translate3d(0, 100%, 0)' } }
    ];

    elementsToUpdate.forEach(({ selector, style }) => {
      slide.querySelectorAll(selector).forEach(element => {
        Object.assign(element.style, style);
      });
    });
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
    if (animationState) return;  // 애니메이션 상태가 진행 중이면 이벤트 무시
    if (e.deltaY < 0) {
      gotoPrev();
    } else {
      gotoNext();
    }
  };

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
      <div className="five page six">
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
