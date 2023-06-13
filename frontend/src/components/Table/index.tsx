interface ITableProps<T> {
  data: T[];
  columns: T
}

type ObjectType = {
  [key: string]: string | number | boolean;
};

export default function Table<T extends ObjectType>({ data, columns }: ITableProps<T>) {
  if (data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  }

  const tableColumns = Object.entries(columns)

  return (
    <table>
      <thead>
        <tr>
          {tableColumns.map((header, index) => (
            <th key={index}>{header[1]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {tableColumns.map((header, columnIndex) => (
              <td key={columnIndex}>{item[header[0]]}</td>
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
