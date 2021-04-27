import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

export const Gallery = () => {
    return (
        <div>
            {/* Section Gallery */}
                <section id="gallery" className="pages">
                    <div className="jumbotron" data-stellar-background-ratio="0.5">
                        {/* Heading */}
                        <div className="jumbo-heading" data-stellar-background-ratio="1.2">
                        <h1>Especies Comunes</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="nav-gallery col-md-12">
                        {/* Gallery Navigation */}
                        <div className="text-center col-md-12">
                            <ul className="nav nav-pills category text-center" role="tablist" id="gallerytab">
                                <li className="active"><a href="#" data-toggle="tab" data-filter="*">All</a></li>
                                <li><a href="#" data-toggle="tab" data-filter=".dogcat">Animales</a></li>
                                <li><a href="#" data-toggle="tab" data-filter=".other">Plantas</a></li>
                                <li><a href="#" data-toggle="tab" data-filter=".other">Hongos</a></li>
                            </ul>
                        </div>
                        </div>
                        {/* /nav-gallery */}
                        {/* Gallery Starts*/}
                        <div className="row">
                        <div className="col-md-12 margin1">
                            <div id="lightbox">
                                {/* Image 1 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery1.jpg" alt=""/>
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery1.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 2 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 other">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery2.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery2.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 3 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 other">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery3.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery3.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 4 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery4.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery4.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 5 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery5.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery5.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 6 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery6.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery6.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 7 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery7.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery7.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 8 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 other">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery8.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery8.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 9 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 other">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery9.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery9.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 10 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery10.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery10.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 11 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 other">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery11.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery11.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/* Image 12 */}
                                <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                                    <div className="portfolio-item">
                                    <div className="gallery-thumb">
                                        <img className="img-responsive" src="img/gallery12.jpg" alt="" />
                                        <span className="overlay-mask"></span>
                                        <a href="img/gallery12.jpg" data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                        <i className="fa fa-expand"></i></a>
                                    </div>
                                    </div>
                                </div>
                                {/*image 12 ends */}
                            </div>
                            {/* /lightbox*/}
                        </div>
                        {/* /col-md-12*/}
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                </section>
                {/* Section ends */}            
        </div>
    )
}
