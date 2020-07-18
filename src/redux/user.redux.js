import axios from "axios"

const REGISTRE_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  redirectTo: '',
  isAuth:'',
  msg:'',
  user: '',
  pwd: '',
  type: '',
}

// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTRE_SUCCESS:
      return { ...state, msg:'', redirectTo: '', isAuth: true, ...action.payload }
    case ERROR_MSG:
      return { ...state, msg: action.msg, isAuth: false }
    default:
      return initState
  }
}

function registerSuccess(msg) {
  return {msg, type: REGISTRE_SUCCESS}
}

function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}

export function register({user, pwd, repeatpwd, type}) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('密码和确认密码不同')
  }
  return dispatch => {
    axios.post('/user/register', {user, pwd, repeatpwd, type})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, type}))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}