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
  const [localCards, setLocalCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const navigate = async () => {
      await tokenCheck();
    };

    if (isLoggedIn && currentUser) {
      moviesApi
        .getInitialCards()
        .then((cardsData) => {
          setCards(cardsData);
          setLocalCards(cardsData);
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi
        .getInitialCards()
        .then((cardsData) => {
          if (cardsData) {
            setSavedCards(cardsData.filter((card) => card.owner === currentUser._id));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    navigate();
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
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function searchMovies(searchQuery) {
    const filteredMovies = Search(searchQuery, localCards);
    setCards(filteredMovies);
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
    mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signOut() {
    setIsLoggedIn(false);
    setLocalCards([]);
    setSavedCards([]);
    setCards([]);
    setCurrentUser({});
    localStorage.clear();
    history.push('/');
  };

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
        <Route path="/errors">
          <Errors />
        </Route>
        <Route path="/">
          <Main isLoggedIn={isLoggedIn}/>
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
