import API from "./axios";

interface IMaterial {
    material_id: number;
    quantity: number;
  }

interface IProduct {
    product_name: string;
    selling_price: number;
    materials: IMaterial[];
  }

  
export async function getAllProducts() {
    try {
        const response = API.get('products');
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function insertProduct(payload: IProduct) {
    try {
        const response = API.post('products', payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function updateProduct(id: number, payload: IProduct) {
    try {
        const response = API.put(`products/:${id}`, payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteProduct(id: number) {
    try {
        const response = API.patch(`products/:${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
