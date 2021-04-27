import React from 'react'

export const About = () => {
    return (
        <div>
        {/* Section About */}
        <section id="about" className="pages">
            <div className="jumbotron" data-stellar-background-ratio="0.5">
                {/* Heading */}
                <div className="jumbo-heading" data-stellar-background-ratio="1.2">
                <h1>Acerca de este Sitio</h1>
                </div>
            </div>
            {/* container */}
            <div className="container">
                <div className="row">
                <div className="col-lg-7 col-md-6">
                    <h3>Antecedentes</h3>
                    <p>
                        Los esfuerzos para desarrollar e implementar una plataforma común para la organización y manejo de información sobre especies exóticas invasoras entre países de América Latina y el Caribe comenzaron a principios de la década de 2000, en el marco del programa I3N (red temática de información sobre especies exóticas invasoras) de IABIN (Red InterAmericana de Información sobre Biodiversidad), establecida con fondos del Banco Mundial a través de un proyecto gestionado por el Servicio Geológico de Estados Unidos (USGS). Argentina y Brasil diseñaron un sistema de bases de datos, recopilaron la información disponible y comenzaron a completar el conocimiento acerca de las EEI a nivel nacional. Desde entonces mantuvieron la información disponible en internet. En poco tiempo, otros países de la región, incluidos Paraguay y Uruguay, desarrollaron sistemas similares. En todos los casos se utilizaron criterios, conceptos y vocabulario comunes para facilitar el intercambio de información, que fueron también consensuados con la Base Global de Especies Invasoras (www.issg.org/database).                  </p>
                    <p>
                        En 2020 las instituciones responsables de los sistemas de información de estos cuatro países recibieron el apoyo de la iniciativa Biobridge del Convenio sobre la Diversidad Biológica (CBD-PNUMA) y desarrollaron esta plataforma unificada como un paso más para consolidar esfuerzos conjuntos para enfrentar el desafío de la invasiones biológicas a través de conocimientos sólidos y actualizados sobre especies exóticas invasoras en la región y contribuir así al logro de la Meta 8 de la Agenda 2030 / ODS y la Meta 9 de Aichi. La iniciativa se mantiene gracias al trabajo conjunto de instituciones de investigación y enseñanza, organizaciones no gubernamentales, agencias gubernamentales y muchos colaboradores. Tiene igualmente como objetivo incorporar sistemas de información similares en otros países de América Latina y el Caribe.                  </p>
                    
                </div>
                {/* /col-lg-7 */}
                {/* image */}
                <div className="col-lg-5 col-md-6 res-margin">
                    <img src="img/about.jpg" className="img-rounded center-block img-responsive" alt=""/>
                </div>
                {/* /col-lg-5*/}
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
            {/* /container*/}
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
                    <img src="img/logos/uns.png" className="center-block img-responsive" alt=""/>
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
            </section>
            {/* /Section ends */}       
        </div>
    )
}
