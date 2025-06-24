import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import SycamorePost from './pages/About/SycamorePost'
import Tiffany from './pages/About/Tiffany'
import Jarrah from './pages/About/Jarrah'
import Book1 from './pages/Books/Book1'
import Book2 from './pages/Books/Book2'
import Books from './pages/Books/Books'
import Events from './pages/Events/Events'
import Resources from './pages/Resources/Resources'
import stackOfBooks from './assets/stackofbooks.webp'
import ImageCarousel from './components/Carousel.jsx'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/about/sycamore-post" element={<SycamorePost />} />
        <Route path="/about/tiffany" element={<Tiffany />} />
        <Route path="/about/jarrah" element={<Jarrah />} />
        <Route path="/books/book1" element={<Book1 />} />
        <Route path="/books/book2" element={<Book2 />} />
        <Route path="/books/all" element={<Books />} />
        <Route path="/events/all" element={<Events />} />
        <Route path="/resources/all" element={<Resources />} />
        
        <Route
          path="/"
          element={
            <>
              <h1>Sycamore Post</h1>
              <ImageCarousel/>
              <section id="About">
                <Link to="/about/sycamore-post" className="header-buttons">
                  About
                </Link>
              </section>
              <p>
                The sycamore post is a bookstore that makes books about the environment
              </p>
              <p>Tiffany Winkler is the author</p>
              <p>more stuff about it</p>
              <p></p>
              <section id="Books">
                <Link to="/books/all" className="header-buttons">
                  Books
                </Link>
                <img src={stackOfBooks} alt="books image" className="books-image"></img>
              </section>              
              <section id="Events">
                <Link to="/events/all" className="header-buttons">
                  Events
                </Link>
              </section>
              <section id="Resources">
                <Link to="/resources/all" className="header-buttons">
                  Resources
                </Link>
              </section>            
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
