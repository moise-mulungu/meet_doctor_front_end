export const loadStorage = () => {
  if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', JSON.stringify([]));
    return [];
  }
  return JSON.parse(localStorage.getItem('user'));
};

export const updateStorage = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
};
