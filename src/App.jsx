import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import SycamorePost from './pages/About/SycamorePost'
import Tiffany from './pages/About/Tiffany'
import Jarrah from './pages/About/Jarrah'
import Book1 from './pages/Books/Book1'
import Book2 from './pages/Books/Book2'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about/sycamore-post" element={<SycamorePost />} />
        <Route path="/about/tiffany" element={<Tiffany />} />
        <Route path="/about/jarrah" element={<Jarrah />} />
        <Route path="/books/book1" element={<Book1 />} />
        <Route path="/books/book2" element={<Book2 />} />
        
        <Route
          path="/"
          element={
            <>
              <h1>Sycamore Post</h1>
              <h2 id = "About">About</h2>
              <h2 id = "Books">Books</h2>
              <h2 id = "Events">Events</h2>
              <h2 id = "Resources">Resources</h2>
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
