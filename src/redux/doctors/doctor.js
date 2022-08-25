import axios from 'axios';
import { loadStorage } from '../../storage/storage';
import { DELETE_USER_DOCTORS_URL, DOCTORS_URL, USER_DOCTORS_URL } from '../../url_config';

const initialState = [];
const DOCTOR_LIST = 'MeetDoctorFrontEnd/doctors/DOCTOR_LIST';
const DOCTOR_REMOVE = 'MeetDoctorFrontEnd/doctors/DOCTOR_REMOVE';
const USER_DOCTOR_LIST = 'MeetDoctorFrontEnd/doctors/USER_DOCTOR_LIST';

const user = loadStorage();

export const doctorsList = (doctors) => ({
  type: DOCTOR_LIST,
  payload: doctors,
});

export const userDoctorList = (doctors) => ({
  type: USER_DOCTOR_LIST,
  payload: doctors,
});

export const deleteDoctor = (id) => ({
  type: DOCTOR_REMOVE,
  payload: id,
});

export const removeDoctor = (id) => async (dispatch) => {
  const url = DELETE_USER_DOCTORS_URL(user.id, id);
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
    .catch((error) => {
      throw error;
    });
  dispatch(deleteDoctor(id));
};

export const getUserDoctors = () => async (dispatch) => {
  console.log('User doc');
  const url = USER_DOCTORS_URL(user.id);
  const doctors = await axios.get(url)
    .then((res) => res.data)
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
      return [...action.payload];
    case USER_DOCTOR_LIST:
      return [...action.payload];
    case DOCTOR_REMOVE: {
      return state.filter((doctor) => doctor.id !== action.payload);
    }
    default:
      return state;
  }
};

export default doctorReducer;
