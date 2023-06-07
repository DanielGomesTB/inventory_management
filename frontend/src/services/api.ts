import API from "./axios";

export async function getAllProducts() {
    try {
        const response = API.get('products');
        return response;
    } catch (error) {
        // console.error(`${error.name}: ${error.message}`);
        return [];
    }
}