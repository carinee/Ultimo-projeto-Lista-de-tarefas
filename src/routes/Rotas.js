import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Router } from "react-router-dom/cjs/react-router-dom.min"

import Home from "../pages/Home"
import ListPage from "../pages/ListPage"
import Menu from "../componentes/Menu/Menu"


function Rotas () {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route patch="/Lista" component={ListPage}/>
            <Route patch="/Menu" component={Menu}/>
    
        </Switch>
        </BrowserRouter>
    )
}

export default Rotas 