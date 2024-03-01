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


const Background = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
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
  align-items: center;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.6);
  img {
    margin-left: 20px;
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
];

const imgList = [study, project, activity];

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
      {imgList.map((img, index) => (
        <BackgroundImage
          key={`img-${index}`}
          className={`fimg ${index === imgIndex ? "active" : ""}`}
          src={img}
          alt={`img-${index}`}
        />
      ))}
      <Background>
        <ImgContainer
          ref={slideRef}
          style={{
            transition: "all 0 linear",
            transform: `translateX(${-1 * ((100 / slideArr.length) * slideIndex)}%)`,
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
