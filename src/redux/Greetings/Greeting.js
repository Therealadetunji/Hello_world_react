const FETCH_DATA = 'FETCH_DATA';

const initialState = {
  greetings: [],
};

// Show creator
export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

// fetching from api made
export const fetchdata = () => (dispatch) => {
  fetch('http://127.0.0.1:3000/api/v1/greetings')
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchData(data));
    });
};

export default function greetingsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_DATA:
      return { ...state, greetings: payload };
    default:
      return state;
  }
}
