import { NavLink } from "react-router-dom";
import style from "./nav.module.css"

function Nav() {
  return (
    <>
      <div className={style.sticky}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id={style.nav} >
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" id={style.toggle}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand " href='/' id={style.brand}><img src="logo.png" alt="logo" /></a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id={style.list}>
                <li className="nav-item">
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/Explore_Food'>Explore Food</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/About_us">About us</NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search" id={style.search}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id={style.accountList}>
                <li className="nav-item">
                  <NavLink to="/Log_in">Log in</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Sign_in">Sign in</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Nav