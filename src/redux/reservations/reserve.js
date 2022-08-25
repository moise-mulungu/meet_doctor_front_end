import { loadStorage } from '../../storage/storage';

const RESERVAIONT_DOCTOR = 'MeetDoctorFrontEnd/User/RESERVAIONT_DOCTOR';
const initialState = { status: 'status null', data: [] };

export const registerSuccess = (reserve) => ({
  type: RESERVAIONT_DOCTOR,
  payload: reserve,
});

export const createReservation = (data) => async (dispatch) => {
  const user = loadStorage();
  fetch(`http://127.0.0.1:3000/v1/users/${user.id}/reservations`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ datetime: data.datetime, city: data.city, doctor_id: data.doctor_id }),

  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(registerSuccess(res));
    }).catch((error) => { throw error; });
};
const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVAIONT_DOCTOR:
      return { data: action.reserve, status: 'Reserved successfully' };
    default:
      return state;
  }
};
export default ReservationReducer;
