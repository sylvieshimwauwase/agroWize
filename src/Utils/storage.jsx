export const safeJsonParse = (json, defaultValue) => {
      try {
            return JSON.parse(json);
      }
      catch (e) {
            return defaultValue;
      }
}

export const getStorage = (key) => {
      const value = localStorage.getItem(key);
      return safeJsonParse(value, {});
}

export const setStorage = (key, value) => {
      localStorage
            .setItem(key, JSON.stringify(value));
}
