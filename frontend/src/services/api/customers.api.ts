import API from "./axios";

interface ICustomer {
    customerName: string,
    cpf: string,
    address: string,
    email: string,
    phone: string,
  }


export async function getAllCustomers() {
    try {
        const response = API.get('customers');
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function insertCustomer(payload: ICustomer) {
    try {
        const response = API.post('customers', payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function updateCustomer(id: number, payload: ICustomer) {
    try {
        const response = API.put(`customers/:${id}`, payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteCustomer(id: number) {
    try {
        const response = API.patch(`customers/:${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
