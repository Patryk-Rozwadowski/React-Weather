import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_LOADING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_OK = 'FETCH_DATA_OK';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const IS_MOUNTED = 'IS_MOUNTED';

export const fetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchDataLoading(true));

        axios(url)
            .then((res) => {
                dispatch(fetchDataLoading(false));
                return res;
            })
            .then((res) => dispatch(fetchDataOk(res.data)))
            .catch(error => dispatch(fetchDataError(error.message)))
        dispatch(checkIsMounted(true))
    }
}

export const fetchDataLoading = (bool) => {
    return {
        type: FETCH_DATA_LOADING,
        isLoading: bool
    }
}

export const fetchDataOk = (data) => {
    return {
        type: FETCH_DATA_OK,
        data
    }
}

export const fetchDataError = (status) => {
    return {
        type: FETCH_DATA_ERROR,
        error: status
    }
}

export const checkIsMounted = (bool) => {
    return {
        type: IS_MOUNTED,
        isMounted: bool
    }
}