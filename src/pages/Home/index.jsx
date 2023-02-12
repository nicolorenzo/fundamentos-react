import './style.css';

import { Lista } from '../../components/Lista';

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
      <Lista />
      <Lista />
      <Lista />
    </div>
  );
}
