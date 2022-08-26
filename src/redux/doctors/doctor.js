import { loadStorage } from '../../storage/storage';
import { DOCTORS_URL, USER_DOCTORS_URL } from '../../url_config';

const initialState = [];
const DOCTOR_LIST = 'MeetDoctorFrontEnd/doctors/DOCTOR_LIST';
const USER_DOCTOR_LIST = 'MeetDoctorFrontEnd/doctors/USER_DOCTOR_LIST';

export const doctorsList = (doctors) => ({
  type: DOCTOR_LIST,
  doctors,
});

export const userDoctorList = (doctors) => ({
  type: USER_DOCTOR_LIST,
  doctors,
});

export const getUserDoctors = () => async (dispatch) => {
  const user = loadStorage();
  const url = USER_DOCTORS_URL(user.id);
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
  dispatch(userDoctorList(doctors));
};

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
      return [...action.doctors];
    case USER_DOCTOR_LIST:
      return [...action.doctors];
    default:
      return state;
  }
};

export default doctorReducer;
