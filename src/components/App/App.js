import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Errors from "../Errors/Errors";
import auth from "../../utils/auth";
import Search from "../../utils/Search";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { getFullImageUrl, getFullThumbnailUrl } from "../../utils/fullImage";

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [serverCards, setServerCards] = useState([]);
  const [serverSavedCards, setServerSavedCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  useEffect(() => {
    const navigate = async () => {
      await tokenCheck();
    };

    navigate();
  }, []);

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      moviesApi
        .getInitialCards()
        .then((cardsData) => {
          setServerCards(cardsData);
          const localCard = JSON.parse(localStorage.getItem("cards"));
          if (cards.length === 0 && !localCard) {
            setCards(cardsData);
            localStorage.setItem("cards", JSON.stringify(cardsData));
          } else {
            setCards(JSON.parse(localStorage.getItem("cards")));
          }
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi
        .getInitialCards()
        .then((cardsData) => {
          if (cardsData) {
            const saved = cardsData.filter(
              (card) => card.owner === currentUser._id
            );
            setServerSavedCards(saved);
            const localCard = JSON.parse(localStorage.getItem("savedCards"));
            if (savedCards.length === 0 && !localCard) {
              setSavedCards(saved);
              localStorage.setItem("savedCards", JSON.stringify(saved));
            } else {
              setSavedCards(JSON.parse(localStorage.getItem("savedCards")));
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function tokenCheck() {
    if (isLoggedIn) {
      return;
    }

    if (localStorage.getItem("token")) {
      auth
        .checkUser()
        .then((data) => {
          if (data) {
            setCurrentUser(data);
            localStorage.setItem("currentUser", JSON.stringify(data));
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function searchMovies(searchQuery) {
    if (searchQuery.saved) {
      const filteredMovies = Search(searchQuery, serverSavedCards);
      setSavedCards(filteredMovies);
      localStorage.setItem("savedCards", JSON.stringify(filteredMovies));
    } else {
      const filteredMovies = Search(searchQuery, serverCards);
      setCards(filteredMovies);
      localStorage.setItem("cards", JSON.stringify(filteredMovies));
    }
  }

  function signin(password, email) {
    if (!email || !password) {
      return;
    }
    auth
      .signin(password, email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signup(name, password, email) {
    if (!name || !email || !password) {
      return;
    }
    auth
      .signup(name, password, email)
      .then(() => {
        signin(password, email);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function update(name, email) {
    if (!name || !email) {
      return;
    }
    return mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signOut() {
    setIsLoggedIn(false);
    setSavedCards([]);
    setCards([]);
    setCurrentUser({});
    localStorage.clear();
    history.push("/");
  }

  function saveMovie(card) {
    if (!card) {
      return;
    }

    const savedCard = {};
    savedCard.country = card.country;
    savedCard.director = card.director;
    savedCard.duration = card.duration;
    savedCard.year = card.year;
    savedCard.description = card.description;
    savedCard.nameRU = card.nameRU;
    savedCard.nameEN = card.nameEN;
    savedCard.image = getFullImageUrl(card);
    savedCard.trailer = card.trailerLink;
    savedCard.thumbnail = getFullThumbnailUrl(card);
    savedCard.movieId = card.id;

    return mainApi
      .saveCard(savedCard)
      .then((data) => {
        savedCards.push(data);
        return data._id;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteMovie(cardId) {
    return mainApi
      .deleteCard(cardId)
      .then(() => {
        setSavedCards(savedCards.filter((card) => card._id !== cardId));
        return "";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/signup">
          <Register onSubmit={signup} />
        </Route>
        <Route path="/signin">
          <Login onSubmit={signin} />
        </Route>
        <ProtectedRoute
          path="/movies"
          isLoggedIn={isLoggedIn}
          cards={cards}
          savedCards={savedCards}
          onSubmit={searchMovies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          component={Movies}
        />
        <ProtectedRoute
          path="/saved-movies"
          isLoggedIn={isLoggedIn}
          cards={savedCards}
          onSubmit={searchMovies}
          deleteMovie={deleteMovie}
          component={SavedMovies}
        />
        <ProtectedRoute
          path="/profile"
          isLoggedIn={isLoggedIn}
          onSubmit={update}
          signOut={signOut}
          component={Profile}
        />
        <Route path="*">
          <Errors />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
