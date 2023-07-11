import API from './axios';
import { toast } from 'react-hot-toast';
import { ICustomer, IOrder, IProduct, IMaterial } from '../../types';

type PayloadType = ICustomer | IOrder | IProduct | IMaterial;

export async function getAll(route: string) {
	try {
		const response = await API.get(route);
		if (response.status === 200) {
			return response.data;
		}
		toast.error('Ops! Algo deu errado!');
		console.error(response);
		return [];
	} catch (error) {
		toast.error('Ops! Algo deu errado!');
		console.error(error);
		return [];
	}
}

export async function insert(route: string, payload: PayloadType) {
	try {
		const response = await API.post(route, payload);
		if (response.status === 201) {
			toast.success('Operação concluída com sucesso!');
			return response.data;
		}
		toast.error('Ops! Algo deu errado!');
		console.error(response);
		return {};
	} catch (error) {
		toast.error('Ops! Algo deu errado!');
		console.error(error);
	}
}

export async function update(route: string, id: number, payload: PayloadType) {
	try {
		const response = await API.put(`${route}/${id}`, payload);
		toast.success('Operação concluída com sucesso!');
		return response;
	} catch (error) {
		toast.error('Ops! Algo deu errado!');
		console.error(error);
	}
}

export async function remove(route: string, id: number) {
	try {
		const response = await API.patch(`${route}/${id}`);
		toast.success('Operação concluída com sucesso!');
		return response;
	} catch (error) {
		toast.error('Ops! Algo deu errado!');
		console.error(error);
	}
}
