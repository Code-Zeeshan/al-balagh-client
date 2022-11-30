import useAuth from "./useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";


const useLogout = () => {
    const { setAuth } = useAuth();
    const axiosPrivate = useAxiosPrivate();

    const logout = async () => {
        try {
            const response = await axiosPrivate.axios.get('auth/logout');
            setAuth({});
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout