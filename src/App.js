import React ,{Fragment} from 'react';

import {HashRouter as Router ,Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Mine from "./pages/Mine"
import Mylayout from './component/My_layout';



class App  extends React.Component {
 



  render() {
    return (
      <Fragment>
       
        <Router>
     
          <Route path="/" exact render={(props)=><Mylayout {...props}><Home/></Mylayout>}/>
          <Route path="/Cart"  render={(props)=><Mylayout  {...props}><Cart/></Mylayout>}/>
          <Route path="/Mine"  render={(props)=><Mylayout  {...props}><Mine/></Mylayout>}/>
         

        </Router>
      </Fragment>
     
    );
  }
}

export default App;