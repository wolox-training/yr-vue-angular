import { api } from '@/config/api';
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
        const token = res.headers['access-token']
        const { client, uid } = res.headers
        console.log('success')
        console.log(`
            Token = ${token}
            Client = ${client}
            Uid = ${uid}
        `);
        return res.data
    }).catch(error => error)
}