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
    component: () => import(/* webpackChunkName: 'LogIn' */ '../views/LogIn.vue'),
    meta: { requireAuth: false }

  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'Home'*/ '../views/Home.vue'),
    meta: { requireAuth: true }
  }
  ,
  {
    path: '/books/:idBook(\\d+)+',
    name: 'BooksDetail',
    component: () => import(/* webpackChunkName: 'BooksDetail'*/ '../views/BooksDetail.vue'),
    meta: { requireAuth: true }

  }
];
