import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar"
import Shop from "./components/shop";

function App () {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Shop/>} />
          <Route path='/carro' element = {<cart/>} />
        </Routes>
        
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App