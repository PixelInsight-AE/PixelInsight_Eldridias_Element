const createNewUser = async (user) => {
  fetch("http://localhost:3001/signup", {
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

export { createNewUser };
