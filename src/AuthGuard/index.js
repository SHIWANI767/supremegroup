export const isAuthenticated = () => {
  const token = localStorage.getItem("user_token") === null;
  return !!token;
};
export const withoutAuthRoutes = [
  "/about",
  "/price",

];
