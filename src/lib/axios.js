import axios from "axios";
const BASE_URL = 'http://localhost:5000/api';

class AxiosPrivate {
    constructor() {
        this.axios = axios.create({
            baseURL: BASE_URL,
            // headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
    }
    async makeRequest(
        url,
        method,
        data = null,
        params = null,
    ) {
        try {
            const config = {
                url: BASE_URL + url,
                method,
                data
            };
            console.log("conf", config.headers);
            if (params) {
                config.params = { params };
            }
            return await this.axios(config);
        } catch (err) {
            console.log("Error in Axios Private Instance", err);
        }
    }
}
// export const axiosPrivateInstance = axios.create({
//     baseURL: BASE_URL,
//     // headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });

export const axiosPrivate = Object.freeze(new AxiosPrivate());


export default async function createAxiosInstance(
    url,
    method,
    data = null,
    params = null,
) {
    try {
        return await axios({
            url: BASE_URL + url,
            method,
            ...data && { data },
            ...params && { params: { params } },
            withCredentials: true
        });
    } catch (err) {
        console.log("Error in Axios Instance", err);
    }
}


