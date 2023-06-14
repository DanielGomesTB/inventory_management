import { ICustomerApi, IOrderApi, IProductApi, IMaterialApi } from '../../types';

type dataType = ICustomerApi | IOrderApi | IProductApi | IMaterialApi;

interface ITableProps<T> {
  data: dataType[] | undefined;
  columns: T[]
}

export default function Table<T>({ data, columns }: ITableProps<T>) {
  if (data?.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>
                {column.formatter ? column.formatter(item[column.column]) : item[column.column]}
              </td>
            ))}
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
