import { React, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questionData';
import styled from 'styled-components';

function Question() {

  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  // console.log(totalScore);

  const handleClickButton = (no, type)=> {
    const newScore = totalScore.map((s)=>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    // 다음 문제로 문제 수 증가
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      // mbti 를 도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
          ""
      );
      // console.log('mbti', mbti);
      // 결과 페이지 이동
      navigate({
        pathname: "/result",
        search: `?${ createSearchParams({
          mbti: mbti,
        }) }`
      });
    }

    // if (type === "EI") {
    //   // 기존 스코어에 더할 값 계산
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체
    //   const newObject = { id: "EI", score: addScore };
    //   // splice 사용해서 새로운 객체 해당 객체에 삽입
    //   totalScore.splice(0, 1, newObject)
    // } else if ( type === "SN" ) {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = { id: "SN", score: addScore };
    //   totalScore.splice(1, 1, newObject)
    // } else if ( type === "TF" ) {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = { id: "TF", score: addScore };
    //   totalScore.splice(2, 1, newObject)
    // } else {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = { id: "JP", score: addScore };
    //   totalScore.splice(3, 1, newObject)
    // }
  }

  return (
      <Wrapper>
        <Progress value={ (questionNo / QuestionData.length) * 100 } max={ 100 }></Progress>
        <Title>{ QuestionData[questionNo].title }</Title>
        <ButtonGroup>
          <button onClick={ ()=> handleClickButton(1, QuestionData[questionNo].type) }>{ QuestionData[questionNo].answerA }</button>
          <button onClick={ ()=> handleClickButton(0, QuestionData[questionNo].type) }>{ QuestionData[questionNo].answerB }</button>
        </ButtonGroup>
      </Wrapper>
  )
}

export default Question;

const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* height: 100vh; */
`;

const Progress = styled.progress `
  
`

const Title = styled.div `
  font-size: 1.5rem;
`
const ButtonGroup = styled.div `
  display: flex;
  button {
    border: 1px solid #ddd;
    background-color: white;
    cursor: pointer;
    padding: 5px 10px;
  }
`