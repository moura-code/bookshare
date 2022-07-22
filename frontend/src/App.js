import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MesageError } from "./components/MesageError";
import { APP } from "./context/appContext";
import { Books } from "./routes/Books";
import { BOOK } from "./context/BooksContext";
import { EditBook } from "./components/EditBook";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <APP>
        <BOOK>
          <Header />
          <MesageError />
          <div className="app">
            <Routes>
              <Route
                
                path="/register"
                element={
                  localStorage.getItem("token") ? (
                    <Navigate to="/" />
                  ) : (
                    <Register />
                  )
                }
              />
              <Route
                
                path="/login"
                element={
                  localStorage.getItem("token") ? (
                    <Navigate to="/" />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route exact path="/" element={<Home />} />
              
              <Route exact path="/books" element={<Books />} />
              <Route exact path="/books/:id" element={<EditBook />} />
            </Routes>
          </div>
          <Footer />
        </BOOK>
      </APP>
    </Router>
  );
}

export default App;
