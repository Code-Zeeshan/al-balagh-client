import createAxiosInstance, { axiosPrivate } from "../lib/axios";
import { API_URL } from "../constants/apiUrl";

class ProductService {
    async getAll() {
        return await axiosPrivate.makeRequest(API_URL.PRODUCT.FIND_MANY, "GET");
    }
    async findOne(params) {
        return await axiosPrivate.makeRequest(API_URL.PRODUCT.FIND_ONE, "GET", null, params);
    }
    async addOne(payload) {
        const formData = new FormData();
        for (const key in payload) {
            formData.append(key, payload[key]);
        }
        return await axiosPrivate.makeRequest(API_URL.PRODUCT.ADD_ONE, "POST", formData);
    }
}
export default new ProductService();