import  {Home } from "./routes/Home";
import { Register } from "./routes/Register";
import { Header } from './components/Header'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  return (<>
    
    <Router>
    <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
    </Router>
    </>);
}

export default App;
