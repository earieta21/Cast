import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
              <Link to="/"> Home </Link>
              <Link to="/carro">
                 <ShoppingCart size={35} />
              </Link>
            
            </div>
        </nav>
    )
}