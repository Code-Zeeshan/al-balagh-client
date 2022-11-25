export const API_URL = Object.freeze({
    AUTH: Object.freeze({
        REGISTER: "/auth/register",
        LOGIN: "/auth/login",
        LOGOUT: "/auth/logout",
        HANDLE_REFRESH_TOKEN: "/auth/handleRefreshToken",
    }),
    USER: Object.freeze({
        ADD_ONE: "/users/addOne",
        UPDATE_ONE: "/users/updateOne",
    }),
    PRODUCT: Object.freeze({
        FIND_MANY: "/products/findMany",
        FIND_ONE: "/products/findOne",
    }),
});
