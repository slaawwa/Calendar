
const lStore = (localStorage.db && JSON.parse(localStorage.db)) || {};

export default {
  set: (name, value) => {
    lStore[name] = value;
    localStorage.db = JSON.stringify(lStore);
  },
  get: (name, defaultValue = null) => {
    return lStore[name] || defaultValue;
  },
}
