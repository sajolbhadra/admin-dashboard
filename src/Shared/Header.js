import React, {  useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';


const Header = () => {
    const {user, logout} = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand " href="/">Merch BD Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex  align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#aboutus">About US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#contactus">Contact US</a>
                        </li> */}
                        <li className="nav-item">
                            <Link  class="nav-link active" aria-current="page" to="/login">Sign In</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link  class="nav-link active" aria-current="page" to="/register">Register</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link  class="nav-link active" aria-current="page" to="/users">users</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link  class="nav-link active" aria-current="page" to="/make-admin">Make Admin</Link>
                            
                        </li>
                        <li className="nav-item mx-4">
                        {user?.email && <button onClick={logout}>Log Out</button>  }
                        </li>
                        <li className='nav-item'>
                            {user.displayName}
                        </li>
                        <img className='nav-item rounded-pill mx-2' src={user.photoURL} alt="" />
                        
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;