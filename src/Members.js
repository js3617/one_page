import React from 'react';
import Memberdata from "./Memberdata";
import styled from 'styled-components';

const MemberImage = styled.img`
  width: ${props => props.isInsight ? '80px' : '200px'};
  height: ${props => props.isInsight ? '100px' : '250px'};
  background-size: cover;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 10px;
    margin-bottom: 10px;
    width: ${props => props.isInsight ? '60px' : '150px'};
    height: ${props => props.isInsight ? '80px' : '200px'};
  }
`;

const MemberInfo = styled.div`
  width: 70%;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const P = styled.p`
  display: flex;
  line-height: 1.2;
  text-align: left;
  font-size: 16px;
  cursor: default;
  justify-content: flex-start;
  white-space: pre-line;
  @media (max-width: 768px){
    font-size: 0.8rem;
    line-height: 1.3rem;
    width: 100%;
  }
`;

const BP = styled.p`
  font-size: 24px;
  font-weight: 800;
  display: flex;
  cursor: default;
  text-align: left;
  justify-content: flex-start;
  @media (max-width: 768px) {
    font-size: 1rem;
  };
`;

const MembersContainer = styled.div`
  max-width: 1200px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙에 위치 */
  padding: 0 20px; /* 좌우 패딩 추가 */
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MemberCard = styled.div`
  width: calc(33.33% - 40px); /* 카드 간 간격을 위한 마진 고려 */
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%; /* 작은 화면에서 카드가 전체 너비 차지 */
    margin-left: 0; /* 좌우 공간 없애기 */
  }
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
  padding-top: 5%;
  cursor: default;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    justify-content: start;
    padding-top: 70px;
    margin-left: 20px;
  }
  @media (max-width: 1200px) {
        margin-top: 1%;
    }
`;

const Color = styled.h2`
  color: #7F2BE2;
  font-weight: 700;
  font-size: 48px;
  margin-left : 10px;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 0;
    margin-right: 50px;
  }
`;

const Info = styled.p`
  color : #B6B6B6;
  font-size: 18px;
  margin-top: 50px;
`;

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
