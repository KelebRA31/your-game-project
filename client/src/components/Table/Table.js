import React, { useEffect } from 'react';

export default function Table() {
  useEffect(() => {
    fetch('http://localhost:3005/game/questions')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <div>Table</div>
  );
}
