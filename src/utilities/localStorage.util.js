const persistLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }))
}

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || undefined

const clearLocalStorage = (key) => {
  localStorage.removeItem(key)
}

export { persistLocalStorage, getLocalStorage, clearLocalStorage }
