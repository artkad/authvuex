import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import NewContact from "@/components/NewContact";
import ViewContact from "@/components/ViewContact";
import EditContact from "@/components/EditContact";

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

export default router;
