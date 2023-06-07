import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
const logInFunction = async (user) => {
  try {
    const res = await fetch("http://localhost:3333/api/login", {
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
    });
    const data = await res.json();
    if (data.error) {
      console.log(data.error);
      return;
    }
    console.log(data);
    return data;
    // dispatch(authActions.setUser(res.username));
    //could dispatch and set username and token here//
  } catch (err) {
    console.log(err);
  }

  // return fetch("http://localhost:3333/api/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     user: {
  //       username: user.username,
  //       password: user.password,
  //     },
  //   }),
  //   credentials: "include",
  // })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     if (res.error) {
  //       console.log(res.error);
  //       return;
  //     }
  //     console.log(res);

  //     // dispatch(authActions.setUser(res.username));
  //     //could dispatch and set username and token here//
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

export { logInFunction };
