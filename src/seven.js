// import React, { useState } from "react";
// import styled, { css } from "styled-components";
// import active from './img/hand.png';
// import { BsXLg } from "react-icons/bs";


// const Card = styled.div`
//     position: relative;
//     justify-content: center;
//     display: flex;
//     align-items: center;
//     overflow: hidden;
//     border: none;
//     border-radius: 30px;
//     height: 300px;
//     width: 490px;
//     transition: all 0.5s ease-in-out;
//     ${props =>
//         props.large === "true" && css`
//             height: 630px;
//             width: 1000px;
//         `}
//     img {
//         height: 100%;
//         width: 100%;
//     }
// `;

// const Title = styled.h2`
//     align-items: center;
//     text-align: center;
//     color: #FFFFFF;
//     font-weight: 700;
//     font-size: 48px;
//     line-height: 60px;
//     margin: 50px 0 0 0;
//     cursor: default;
// `;

// const Cardtitle = styled.h2`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     margin: 0;
//     z-index: 1;
//     color: #fff;
//     transition: transform 0.6s;
//     font-weight: 800;
//     font-size: 56px;
//     display: flex;
//     cursor: default;
//     justify-content: center;
//     align-items: center;
//     transition: all 0.3s ease-out;
//     ${Card}:hover & {
//         transform: translateY(-100%);
//     }
// `;

// const Cardlp = styled.p`
//     display: flex;
//     font-size: 18px;
//     line-height: 29px;
//     justify-content: center;
//     text-align: center;
//     color: #fff;
//     opacity: 0;
//     text-align:left;
//     transition: opacity 0.35s ease-in-out;
//     ${Card}:hover & {
//         opacity: 1;
//     }
// `;

// const Cardp = styled.p`
//     display: flex;
//     font-size: 18px;
//     line-height: 29px;
//     justify-content: center;
//     text-align: center;
//     color: #fff;
//     opacity: 0;
//     transition: opacity 0.35s ease-in-out;
//     ${Card}:hover & {
//         opacity: 1;
//     }
// `;

// const Cardbigp = styled.p`
//     display: inline-block;
//     font-size: 36px;
//     line-height: 29px;
//     height: 107px;
//     text-align: center;
//     color: #fff;
//     opacity: 0;
// `;

// const Cardbutton = styled.button`
//     border: none;
//     background-color: #D38AFF;
//     border-radius: 15px;
//     color: #fff;
//     width: 90px;
//     height: 32px;
//     font-weight: normal;
//     font-size: 18px;
//     align-items: center;
//     text-align: center;
//     justify-content: center;
//     opacity: 0;
//     cursor: pointer;
//     transition: opacity 0.35s ease-in-out;
//     ${Card}:hover & {
//         opacity: 1;
//     }
// `;

// const StyledBsXLg = styled(BsXLg)`
//     cursor: pointer;
//     position: absolute;
//     z-index: 2;
//     right: 20px;
//     top: 20px;
//     @media (max-width: 768px) {
//         font-size: 18px;
//         right: 10px;
//         top: 10px;
//     }
// `;

// function Seven() {
//     const [isLarge, setIsLarge] = useState(false);
//     const [showInfo, setShowInfo] = useState(true);
//     const [isHovered, setIsHovered] = useState(false);

//     const handleButtonClick = () => {
//         setIsLarge(!isLarge);
//         setShowInfo(!showInfo);
//     };

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     return(
//         <>
//         <Title>Insight의 부서를 소개합니다</Title>
//         <div className="sev">
//             <Card large={isLarge.toString()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 {isLarge && <StyledBsXLg size="30" onClick={handleButtonClick} />}
//                 <img src={active} alt="창업" />
//                 <div className="card-body">
//                     <Cardtitle>창업</Cardtitle>
//                         <div className="info">
//                             <Cardp style={{opacity: showInfo ? 1 : 0}}>창업을 위한 교육부터<br/>실제 창업에 대한 멘토링뿐만 아니라<br/>다양한 지원을 받으며 활동을 하는 부서입니다.</Cardp>
//                             <Cardbutton style={{opacity: showInfo ? 1 : 0}} onClick={handleButtonClick}>상세보기</Cardbutton>
//                         </div>
//                             <Cardbigp style={{opacity: !showInfo ? 1 : 0}}>창업 관련 공모전을 통해 경험을 쌓아가는 부서입니다.</Cardbigp>
//                             <Cardlp style={{opacity: !showInfo ? 1 : 0}}>[핵심 활동]<br /><br />
//                             2023년 - 2023 학생 창업 유망팀 300 대회 교육트랙 과정을 참가하여,<br />
//                             산학협력 엑스포 학생창업 페스티벌 교육트랙 미니 데모데이 참여 10팀에 선정되었으며,<br />
//                             창업에 필요한 지식을 쌓고 경험을 했습니다.<br /> 또 동의대학교에서 주관한 창업 관련 대회에 출전하여 수상했으며<br /> 
//                             2024년 학생 창업 유망팀 300대회 성장트랙에 참가 예정입니다<br /><br />
//                             [필요 역량]<br /><br />
//                             창의적인 아이디어와 이를 구현할 수 있도록 노력하는 끈기, 창업에 대한 관심<br /><br />
//                             [부서원]<br /><br />
//                             최영미, 김봉주, 김현, 박재성, 신승우
//                             </Cardlp>
//                 </div>
//             </Card>
//             <Card large={isLarge.toString()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 {isLarge && <StyledBsXLg size="30" onClick={handleButtonClick} />}
//                 <img src={active} alt="창업" />
//                 <div className="card-body">
//                     <Cardtitle>로봇</Cardtitle>
//                         <div className="info">
//                             <Cardp style={{opacity: showInfo ? 1 : 0}}>3D프린터를 활용하여<br /> 하드웨어 부품 제작부터 <br /> 인공지능 로봇 개발 까지의 <br/>프로젝트 진행하는 부서입니다.</Cardp>
//                             <Cardbutton style={{opacity: showInfo ? 1 : 0}} onClick={handleButtonClick}>상세보기</Cardbutton>
//                         </div>
//                             <Cardbigp style={{opacity: !showInfo ? 1 : 0}}>3D프린터를 이용해 직접 하드웨어 부품 제작부터<br />인공지능 로봇 개발 프로젝트 진행하는 부서입니다.</Cardbigp>
//                             <Cardlp style={{opacity: !showInfo ? 1 : 0}}>[핵심 활동]<br /><br />
//                             현재 로봇 팔 프로젝트와 Rc카 프로젝트를 진행중.<br />
//                             로봇 팔 프로젝트에는 라이더 센서를 이용한 자율주행 기능,<br />
//                             카메라 센서와 OpenCV를 이용한 객체 인식 기능,<br /> 
//                             객체 인식 후 목적지에 도달할 수 있게 모터 제어 등의 기술 사용.<br /> 
//                             ROS로봇 운영 체제에서 개발 진행중.<br />
//                             Rc카 프로젝트는 라즈베리파이를 이용해서 모바일 어플로 제어하는 프로젝트로 현재는 개발 단계<br /><br />
//                             [필요 역량]<br /><br />
//                             로봇 프로그래밍(ROS)에 관심이 있는 사람<br /><br />
//                             [부서원]<br /><br />
//                             김민경, 최홍록, 강현재, 유소혜, 황설이, 김봉주
//                             </Cardlp>
//                 </div>
//             </Card>
//             <Card large={isLarge.toString()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 {isLarge && <StyledBsXLg size="30" onClick={handleButtonClick} />}
//                 <img src={active} alt="창업" />
//                 <div className="card-body">
//                     <Cardtitle>게임</Cardtitle>
//                         <div className="info">
//                             <Cardp style={{opacity: showInfo ? 1 : 0}}>Unity엔진을 기반으로<br/>2D, 3D, VR등 여러 환경에서<br/>게임 개발을 하는 부서입니다.</Cardp>
//                             <Cardbutton style={{opacity: showInfo ? 1 : 0}} onClick={handleButtonClick}>상세보기</Cardbutton>
//                         </div>
//                             <Cardbigp style={{opacity: !showInfo ? 1 : 0}}>2D, 3D, VR등 여러 환경의 게임 개발을 경험할 수 있는 부서입니다.</Cardbigp>
//                             <Cardlp style={{opacity: !showInfo ? 1 : 0}}>[핵심 활동]<br /><br />
//                             2023년 - Python 라이브러리인 Pygame과 OpenCV를 활용하여<br />
//                             모션인식을 통한 리듬게임 제작.<br />
//                             VR기기를 활용하여 디펜스 게임 제작.<br /> 
//                             2024년 - 제작하고 싶은 게임을 기획한 후,<br />
//                             Unity Engine을 활용하여 게임을 개발 예정<br /><br />
//                             [필요 역량]<br /><br />
//                             게임 시스템에 대한 이해도, 게임 개발에 대한 흥미, 컴퓨터 언어를 사용가능 '또는' 게임 기획에 관심<br /><br />
//                             [부서원]<br /><br />
//                             신승우, 유민형, 박상현, 한유민
//                             </Cardlp>
//                 </div>
//             </Card>
//             <Card large={isLarge.toString()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 {isLarge && <StyledBsXLg size="30" onClick={handleButtonClick} />}
//                 <img src={active} alt="창업" />
//                 <div className="card-body">
//                     <Cardtitle>웹</Cardtitle>
//                         <div className="info">
//                             <Cardp style={{opacity: showInfo ? 1 : 0}}>창업을 위한 교육부터<br/>실제 창업에 대한 멘토링뿐만 아니라<br/>다양한 지원을 받으며 활동을 하는 부서입니다.</Cardp>
//                             <Cardbutton style={{opacity: showInfo ? 1 : 0}} onClick={handleButtonClick}>상세보기</Cardbutton>
//                         </div>
//                             <Cardbigp style={{opacity: !showInfo ? 1 : 0}}>창업 관련 공모전을 통해 경험을 쌓아가는 부서입니다.</Cardbigp>
//                             <Cardlp style={{opacity: !showInfo ? 1 : 0}}>[핵심 활동]<br /><br />
//                             2023년 - 2023 학생 창업 유망팀 300 대회 교육트랙 과정을 참가하여,<br />
//                             산학협력 엑스포 학생창업 페스티벌 교육트랙 미니 데모데이 참여 10팀에 선정되었으며,<br />
//                             창업에 필요한 지식을 쌓고 경험을 했습니다.<br /> 또 동의대학교에서 주관한 창업 관련 대회에 출전하여 수상했으며<br /> 
//                             2024년 학생 창업 유망팀 300대회 성장트랙에 참가 예정입니다<br /><br />
//                             [필요 역량]<br /><br />
//                             창의적인 아이디어와 이를 구현할 수 있도록 노력하는 끈기, 창업에 대한 관심<br /><br />
//                             [부서원]<br /><br />
//                             박재성, 이재언, 김봉주, 최영미
//                             </Cardlp>
//                 </div>
//             </Card>
//         </div> 
//         </>
//     );
// }

// export default Seven;



import React, { useState } from "react";
import styled, { css } from "styled-components";
import active from './img/hand.png';
import { BsXLg } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const CardGroup = styled.div`
  width: calc(50% - 10px);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: none;
  border-radius: 30px;
  height: 250px;
  transition: all 0.5s ease-in-out;
  z-index: ${props => (props.large ? 2 : 1)};
  ${props =>
    props.large &&
    css`
      height: 530px;
    `}
  img {
    height: 100%;
    width: 100%;
  }
`;

const Title = styled.h2`
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  margin: 50px 0 0 0;
  cursor: default;
`;

const Cardtitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  z-index: 1;
  color: #fff;
  transition: transform 0.6s;
  font-weight: 800;
  font-size: 56px;
  display: flex;
  cursor: default;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  ${Card}:hover & {
    transform: translateY(-100%);
  }
`;

const Cardp = styled.p`
  display: flex;
  font-size: 18px;
  line-height: 29px;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const Cardbigp = styled.p`
  display: inline-block;
  font-size: 36px;
  line-height: 29px;
  height: 107px;
  text-align: center;
  color: #fff;
`;

const Cardbutton = styled.button`
  border: none;
  background-color: #d38aff;
  border-radius: 15px;
  color: #fff;
  width: 90px;
  height: 32px;
  font-weight: normal;
  font-size: 18px;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledBsXLg = styled(BsXLg)`
  cursor: pointer;
  position: absolute;
  z-index: 3;
  right: 20px;
  top: 20px;
  @media (max-width: 768px) {
    size: 8px;
    right: 10px;
    top: 10px;
  }
`;

const departments = [
  {
    title: "창업",
    description: "창업을 위한 교육부터 실제 창업에 대한 멘토링뿐만 아니라 다양한 지원을 받으며 활동을 하는 부서입니다.",
    coreActivity: "핵심 활동: 2023년 - 2023 학생 창업 유망팀 300 대회 교육트랙 과정을 참가하여, 산학협력 엑스포 학생창업 페스티벌 교육트랙 미니 데모데이 참여 10팀에 선정되었으며, 창업에 필요한 지식을 쌓고 경험을 했습니다. 또 동의대학교에서 주관한 창업 관련 대회에 출전하여 수상했으며 2024년 학생 창업 유망팀 300대회 성장트랙에 참가 예정입니다",
    requiredSkills: "필요 역량: 창의적인 아이디어와 이를 구현할 수 있도록 노력하는 끈기, 창업에 대한 관심",
    members: "부서원: 최영미, 김봉주, 김현, 박재성, 신승우"
  },
  {
    title: "로봇",
    description: "3D프린터를 활용하여 하드웨어 부품 제작부터 인공지능 로봇 개발 까지의 프로젝트 진행하는 부서입니다.",
    coreActivity: "핵심 활동: 현재 로봇 팔 프로젝트와 Rc카 프로젝트를 진행중. 로봇 팔 프로젝트에는 라이더 센서를 이용한 자율주행 기능, 카메라 센서와 OpenCV를 이용한 객체 인식 기능, 객체 인식 후 목적지에 도달할 수 있게 모터 제어 등의 기술 사용. ROS로봇 운영 체제에서 개발 진행중. Rc카 프로젝트는 라즈베리파이를 이용해서 모바일 어플로 제어하는 프로젝트로 현재는 개발 단계",
    requiredSkills: "필요 역량: 로봇 프로그래밍(ROS)에 관심이 있는 사람",
    members: "부서원: 김민경, 최홍록, 강현재, 유소혜, 황설이, 김봉주"
  },
  {
    title: "게임",
    description: "Unity엔진을 기반으로 2D, 3D, VR등 여러 환경에서 게임 개발을 하는 부서입니다.",
    coreActivity: "핵심 활동: 2023년 - Python 라이브러리인 Pygame과 OpenCV를 활용하여 모션인식을 통한 리듬게임 제작. VR기기를 활용하여 디펜스 게임 제작. 2024년 - 제작하고 싶은 게임을 기획한 후, Unity Engine을 활용하여 게임을 개발 예정",
    requiredSkills: "필요 역량: 게임 시스템에 대한 이해도, 게임 개발에 대한 흥미, 컴퓨터 언어를 사용가능 또는 게임 기획에 관심",
    members: "부서원: 신승우, 유민형, 박상현, 한유민"
  },
  {
    title: "웹",
    description: "창업을 위한 교육부터 실제 창업에 대한 멘토링뿐만 아니라 다양한 지원을 받으며 활동을 하는 부서입니다.",
    coreActivity: "핵심 활동: 2023년 - 2023 학생 창업 유망팀 300 대회 교육트랙 과정을 참가하여, 산학협력 엑스포 학생창업 페스티벌 교육트랙 미니 데모데이 참여 10팀에 선정되었으며, 창업에 필요한 지식을 쌓고 경험을 했습니다. 또 동의대학교에서 주관한 창업 관련 대회에 출전하여 수상했으며 2024년 학생 창업 유망팀 300대회 성장트랙에 참가 예정입니다",
    requiredSkills: "필요 역량: 창의적인 아이디어와 이를 구현할 수 있도록 노력하는 끈기, 창업에 대한 관심",
    members: "부서원: 박재성, 이재언, 김봉주, 최영미"
  }
];

function Seven() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleButtonClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Title>Insight의 부서를 소개합니다</Title>
      <Container>
        {departments.map((department, index) => (
          <CardGroup key={index}>
            {expandedIndex === index && (
              <Card large={true}>
                <StyledBsXLg size="20" onClick={() => handleButtonClick(index)} />
                <img src={active} alt={department.title} />
                <div className="card-body">
                  <Cardtitle>{department.title}</Cardtitle>
                  <div className="info">
                    <Cardbigp>{department.coreActivity}</Cardbigp>
                    <Cardbigp>{department.requiredSkills}</Cardbigp>
                    <Cardbigp>{department.members}</Cardbigp>
                  </div>
                </div>
              </Card>
            )}
            {expandedIndex !== index && (
              <Card>
                <img src={active} alt={department.title} />
                <div className="card-body">
                  <Cardtitle>{department.title}</Cardtitle>
                  <Cardp>{department.description}</Cardp>
                  <Cardbutton onClick={() => handleButtonClick(index)}>상세보기</Cardbutton>
                </div>
              </Card>
            )}
          </CardGroup>
        ))}
      </Container>
    </>
  );
}

export default Seven;
