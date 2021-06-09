import * as constants from "./constants.js";

class MoviesApi {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return this._getJson("/");
  }

  _getJson(endpoint) {
    return fetch(this._options.baseUrl + endpoint, {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

}

const moviesApi = new MoviesApi(constants.beatFilmOption);

export default moviesApi;