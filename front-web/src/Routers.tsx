import { BrowserRouter, Switch, Route } from "react-router-dom";
import Order from "./Order";
import Home from "./Home";
import Navbar from "./Navbar";


function Routers(){
    return(
        <BrowserRouter>
            <Navbar />
           <Switch>
               <Route path="/orders">
                   <Order />
               </Route>
               <Route path="/">
                    <Home />
               </Route>   
            </Switch> 
        </BrowserRouter>
    )
}

export default Routers;