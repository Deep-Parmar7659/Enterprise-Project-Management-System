export const storage = {
  get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(key);

      return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
      console.error(`Error reading "${key}" from localStorage:`, error);

      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing "${key}" to localStorage:`, error);
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};
