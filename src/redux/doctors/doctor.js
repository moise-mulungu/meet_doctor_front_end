import { DOCTORS_URL } from '../../url_config';

const initialState = [];
const DOCTOR_LIST = 'MeetDoctorFrontEnd/doctors/DOCTOR_LIST';

export const doctorsList = (doctors) => ({
  type: DOCTOR_LIST,
  payload: doctors,
});

export const getDoctors = () => async (dispatch) => {
  const url = DOCTORS_URL;
  const doctors = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
  dispatch(doctorsList(doctors));
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCTOR_LIST:
      return [...action.payload];
    default:
      return state;
  }
};

export default doctorReducer;
