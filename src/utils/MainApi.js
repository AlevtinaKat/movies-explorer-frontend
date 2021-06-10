import * as constants from "./constants.js";

class Api {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return this._getJson("/movies");
  }

  updateUserInfo(name, email) {
    return fetch(this._options.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._options.headers,
      credentials: "include",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  saveCard(card) {
    return fetch(this._options.baseUrl + "/movies", {
      method: "POST",
      headers: this._options.headers,
      credentials: "include",
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        image: card.image,
        trailer: card.trailer,
        thumbnail: card.thumbnail,
        movieId: card.movieId
      }),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(this._options.baseUrl + "/movies/" + id, {
      method: "DELETE",
      headers: this._options.headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  _getJson(endpoint) {
    return fetch(this._options.baseUrl + endpoint, {
      headers: this._options.headers,
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

const api = new Api(constants.apiOption);

export default api;
