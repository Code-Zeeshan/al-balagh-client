import createAxiosInstance from "../lib/axios";
import { API_URL } from "../constants/apiUrl";

class UserService {
    async addOne() {
        return await createAxiosInstance(API_URL.USER.ADD_ONE, "GET");
    }
    async findMany() {
        return await createAxiosInstance(API_URL.USER.FIND_MANY, "GET");
    }
}
export default new UserService();