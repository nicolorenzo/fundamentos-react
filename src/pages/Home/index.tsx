import React, { useState } from 'react';

import './style.css';

import { Lista, ListaProps } from '../../components/Lista';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<ListaProps[]>([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(event) => setStudentName(event.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Lista name={student.name} time={student.time} key={student.time} />
      ))}
    </div>
  );
}
