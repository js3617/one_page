import React, { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import styled from 'styled-components';
import active from './img/founded.png';
import robot from './img/robot.png';
import game from './img/game.png';
import web from './img/web.png';

const imgList = [active, robot, game, web];

const Title = styled.h2`
    align-items: center;
    text-align: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    margin: 50px 0 50px 0;
    cursor: default;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
`;

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border: none;
    border-radius: 30px;
    height: 300px;
    width: 500px
    img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
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
`;

const Cardbigp = styled.p`
    display: inline-block;
    float: left;
    font-size: 32px;
    height: 107px;
    text-align: center;
    color: #fff;
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
`;

const Cardlp = styled.p`
    float: left;
    font-size: 18px;
    line-height: 29px;
    white-space: pre-line;
    justify-content: center;
    text-align: center;
    color: #fff;
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
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.3s ease; /* 새로 추가 */
    ${Card}:hover & {
        opacity: 1;
    }
`;

const NewCard = styled.div`
    border: none;
    border-radius: 30px;
    height: 130px;
    width: 562px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    img {
        border-radius: 30px;
        position: absolute;
        height: 100%;
        width: 100%;
    }
`;

const NewCardtitle = styled.p`
    display: flex;
    font-size: 48px;
    font-weight: 700;
    line-height: 29px;
    justify-content: center;
    text-align: center;
    color: #fff;
`;

const NewCardContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
`;

const departments = [
    {
        title: "창업",
        motive: "창업 관련 공모전을 통해 경험을 쌓아가는 부서입니다",
        description: "창업을 위한 교육부터\n실제 창업에 대한 멘토링뿐만 아니라\n다양한 지원을 받으며 활동을 하는 부서입니다.",
        coreActivity: "[핵심 활동] 2023년 - 2023 학생 창업 유망팀 300 대회 교육트랙 과정을 참가하여, 산학협력 엑스포 학생창업 페스티벌 교육트랙 미니 데모데이 참여 10팀에 선정되었으며, 창업에 필요한 지식을 쌓고 경험을 했습니다. 또 동의대학교에서 주관한 창업 관련 대회에 출전하여 수상했으며 2024년 학생 창업 유망팀 300대회 성장트랙에 참가 예정입니다",
        requiredSkills: "[필요 역량] 창의적인 아이디어와 이를 구현할 수 있도록 노력하는 끈기, 창업에 대한 관심",
        members: "[부서원] 최영미, 김봉주, 김현, 박재성, 신승우"
    },
    {
        title: "로봇",
        motive:"3D프린터를 이용해 직접 하드웨어 부품 제작부터 인공지능 로봇 개발 프로젝트 진행하는 부서입니다",
        description: "3D프린터를 활용하여\n하드웨어 부품 제작부터\n인공지능 로봇 개발 까지의\n프로젝트 진행하는 부서입니다.",
        coreActivity: "[핵심 활동] 현재 로봇 팔 프로젝트와 Rc카 프로젝트를 진행중. 로봇 팔 프로젝트에는 라이더 센서를 이용한 자율주행 기능, 카메라 센서와 OpenCV를 이용한 객체 인식 기능, 객체 인식 후 목적지에 도달할 수 있게 모터 제어 등의 기술 사용. ROS로봇 운영 체제에서 개발 진행중. Rc카 프로젝트는 라즈베리파이를 이용해서 모바일 어플로 제어하는 프로젝트로 현재는 개발 단계",
        requiredSkills: "[필요 역량] 로봇 프로그래밍(ROS)에 관심이 있는 사람",
        members: "[부서원] 김민경, 최홍록, 강현재, 유소혜, 황설이, 김봉주"
    },
    {
        title: "게임",
        motive: "2D, 3D, VR등 여러 환경의 게임 개발을 경험할 수 있는 부서입니다",
        description: "Unity엔진을 기반으로\n2D, 3D, VR등 여러 환경에서\n게임 개발을 하는 부서입니다.",
        coreActivity: "[핵심 활동] 2023년 - Python 라이브러리인 Pygame과 OpenCV를 활용하여 모션인식을 통한 리듬게임 제작. VR기기를 활용하여 디펜스 게임 제작. 2024년 - 제작하고 싶은 게임을 기획한 후, Unity Engine을 활용하여 게임을 개발 예정",
        requiredSkills: "[필요 역량] 게임 시스템에 대한 이해도, 게임 개발에 대한 흥미, 컴퓨터 언어를 사용가능 또는 게임 기획에 관심",
        members: "[부서원] 신승우, 유민형, 박상현, 한유민"
    },
    {
        title: "웹",
        motive: "UX/UI디자이너와의 협업으로 Front-End 및 Back-End 개발에 참여하여 웹 개발 경험을 키울 수 있는 부서입니다",
        description: "다양한 프레임워크를\n기반으로 웹사이트의\nUI/UX디자인을 통한 기획 및 개발을 하는 부서입니다.",
        coreActivity: "[핵심 활동]\n현재 React 프레임워크를 기반으로 2024 동아리 웹사이트 제작\nPython Django 프레임워크를 기반으로 '나의 MBTI에 맞는 개발자 직업 찾기' 개발\nJava Spring Boot 프레임워크를 기반으로 2023동아리 홈페이지 개발\nFigma를 활용하여 웹 페이지의 와이어 프레임 및 프로토타입 제작",
        requiredSkills: "[필요 역량]\n창의적인 아이디어와 이를 구현할 수 있도록 노력하는 끈기, 창업에 대한 관심",
        members: "[부서원]\n박재성, 이재언, 김봉주, 최영미"
    }
];

const Six = () => {
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

    return (
        <>
            <Title>Insight의 부서를 소개합니다</Title>
            <Container>
                {departments.map((department, index) => (
                    <Card key={index} visible={!selectedDepartment || showCard}>
                        <img src={imgList[index]} alt='active' />
                        <CardContent>
                            <Cardtitle>{department.title}</Cardtitle>
                            <Cardp>{department.description}</Cardp>
                            <Cardbutton onClick={() => showDetails(department)}>상세보기</Cardbutton>
                        </CardContent>
                    </Card>
                ))}
            </Container>
            {selectedDepartment && (
                <NewCard>
                    <img src={imgList[departments.findIndex(dep => dep.title === selectedDepartment.title)]} alt='card' />
                    <NewCardContent>
                        <NewCardtitle>{selectedDepartment.title}</NewCardtitle>
                        <Cardbigp>{selectedDepartment.motive}</Cardbigp>
                        <Cardlp>{selectedDepartment.coreActivity}</Cardlp>
                        <Cardlp>{selectedDepartment.requiredSkills}</Cardlp>
                        <Cardlp>{selectedDepartment.members}</Cardlp>
                        <BsXLg style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={hideDetails} />
                    </NewCardContent>
                </NewCard>
            )}
        </>
    );
};

export default Six;
