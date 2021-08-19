export const debounce = fn => {
    let callbackId = -1;
    return (...args) => {
        cancelAnimationFrame(callbackId);
        callbackId = requestAnimationFrame(fn.bind(null, ...args));
    }
}