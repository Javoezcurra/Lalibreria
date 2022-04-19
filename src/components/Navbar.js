import React from "react";
import CardWidget from "./CardWidget";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Productos from "./Productos";
import Blog from "./Blog";
import Contacto from "./Contacto";
import Bio from "./Bio";



function Lmenu() {

    return (

  <Router>
 <div className="nav">

  <div className="btn-group">
    <Link to="/Productos" className="btn btn-dark">
    Productos
    </Link>

    <Link to="/Blog" className="btn btn-dark">
    Blog
    </Link>

    <Link to="/Contacto" className="btn btn-dark">
    Contacto
    </Link>

    <Link to="/Bio" className="btn btn-dark">
    Bio
    </Link>

    </div> 
 
 <CardWidget
 
 img={"https://cdn-icons-png.flaticon.com/512/29/29302.png"}/> 


 </div>

  
 </Router>
    );
}




export default Lmenu;
