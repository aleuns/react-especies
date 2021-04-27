import React from 'react'


export const Home = () => {
    return (
        <div>
            {/* Full Page Image Background Slider */}
            <div className="slider-container">

                <div className="slider-control left inactive"></div>
                <div className="slider-control right"></div>
                <ul className="slider-pagi"></ul>
                {/* Slider */}
                <div className="slider">
                    {/* Slide 0 */}
                    <div className="slide slide-0 active">
                    <div className="slide__bg"></div>
                    <div className="slide__content">
                        <div className="slide__overlay">
                        </div>
                        {/* slide text*/}
                        <div className="slide__text">
                            <h1 className="slide__text-heading">Especies exóticas invasoras</h1>
                            <div className="hidden-mobile">
                                <p className="lead">Bases de Datos de Especies Exóticas Invasoras de América Latina y Caribe</p>
                                <a href="index.html" className="btn btn-default">Inicio</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Slide 1 */}
                    <div className="slide slide-1" >
                    <div className="slide__bg"></div>
                    <div className="slide__content">
                        <div className="slide__overlay">
                        </div>
                        {/* slide text */}
                        <div className="slide__text">
                            <h1 className="slide__text-heading">Difusión de Planes de Acción</h1>
                            <div className="hidden-mobile">
                                <p className="lead">Algun texto.</p>
                                <a href="index.html" className="btn btn-default">Inicio</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="slide slide-2">
                    <div className="slide__bg"></div>
                    <div className="slide__content">
                        <div className="slide__overlay">
                        </div>
                        {/* slide text */}
                        <div className="slide__text">
                            <h1 className="slide__text-heading">El Caracol Africano</h1>
                            <div className="hidden-mobile">
                                <p className="lead">Cómo identificar y cuidarse del caracol gigante africano</p>
                                <a href="about.html" className="btn btn-default">Este Sitio</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Slide2 */}
                </div>
                {/*/Slider*/}
            </div>
            {/* Slider ends */}
            
            {/* SVG Curve Up */}
            <svg id="curveUp" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#fff">
                <path d="M0 100 C 20 0 50 0 100 100 Z"/>
            </svg>    
            {/* Section Services-index */}
            <section id="services-index">
                {/* container */}
                <div className="container">
                    <div className="section-heading">
                    <h2>¿Qué hacemos?</h2>
                    </div>
                    {/* /section-heading*/}
                    <div className="col-md-10 col-md-offset-1 text-center">
                    <p>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus vi tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                    {/* /col-md-10*/}
                </div>
                {/* /container*/}
                <div className="container-fluid bg-pattern margin1"  data-bottom-top="background-position: 0px 70%,99% 70%;"
                    data-top-bottom="background-position: 0px -50%,99% -50%;">
                    <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                    {/* Services */}
                        <div id="owl-services" className="owl-carousel">
                            {/* Feature Box 1  */}
                            <div className="col-xs-12">
                                <div className="box_icon">
                                <div className="icon">
                                    {/* icon */}
                                    <div className="image">
                                        <img src="img/service1.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="info">
                                        <h4>Busquedas</h4>
                                        <p>Realice búsquedas en las bases de datos de los paises de America Latina y Caribe.</p>
                                        {/* Button*/}
                                        <a className="btn" href="services-single.html">Read More</a>
                                    </div>
                                </div>
                                </div>
                                {/* /box_icon */}
                            </div>
                            {/* /col-xs-12 ends */}
                            {/* Feature Box 2 */}
                            <div className="col-xs-12">
                                <div className="box_icon">
                                <div className="icon">
                                    {/* icon */}
                                    <div className="image">
                                        <img src="img/service2.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="info">
                                        <h4>Planes de Control</h4>
                                        <p>Nulla vel metus scelerisque ante sollicitudinlorem ipsuet commodo. Cras purus odio, vestibulum in vulputate a Imperdiet interdum donec eget metus auguen unc vel lorem.</p>
                                        {/* Button*/}
                                        <a className="btn" href="services-single.html">Read More</a>
                                    </div>
                                </div>
                                </div>
                                {/* /box_icon */}
                            </div>
                            {/* /col-xs-12 ends */}
                            {/* Feature Box 3  */}
                            <div className="col-xs-12">
                                <div className="box_icon">
                                <div className="icon">
                                    {/* icon */}
                                    <div className="image">
                                        <img src="img/service3.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="info">
                                        <h4>Servicio 3</h4>
                                        <p>Nulla vel metus scelerisque ante sollicitudinlorem ipsuet commodo. Cras purus odio, vestibulum in vulputate a Imperdiet interdum donec eget metus auguen unc vel lorem.</p>
                                        {/* Button*/}
                                        <a className="btn" href="services-single.html">Read More</a>
                                    </div>
                                </div>
                                </div>
                                {/* /box_icon */}
                            </div>
                            {/* /col-xs-12 ends */}
                            {/* Feature Box 4  */}
                            <div className="col-xs-12">
                                <div className="box_icon">
                                <div className="icon">
                                    {/* icon */}
                                    <div className="image">
                                        <img src="img/service4.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="info">
                                        <h4>Servicio 4</h4>
                                        <p>Nulla vel metus scelerisque ante sollicitudinlorem ipsuet commodo. Cras purus odio, vestibulum in vulputate a Imperdiet interdum donec eget metus auguen unc vel lorem.</p>
                                        {/* Button*/}
                                        <a className="btn" href="services-single.html">Read More</a>
                                    </div>
                                </div>
                                </div>
                                {/* /box_icon */}
                            </div>
                            {/* /col-xs-12 ends */}
                        </div>
                        {/* /owl-services */}
                    </div>
                    {/* /col-md-9 */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container-fluid*/}
            </section>
            {/* Section About-index */}
            <section id="about-index" className="bg-lightcolor1" >
                <div className="container">
                    <div className="section-heading text-center">
                    <h2>Acerca de ésta Red</h2>
                    </div>
                    {/* row */}
                    <div className="row">
                    <div className="col-md-6 col-lg-7 text-center">
                        <h3>Objetivos</h3>
                        <p>
                            Pat a lorem ipsuet nibh fusce mollis imperdie tlorem ipuset phas ellus ac sodales Lorem ipsum dolor  Phas ellus ac sodales felis tiam non metus.
                            vest ibulum orci eget usce mollis imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id iprum omnis.
                        </p>
                        {/* Accordion */}
                        <div className="panel-group" id="accordion">
                            {/* Question 1 */}
                            <div className="panel">
                                <div className="panel-heading">
                                <h5 className="panel-title">
                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Responsabilidad Social</a>
                                </h5>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <p>Patatemp dolupta orem retibusam qui commolu 
                                        les felis tiam non metus ali quam eros Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                    </p>
                                </div>
                                </div>
                            </div>
                            {/* Question 2 */}
                            <div className="panel">
                                <div className="panel-heading">
                                <h5 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Nuestra Misión</a>
                                </h5>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <p>Patatemp dolupta orem retibusam qui commolu 
                                        les felis tiam non metus ali quam eros Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                    </p>
                                </div>
                                </div>
                            </div>
                            {/* Question 3 */}
                            <div className="panel">
                                <div className="panel-heading">
                                <h5 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Nuestras Bases de Datos en América</a>
                                </h5>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <p>Patatemp dolupta orem retibusam qui commolu 
                                        les felis tiam non metus ali quam eros Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* /.accordion */}
                    </div>
                    {/* /col-md-7*/}
                    {/* Parallax object */}
                    <div className="parallax-object1 hidden-sm hidden-xs"  data-100-start="right: 0%;" 
                        data-center-bottom="right:30%;"  >
                        {/* Image */}
                        <img src="img/illustrations/turtle-blue.png" alt=""/>
                    </div>
                    {/* /parallax-object1*/}
                    <div className="col-md-6 col-lg-5" >
                        <img src="img/about-index.png" className="img-responsive" alt=""/>
                    </div>
                    {/* /col-md-5*/}
                    </div>
                    {/* /row */}
                    <div className="row margin1 text-center">
                    {/* item 1 */}
                    <div className="features col-lg-3 col-sm-6 col-xs-12">
                        <div className="col-xs-12 big-icon">
                            {/* icon */}
                            <i className="flaticon-animal-6"></i>
                        </div>
                        <div className="col-xs-12">
                            <h5>Argentina</h5>
                            <p>Aenean lacinia bibendum nulla sed consectetur ras mattis consectetur purus sit amet fermentum sociis natoque penatibus et magnis.</p>
                        </div>
                    </div>
                    {/* /col-md-3 */}
                    {/* item 2 */}
                    <div className="features col-lg-3 col-sm-6 col-xs-12">
                        <div className="col-xs-12 big-icon">
                            {/* icon */}
                            <i className="flaticon-animal-6"></i>
                        </div>
                        <div className="col-xs-12">
                            <h5>Brasil</h5>
                            <p>Aenean lacinia bibendum nulla sed consectetur ras mattis consectetur purus sit amet fermentum sociis natoque penatibus et magnis.</p>
                        </div>
                    </div>
                    {/* /col-md-3 */}
                    {/* item 3 */}
                    <div className="features col-lg-3 col-sm-6 col-xs-12">
                        <div className="col-xs-12 big-icon">
                            {/* icon */}
                            <i className="flaticon-animal-6"></i>
                        </div>
                        <div className="col-xs-12">
                            <h5>Uruguay</h5>
                            <p>Aenean lacinia bibendum nulla sed consectetur ras mattis consectetur purus sit amet fermentum sociis natoque penatibus et magnis.</p>
                        </div>
                    </div>
                    {/* /col-md-3 */}
                    {/* item 1 */}
                    <div className="features col-lg-3 col-sm-6 col-xs-12">
                        <div className="col-xs-12 big-icon">
                            {/* icon */}
                            <i className="flaticon-animal-6"></i>
                        </div>
                        <div className="col-xs-12">
                            <h5>Paraguay</h5>
                            <p>Aenean lacinia bibendum nulla sed consectetur ras mattis consectetur purus sit amet fermentum sociis natoque penatibus et magnis.</p>
                        </div>
                    </div>
                    {/* /col-md-3 */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </section>
            {/* /section ends */}
            
            {/* Section Reviews */}
            <section id="reviews">
                <div className="container">
                    <div className="section-heading text-center">
                    <h2>Admnistradores de Bases de Datos</h2>
                    </div>
                    {/* Parallax object */}
                    <div className="parallax-object2 hidden-sm hidden-xs hidden-md" 
                    data-100-start="transform:rotate(-0deg); left:10%;" 
                    data-top-bottom="transform:rotate(-370deg);">
                    {/* Image */}
                    <img src="img/illustrations/toy.png" alt=""/>
                    </div>
                    {/* /col-md-3 */}
                    <div className="col-md-9 col-md-offset-3">
                    {/* Reviews */}
                    <div id="owl-reviews" className="owl-carousel margin1">
                    {/* review 1 */}
                    <div className="review">
                        <div className="col-xs-12">
                            {/* caption */}
                            <div className="review-caption">
                                <h5>Silvia R Ziller</h5>
                                <div className="small-heading">
                                El Instituto Horus para la Conservación y el Desarrollo Ambiental
                                </div>
                                <blockquote>
                                Especies exóticas invasoras, investigación aplicada y soluciones, políticas y reglamentos de gestión.<br/>
                                Habilidades y experiencia - Especies invasivas - Conservación - Evaluación de la biodiversidad
                                Manejo de recursos naturales - 
                                Vegetación - 
                                Biología de la Conservación - 
                                Ecología aplicada.
                                </blockquote>
                            </div>
                            {/* Profile image */}
                            <div className="review-profile-image">
                                <img src="img/review1.jpg" alt=""/>
                            </div>
                            {/*/review profile image */}
                        </div>
                        {/* /col-xs-12 ends */}
                    </div>
                    {/* /review*/}
                    {/* review 2 */}
                    <div className="review">
                        <div className="col-xs-12">
                            {/* caption */}
                            <div className="review-caption">
                                <h5>Sergio Martín Zalba
                                </h5>
                                <div className="small-heading">
                                Universidad Nacional del Sur | UNS · Departamento de Biología, Bioquímica y Farmacia Dr.
                                </div>
                                <blockquote>
                                Actualmente trabaja en el Departamento de Biología, Bioquímica y Farmacia, Universidad Nacional del Sur en Argentina. Sergio realiza investigaciones en Biología de la Conservación, con énfasis en la biodiversidad de pastizales y especies exóticas invasoras.
                                </blockquote>
                            </div>
                            {/* Profile image */}
                            <div className="review-profile-image">
                                <img src="img/review2.jpg" alt=""/>                      
                            </div>
                            {/*/review profile image */}
                        </div>
                        {/* /col-xs-12 ends */}
                    </div>
                    {/* /review*/}
                    {/* review 3 */}
                    <div className="review">
                        <div className="col-xs-12">
                            {/* caption */}
                            <div className="review-caption">
                                <h5>Ernesto Brugnoli</h5>
                                <div className="small-heading">
                                Universidad de la República de Uruguay | UdelaR  ·  Oceanografía y Ecología Marina- Facultad de Ciencias Doctor en Ciencias Biológicas
                                </div>
                                <blockquote>
                                Calidad del agua - 
                                Ecología - 
                                Conservación de la Biodiversidad - 
                                Medio ambiente - 
                                Ecología Marina - 
                                Biodiversidad Marina - 
                                Ambiente marino - 
                                Sociedad y Medio Ambiente - 
                                La biodiversidad - 
                                Ecología del ecosistema
                                </blockquote>
                            </div>
                            {/* Profile image */}
                            <div className="review-profile-image">
                                <img src="img/review3.jpg" alt=""/>                       
                            </div>
                            {/*/review profile image */}
                        </div>
                        {/* /col-xs-12 ends */}
                    </div>
                    {/* /review*/}
                    {/* review 4 */}
                    <div className="review">
                        <div className="col-xs-12">
                            {/* caption */}
                            <div className="review-caption">
                                <h5>Lou Lou</h5>
                                <div className="small-heading">
                                Veterinarian
                                </div>
                                <blockquote>
                                Patatemp dolupta orem retibusam qui commolu 
                                Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, 
                                vest ibulum orci eget, viverra.
                                </blockquote>
                            </div>
                            {/* Profile image */}
                            <div className="review-profile-image">
                                <img src="img/review4.jpg" alt=""/>                       
                            </div>
                            {/*/review profile image */}
                        </div>
                        {/* /col-xs-12 ends */}
                    </div>
                    {/* /review*/}
                    {/* review 4 */}
                    <div className="review">
                        <div className="col-xs-12">
                            {/* caption */}
                            <div className="review-caption">
                                <h5>James Doe</h5>
                                <div className="small-heading">
                                Pet Lover
                                </div>
                                <blockquote>
                                Patatemp dolupta orem retibusam qui commolu 
                                Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, 
                                vest ibulum orci eget, viverra.
                                </blockquote>
                            </div>
                            {/* Profile image */}
                            <div className="review-profile-image">
                                <img src="img/review5.jpg" alt=""/>                       
                            </div>
                            {/*/review profile image */}
                        </div>
                        {/* /col-xs-12 ends */}
                    </div>
                    {/* /review*/}
                    </div>
                    {/* /owl-carousel */}
                    </div>
                    {/* /col-md-10 */}
                </div>
                {/* /.container */}
            </section>
            {/* /Section ends */}
            {/* callout*/}		   
            <section className="callout container-fluid no-padding">
                {/* row-fluid */}
                <div className="row-fluid">
                    <div className="col-lg-8 col-md-12 no-padding" data-start="right: 20%;" 
                    data-center="right:0%;">
                    {/* image  */}
                    <img src="img/call1.jpg" className="img-responsive img-rounded" alt=""/>
                    </div>
                    {/* text box  */}
                    <div className="callout-box col-lg-6 col-lg-offset-6 bg-darkcolor"  data-start="left: 20%;" 
                    data-center="left:0%;">
                    <h3>Contáctenos</h3>
                    <p>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus vi tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <a href="contact.html" className="btn">Contact us</a>
                    </div>
                    {/* /callout-box  */}
                </div>
                {/* /row-fluid */}
            </section>
            {/* /callout */}
            {/* Section Stats */}	
            <section id="stats" className="bg-lightcolor2">
                <div className="section-heading text-center">
                    <h2>Nuestras Estadísticas</h2>
                    </div>
                <div className="container">
                    <div className="col-lg-9 col-md-8 col-sm-8">
                    <div className="text-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* Number 1 */}
                            <div className="numscroller" data-slno='1' data-min='0' data-max='180' data-delay='20' data-increment="19">0</div>
                            <h5>Especies</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* Number 2 */}
                            <div className="numscroller" data-slno='1' data-min='0' data-max='16' data-delay='10' data-increment="9">0</div>
                            <h5>Ocurrencias</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* Number 3 */}
                            <div className="numscroller" data-slno='1' data-min='0' data-max='67' data-delay='20' data-increment="19">0</div>
                            <h5>Especialistas</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* Number 4 */}
                            <div className="numscroller" data-slno='1' data-min='0' data-max='50' data-delay='10' data-increment="9">0</div>
                            <h5>Proyectos</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* Section Ends*/}

            {/*Logos*/}
            <div className="row justify-content-md-center">
                <div className="col-xs-12 margin1">
                    <h4>Instituciones que forman parte de la red</h4>       
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-sm-2">
                    {/* Zoom Hover  image */}
                    <div className="img-effect">
                    <img src="img/logos/instituto-horus.png" className="center-block img-responsive" alt=""/>
                    </div>         
                </div>
                <div className="col-sm-2">
                    {/* Zoom Hover  image */}
                    <div className="img-effect">
                    <img src="img/logos/uns.png" className="center-block img-responsive" alt="" />
                    </div>         
                </div>
                <div className="col-sm-2">
                    {/* Zoom Hover  image */}
                    <div className="img-effect">
                    <img src="img/logos/Logo-Argentina-GEKKO.png" className="center-block img-responsive" alt=""/>
                    </div>
                </div>
                <div className="col-sm-2">
                    {/* Zoom Hover  image */}
                    <div className="img-effect">
                    <img src="img/logos/Logo-Uruguai-Udelar.png" className="center-block img-responsive" alt=""/>
                    </div>
                </div>
                <div className="col-sm-2">
                    {/* Zoom Hover  image */}
                    <div className="img-effect">
                    <img src="img/logos/Logo-Uruguai-Min-Ambiente.png" className="center-block img-responsive" alt=""/>
                    </div>
                </div>

                <div className="col-sm-2">
                    {/* Zoom Hover  image */}
                    <div className="img-effect">
                    <img src="img/logos/Logotipo-Guyra.Py.png" className="center-block img-responsive" alt=""/>
                    </div>
                </div>
            </div>
            {/*/Logos */}

        </div>
    )
}
