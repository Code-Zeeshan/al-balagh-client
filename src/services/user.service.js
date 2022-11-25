import createAxiosInstance from "../lib/axios";
import { API_URL } from "../constants/apiUrl";

class UserService {
    async addOne() {
        return await createAxiosInstance(API_URL.USER.ADD_ONE, "GET");
    }
}
export default new UserService();