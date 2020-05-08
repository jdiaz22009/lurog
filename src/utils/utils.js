export const validateArray = (array) => {
  return array !== undefined && array !== null && Array.isArray(array) && array.length > 0
}

export const validateData = (obj) => {
  return (obj !== undefined && obj !== null && obj !== '' && obj !== [])
}

export const validateEmail = (email) => {
  const exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return !!exp.test(email)
}

export const validatePassword = (password) => {
  //Minimum eight characters, at least one letter and one number
  const exp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/
  return !!exp.test(password)
}

export const validateText = (text) => {
  if (text && text.length > 1) {
    return true
  }
  return false
}

export const getCurrency = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(value).replace(/\D00$/, '')
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const truncate = (value, limit) => {
  if (value !== undefined && value !== null) {
    if (value.length > limit) {
      return value = value.substring(0, (limit - 3)) + '...'
    } else {
      return value
    }
  }
  return ''
}
