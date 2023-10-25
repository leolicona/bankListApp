export const saveToLocalStorage = ({ key, data, action }) => {
  localStorage.setItem(key, JSON.stringify(data))
  action && action(data)
}

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}
