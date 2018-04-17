import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

const StaticSite = () => (
    // llamo al componente Router
    <Router>
        <div>
            <h2>Primero pasos con react router</h2>
            {/*creo un navbar con links a cada una de las rutas*/}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/acerca">Acerca</Link>
                    </li>
                    <li>
                        <Link to="/servicios">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            {/*le asigno las rutas de la url a cada componente (path="" debe coincidir con to="")*/}
            <Route path="/" component={Home} />
            <Route path="/acerca" component={Acerca} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/contacto" component= {Contacto} />

        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const Acerca = () => (
    <div>
        <h2>Acerca</h2>
    </div>
)

const Servicios = () => (
    <ul>
        <li>Servicio 1</li>
        <li>Servicio 2</li>
    </ul>
)
// le paso el parametro match, que es la coincidencia de la url que quiero cargar
const Contacto = ( { match } ) => (
    <div>
        <h2>Contacto</h2>
        <Route exact path={match.url} render = {
            () => (
                <h3>Render sucio dentro de componente contacto.</h3>
            )
        } />

        <ul>
            <li>
                <Link to={`${match.url}/email`}>Email</Link>
            </li>
            <li>
                <Link to={`${match.url}/web`}>Web</Link>
            </li>
            <li>
                <Link to={`${match.url}/ubicacion`}>Ubicacion</Link>
            </li>
        </ul>

    </div>
)

export default StaticSite