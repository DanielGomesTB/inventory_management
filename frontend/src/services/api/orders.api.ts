import API from "./axios";

interface IProduct {
    product_name: string;
    selling_price: number;
  }

interface IOrder {
    material_id: number;
    quantity: number;
    products: IProduct[];
  }

  
export async function getAllOrders() {
    try {
        const response = API.get('orders');
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function insertOrder(payload: IOrder) {
    try {
        const response = API.post('orders', payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function updateOrder(id: number, payload: IOrder) {
    try {
        const response = API.put(`orders/:${id}`, payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteOrder(id: number) {
    try {
        const response = API.patch(`orders/:${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
