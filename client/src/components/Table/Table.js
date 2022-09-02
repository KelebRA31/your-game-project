import React, { useEffect } from 'react';

export default function Table() {
  useEffect(() => {
    fetch('http://localhost:3005/');
  }, []);
  return (
    <div>Table</div>
  );
}
