/**
 * Takes in the ID of an element, and if that element is found in the dom
 * auto-scrolls the page to that element.
 *
 * @param {String} hash The id of the element to scroll towards.
 * @param {String} behavior 'auto' if you want instant positioning. defaults to 'smooth'.  Always instant on mobile.
 * @param {Number} delay Millisecond delay before scrolling.  defaults to 50.
 */
 const scrollTo = (hash, behavior = 'smooth', delay = 50) => {
    let el = document.getElementById(hash);
    if (!el) return;
    behavior = matchMedia("screen and (max-width: 900px)").matches ? 'auto' : behavior;
    setTimeout(el.scrollIntoView({ behavior }), delay);
};

export { scrollTo };