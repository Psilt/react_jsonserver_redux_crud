import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import store from './store';
import {Provider} from 'react-redux'
function App() {
  return (  
    <Router>
      <Provider store={store}>
      <Header></Header>
      <div className="container mt-5">
        <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/products/new" component={NewProduct}></Route>
        <Route  path="/products/edit/:id" component={EditProduct}></Route>
        </Switch>
      </div>
      </Provider>
    </Router>
    
  );
}
//json-server db.json --port 4000
export default App;
