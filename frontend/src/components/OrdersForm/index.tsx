import { useState } from 'react';

export default function OrdersForm() {
  const [orderStatus, setOrderStatus] = useState<string>('pending');
  const [orderType, setOrderType] = useState<string>('Varejo');
  const [customerId, setCustomerId] = useState<string>('Maria');
  const [productName, setProductName] = useState<string>('Boné');
  const [quantity, setQuantity] = useState<number>(0);
  const [products, setProducts] = useState<IProducts[]>([]);

  const handleClick = () => {
    console.log({
      orderStatus,
      orderType,
      customerId,
      products,
    })
  };

  interface IProducts {
    productName: string;
    quantity: number;
  }

  const handleAddProduct = () => {
    const updatedProducts = [...products, { productName, quantity }];
    setProducts(updatedProducts);
  };

  return (
    <>
      <h2>Pedidos</h2>

      <form>

        <label htmlFor="customerId">
          Cliente
          <select
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          >
            <option value="Maria">Maria</option>
            <option value="João">João</option>
            <option value="Joaquim">Joaquim</option>
            <option value="Fernanda">Fernanda</option>
          </select>
        </label>

        <label htmlFor="orderType">Tipo de pedido</label>
        <select
          id="orderType"
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
        >
          <option value="Varejo">Varejo</option>
          <option value="Atacado">Atacado</option>
        </select>

        <label htmlFor="orderStatus">
          Status
          <select
            id="orderStatus"
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
          >
            <option value="pending">Pendente</option>
            <option value="started">Iniciado</option>
            <option value="completed">Concluído</option>
            <option value="cancelled">Cancelado</option>
          </select>
        </label>

        <button
          type="button"
          onClick={handleClick}
          disabled={products.length === 0}
        >
          Registrar Pedido
        </button>

        <div>
          <h3>Produtos inclusos no pedido</h3>
          <label htmlFor="productName">
            Produto pedido
            <select
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            >
              <option value="Boné">Boné</option>
              <option value="Calcinha">Calcinha</option>
              <option value="Pijama">Pijama</option>
              <option value="Vestido">Vestido</option>
            </select>
          </label>

          <label htmlFor="quantity">
            Quantidade
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </label>

          <button type="button" onClick={handleAddProduct}>
            Adicionar Produto
          </button>
        </div>

      </form>

      {products.map((product, index) => (
        <div key={index}>
          {`${product.productName} - ${product.quantity}`}
        </div>
      ))}

    </>
  );
}
