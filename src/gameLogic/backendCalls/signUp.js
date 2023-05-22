const createNewUser = async (user) => {
  const csrf = localStorage.getItem("csrf");
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrf,
    },
    body: JSON.stringify({
      user: {
        username: user.username,
        password: user.password,
        email: user.email,
      },
    }),
    credentials: "include",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export function authenticityHeader(options = {}) {
  return Object.assign(options, {
    "X-CSRF-Token": localStorage.getItem("csrf"),
    "X-Requested-With": "XMLHttpRequest",
  });
}

export function safeCredentials(options = {}) {
  return Object.assign(options, {
    credentials: "include",
    mode: "no-cors",
    headers: Object.assign(
      options.headers || {},
      authenticityHeader(),
      jsonHeaders()
    ),
  });
}
export function jsonHeaders(options = {}) {
  return Object.assign(options, {
    "Content-Type": "application/json",
  });
}

export function createAccount(user) {
  return fetch("http://localhost:3000/users", safeCredentials(), {
    method: "POST",
    body: JSON.stringify({
      user: {
        username: user.username,
        password: user.password,
        email: user.email,
      },
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
export { createNewUser };
