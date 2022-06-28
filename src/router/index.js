import { createRouter, createWebHistory } from 'vue-router';
import routes from './router'
import { getUserToken } from '@/utils/session'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authRoutes = ['LogIn', 'SignUp']
  const protectedRoute = to.matched.some(record => record.meta.requireAuth)
  const token = getUserToken()
  
  if (protectedRoute && !token) next({ name: 'LogIn' })
  else if (token && authRoutes.includes(to.name)) next({ name: 'Home' })
  else next()
})

export default router;
