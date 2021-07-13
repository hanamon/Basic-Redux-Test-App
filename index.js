const { createStore } = require('redux');

// data 기본
const nameData = { name: 'Hanamon' }

// action 객체
const actionChangeName = (newname) => {
  return {
    type: 'ACTION_CHANGE_NAME',
    payload: newname
  }
}

// reducer 함수
const postReducer = (state = nameData, action) => {
  switch(action.type) {
    case 'ACTION_CHANGE_NAME':
      return Object.assign({}, state, { ...state, name: action.payload });
      break;
    default:
      return state;
  }
}

// store 생성
const store = createStore(postReducer);

// store 의 메소드 확인
//console.log(store);

// 수정 전 확인
console.log(store.getState());
// 수정 실행
store.dispatch(actionChangeName('하나몬'));
// 수정 후 확인
console.log(store.getState());