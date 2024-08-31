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
    text-align: center;
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
        coreActivity: "[핵심 활동]\n2023년 - 2023 학생 창업 유망팀 300 대회 교육트랙 과정을 참가하여,\n산학협력 엑스포 학생창업 페스티벌 교육트랙 미니 데모데이 참여 10팀에 선정되었으며,\n창업에 필요한 지식을 쌓고 경험을 했습니다.\n또 동의대학교에서 주관한 창업 관련 대회에 출전하여 수상했으며\n2024년 학생 창업 유망팀 300대회 성장트랙에 참가 예정입니다",
        requiredSkills: "[필요 역량]\n창의적인 아이디어와 이를 구현할 수 있도록 노력하는 끈기, 창업에 대한 관심",
        members: "[부서원]\n신승우, 박상현, 한유민, 정시영, 유소혜"
    },
    {
        title: "로봇",
        motive: "3D프린터를 이용해 직접 하드웨어 부품 제작부터\n인공지능 로봇 개발 프로젝트 진행하는 부서입니다",
        description: "3D프린터를 활용하여\n하드웨어 부품 제작부터\n인공지능 로봇 개발 프로젝트 진행하는 부서입니다.\n",
        coreActivity: "[핵심 활동]\n현재 로봇 팔 프로젝트와 Rc카 프로젝트를 진행중.\n로봇 팔 프로젝트에는 라이더 센서를 이용한 자율주행 기능,\n카메라 센서와 OpenCV를 이용한 객체 인식 기능,\n객체 인식 후 목적지에 도달할 수 있게 모터 제어 등의 기술 사용.\nROS로봇 운영 체제에서 개발 진행중.\nRc카 프로젝트는 라즈베리파이를 이용해서 모바일 어플로 제어하는 프로젝트로 현재는 개발 단계",
        requiredSkills: "[필요 역량]\n로봇 프로그래밍(ROS)에 관심이 있는 사람",
        members: "[부서원]\n김민경, 최홍록, 유소혜"
    },
    {
        title: "AR / XR",
        motive: "Unity를 활용하여XR/AR/VR 관련 프로젝트를\n기획하고 개발하는 부서입니다.",
        description: "Unity를 활용하여\nXR/AR/VR 관련 프로젝트를\n기획하고 개발하는 부서입니다",
        coreActivity: "[핵심 활동]\n2023-겨울방학 때 VR 디펜스 게임을 제작 하며Unity와 VR에 기술 스택을 쌓아 왔으며,\n2024-Vision Pro XR IDEA Challenge에 참가하여 XR에 관한 아이디어를 기획 해보며,\n제 12회-K-Hackathon에 참가하여 가상현실(VR)로 배우는 체험형 비행 안전 교육 시뮬레이션을 제작하여 본선에 출전하였습니다.\n이후 VR 디펜스 게임과 비행 안전 교육 시뮬레이션을 계속해서\n개발을 진행하여 다양한 공모전에 참가 예정입니다.",
        requiredSkills: "[필요 역량]\nUnity, C# 등 개발 및 사용 경험이 있거나 XR/AR/VR에 대한 관심과 열정",
        members: "[부서원]\n한유민"
    },
    {
        title: "웹",
        motive: "UX/UI디자이너와의 협업으로 Front-End 및 Back-End 개발에 참여하여 웹 개발 경험을 키울 수 있는 부서입니다",
        description: "다양한 프레임워크를\n기반으로 웹사이트의\nUI/UX디자인을 통한 기획 및 개발을 하는 부서입니다.",
        coreActivity: "[핵심 활동]\n현재 React 프레임워크를 기반으로 2024 동아리 웹사이트 제작\nPython Django 프레임워크를 기반으로 '나의 MBTI에 맞는 개발자 직업 찾기' 개발\nJava Spring Boot 프레임워크를 기반으로 2023동아리 홈페이지 개발\nFigma를 활용하여 웹 페이지의 와이어 프레임 및 프로토타입 제작",
        requiredSkills: "[필요 역량]\n웹에 대한 관심, UX/UI에 대한 이해도, 직접 웹을 만들어보고 싶은 관심",
        members: "[부서원]\n박재성, 이재언, 김봉주, 정인호, 박해인, 정지현, 조수진"
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
