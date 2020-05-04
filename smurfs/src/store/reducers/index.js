import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  POSTING_SMURF_START,
  POSTING_SMURF_SUCCESS
} from "../actions";

const initialState = {
  isFetching: false,
  error: "",
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    case POSTING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case POSTING_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: [...state.smurfs, action.payload]
      };
    default:
      return state;
  }
};
