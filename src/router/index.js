import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import TeacherView from '@/views/TeacherView.vue'
import DanceReelView from '@/views/DanceReelView.vue'
import GalleryView from '@/views/GalleryView.vue'
import HeadShotView from '@/views/HeadShotView.vue'
import JadenView from '@/views/JadenView.vue'
import ResumeView from '@/views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/headshot',
      name: 'headshot',
      component: HeadShotView
    },
    {
      path: '/dancereel',
      name: 'dancereel',
      component: DanceReelView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    // {
    //   path: '/jaden',
    //   name: 'jaden',
    //   component: JadenView
    // },
    {
      path: '/contactme',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: TeacherView
    }
  ],
})

export default router
