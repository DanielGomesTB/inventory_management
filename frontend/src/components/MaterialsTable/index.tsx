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

    </table>
  );
}
