import axios from "axios"
import io from 'socket.io-client'

const socket = io('ws://localhost:9093')

// 获取聊天信息
const MSG_LIST = 'MSG_LIST'
// 读取信息
const MSG_RECV = 'MSG_RECV'
// 标识已读
const MSG_READ = 'MSG_READ'

const initState = {
  chatmsg: [],
  unread: 0,

}

// reducer
export function chat(state = initState, action) {
  console.log('action', action);
  switch (action.type) {
    case MSG_LIST:
      return { ...state, chatmsg: action.payload, unread:action.payload.filter(v => !v.unread).length }
    case MSG_RECV:
      return { ...state, userList: action.payload }
    case MSG_READ:
      return { ...state, userList: action.payload }
    default:
      return state
  }
}

function msgList(msgs) {
  return { type: MSG_LIST, payload: msgs }
}

export function getMsgList(data) {
  return dispatch => {
    axios.get('/user/getmsglist')
    .then(res => {
      console.log('resrserse', res);
      if (res.data.code === 1) {
        dispatch(msgList(res.data.msgs))
      }
    })
  }
}

export function getUserList(type) {
  return dispatch => {
    axios.get('/user/list?type=' + type)
      .then(res => {
        console.log('resrserse', res);
        if (res.data.code === 1) {
          dispatch(msgList(res.data.data))
        }
      })
  }
}
