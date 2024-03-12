import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import bg1 from "./img/rock.png";
import bg2 from "./img/racing.png";
import bg3 from "./img/code.png";
import bg4 from "./img/hotel.png";
import bg5 from "./img/ppt.png";
import bg6 from "./img/ppt1.png";
import bg7 from "./img/ppt2.png";
import bg8 from "./img/ppt3.png";
import bg9 from "./img/ppt4.png";
import bg10 from "./img/ppt5.png";
import study from "./img/study.png";
import project from "./img/hand.png";
import activity from "./img/factivity.png";

const Letters = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  color: #D38AFF;
  z-index: 100;
  font-size: 80px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.active {
    opacity: 1;
  }
`;

const DescriptionOverlay = styled.div`
  position: absolute;
  left: 5%;
  top: 30%;
  color: #fff;
  z-index: 100;
  font-size: 24px;
  white-space: pre-line;
  text-align: left;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.active {
    opacity: 1;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 360px;
  position: absolute;
  bottom: 0;
  display: flex;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.active {
    opacity: 1;
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  align-items: center;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 360px;
  background-color: rgba(0, 0, 0, 0.6);
  img {
    margin-left: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    width: 400px;
    height: 215px;
    object-fit: cover;
  }
`;


const bgArr = [
  { img: bg1, key: 1 },
  { img: bg2, key: 2 },
  { img: bg3, key: 3 },
  { img: bg4, key: 4 },
  { img: bg5, key: 5 },
  { img: bg6, key: 6 },
  { img: bg7, key: 7 },
  { img: bg8, key: 8 },
  { img: bg9, key: 9 },
  { img: bg10, key: 10 },
  { img: bg1, key: 11 },
  { img: bg2, key: 12 },
  { img: bg3, key: 13 },
  { img: bg4, key: 14 },
  { img: bg5, key: 15 },
  { img: bg6, key: 16 },
  { img: bg7, key: 17 },
  { img: bg8, key: 18 },
  { img: bg9, key: 19 },
  { img: bg10, key: 20 },
];

const imgList = [study, project, activity];

const keyList = ["Study", "Project", "Activity"];

const wordList = [
  "다양한 프로그래밍 언어를 배우고\n문제해결 능력을 키우기 위해 주기적으로\n코딩 스터디를 진행합니다.",
  "동아리 웹사이트, VR게임, RC카,\n소형 로봇팔 등을 개발하였으며,\n다양한 분야의 프로젝트에 참여합니다.",
  "2023년도 창업 교육 수강 및\n창업 대회 참가를 하였으며,\n개발 및 아이디어 공모전 등에 참가하였습니다.",
];

function Five() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideInterval, setSlideInterval] = useState(1500);

  //배경 이미지
  const [imgIndex, setImgIndex] = useState(0);

  const slideRef = useRef(null);

  const BG_NUM = bgArr.length;
  const beforeSlide = bgArr[BG_NUM - 1];
  const afterSlide = bgArr[0];

  let slideArr = [beforeSlide, ...bgArr, afterSlide];
  const SLIDE_NUM = slideArr.length;

  // 이미지 넘어가는 개수
  useEffect(() => {
    const id = setInterval(() => setSlideIndex((prev) => prev + 1), slideInterval);
    return () => clearInterval(id);
  }, [slideInterval]);

  //배경 이미지에 대한 코드
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const InfiniteSlideHandler = (flytoIndex) => {
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }
      setSlideIndex(flytoIndex);
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 500ms linear";
        }
      });
    }, 500);
  };

  if (slideIndex === SLIDE_NUM - 1) {
    InfiniteSlideHandler(1);
  }
  //갱신되는 이미지 위치

  if (slideIndex === 0) {
    InfiniteSlideHandler(BG_NUM);
  }

  return (
    <>
      <div className='gradient_background'></div>
      {imgList.map((img, index) => (
        <>
        <BackgroundImage
          key={`img-${index}`}
          className={`fimg ${index === imgIndex ? "active" : ""}`}
          src={img}
          alt={`img-${index}`}
        />
        <Letters className={index === imgIndex ? "active" : ""}>
          {keyList[index]}
        </Letters>
        <DescriptionOverlay className={index === imgIndex ? "active" : ""}>
         {wordList[index]}
        </DescriptionOverlay>
        </>
      ))}
      <Background>
      <div className='gradient_backgroundl'></div>
      <div className='gradient_backgroundr'></div>
        <ImgContainer
          ref={slideRef}
          style={{
            transition: "all 0 linear",
            transform: `translateX(${-1 * ((300 / slideArr.length) * slideIndex)}%)`,
          }}
        >
          {slideArr.map((item, index) => (
            <ImgBox key={index}>
              <img src={item.img} alt={`slide-${index}`} />
            </ImgBox>
          ))}
        </ImgContainer>
      </Background>
    </>
  );
}

export default Five;
