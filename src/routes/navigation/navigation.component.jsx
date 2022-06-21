import { Outlet , Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import { CartContext, CartProvider } from "../../contexts/cart.context";

const Navigation = ()=>{
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    
    return (
    <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
             <CrwnLogo className="logo"/>
          </Link>
          <div className="nav-links-container" >
              <Link className="nav-link" to='/shop' >
                  SHOP
              </Link>
              {
                  currentUser ? (
                      <span className="nav-link">Sign Out</span>
                  ) : (
                    <Link className="nav-link" to='/auth' >
                          SIGN IN
                    </Link>
                  )

              }
              <CartIcon />
          </div>
          {
            isCartOpen && <CartDropdown />
          }
        </div>
        <Outlet />
    </Fragment>
    )

  }

  export default Navigation;