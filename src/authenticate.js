
export const authenticate = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };
 
  export const isAuthenticate = () => {
    if (localStorage.getItem("users")) {
      return JSON.parse(localStorage.getItem("users"));
    } else {
      return false;
    }
  };