import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import MovieDetails from './Pages/MovieDetails'
import Favourites from './Pages/Favourites'




function App() {
 

  return (
    <>
      <Router>
 <Navbar/>
 <Routes>
<Route path="/" element={<Home />} />
<Route path="/movie/:id" element={<MovieDetails />} />
<Route path="/favorites" element={<Favourites />} />
 </Routes>
      </Router>

    
    </>
  )
}

export default App
