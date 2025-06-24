import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <nav className = "navbar">

                <Link to="/" className="logo-link"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <img src="/stick.png" alt="Home Logo" className="logo-image" />
                </Link>

                <Dropdown title="About" titleHref="#About" titleRedirect="/about/sycamore-post">
                    <Link to="/about/sycamore-post">Sycamore Post</Link>
                    <Link to="/about/tiffany">Tiffany Winkler</Link>
                    <Link to="/about/jarrah">Jarrah Watson-Winkler</Link>
                </Dropdown>
                <Dropdown title="Books" titleHref="#Books" titleRedirect="/books/all">
                    <Link to="/books/book1">The Tree That Was A Drum</Link>
                    <Link to="/books/book2">Turtle Crossing</Link>
                </Dropdown>
                <Dropdown title="Events" titleHref="#Events" titleRedirect="/events/all">
                </Dropdown>
                <Dropdown title="Resources" titleHref="#Resources" titleRedirect="/resources/all">
                </Dropdown>
                <Link to="https://www.cnn.com/" className="Shoplink">Shop</Link>
            </nav>
        </div>
    )

}

const Dropdown = ({ title, titleHref, titleRedirect, children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  let titleElement;

  if (titleHref) {
    if (isHome) {
      // Scroll to section on homepage
      titleElement = (
        <a href={titleHref} className="dropbtn">
          {title}
        </a>
      );
    } else if (titleRedirect) {
      // Navigate to alternate page if not on home
      titleElement = (
        <Link to={titleRedirect} className="dropbtn">
          {title}
        </Link>
      );
    } else {
      titleElement = <span className="dropbtn">{title}</span>;
    }
  } else {
    titleElement = <span className="dropbtn">{title}</span>;
  }

  return (
    <div className="dropdown">
      {titleElement}
      <div className="dropdown-content">{children}</div>
    </div>
  );
};

export default Navbar
