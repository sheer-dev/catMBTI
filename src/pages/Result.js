import React from 'react';
import styled from 'styled-components';
import CatImage01 from '../assets/cat01.jpg';
import { useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultData';

function Result() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>예비집사 판별기ㅎ</Header>
      <Title>결과 보기</Title>
      <LogoImage>
        <img src={ ResultData[0].image } />
      </LogoImage>
      <Desc>예비 집사와 찰떡궁합인 고양이는 { ResultData[0].name } 입니다.</Desc>
      <Button01 onClick={ ()=> navigate("/question") }>테스트 다시하기</Button01>
    </Wrapper>
  )
}

export default Result;

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
`;
const LogoImage = styled.div `
  display: flex;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 10px;
`;
const Desc = styled.div `
  font-size: 1.2rem;
  margin-top: 30px;
`;
const Button01 = styled.button `
  color: #fff;
  font-family: 'Gamja Flower', cursive;
  font-size: 1rem;
  border-radius: 3px;
  border: 0;
  background-color: purple;
  padding: 5px 10px;
  margin-top: 10px;
`;