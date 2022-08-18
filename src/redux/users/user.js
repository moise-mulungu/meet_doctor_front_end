const LOGIN_USER = 'MeetDoctorFrontEnd/users/LOGIN_USER';
const initialState = { status: 'Not Loged in', data: [] };

export const success = (user) => ({
  type: LOGIN_USER,
  user,
});

export const loginUser = () => async (dispatch) => {
  fetch('http://127.0.0.1:3000/v1/users', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(success(res));
    })
    .catch((error) => { throw error; });
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { data: action.user, status: 'Loged In successfully' };
    default:
      return state;
  }
};

export default UserReducer;
