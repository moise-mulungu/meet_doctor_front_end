// import { loadStorage } from '../../storage/storage';

const FETCH_DOCTOR = 'HotelAgentFrontEnd/MostRecent/FETCH_DOCTOR';
const initialState = { status: 'Not Fetched', data: [] };

export const success = (mostRecent) => ({
  type: FETCH_DOCTOR,
  mostRecent,
});

export const fetchDoctors = () => async (dispatch) => {
  fetch('http://127.0.0.1:3000/v1/doctors')
    .then((data) => data.json())
    .then((data) => {
      dispatch(success(data));
    })
    .catch((error) => {
      throw error;
    });
};

const doctorFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTOR:
      return { data: action.mostRecent, status: 'Date fetch Successfully!' };
    default:
      return state;
  }
};
export default doctorFetchReducer;
