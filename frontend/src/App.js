import  {Home } from "./routes/Home";
import { Register } from "./routes/Register";
import { Header } from './components/Header'
import { Footer } from "./components/Footer";

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  return (<>
    
    <Router>
    <Header />
    <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </>);
}

export default App;
