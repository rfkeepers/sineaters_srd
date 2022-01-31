import { tags, types } from '@/glossary/consts.js';
import * as help from '@/glossary/helpers.js';

import Template from '@/glossary/moves/Template.vue';

const moves = [
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
