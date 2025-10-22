import Navbar from './Components/Navbar'
import Home from './Pages/Home'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'


import MovieDetails from './Pages/MovieDetails'
import Favourites from './Pages/Favourites'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'



function App() {
 

  return (
    <>
      <Router>
 <Navbar/>
 <Routes>
<Route path="/" element={<Home />} />


<Route path="/movie/:id" element={<MovieDetails />} />
<Route path="/favourites" element={<Favourites />} />

 </Routes>

      </Router>

     

      
      
    </>
  )
}

export default App
