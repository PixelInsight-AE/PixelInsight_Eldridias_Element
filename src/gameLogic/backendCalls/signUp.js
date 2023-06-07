const signUpFunction = async (user) => {
  fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { signUpFunction };
