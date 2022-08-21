export const setReservation = (doctor_id, city, datetime) => {
    return {
        type: 'SET_RESERVATION',
        payload: {
        doctor_id,
        city,
        datetime
        }
    }

}

export const setReservationSuccess = (reservation) => {
    return {
        type: 'SET_RESERVATION_SUCCESS',
        payload: reservation
    }
}

export const setReservationError = (error) => {
    return {
        type: 'SET_RESERVATION_ERROR',
        payload: error
    }
}

export const addReservation = (doctor_id, city, datetime) => {
    return {
        type: 'ADD_RESERVATION',
        payload: {
        doctor_id,
        city,
        datetime
        }
    }
}


export const deleteReservation = (id) => {
    return {
        type: 'DELETE_RESERVATION',
        payload: id
    }
}

const reservationReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESERVATION_SUCCESS':
            return [...state, action.payload];
        case 'ADD_RESERVATION':
            return [...state, action.payload];
        case 'DELETE_RESERVATION':
            return state.filter(reservation => reservation.id !== action.payload);
        default:
            return state;
    }
}

export default reservationReducer;