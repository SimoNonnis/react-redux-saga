// import { take } from 'redux-saga';
//
// import { GET_USER } from './actions/actionCreators';
//
// export function * getUserSaga () {
//   yield take(GET_USER);
//   console.log('Received click');
//   // const URL = 'http://uinames.com/api/?ext';
//   // const data = yield call(fetch, URL);
//   // put(data)
// }

import { takeLatest, call, put } from 'redux-saga';

import setUser from './actions/actionCreators';

export function * fetchUser () {

  let user = yield call(fetch, 'http://uinames.com/api/?ext');
  user.json();
  yield put(setUser(user));
}


export default function * watchFetchUser () {
  yield takeLatest('GET_USER', fetchUser);
}
