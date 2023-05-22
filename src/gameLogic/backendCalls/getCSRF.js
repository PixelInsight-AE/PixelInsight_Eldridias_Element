const getCSRF = async () => {
  fetch("http://localhost:3000/csrf", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => {
    res.json().then((data) => {
      console.log(data);
      localStorage.setItem("csrf", data.csrf);
      
    });
  });
};

export { getCSRF };
