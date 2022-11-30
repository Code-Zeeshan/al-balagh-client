// import { axiosPrivateInstance } from '../lib/axios';
import createAxiosInstance from '../lib/axios';
import axios from "axios";
import useAuth from './useAuth';
import authService from '../services/auth.service';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        // const response = await axios.get('http://localhost:5000/api/auth/handleRefreshToken', {
        //     withCredentials: true
        // });

        const response = await authService.handleRefreshToken();
        setAuth(prev => {
            return {
                ...prev,
                ...response && { role: response.data.role },
                ...response && { accessToken: response.data.accessToken }
            }
        });
        return response && response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;