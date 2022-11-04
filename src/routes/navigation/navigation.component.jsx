import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

 import { ReactComponent as CrwnLogo } from "../../assests/crown.svg"

 import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
        <CrwnLogo className="logo"> </CrwnLogo>
        </Link>
        <div className="nav-links-container">
         <div>
            <Link className="nav-link" to="/shop">SHOP</Link>
            </div>   
         <div>
            <Link className="nav-link" to="/sign-in">Sign In</Link>
            </div>   
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
