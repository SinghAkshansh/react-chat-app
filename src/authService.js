// src/authService.js
export const login = async (email, password) => {
  if (email === "user@example.com" && password === "password") {
    const user = { email, token: "fake-jwt-token" };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } else {
    throw new Error("Invalid email or password");
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => {
  return !!getCurrentUser();
};
