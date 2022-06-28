import router from '@/router';

export function userToken(token) {
  localStorage.setItem('userToken', JSON.stringify(token))
  router.push({ name: 'Home' })
}

export function signOff() {
  localStorage.removeItem('userToken')
  router.push({ name: 'LogIn' })
}

export function getUserToken() {
  return JSON.parse(localStorage.getItem('userToken'))
}
