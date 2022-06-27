export default [
  {
    path: "/",
    redirect: "LogIn",
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SingUp" */ "../views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () =>
      import(/* webpackChunkName: "SingUp" */ "../views/LogIn.vue"),
  },
];
