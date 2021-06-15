export function setToken(name,val){
  localStorage.setItem(name,val)
}

export function getToken(name){
  localStorage.getItem(name)
}

export function removeToken(name){
  localStorage.removeItem(name)
}