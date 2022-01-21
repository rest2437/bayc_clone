import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/Landing.js";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
      <Footer />
    </div>
  );
}

export default App;
