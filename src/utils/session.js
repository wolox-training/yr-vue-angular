import router from '@/router';
export async function userToken(token) {
    localStorage.setItem('userToken', token)
    router.push({ name: 'Home' })
}

export async function signOff() {
    localStorage.removeItem('userToken')
    router.push({ name: 'LogIn' })
}

