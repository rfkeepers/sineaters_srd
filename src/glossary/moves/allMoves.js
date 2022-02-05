import { tags, types } from '@/glossary/consts.js';
import * as help from '@/glossary/helpers.js';


import Desperation from '@/glossary/moves/Desperation.vue';
import Exit from '@/glossary/moves/Exit.vue';
import Template from '@/glossary/moves/Template.vue';

const moves = [
   {
      name: 'Desperation',
      type: types.basicMove,
      tags: [],
      routeContent: 'Acting out of desperation.',
      component: Desperation,
   },
   {
      name: 'Exit',
      type: types.basicMove,
      tags: [],
      routeContent: 'Move for exiting a pocket reality.',
      component: Exit,
   },
   {
      name: 'Template',
      type: types.basicMove,
      tags: [],
      routeContent: 'move template.',
      component: Template,
   },
];

help.addRouting(moves);
const moveConsts = help.reduceToConsts(moves);
export { moves, moveConsts };
