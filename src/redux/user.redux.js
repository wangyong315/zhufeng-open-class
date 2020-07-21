import axios from "axios"
import { getRedirectPath } from '../util';

const REGISTRE_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
  redirectTo: '',
  isAuth:'',
  msg:'',
  user: '',
  type: '',
}

// reducer
export function user(state = initState, action) {
  console.log('action', action);
  switch (action.type) {
    case REGISTRE_SUCCESS:
      return { ...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
    case LOGIN_SUCCESS:
        return { ...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
    case LOAD_DATA:
      return { ...state, ...action.payload }
    case ERROR_MSG:
      return { ...state, msg: action.msg, isAuth: false }
    default:
      return initState
  }
}

function registerSuccess(data) {
  return {payload: data, type: REGISTRE_SUCCESS}
}

function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}

function loginSuccess(data) {
  console.log('data9999', data);
  return {payload: data, type: LOGIN_SUCCESS}
}

export function loadData(userinfo) {
  return {type: LOAD_DATA, payload: userinfo}
}

export function register({user, pwd, repeatpwd, type}) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('密码和确认密码不同')
  }
  console.log('registesr', user, pwd, repeatpwd, type);
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

export function login({user, pwd}) {
  if (!user || !pwd) {
    return errorMsg('用户名密码必须输入')
  }
  return dispatch => {
    axios.post('/user/login', {user, pwd})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          const { type } = res.data.data
          dispatch(loginSuccess({user, type, pwd}))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}