import { Link } from 'react-router-dom';
import paths from '../../constants/paths';
import './navbar.css';
import { useContext } from 'react';
import { Context } from '../../context/Context';


const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const pages = [
    {id:1, page:'Home', path: '/'},
    {id:2, page:'about', path: '/about'},
    {id:3, page:'write post', path: '/write'},
    
  ]
  const loginPages = [
    {id:4, page:'Login', path: paths.login},
    {id:5, page:'Register', path: paths.register},
  ]
  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <>
    <div className="top-nav">
    <div className="nav-left">
    <i className=" nav-icon fa-brands fa-facebook-square"></i>
    <i className=" nav-icon fa-brands fa-twitter-square"></i>
    <i className=" nav-icon fa-brands fa-pinterest-square"></i>
    <i className=" nav-icon fa-brands fa-instagram-square"></i>
    </div>
    <div className="nav-center">
      <ul className="top-list">
        {/* {pages.map((page)=>(
          <Link to={page.path} key={page.id} className="link">
          <li className="top-list-item">{page.page}</li>
          </Link>
        ))} */}
        <Link to="/"  className="link">
          <li className="top-list-item">Home</li>
          </Link>
          <Link to="/about"  className="link">
          <li className="top-list-item">About</li>
          </Link>
          <Link to="/write"  className="link">
          <li className="top-list-item">Write Post</li>
          </Link>
        
        
          <li className="topListItem logout" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
       
      </ul>
    </div>
    <div className="nav-right">
      {user ? (
      <img src={user.profilePic}  className="nav-image" alt="userimage" />
      ):(
        <ul className="top-list">
        {/* {loginPages.map((page)=>(
          <Link to={page.path} key={page.id} className="link">
          <li className="top-list-item">{page.page}</li>
          </Link>
        ))} */}
         <Link to='/login'  className="link">
          <li className="top-list-item">Login</li>
          </Link>
          <Link to='/register'  className="link">
          <li className="top-list-item">Register</li>
          </Link>
         
       
      </ul>
      )}
       
    <i className="search-icon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
    </>
  )
}

export default Navbar