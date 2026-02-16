// 1. Importamos la data
import { bancos } from '../data/bancos'; 

export const BankList = () => {
  return (
    <div>
      <h3>Lista de Bancos Internacionales</h3>
      
      {/* Renderizado de lista */}
      <ul>
        {bancos.map((banco) => (
          // Es vital usar la prop 'key' para que React identifique cada elemento
          <li key={banco.id}>
            <strong>{banco.name}</strong> - <em>{banco.country}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};