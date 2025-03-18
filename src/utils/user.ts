export const saveUserNameToLS = (userName: string) => {
  localStorage.setItem('user_name', userName)
}

export const clearUserNameLS = () => {
  localStorage.removeItem('user_name')
}

export const getUserNameFromLS = () => {
  return localStorage.getItem('user_name') || ''
}
