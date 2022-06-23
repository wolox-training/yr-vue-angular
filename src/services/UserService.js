import { api } from '@/config/api';
import { userToken } from '@/utils/session';
let response = []

export async function signUp(data) {
    response = await api.post('/users', data).then(res => {
        console.log('success')
        return res.data
    }).catch(error => error)
    return response
}
export async function signIn(data) {
    response = await api.post('/users/sign_in', data).then(res => {
        userToken(res.headers['access-token'])
        return res.data
    }).catch(error => error)
}