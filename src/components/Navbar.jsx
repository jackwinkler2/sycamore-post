import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <nav className = "navbar">

                <Link to="/" className="logo-link">
                  <img src="/stick.png" alt="Home Logo" className="logo-image" />
                </Link>

                <Dropdown title="About" titleHref="#About">
                    <Link to="/about/sycamore-post">Sycamore Post</Link>
                    <Link to="/about/tiffany">Tiffany Winkler</Link>
                    <Link to="/about/jarrah">Jarrah Watson-Winkler</Link>
                </Dropdown>
                <Dropdown title="Books" titleHref="#Books">
                    <Link to="/books/book1">The Tree That Was A Drum</Link>
                    <Link to="/books/book2">Turtle Crossing</Link>
                </Dropdown>
                <Dropdown title="Events" titleHref="#Events">
                </Dropdown>
                <Dropdown title="Resources" titleHref="#Resources">
                </Dropdown>
                <button>
                    Shop
                </button>
            </nav>
        </div>
    )

}

const Dropdown = ({ title, titleHref, children }) => {
  let titleElement;

  if (titleHref) {
    titleElement = (
      <a href={titleHref} className="dropbtn">
        {title}
      </a>
    );
  } else {
    titleElement = (
      <span className="dropbtn">
        {title}
      </span>
    );
  }

  return (
    <div className="dropdown">
      {titleElement}
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  );
};

export default Navbar
