import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_LOADING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_OK = 'FETCH_DATA_OK';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchDataLoading(true));

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusTex);
                }

                dispatch(fetchDataLoading(false));

                return res;
            })
            .then((res) => res.json())
            .then((data) => dispatch(fetchDataOk(data)))
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

export const fetchDataError = (bool) => {
    return {
        type: FETCH_DATA_ERROR,
        error: bool
    }
}