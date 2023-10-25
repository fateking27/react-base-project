import http from "../utils/http";

const users = {
  get: () => http.post("/users/getAccountList"),
  add: (data) => http.post("/users/accountadd", data),
  update: (data) => http.post("/users/updateAccount", data),
  delete: (data) => http.get("/users/delAccount", data),
  roles: () => http.get("/roles/findRoles"),
  login: (data) => http.post("/users/login", data),
};

export default users;
