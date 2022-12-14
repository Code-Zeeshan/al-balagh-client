import { axiosPrivate } from "../lib/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.axios.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.axios.interceptors.response.use(
            response => response,
            async (error) => {

                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

                    //not working---> // return axiosPrivate(prevRequest); 

                    /*Need to be a plain javascript Object but instead
                     it is converted internally to an AxiosInstance object. */

                    return axiosPrivate({
                        ...prevRequest,
                        headers: { ...prevRequest.headers, Authorization: `Bearer ${newAccessToken}` },
                        sent: true
                    });

                    // return axiosPrivate.axios({
                    //     ...prevRequest,
                    //     ...{
                    //       headers: prevRequest.headers.toJSON(),
                    //     },
                    //   });

                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.axios.interceptors.request.eject(requestIntercept);
            axiosPrivate.axios.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;