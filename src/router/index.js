import { createRouter, createWebHistory } from 'vue-router'
import { glossaryRoutes } from '@/glossary/glossary.js';

import home from '@/views/site/Home.vue';
import feedback from '@/views/site/Feedback.vue';

import rolling from '@/views/game/Rolling.vue';

import glossary from '@/views/site/Glossary.vue';
import glossaryHome from '@/glossary/GlossaryHome.vue';
import glossaryNotFound from '@/glossary/GlossaryNotFound.vue';

import notFound from '@/views/site/NotFound.vue';

const titleMaker = (...t) => t.concat('Sin Eaters').join(' - ');

// -------------------------------------------------------------------------------------
// core
let routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: {
      title: titleMaker('Home'),
      tags: [
        {
          name: 'description',
          content: 'Sin Eaters - a pbta about fighting the unbroken god.',
        },
      ],
    },
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: feedback,
    meta: {
      title: titleMaker('Feedback'),
      tags: [
        {
          name: 'description',
          content: 'Give some feedback about the game!',
        },
      ],
    },
  },
];

// -------------------------------------------------------------------------------------
// the game
routes = routes.concat([
  {
    path: '/rolling',
    name: 'Rolling',
    component: rolling,
    meta: {
      title: titleMaker('Rolling'),
      tags: [
        {
          name: 'description',
          content: 'The dice rolling and resolution mechanics in Sin Eaters.',
        }
      ],
    },
  },
]);

// -------------------------------------------------------------------------------------
// glossary
// correct the path for the glossary entries
glossaryRoutes.forEach(gr => {
  gr.meta.title = titleMaker(gr.meta.title);
  gr.path = gr.path.substring(1);
});

routes = routes.concat([
  {
    path: '/glossary',
    name: 'Glossary',
    component: glossary,
    meta: {
      title: titleMaker('Glossary'),
      sidebar: true,
      tags: [
        {
          name: 'description',
          content: 'The glossary reference for all rules in the game.',
        },
      ],
    },
    children: [
      ...glossaryRoutes,
      {
        path: 'landing',
        name: 'Glossary Landing',
        component: glossaryHome,
        meta: {
          title: 'Glossary',
        },
      },
      {
        path: ':pathMatch(.*)*',
        component: glossaryNotFound,
        meta: {
          title: 'Glossary - Not Found',
        },
      },
    ],
  },
]);



// -------------------------------------------------------------------------------------
// catchall
routes = routes.concat([
  {
    path: '/:pathMatch(.*)*',
    component: notFound,
    meta: {
      title: 'Not Found',
    },
  },
]);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
