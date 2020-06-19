const auth = (type, user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
    credentials: 'include'
  })
  .then(res => res.json())
}

export const signup = user => auth('signup', user);
export const login = user => auth('login', user);
