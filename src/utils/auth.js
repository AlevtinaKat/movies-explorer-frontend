import * as constants from "./constants.js";

class Auth {
  constructor(options) {
    this._options = options;
  }

  signup(name, password, email) {
    return fetch(this._options.baseUrl + "/signup", {
      method: "POST",
      headers: this._options.headers,
      credentials: "include",
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  signin(password, email) {
    return fetch(this._options.baseUrl + "/signin", {
      method: "POST",
      headers: this._options.headers,
      credentials: "include",
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  checkUser() {
    return fetch(this._options.baseUrl + "/users/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
        credentials: "include",
      }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

const auth = new Auth(constants.authOption);

export default auth;
