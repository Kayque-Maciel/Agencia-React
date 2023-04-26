import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import Header from "./Components/Header"
import Conteudo from "./Components/Conteudo"
import Footer from "./Components/Footer"
import Grandcanyon from './Components/Grandcanyon';
import Escosia from './Components/Escosia';
import Muralhasdachina from './Components/Muralhasdachina';
import Aruba from './Components/Aruba';


function App() {
  return (
   <>

      <Router>
        <Header />
            <Routes>
              <Route path="/" element={ <Conteudo/> } />
              <Route path="/Escocia" element={ <Escosia/> } />
              <Route path="/Grandcanyon" element={ <Grandcanyon/> } />
              <Route path="/Muralhasdachina" element={ <Muralhasdachina/> } />
              <Route path="/Aruba" element={ <Aruba/> } />
            </Routes>
        <Footer />
      </Router>
   </>
  );
}

export default App;
