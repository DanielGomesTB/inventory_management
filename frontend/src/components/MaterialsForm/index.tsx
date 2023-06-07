import { useState } from 'react';

export default function MaterialsForm() {
  const [materialName, setMaterialName] = useState('');
  const [color, setColor] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleClick = () => {
    console.log({
      materialName,
      color,
      costPrice,
      stock,
    })
  };

  return (
    <>
      <h1>Materiais</h1>

      <form>
        <label htmlFor="materialName">
          Descrição do Material
          <input
            type="text"
            id="materialName"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
          />
        </label>

        <label htmlFor="color">
          Cor
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <label htmlFor="costPrice">
          Preço de Custo
          <input
            type="number"
            id="costPrice"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
          />
        </label>

        <label htmlFor="stock">
          Quantidade em estoque
          <input
            type="number"
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={handleClick}
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}
