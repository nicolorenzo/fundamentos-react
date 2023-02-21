import './style.css';

export type ListaProps = {
  name: string;
  time: string;
};

export function Lista({ name, time }: ListaProps) {
  return (
    <div className="lista">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
