// action
const GET_USER = 'GET_USER';

// action creator
export function getUser () {
  return {
    type: GET_USER
  }
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user
  }
}
