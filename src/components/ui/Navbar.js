import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {
    const nav=useNavigate();

    const handleLogout=()=>{
        //TODO: Por hacer
        //console.log('logout')

        //dispatch tipo especifico

        dispatch({type: types.logout});

        nav('/login',{
            replace:true
        });
    }

    const {user,dispatch} = useContext(AuthContext)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>"nav-item nav-link nav" + (isActive? 'active' : '')} 
                        
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>"nav-item nav-link nav" + (isActive? 'active' : '')} 
                        
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>"nav-item nav-link nav" + (isActive? 'active' : '')} 
                        
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}