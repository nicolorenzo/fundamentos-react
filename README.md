# Fundamentos do React com [ViteJS](https://vitejs.dev/)

Vite funciona como um template básico, um ponto de partida com o mínimo necessário para iniciar um projeto com React. É com ele que criaremos um simples sistema de lista de presença para dar os primeiros passos em React.

## Estrutura React

Os arquivos que formam nossa aplicação React estão dentro da pasta `src`. Nela nós temos o `main.jsx`, que importa o arquivo `App.jxs` e renderiza seu conteúdo através do `index.html`.

## JSX

JSX é a sintaxe utilizada pelo React para desenvolvermos interfaces misturando Javascript e HTML.

## Importando arquivos CSS

A pasta `styles` vai conter nossas folhas de estilo CSS. Para importar, por exemplo, o arquivo `global.css` ao nosso projeto basta adicionar o seguinte código ao arquivo `main.jsx`:

```
import './styles/global.css';
```

## Componentes

Uma parte muito importante do desenvolvimento em React é a componentização. Cada componente da nossa aplicação será uma pasta dentro de `components` e será reutilizável, além de ter uma folha de estilo e um `index.jsx` dedicada exclusivamente à ele. Observe a pasta `components/Lista` e veja como criamos o componente referente aos itens da listagem de nossa aplicação.

Depois de criar um componente, basta importá-lo:

```
import { Lista } from '../../components/Lista';
```

## Propriedades

Os itens de nossa lista terão propriedades que serão passadas como parâmetros. Veja:

```
export function Lista({ name, time }: ListaProps) {
  return (
    <div className="lista">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
```

Ou seja, o nome do aluno será renderizadosassim que o usuário informar esse dado no input, bem como a hora de chamada. Veremos como isso será feito a seguir.

## Estados

Os estados são o que permitirão a manipulação desses dados. Para isso vamos começar importando o `useState` do React:

```
import React, { useState } from 'react';
```

O useState terá um array onde o primeiro item é uma variável que armazenará o conteúdo do estado, e o outro, uma função que atualizará esse estado:

```
const [studentName, setStudentName] = useState<ListaProps[]>();
```

Agora quando o usuário digitar o nome de um aluno isso será armazenado na variável `studentName`. Porém precisamos também que isso seja apresentado na tela quando o botão 'Adicionar' for acionado, por isso criaremos uma função atrelada a ele e outra instância do `useState` que guardará esses nomes e horários em um array chamado `students`:

```
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
```

E finalmente isso será renderizado no componente `Lista` através de uma função `map`:

```
  <button type="button" onClick={handleAddStudent}>
    Adicionar
  </button>
  {students.map((student) => (
        <Lista name={student.name} time={student.time} key={student.time} />
      ))}
```
