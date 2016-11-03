import { take, call, put } from 'redux-saga';

import { GET_USER } from './actions/actionCreators';

function * getUserSaga () {
  yield take(GET_USER);
  const URL = 'http://uinames.com/api/?ext';
  const data = yield call(fetch, URL);
  put(data)
}

export default getUserSaga;
