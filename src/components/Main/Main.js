import "../../index.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main(props) {
  return (
    <body className="page">
      <div className="page__container">
        <main className="main">
          <Header isLoggedIn={props.isLoggedIn} />
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer />
        </main>
      </div>
    </body>
  );
}

export default Main;
