import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
                <nav className="navbar navbar-custom navbar-fixed-top">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
                        <i className="fa fa-bars"></i>
                        </button>
                        <div className="navbar-brand navbar-brand-centered page-scroll">
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/"
                        >
                            <img src="img/logo.png" className="img-responsive" alt="" />
                        </NavLink>

                        </div>
                        </div>
                        {/*/navbar-header */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-brand-centered">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <NavLink 
                                    activeClassName="active"
                                    className="nav-item nav-link" 
                                    exact
                                    to="/home"
                                >
                                    Inicio
                                </NavLink>                                
                            </li> 
                            <li>
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/about"
                            >
                                Este Sitio
                            </NavLink>
                            </li>   
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Paises<b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="Argentina.html">Argentina</a></li>
                                    <li><a href="Brasil.html">Brasil</a></li>
                                    <li><a href="Uruguay.html">Uruguay</a></li>
                                    <li><a href="Paraguay.html">Paraguay</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                            <NavLink 
                                    activeClassName="active"
                                    className="nav-item nav-link" 
                                    exact
                                    to="/gallery"
                                >
                                    Especies Comunes
                                </NavLink>    
                                
                            </li>
                            
                            <li><a href="">Contact</a></li>
                        </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.container */}
                </nav>
                {/* /navbar ends */}
            </>
    )
}