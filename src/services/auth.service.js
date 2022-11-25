import createAxiosInstance, { axiosPrivate } from "../lib/axios";
import { API_URL } from "../constants/apiUrl";

class AuthService {
    async register(payload) {
        return await createAxiosInstance(API_URL.AUTH.REGISTER, "POST", payload);
    }
    async login(payload) {
        return await createAxiosInstance(API_URL.AUTH.LOGIN, "POST", payload);
    }
    async handleRefreshToken() {
        return await axiosPrivate.makeRequest(API_URL.AUTH.HANDLE_REFRESH_TOKEN, "GET");
    }
}
export default new AuthService();