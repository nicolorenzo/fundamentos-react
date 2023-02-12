import './style.css';

export function Lista({ name, time }) {
  return (
    <div className="lista">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
