const ADD_GUN = 'ADD_GUN';
const MIN_GUN = 'MIN_GUN';

// 1 新建store 通过reducers
// 根据老的state和action 生成 新的state
export function counter (state=0, action){
    switch(action.type) {
        case ADD_GUN:
            return state+1
        case MIN_GUN:
            return state-1
        default:
            return 10
    }
}

// action createor
export function addGUN(){
    return { type: ADD_GUN}
}
export function minGUN(){
    return { type: MIN_GUN}
}