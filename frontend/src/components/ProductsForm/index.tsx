import { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { IMaterialApi } from '../../types';

interface IMaterials {
  material: string;
  quantity: number;
}

export default function ProductsForm() {
  const [productName, setProductName] = useState<string>('');
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [material, setMaterial] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [materials, setMaterials] = useState<IMaterials[]>([]);

  const { materialsData, setMaterialsData } = useContext(Context)

  const getAllMaterials = async () => {
    const response = await getAll('materials')
    setMaterialsData(response as IMaterialApi[])
  }

  const handleClick = () => {
    console.log({
      productName,
      sellingPrice,
      materials,
    })
  };

  const handleAddMaterial = () => {
    const updatedMaterials = [...materials, { material, quantity }];
    setMaterials(updatedMaterials);
  };

  useEffect(() => {
    getAllMaterials()
  }, [])

  return (
    <>
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
            onChange={(e) => setSellingPrice(Number(e.target.value))}
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
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              {materialsData.map(({material_id, material_name}) => (
                <option key={material_id} value={material_id}>{material_name}</option>
              ))}
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

          <button type="button" onClick={handleAddMaterial}>
            Adicionar Material
          </button>
        </div>

      </form>

      {materials.map((material, index) => (
        <div key={index}>
          {`${material.material} - ${material.quantity}`}
        </div>
      ))}
    </>
  );
}
