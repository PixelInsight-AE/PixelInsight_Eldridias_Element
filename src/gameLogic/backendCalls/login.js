const logInFunction = async (user) => {
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: user.username,
        password: user.password,
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

export { logInFunction };
