import React from 'react';
import styled from 'styled-components';
import CatImage01 from '../assets/cat01.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleClickButton = ()=> {
    navigate('/question');
  }
  return (
    <Wrapper>
      <Header>예비집사 판별기ㅎ</Header>
      <Title>나에게 맞는 주인은?</Title>
      <LogoImage>
        <img src={ CatImage01 } />
      </LogoImage>
      <Desc>MBTI를 기반으로 나와 잘맞는 고양이 찾기</Desc>
      <Button01 onClick={ handleClickButton }>테스트 시작하기</Button01>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const Header = styled.div `
  font-size: 2rem;
`;
const Title = styled.div `
  font-size: 1.5rem;
  margin-top: 40px;
`
const LogoImage = styled.div `
  display: flex;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 10px;
  /* img {
    
  } */
`
const Desc = styled.div `
  font-size: 1.2rem;
  margin-top: 30px;
`
const Button01 = styled.button `
  color: #fff;
  font-family: 'Gamja Flower', cursive;
  font-size: 1rem;
  border-radius: 3px;
  border: 0;
  background-color: purple;
  padding: 5px 10px;
  margin-top: 10px;
` 