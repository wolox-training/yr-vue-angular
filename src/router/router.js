export default [
  {
    path: '/',
    redirect: 'LogIn',
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: 'SingUp' */ '../views/SignUp.vue'),
    meta: { requireAuth: false }
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: 'SingUp' */ '../views/LogIn.vue'),
    meta: { requireAuth: false }

  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'Home'*/ '../views/Home.vue'),
    meta: { requireAuth: true }
  }
];
