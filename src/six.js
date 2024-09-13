import React, { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import styled from 'styled-components';
import active from './img/founded.png';
import robot from './img/robot.png';
import game from './img/game.png';
import web from './img/web.png';

const imgList = [active, robot, game, web];

const SixContent = styled.div`
    height: 100%;
`

const Title = styled.h2`
    align-items: center;
    text-align: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    margin: 50px 0 50px 0;
    cursor: default;
    @media (max-width: 768px){
    font-size: 1.5rem;
    margin-top: 15%;
    margin-bottom: 0;
  }
  @media (max-width: 1023px){
    font-size: 2rem;
    margin-top: 10%;
    margin-bottom: 0;
  }
  @media (max-width: 1200px) {
        font-size: 1.5rem;
    }
`;

const Container = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
    }
`;

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border: none;
    border-radius: 30px;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.3s ease;
    height: 30vh;
    width: 500px
    img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        height: 18vh;
        width: 100%;
        z-index: 5;
    }

`;

const CardContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const Cardbigp = styled.p`
    display: inline-block;
    text-align: left;
    font-size: 1.8rem;
    height: 10vw;
    text-align: le;
    color: #fff;
    white-space: pre-line;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        margin-bottom: 70px;
    }
    @media (max-width: 1023px) {
        font-size: 1rem;
        margin-bottom: 70px;
    }
    @media (max-width: 1200px) {
        font-size: 1rem;
    }
`;

const Cardp = styled.p`
    display: flex;
    font-size: 18px;
    line-height: 29px;
    white-space: pre-line;
    justify-content: center;
    text-align: center;
    color: #fff;
    margin: 15px 0 15px 0;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.3s ease;
    ${Card}:hover & {
        opacity: 1;
    }
    @media (max-width: 768px) {
        font-size: 0.5rem;
        line-height: 1rem;
    }
    @media (max-width: 1023px) {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
    @media (max-width: 1200px) {
        font-size: 0.7rem;
        line-height: 1rem;
    }
`;

const Cardlp = styled.p`
    font-size: 1rem;
    line-height: 2rem;
    color: #fff;
    white-space: pre-line;
    justify-content: flex-start;
    @media (max-width: 768px) {
        font-size: 0.55rem;
        line-height: 1rem;
    }
    @media (max-width: 1024px) {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
    @media (max-width: 1200px) {
        font-size: 0.7rem;
        line-height: 1rem;
    }
`;

const Cardtitle = styled.p`
    display: flex;
    font-size: 48px;
    font-weight: 700;
    line-height: 29px;
    justify-content: center;
    text-align: center;
    color: #fff;
    transition: all 0.3s ease-out;
    ${Card}:hover & {
    transform: translateY(-100%);
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 5px;
    }
    @media (max-width: 1023px) {
        font-size: 1.8rem;
        line-height: 5px;
    }
    @media (max-width: 1200px) {
        font-size: 1.2rem;
        
    }
`;

const Cardbutton = styled.button`
    border: none;
    background-color: #7F2BE2;
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
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.3s ease;
    ${Card}:hover & {
        opacity: 1;
    }

    @media (max-width: 768px) {
        font-size: 0.7rem;
        height: 25px;
    }
    @media (max-width: 1200px) {
        font-size: 0.8rem;
        
    }
`;

const NewCard = styled.div`
    border: none;
    border-radius: 30px;
    height: 85vh;
    width: 80%;
    max-width: 990px;
    max-height: 630px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    img {
        border-radius: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;

        @media (max-width: 768px) {
        height: 40%;
        top: 130px;
        }
    }
    @media (max-width: 768px) {
        height: 100%; /* 높이 자동 조정 */
        width: 100%; /* 최대 너비를 100%로 설정 */
    }
`;

const NewCardtitle = styled.p`
    display: flex;
    font-size: 3rem;
    font-weight: 700;
    justify-content: center;
    left: 0;
    text-align: center;
    color: #fff;
    text-align: left;
    float: left;
    @media (max-width: 767px) {
        font-size: 2rem;
        margin-top: 30px;
    }
    @media (max-width: 1023px) {
        font-size: 1rem;
        margin-top: 30px;
    }
    @media (max-width: 1200px) {
        font-size: 2rem;
    }
`;
const NewCardContent = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 4vw 6vw 6vw 4vw;
    z-index: 999; /* NewCard의 z-index가 BsXLgContainer보다 낮게 설정 */
    pointer-events: auto; /* 클릭 가능하도록 설정 */
`;


const BsXLgContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 10px;
    margin-right: 25px;
    z-index: 1000;
    @media (max-width: 768px) {
        right: -18.5rem;
        z-index: 99999;
    }
`;

const departments = [
    {
        title: "창업",
        motive: "창업 관련 공모전을 통해 경험을 쌓아가는 부서입니다",
        description: "창업을 위한 교육부터\n실제 창업에 대한 멘토링뿐만 아니라\n다양한 지원을 받으며 활동을 하는 부서입니다.",
        coreActivity: "[핵심 활동]\n2024 학생 창업유망팀 300+ 예비트랙 수료 중, 2024 글로벌 창업노마드 아이디어 경진대회 우수상 수상\n2024 동의대학교 창업역량강화를 위한 창업캠프 이수, 부산진구 대학연합창업아이디어 경진대회 장려상 수상\n2023년도 학생 창업유망팀 300 경진대회 교육트랙 수료, 2023년도 산학협력 엑스포 학생창업 페스티벌 교육트랙 미니 데모데이 참여 10팀 선정 \n2023 동의대학교 학생 창업 교육 및 경진대회 최우수상 수상",
        plan: "[추후 활동 계획]\n2024 창업 교육 및 프로그램 참여",
        requiredSkills: "[필요 역량]\n창업에 대한 관심",
        members: "[부서원]\n신승우, 한유민, 박상현, 정시영, 유소혜"
    },
    {
        title: "로봇",
        motive: "3D프린터를 이용해 직접 하드웨어 부품 제작부터\n인공지능 로봇 개발 프로젝트 진행하는 부서입니다",
        description: "3D프린터를 활용하여\n하드웨어 부품 제작부터\n인공지능 로봇 개발 프로젝트 진행하는 부서입니다.\n",
        coreActivity: "[핵심 활동]\nROS 로봇 운영 체제를 통해 자율주행 프로젝트 진행 중, 카메라로 정보 수집 후, 객체탐지 및 위치 감지를 통해 객체가 있는 위치로 Robot Arm 트래킹 기술 구현\n라즈베리파이를 활용한 RC카 설계 완료",
        plan: "[추후 활동 계획]\nROS 스터디 및 자율 주행 프로젝트, 새로운 프로젝트 진행 예정",
        requiredSkills: "[필요 역량]\n로봇 및 자율 주행에 대해 관심이 있는 사람",
        members: "[부서원]\n유소혜, 신승우, 김민경, 최홍록"
    },
    {
        title: "XR",
        motive: "Unity를 활용하여XR/AR/VR 관련\n프로젝트를기획하고 개발하는 부서입니다.",
        description: "Unity를 활용하여\nXR/AR/VR 관련 프로젝트를\n기획하고 개발하는 부서입니다",
        coreActivity: "[핵심 활동]\nVR로 배우는 체험형 비행 안전 교육 시뮬레이션을 개발하여 제12회 K-Hackathon 참가 (본선 진출)\n2024-Vision Pro XR IDEA Challenge 참가\n2023 겨울방학 - VR 디펜스 게임 개발",
        plan: "VR 디펜스 게임 최적화 및 확장, 비행 안전 교육 시뮬레이션 개발",
        requiredSkills: "[필요 역량]\nUnity Engine 사용 경험\nXR 분야 관심",
        members: "[부서원]\n한유민"
    },
    {
        title: "웹",
        motive: "UX/UI디자이너와의 협업으로 Front-End 및 Back-End 개발에 참여하여 웹 개발 경험을 키울 수 있는 부서입니다",
        description: "다양한 프레임워크를\n기반으로 웹사이트의\nUI/UX디자인을 통한 기획 및 개발을 하는 부서입니다.",
        coreActivity: "[핵심 활동]\n개인 맞춤형 향수 추천 웹사이트 개발 중, 드라마 추천 웹사이트 개발 증\nGPT API 활용 텍스트 게임 웹 개발하여 SW 개발공모전 참가\nReact 프레임워크 기반으로 2024 동아리 웹사이트 게발\nSpring Boot 프레임워크 기반으로 2023 동아리 웹사이트 개발",
        plan: "[추후 활동 계획]\n주제 선정 후 웹사이트 제작, 동아리 웹사이트 제작",
        requiredSkills: "[필요 역량]\nUX/UI 디자인에 관심이 있는 사람, 웹 개발 관심 및 python, java 등 프로그래밍 언어 사용 경험",
        members: "[부서원]\n김봉주, 박재성, 임성룡, 박해인, 정인호, 정지현, 조수진"
    }
];

const Six = ({stopSliderTouchEnd }) => {
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [showCard, setShowCard] = useState(true);

    const showDetails = (department) => {
        setSelectedDepartment(department);
        setShowCard(false);
    };

    const hideDetails = () => {
        setSelectedDepartment(null);
        setShowCard(true);
    };

    const stopScrollPropagation = (e) => {
        e.stopPropagation();
    };


    return (
        <SixContent>
            <Title>Insight의 부서를 소개합니다</Title>
            {showCard && (
                <Container>
                    {departments.map((department, index) => (
                        <Card key={index}
                            visible={!selectedDepartment || showCard}
                            onTouchEnd={(e) => {
                            stopSliderTouchEnd(e);
                        }}>
                            <img src={imgList[index]} alt='active' />
                            <CardContent>
                                <Cardtitle>{department.title}</Cardtitle>
                                <Cardp>{department.description}</Cardp>
                                <Cardbutton onClick={() => showDetails(department)}>상세보기</Cardbutton>
                            </CardContent>
                        </Card>
                    ))}
                </Container>
            )}
            {selectedDepartment && (
                <NewCard>
                    <img src={imgList[departments.findIndex(dep => dep.title === selectedDepartment.title)]} alt='card' />
                    <NewCardContent 
                        onTouchEnd={(e) => {
                        stopSliderTouchEnd(e)}}>
                        <BsXLgContainer onClick={hideDetails}>
                            <BsXLg style={{ cursor: 'pointer', maxHeight: '20px', maxWidth: '20px' }} />
                        </BsXLgContainer>
                        <NewCardtitle>{selectedDepartment.title}</NewCardtitle>
                        <br/>
                        <Cardbigp>{selectedDepartment.motive}</Cardbigp>
                        <br/>
                        <Cardlp>{selectedDepartment.coreActivity}</Cardlp>
                        <br/>
                        <Cardlp>{selectedDepartment.plan}</Cardlp>
                        <br/>
                        <Cardlp>{selectedDepartment.requiredSkills}</Cardlp>
                        <br/>
                        <Cardlp>{selectedDepartment.members}</Cardlp>
                    </NewCardContent>  
                </NewCard>
            )}
        </SixContent>
    );
};


export default Six;
