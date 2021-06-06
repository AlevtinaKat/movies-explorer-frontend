import { Route, Switch, withRouter } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Errors from "../Errors/Errors";

function App() {
  return (
    <Switch>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/errors">
        <Errors />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default withRouter(App);
