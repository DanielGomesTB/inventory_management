import API from "./axios";
import { ICustomer, IOrder, IProduct, IMaterial } from '../../types';

type PayloadType = ICustomer | IOrder | IProduct | IMaterial;

export async function getAll(route: string) {
    try {
        const response = API.get(route);
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function insert(route: string, payload: PayloadType) {
    try {
        const response = API.post(route, payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function update(route: string, id: number, payload: PayloadType) {
    try {
        const response = API.put(`${route}/:${id}`, payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function remove(route: string, id: number) {
    try {
        const response = API.patch(`${route}/:${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
