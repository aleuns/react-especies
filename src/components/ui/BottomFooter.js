import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const BottomFooter = () => {
    return (

        <footer>
           <div className="container">
              <div className="col-md-4 text-center">

                 <img src="img/logo.png" alt="" className="center-block img-responsive" />
              </div>

              <div className="col-md-4 text-center res-margin">
                 <ul className="list-unstyled">
                    <li><i className="fa fa-phone"></i>(000) 000-000</li>
                    <li><i className="fa fa-envelope"></i>Email: <a href="mailto:your@email.com">mail@email.com</a></li>
                    <li><i className="fa fa-map-marker"></i>otro texto</li>
                 </ul>
              </div>

              <div className="col-md-4 text-center res-margin">
                 <h5>Seguinos</h5>
                 {/*Social icons */}
                 <div className="social-media">
                    <a href="#" title=""><i className="fa fa-twitter"></i></a>
                    <a href="#" title=""><i className="fa fa-facebook"></i></a>
                    <a href="#" title=""><i className="fa fa-google-plus"></i></a>
                    <a href="#" title=""><i className="fa fa-instagram"></i></a>
                 </div>
              </div>

           </div>
           {/* /.container */}
           {/* Credits*/}
           <div className="credits col-md-12 text-center">
              {/* Designed by <a href="mailto:">Alejandro Moreno</a> */}
              {/* Go To Top Link */}
              <div className="page-scroll hidden-sm hidden-xs">
                 <a href="#page-top" className="back-to-top"><i className="fa fa-angle-up"></i></a>
              </div>
           </div>
            {/* /credits */ }
        
        </footer>


    )
}
