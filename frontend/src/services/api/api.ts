import API from './axios';
import { ICustomer, IOrder, IProduct, IMaterial } from '../../types';

type PayloadType = ICustomer | IOrder | IProduct | IMaterial;

export async function getAll(route: string) {
	try {
		const response = await API.get(route);
		if (response.status === 200) {
			return response.data;
		}
		console.error(response);
		return [];
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function insert(route: string, payload: PayloadType) {
	try {
		const response = await API.post(route, payload);
		if (response.status === 201) {
			return response.data;
		}
		console.error(response);
		return {};
	} catch (error) {
		console.error(error);
	}
}

export async function update(route: string, id: number, payload: PayloadType) {
	try {
		const response = await API.put(`${route}/:${id}`, payload);
		return response;
	} catch (error) {
		console.error(error);
	}
}

export async function remove(route: string, id: number) {
	try {
		const response = await API.patch(`${route}/${id}`);
		return response;
	} catch (error) {
		console.error(error);
	}
}
