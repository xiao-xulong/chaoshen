import router from "./index";
router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    return next();
  } else {
    const token = window.sessionStorage.getItem("angle");
    if (token === null || "") {
      return next({ name: "Login" });
    } else {
      return next();
    }
  }
});
