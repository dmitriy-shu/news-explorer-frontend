const MY_API_URL = 'https://papkov-news.students.nomoreparties.xyz/api';

const register = ({ email, password, name }) => {
  return fetch(`${MY_API_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res);
      }
    })
}

const login = ({ email, password }) => {
  return fetch(`${MY_API_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res);
      }
    })
}

const checkToken = () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return fetch(`${MY_API_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(res)
        }
      })
  } else {
    return Promise.reject(`Ошибка: пользователь не авторизован `)
  }

}
const getArticles = ((token) => {
  return fetch(`${MY_API_URL}/articles`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res)
      }
    })
})
// добавление статьи
const addArticle = ((token, card) => {
  return fetch(`${MY_API_URL}/articles`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(card)

  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res)
      }
    })
})
//удаление статьи
const deleteArticle = ((token, card) => {

  return fetch(`${MY_API_URL}/articles/${card._id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }

  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res)
      }
    })
})

export {
  register,
  login,
  checkToken,
  getArticles,
  addArticle,
  deleteArticle
} 