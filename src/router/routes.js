
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/YoshkinCat.vue') },
      { path: '/about', component: () => import('src/pages/About.vue') },
      { path: '/routes', component: () => import('src/pages/Routes.vue') },
      { path: '/reviews', component: () => import('src/pages/Reviews.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
