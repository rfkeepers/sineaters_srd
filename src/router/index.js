import { createRouter, createWebHistory } from 'vue-router'
import { glossaryRoutes } from '@/glossary/glossary.js';

import home from '@/views/site/Home.vue';
import feedback from '@/views/site/Feedback.vue';

import banes from '@/views/game/Banes.vue';
import chargen from '@/views/game/Chargen.vue';
import harm from '@/views/game/Harm.vue';
import playtesting from '@/views/game/Playtesting.vue';
import rolling from '@/views/game/Rolling.vue';

import pockets from '@/views/setting/Pockets.vue';
import setting from '@/views/setting/Setting.vue';


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
    path: '/banes',
    name: 'Banes',
    component: banes,
    meta: {
      title: titleMaker('Banes'),
      tags: [
        {
          name: 'description',
          content: 'The guide to banes, instability, and malefaction for Sin Eaters.',
        }
      ],
    },
  },
  {
    path: '/chargen',
    name: 'Character Creation',
    component: chargen,
    meta: {
      title: titleMaker('Character Creation'),
      tags: [
        {
          name: 'description',
          content: 'The character creation guide for Sin Eaters.',
        }
      ],
    },
  },
  {
    path: '/harm',
    name: 'Harm',
    component: harm,
    meta: {
      title: titleMaker('Harm'),
      tags: [
        {
          name: 'description',
          content: 'The guide to Harm mechanics and handling harm for Sin Eaters.',
        }
      ],
    },
  },
  {
    path: '/playtesting',
    name: 'Playtesting',
    component: playtesting,
    meta: {
      title: titleMaker('Playtesting'),
      tags: [
        {
          name: 'description',
          content: 'The playtesting guide for Sin Eaters.',
        }
      ],
    },
  },
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
// the system settings
routes = routes.concat([
  {
    path: '/pockets',
    name: 'Pocket Realities',
    component: pockets,
    meta: {
      title: titleMaker('Pocket Realities'),
      tags: [
        {
          name: 'description',
          content: 'How pocket realities work in the setting of Sin Eaters.',
        }
      ],
    },
  },
  {
    path: '/setting',
    name: 'The Setting',
    component: setting,
    meta: {
      title: titleMaker('The Setting'),
      tags: [
        {
          name: 'description',
          content: 'The setting of the world of Sin Eaters.',
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
  history: createWebHistory('/sineaters/'),
  routes,
});

export default router;
