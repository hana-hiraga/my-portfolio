import Vue from 'vue';
import aboutMe from '@/components/aboutMe.vue';
import VueRouter from 'vue-router';
import ProfileSection from '@/components/ProfileSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';



Vue.use(VueRouter);

const routes = [

  {
    path: '/profile',
    name: 'profile',
    component: ProfileSection,
  },
  {
    path: '/ProjectSection',
    name: 'ProjectSection',
    component: ProjectSection,
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: aboutMe,
  },

  {
    path: '*',
    redirect: '/aboutMe',
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return { x: 0, y: 0 }
  }
});

export default router;
