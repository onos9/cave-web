import axiosInstance from '../../helpers/axiosInstance';
const API_BASE_URL = '/api/v1';
export const useClass = (dispatch) => ({
  create: create(dispatch),
  getById: getById(dispatch),
  getAll: getAll(dispatch),
  updateOne: updateOne(dispatch),
  deleteOne: deleteOne(dispatch),
});

const create =
  (dispatch) =>
  (data, url = null) => {
    dispatch({
      type: 'CREATE_LOADING',
    });
    axiosInstance()
      .post(`${API_BASE_URL}/class`, data)
      .then((res) => {
        dispatch({
          type: 'CREATE_SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_ERROR',
          payload: err.response ? err.response.data : 'CONNECTION_ERROR',
        });
      });
  };

const getById =
  (dispatch) =>
  (id, url = null) => {
    dispatch({
      type: 'GET_LOADING',
    });
    axiosInstance()
      .get(`${API_BASE_URL}/class/${id}`)
      .then((res) => {
        dispatch({
          type: 'GET_SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'GET_ERROR',
          payload: err.response ? err.response.data : 'CONNECTION_ERROR',
        });
      });
  };

const getAll =
  (dispatch) =>
  (id, url = null) => {
    dispatch({
      type: 'LOADING',
    });
    axiosInstance()
      .get(`${API_BASE_URL}/class`)
      .then((res) => {
        dispatch({
          type: 'SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ERROR',
          payload: err.response ? err.response.data : 'CONNECTION_ERROR',
        });
      });
  };

const updateOne =
  (dispatch) =>
  (data, id, url = null) => {
    dispatch({
      type: 'LOADING',
    });
    axiosInstance()
      .post(`${API_BASE_URL}/class`, data)
      .then((res) => {
        dispatch({
          type: 'SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ERROR',
          payload: err.response ? err.response.data : 'CONNECTION_ERROR',
        });
      });
  };

const deleteOne =
  (dispatch) =>
  (data, id, url = null) => {
    dispatch({
      type: 'LOADING',
    });
    axiosInstance()
      .delete(`${API_BASE_URL}/class/${id}`, data)
      .then((res) => {
        dispatch({
          type: 'SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ERROR',
          payload: err.response ? err.response.data : 'CONNECTION_ERROR',
        });
      });
  };
