import About from 'pages/About.vue';
import Routes from 'pages/Routes.vue';
import Reviews from 'pages/Reviews.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: About },
      { path: 'routes', component: Routes },
      { path: 'reviews', component: Reviews }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
