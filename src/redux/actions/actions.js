import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_OK = 'FETCH_DATA_OK';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchData = city => {
    return dispatch => {
        
        dispatch(fetchDataPending());
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4608dbdd344e79698ed563db79599f06`;
        axios
            .get(url)
            .then(res => {
                dispatch(fetchDataOk(res.data.main.temp))
                return res.data.temp
            })

    }
}

export const fetchDataPending = () => {
    return {
        type: FETCH_DATA_PENDING
    }
}

export const fetchDataOk = data => {
    return {
        type: FETCH_DATA_OK,
        data
    }
}

export const fetchDataError = error => {
    return {
        type: FETCH_DATA_ERROR,
        error
    }
}