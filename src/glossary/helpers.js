// construct the paths for each entry.
const formatPathVal = (pv) => pv.toLowerCase().replaceAll(' ', '_');
const makePath = ({ type, name }) => `/${formatPathVal(type)}/${formatPathVal(name)}`;
const makeMeta = ({ name, routeContent, type }) => ({
    title: `${name} - ${type}`,
    tags: [{
        name: 'description',
        content: routeContent,
    }],
});

/**
 * Takes in an array of glossary entries (an object with the properties:
 * name, type, tags, routeContent, component) and extends each entry to
 * include route pathing and route meta structures.
 *
 * @param {Array} arr array of glossary entries.
 * @returns nothing; array is modified in place.
 */
const addRouting = arr => {
    arr.forEach(a => {
        a.path = makePath(a);
        a.meta = makeMeta(a);
    });
};

/**
 * Takes in an array of glossary entries (an object with the properties:
 * name, type, tags, routeContent, component) and produces a second array
 * containing only the properties that are relevant as constants: name,
 * path, type, and tags.
 *
 * @param {Array} arr array of glossary entries.
 * @returns the modified array containing routing details.
 */
const reduceToConsts = arr => {
    return arr.map(a => ({
        name: a.name,
        path: a.path,
        type: a.type,
        tags: a.tags,
    }));
};

export { addRouting, reduceToConsts };
