import React, { useEffect, useState } from 'react';

export default function Table() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3005/game/questions')
      .then((res) => res.json())
      .then((res) => setQuestions(res));
  }, []);
  console.log(questions);
  return (
    <div>

      <table className="table">
        <table width="100%" border="1" cellPadding="4" cellSpacing="0">
          <tr>
            {questions.map((el) => <td>{el.name}</td>)}
          </tr>
        </table>
        <tr>

          {/* <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td> */}
        </tr>
      </table>
    </div>
  );
}
