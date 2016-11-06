import { takeLatest }  from 'redux-saga';
import { call, put }  from 'redux-saga/effects';

import * as actions from './actions/actionCreators';

function * setUser () {
  const URL = 'http://uinames.com/api/?ext';
  const user = yield call(fetch, URL);
  const userToJson = yield user.json();
  yield  put(actions.setUser(userToJson));
}

export default function * watchFetchUser() {
  yield takeLatest('GET_USER', setUser)
}
