import { FETCH_DATA } from 'const';

export const fetchData = data => {
    return {
        type: FETCH_DATA,
        data
    }
}