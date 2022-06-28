import { api } from '@/config/api';
import { getUserToken } from '@/utils/session'

const headers = getUserToken()
if (headers) {
    api.setHeaders(headers)
}
export const getBook = () => api.get('books')
