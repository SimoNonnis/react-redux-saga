import { take, call, put }  from 'redux-saga/effects';

import { GET_USER, setUser } from './actions/actionCreators';

export default function * watchFetchUser () {
  console.log('Inside saga');
  yield take(GET_USER);
  console.log('Received click');
  const URL = 'http://uinames.com/api/?ext';
  const user = yield call(fetch, URL);
  const userToJson = yield user.json();
  yield  put(setUser(userToJson))
}
