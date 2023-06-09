import API from "./axios";

interface IMaterial {
    material_id: number;
    quantity: number;
  }


export async function getAllMaterials() {
    try {
        const response = API.get('materials');
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function insertMaterial(payload: IMaterial) {
    try {
        const response = API.post('materials', payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function updateMaterial(id: number, payload: IMaterial) {
    try {
        const response = API.put(`materials/:${id}`, payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteMaterial(id: number) {
    try {
        const response = API.patch(`materials/:${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
