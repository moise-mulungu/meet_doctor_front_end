import { loadStorage } from "../../storage/storage";

const FETCH_RESERVATIONS = 'GetReservation/reservation/FETCH_RESERVATIONS';
const initialState = {
  reservations: []
};

export const fetchReservations = () => {
  return {
    type: FETCH_RESERVATIONS
  };
}

export const fetchReservationsSuccess = (reservations) => {
  return {
    type: FETCH_RESERVATIONS,
    payload: reservations
  };
}

export const fetchReservationsFailure = (error) => {
  return {
    type: FETCH_RESERVATIONS,
    payload: error
  };
}

export const fetchReservationsAsync = () => {
  console.log('fetchReservationsAsync');
  return (dispatch) => {
    const user = loadStorage();
    if (user === null) {
      return dispatch(fetchReservationsFailure('No user found'));
    }
    return fetch(`http://127.0.0.1:3000/v1/users/${user.id}/reservations`)
      .then(response => response.json())
      .then(reservations => {
        dispatch(fetchReservationsSuccess(reservations));
        console.log(reservations);
      }).catch(error => {
        dispatch(fetchReservationsFailure(error));
        console.log(error);
      }
      );
  }
}

export const updateReservation = (reservation) => {
  return (dispatch) => {
    const user = loadStorage();
    if (user === null) {
      return dispatch(fetchReservationsFailure('No user found'));
    }
    return fetch(`http://127.0.0.1:3000/v1/users/${user.id}/reservations`, {
      method: 'GET',
      body: JSON.stringify(reservation)
    }).then(response => response.json())
      .then(reservations => {
        console.log('reserve', reservations);
        dispatch(fetchReservationsSuccess(reservations));

      }).catch(error => {
        dispatch(fetchReservationsFailure(error));
      }
      );
  }
}

export const fetchReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload
      };
    default:
      return state;
  }
}

export default fetchReservationReducer;
