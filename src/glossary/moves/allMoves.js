import { tags, types } from '@/glossary/consts.js';
import * as help from '@/glossary/helpers.js';

import Aid from '@/glossary/moves/Aid.vue';
import Controlled from '@/glossary/moves/Controlled.vue';
import Desperation from '@/glossary/moves/Desperation.vue';
import Exit from '@/glossary/moves/Exit.vue';
import Interfere from '@/glossary/moves/Interfere.vue';
import Template from '@/glossary/moves/Template.vue';

const moves = [
   {
      name: 'Aid',
      type: types.modifierMove,
      tags: [],
      routeContent: 'Helping out another player.',
      component: Aid,
   },
   {
      name: 'Controlled',
      type: types.modifierMove,
      tags: [],
      routeContent: 'Acting with extraordinary control.',
      component: Controlled,
   },
   {
      name: 'Desperation',
      type: types.modifierMove,
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
      name: 'Interfere',
      type: types.modifierMove,
      tags: [],
      routeContent: 'Frustrating another player\'s actions.',
      component: Interfere,
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
