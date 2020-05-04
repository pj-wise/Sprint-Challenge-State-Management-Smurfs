import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";

export const POSTING_SMURF_START = "POSTING_SMURF_START";
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS";
export const POSTING_SMURF_FAILURE = "POSTING_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_SMURF_FAILURE,
        code: console.log("YOU BROKE IT", err)
      });
    });
};
export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: POSTING_SMURF_START });
  axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => {
      dispatch({ type: POSTING_SMURF_SUCCESS, payload: newSmurf });
    })
    .catch(err => {
      dispatch({
        type: POSTING_SMURF_FAILURE,
        code: console.log("YOU BROKE IT", err)
      });
    });
};
