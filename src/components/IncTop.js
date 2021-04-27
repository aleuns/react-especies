
import React, { Component } from 'react';

class IncTop extends Component {
    render() { 
        return (
            <>
                {/* Preloader */}
                <div className="preloader">
                    <div className="spinner">
                        <div className="bounce1"></div>
                    </div>
                </div>
                {/* Preloader ends */}
                <nav className="navbar navbar-custom navbar-fixed-top">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
                        <i className="fa fa-bars"></i>
                        </button>
                        <div className="navbar-brand navbar-brand-centered page-scroll">
                            <a href="#page-top">
                                {/* logo  */}
                                <img src="img/logo.png" className="img-responsive" alt="" />
                            </a>
                        </div>
                        </div>
                        {/*/navbar-header */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-brand-centered">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="index.html">Inicio</a></li>
                            <li><a href="about.html">Este Sitio</a></li>
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
                            <li><a href="gallery.html">Especies Comunes</a></li>
                            
                            <li><a href="">Contact</a></li>
                        </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.container */}
                </nav>
                {/* /navbar ends */}
            </>
        );
    }
}
 
export default IncTop;