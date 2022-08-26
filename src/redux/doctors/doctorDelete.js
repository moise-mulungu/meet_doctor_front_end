import axios from 'axios';
import { DELETE_USER_DOCTORS_URL, USER_DOCTORS_URL } from '../../url_config';
import { loadStorage } from '../../storage/storage';

const DOCTOR_REMOVE = 'MeetDoctorFrontEnd/doctors/DOCTOR_REMOVE';
const USER_DOCTOR_LIST = 'MeetDoctorFrontEnd/doctors/USER_DOCTOR_LIST';
const initialState = [];

const user = loadStorage();

export const deleteDoctor = (id) => ({
  type: DOCTOR_REMOVE,
  payload: id,
});

export const userDoctorList = (doctors) => ({
  type: USER_DOCTOR_LIST,
  payload: doctors,
});

export const getUserDoctors = () => async (dispatch) => {
  const url = USER_DOCTORS_URL(user.id);
  const doctors = await axios.get(url)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
  dispatch(userDoctorList(doctors));
};

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

const doctorDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DOCTOR_LIST:
      return [...action.payload];
    case DOCTOR_REMOVE: {
      return state.filter((doctor) => doctor.id !== action.payload);
    }
    default:
      return state;
  }
};

export default doctorDeleteReducer;
