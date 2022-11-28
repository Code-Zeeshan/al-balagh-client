import { GET_COUNT } from './CartTypes';

export const getCount = (count) => {
    return {
        type: GET_COUNT,
        payload: count
    }
}