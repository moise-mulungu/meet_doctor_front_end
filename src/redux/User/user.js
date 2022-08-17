const LOGIN_USER= 'MeetDoctorFrontEnd/User/LOGIN_USER';

const initialState = { status: "status null", data: [] };


export const success = (user) => ({
    type: LOGIN_USER,
    payload: user,
  });

  export const registerSuccess=(user)=>({
     type: SINGUP_USER,
     payload: user,
  })

  export const loginUser = (data) => async (dispatch) => {
    fetch('http://127.0.0.1:3000/v1/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
     // body: JSON.stringify({username: data.username}),
    })
      .then((res) => res.json())
      .then((res) => {
        // eslint-disable-next-line
         res.find(item => { if ( item.username===data.username){
         ( dispatch(success(res) ));
         console.log(item.username, data.username)
         
        }
       
      }

        )
       
         })
      .catch((error) => { throw error; });
  
  };

  
  export const registerUser = (data) => async (dispatch) => {
    fetch('http://127.0.0.1:3000/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        

      },
      body: JSON.stringify({username: data.username}),
      
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(registerSuccess(res));
         })
      .catch((error) => { throw error; });
  
  };
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return { data: action.user, status: 'Loged In successfully' };
        case SINGUP_USER:
          return {data: action.user, status:'Register successfully' }
        default:
        return state;
    }
  };
  
  export default UserReducer;
