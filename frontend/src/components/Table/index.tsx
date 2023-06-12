interface TableProps<T> {
  data: T[];
}

type ObjectType = {
  [key: string]: string | number | boolean;
};

export default function Table<T extends ObjectType>({ data }: TableProps<T>) {
  if (data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  }
  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, columnIndex) => (
              <td key={columnIndex}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
