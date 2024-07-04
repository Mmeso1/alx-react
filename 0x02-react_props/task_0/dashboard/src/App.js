import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Notifications from "./Notifications";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
      ;
    </>
  );
}

export default App;
