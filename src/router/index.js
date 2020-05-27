import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import NewContact from "@/components/NewContact";
import ViewContact from "@/components/ViewContact";
import EditContact from "@/components/EditContact";
import Login from "@/components/Login";
import Register from "@/components/Register";
// import store from "../store";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/new",
      name: "new-contact",
      component: NewContact,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit/:id",
      name: "edit-contact",
      component: EditContact,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/:id",
      name: "view-contact",
      component: ViewContact,
      meta: {
        requiresAuth: true
      }
    }
  ]
});
// Nav guards
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (!store.getters.isLogged) {
    if (localStorage.getItem("token") !== "true") {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // if (store.getters.isLogged) {
    if (localStorage.getItem("token") == "true") {
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
