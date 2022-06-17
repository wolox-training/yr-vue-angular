import Home from "../views/Home.vue";
export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SingUp" */ "../views/SignUp.vue"),
  },
];
