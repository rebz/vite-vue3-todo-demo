export const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}
