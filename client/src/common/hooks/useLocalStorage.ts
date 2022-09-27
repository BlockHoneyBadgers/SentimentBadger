export const getStorageValue = (key: string) => {
  const saved = localStorage.getItem(key);

  if (!saved) return '';

  return JSON.parse(saved);
};

export const setLocalStorage = (key: string, value: string | string[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};
