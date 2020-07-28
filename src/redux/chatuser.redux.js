import axios from "axios"

const USER_LIST = 'USER_LIST'

const initState = {
  userList: [],
}

// reducer
export function chatuser(state = initState, action) {
  console.log('action', action);
  switch (action.type) {
    case USER_LIST:
      return { ...state, userList: action.payload }
    default:
      return initState
  }
}

export function userList(data) {
  console.log('redadata', data);
  return {type: USER_LIST, payload: data}
}

export function getUserList(type) {
  return dispatch => {
    axios.get('/user/list?type=' + type)
      .then(res => {
        console.log('resrserse', res);
        if (res.data.code === 0) {
          dispatch(userList(res.data.data))
        }
      })
  }
}
