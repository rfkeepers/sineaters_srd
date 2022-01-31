const listen = (ev, handler) => {
    window.addEventListener(ev, handler);
};

const remove = (ev, handler) => {
    window.removeEventListener(ev, handler);
};

const emit = (ev, data) => {
    window.dispatchEvent(new Event(ev), data);
};

export {
    emit,
    listen,
    remove,
};