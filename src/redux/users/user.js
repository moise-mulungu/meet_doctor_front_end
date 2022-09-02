import { USER_LOGIN } from '../../url_config';
import { updateStorage } from '../../storage/storage';

const LOGIN_USER = 'MeetDoctorFrontEnd/users/LOGIN_USER';
const initialState = { status: 'Not Logged in', data: [] };

export const logUser = (user) => ({
  type: LOGIN_USER,
  user,
});

export const loginUser = (username) => async (dispatch) => {
  const url = `${USER_LOGIN}?username=${username}`;
  const userRes = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
  const user = userRes.content.user;
  updateStorage(user);
  dispatch(logUser(userRes));
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { data: action.user, status: 'Logged In successfully' };
    default:
      return state;
  }
};

export default userReducer;
