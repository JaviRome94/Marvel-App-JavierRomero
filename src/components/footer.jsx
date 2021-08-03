import React from 'react'
import '../css/footer.css'

function Footer() {

    return (
        
        <footer className="footer position-footer z-99">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Compañia</h4>
                    <ul>
                        <li><a href="#">Finaktiva y marvel</a></li>
                        <li><a href="#">Nuestros servicios</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Programa de afiliación</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Consigue ayuda</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Envio</a></li>
                        <li><a href="#">Regresar</a></li>
                        <li><a href="#">Opciones de pago</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Marvel</h4>
                    <ul>
                        <li><a href="#">Acerca de marvel</a></li>
                        <li><a href="#">Api marvel</a></li>
                        <li><a href="#">Historietas</a></li>
                        <li><a href="#">Peliculas marvel</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Siguenos</h4>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

   )

   

}

export default Footer 