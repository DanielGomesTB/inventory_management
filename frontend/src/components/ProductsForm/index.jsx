import { useState } from 'react';

export default function ProductsForm() {
  const [productName, setProductName] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [materialName, setMaterialName] = useState('Cetim');
  const [quantity, setQuantity] = useState('');
  const [materials, setMaterials] = useState([]);

  const handleClick = () => {
    console.log({
      productName,
      sellingPrice,
      materials,
    })
  };

  const handleAddMaterial = () => {
    const updatedMaterials = [...materials, { materialName, quantity }];
    setMaterials(updatedMaterials);
  };

  return (
    <>
      <h1>Produtos</h1>

      <form>
        <label htmlFor="productName">
          Descrição do Produto
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>

        <label htmlFor="sellingPrice">
          Preço
          <input
            type="number"
            id="sellingPrice"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={handleClick}
          disabled={materials.length === 0}
        >
          Salvar Produto
        </button>

        <div>
          <h3>Materiais utilizados na fabricação</h3>
          <label htmlFor="materialName">
            Material
            <select
              id="materialName"
              value={materialName}
              onChange={(e) => setMaterialName(e.target.value)}
            >
              <option value="Cetim">Cetim</option>
              <option value="Velcro">Velcro</option>
              <option value="Botão">Botão</option>
              <option value="Seda">Seda</option>
            </select>
          </label>

          <label htmlFor="quantity">
            Quantidade
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>

          <button type="button" onClick={handleAddMaterial}>
            Adicionar Material
          </button>
        </div>

      </form>

      {materials.map((material, index) => (
        <div key={index}>
          {`${material.materialName} - ${material.quantity}`}
        </div>
      ))}

    </>
  );
}
