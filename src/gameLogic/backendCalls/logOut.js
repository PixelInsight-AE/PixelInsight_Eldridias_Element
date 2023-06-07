const logOutFunction = async (user) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export { logOutFunction };
