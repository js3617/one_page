import React from 'react';
import Memberdata from "./Memberdata";
import styled from 'styled-components';

const P = styled.p`
    display: flex;
    line-height: 35px;
    align: left;
    font-size: 24px;
    cursor: default;
    justify-content: flex-start;
    text-align: left;
    white-space: pre-line;
`
const BP = styled.p`
    font-size: 48px;
    font-weight: 800;
    display: flex;
    cursor: default;
    align: left;
    justify-content: flex-start;
`

const MembersContainer = styled.div`
    margin-top: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const MemberCard = styled.div`
    width: calc(33.33%);
    margin-bottom: 30px;
    padding: 20px;
    width:40%;
    margin-left: 30px;
    align-items: center;
    display: flex;
`;

const MemberImage = styled.img`
    width: ${props => props.isInsight ? '80px' : '200px'};
    height: ${props => props.isInsight ? '100px' : '250px'};
    background-size : cover;
    margin-right: 20px;
`;

const MemberInfo = styled.div`
    width: 100%;
`;

const Title = styled.h2`
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #ffffff;
    display: flex;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    margin: 50px 0 0 0;
    cursor: default;
`;

const Color = styled.h2`
    color: #7F2BE2;
    font-weight: 700;
    font-size: 48px;
    margin-left : 10px;
`

const Info = styled.p`
    color : #B6B6B6;
    font-size: 18px;
    margin-top: 50px;
`

function Member() {
    const leaders = Memberdata.filter(member => member.position === '부장' || member.position === '부부장');
    const otherMembers = Memberdata.filter(member => member.position !== '부장' && member.position !== '부부장');

    const leaderCards = leaders.map((leader) => (
        <MemberCard key={leader.id}>
            <MemberImage src={leader.imageUrl} alt={leader.name} />
            <MemberInfo>
                <P>{leader.position}</P>
                <P>{leader.department}</P>
                <BP>{leader.name}</BP>
                <P>{leader.major}</P>
                <P>{leader.grade}</P>
                <P>{leader.Interests}</P>
            </MemberInfo>
        </MemberCard>
    ));

    const otherMemberCards = otherMembers.map((member) => (
        <MemberCard key={member.id}>
            <MemberImage src={member.imageUrl} alt={member.name} isInsight={member.imageUrl === './Memberimg/insight.png'} />
            <MemberInfo>
                <P>{member.position}</P>
                <P>{member.department}</P>
                <BP>{member.name}</BP>
                <P>{member.major}</P>
                <P>{member.grade}</P>
                <P>{member.Interests}</P>
            </MemberInfo>
        </MemberCard>
    ));

    return (
        <>
        <Title>Meet Our <Color>Insight</Color></Title>
        <Info>인사이트 부원 소개</Info>
        <MembersContainer>
            {leaderCards}
            {otherMemberCards}
        </MembersContainer>
        </>
    );
}

export default Member;
