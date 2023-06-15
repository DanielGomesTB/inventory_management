import { IMaterialApi } from '../../types';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

interface ITableProps {
  data: IMaterialApi[];
}

export default function MaterialsTable({ data }: ITableProps) {
  if (data?.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Material</th>
          <th>Descrição</th>
          <th>Cor</th>
          <th>Preço de custo</th>
          <th>Quantidade em estoque</th>
          <th>Cadastrado em:</th>
          <th>Atualizado em:</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            <td>{item.material_id}</td>
            <td>{item.material_name}</td>
            <td>{item.color}</td>
            <td>{formatCurrency(item.cost_price)}</td>
            <td>{item.stock}</td>
            <td>{formatDate(item.created_at)}</td>
            <td>{formatDate(item.updated_at)}</td>
            <td>
              <button type="button" onClick={() => alert('Editar!')}>
                Editar
              </button>
              <button type="button" onClick={() => alert('Deletar!')}>
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}