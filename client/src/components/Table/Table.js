import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function Table() {
  const [questions, setQuestions] = useState([]);
  const [check, setCheck] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    fetch('http://localhost:3005/game/questions')
      .then((res) => res.json())
      .then((res) => setQuestions(res));
  }, []);
  console.log(questions);
  const onСlickQuestion = async (ques, point, right) => {
    const answer = await prompt(ques, ['Введите ответ тут']);
    console.log(right);
    if (String(right) === answer) {
      alert('Верно');
    } else {
      alert('Не верно');
    }
    setScore(score + 1);
  };
  return (
    <div className="container">
      {questions.map((el) => (
        <>
          <div>{el.name}</div>
          {el.Questions.map((qq) => <Button variant="outlined" onClick={() => onСlickQuestion(qq.question, qq.points, qq.answer)}>{qq.points}</Button>)}
        </>
      ))}
      <h5>
        point:
        {' '}
        {check}
      </h5>
    </div>

  );
  // style={{ visibility: !score ? 'visible' : 'hidden' }}
  // return (
  //   <div>

  //     <table className="table">
  //       <table width="100%" border="1" cellPadding="4" cellSpacing="0">
  //         <tr>
  //           {questions.map((el) => <td>{el.name}</td>)}
  //         </tr>
  //       </table>
  //       <tr>

  //       <div className="container">
  //     <table>
  //       <tr>
  //         <td>
  //           {questions.map((el) => el)}
  //           <button type="button" onClick={handlerClick}>1</button>
  //         </td>
  //         <td>
  //           <button type="button" onClick={handlerClick}>1</button>
  //         </td>
  //       </tr>
  //       <tr>
  //         <button type="button" onClick={handlerClick}>1</button>
  //         <button type="button" onClick={handlerClick}>1</button>
  //       </tr>
  //       <tr>
  //         <div onClick={handlerClick}>1</div>
  //         <div onClick={handlerClick}>1</div>
  //       </tr>
  //     </table>

  //         {/* <th scope="row">1</th>
  //           <td>Mark</td>
  //           <td>Otto</td>
  //           <td>@mdo</td>
  //         </tr>
  //         <tr>
  //           <th scope="row">2</th>
  //           <td>Jacob</td>
  //           <td>Thornton</td>
  //           <td>@fat</td>
  //         </tr>
  //         <tr>
  //           <th scope="row">3</th>
  //           <td colSpan="2">Larry the Bird</td>
  //           <td>@twitter</td> */}
  //       </tr>
  //     </table>
  //   </div>
  // );
}
